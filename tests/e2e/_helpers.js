import { test } from '@playwright/test'

const BASE_URL = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:5173'
const BASE_PATH = BASE_URL.endsWith('/') ? BASE_URL : `${BASE_URL}/`

// Global beforeEach to seed localStorage (auto-dismiss help tour & panel) before any page navigation.
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    try {
      window.__E2E__ = true
      localStorage.setItem('helpSystem.tour.seen.v1', 'true')
      localStorage.setItem('e2e.suppressTour', 'true')
    } catch (_) {}
  })
})

// Helper: navigate to Leading SAFe 6 exam settings page (with mobile fallback via hamburger menu)
export async function goToLeadingSafeExamSettings(page) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      await page.goto(BASE_PATH, { waitUntil: 'domcontentloaded', timeout: 40000 })
      break
    } catch (e) {
      if (attempt === 2) throw e
    }
  }
  await ensureNoOverlays(page)
  // Close any obstructive overlays (e.g., menu) before interacting
  const tryClick = async (locator) => {
    if (await locator.isVisible().catch(()=>false)) {
      await locator.click({ trial: false })
      return true
    }
    return false
  }

  // Primary: desktop nav button
  if (await tryClick(page.getByTestId('nav-exams'))) {
    await tryClick(page.getByTestId('start-leading-safe-exams'))
    await page.getByTestId('leading-safe-exam-settings').waitFor({ timeout: 10000 })
    return
  }

  // Secondary: featured card on home
  if (await tryClick(page.getByTestId('start-leading-safe-home'))) {
    await page.getByTestId('leading-safe-exam-settings').waitFor({ timeout: 10000 })
    return
  }

  // Tertiary: hamburger flow
  if (await tryClick(page.getByTestId('nav-hamburger-toggle'))) {
    const examsButton = page.getByRole('button', { name: /exams/i })
    if (await tryClick(examsButton)) {
      await tryClick(page.getByTestId('start-leading-safe-exams'))
      await page.getByTestId('leading-safe-exam-settings').waitFor({ timeout: 10000 })
      return
    }
  }

  throw new Error('Unable to navigate to Leading SAFe exam settings via any fallback path')
}

export async function startLeadingSafeQuiz(page, options = {}) {
  const { mode = 'exam', questionCount } = options
  if (mode) {
    await page.getByTestId('leading-safe-exam-mode-select').selectOption(mode)
  }
  if (questionCount) {
    await page.getByTestId('leading-safe-questions-select').selectOption(String(questionCount))
  }
  // Retry start button click in case of flakiness
  const startBtn = page.getByTestId('leading-safe-start-quiz')
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      await startBtn.click({ timeout: 5000, trial: false })
      break
    } catch (e) {
      if (attempt === 2) throw e
      await page.waitForTimeout(250)
    }
  }
  // If session recovery appears, dismiss it for deterministic flow
  if (await page.getByTestId('session-recovery-overlay').isVisible().catch(()=>false)) {
    // Prefer dismiss-all for clean start
    const dismissAll = page.getByTestId('session-recovery-dismiss-all')
    if (await dismissAll.isVisible().catch(()=>false)) {
      await dismissAll.click()
    } else {
      const close = page.getByTestId('session-recovery-close')
      if (await close.isVisible().catch(()=>false)) await close.click()
    }
  }
  await waitForQuizReady(page)
  await ensureNoOverlays(page)
}

export async function answerFirstNQuestions(page, n) {
  for (let i = 0; i < n; i++) {
    await ensureNoOverlays(page)
    const questionCard = page.getByTestId('quiz-question-card')
    await questionCard.waitFor({ state: 'visible', timeout: 5000 })
    const prevId = await questionCard.getAttribute('data-question-id')

    const answered = await answerCurrentQuestion(page)
    if (!answered) break

    const next = page.getByTestId('quiz-next')
    const nextVisible = await next.isVisible().catch(() => false)
    if (!nextVisible) continue

    await waitForButtonEnabled(page, 'quiz-next')
    if (await next.isDisabled().catch(()=>false)) break

    await next.click({ trial: false })
    await waitForQuestionAdvance(page, prevId)
  }
}

async function answerCurrentQuestion(page) {
  const multiRequirement = page.getByTestId('multi-select-requirement')
  const isMulti = await multiRequirement.isVisible().catch(() => false)

  if (isMulti) {
    const selectText = await multiRequirement.textContent()
    const countMatch = selectText && selectText.match(/(\d+)/)
    const requiredSelections = countMatch ? parseInt(countMatch[1], 10) : 2
    await selectMultipleOptions(page, requiredSelections)
    await page.waitForFunction((required) => {
      const el = document.querySelector('[data-testid="multi-select-progress"]')
      if (!el) return false
      const txt = el.textContent || ''
      return txt.includes(`${required} of ${required}`)
    }, requiredSelections, { timeout: 2000 }).catch(() => {})
    return true
  }

  const singleOption = page.getByTestId('quiz-option-0')
  await singleOption.waitFor({ state: 'visible', timeout: 4000 })
  await singleOption.click({ trial: false })
  return true
}

async function selectMultipleOptions(page, requiredSelections) {
  await page.getByTestId('quiz-option-0').waitFor({ state: 'visible', timeout: 4000 })
  const optionButtons = page.locator('[data-testid^="quiz-option-"]')
  const totalOptions = await optionButtons.count()
  let selected = 0

  for (let idx = 0; idx < totalOptions && selected < requiredSelections; idx++) {
    const option = optionButtons.nth(idx)
    await option.waitFor({ state: 'visible', timeout: 4000 })
    await option.click({ trial: false })
    selected += 1
  }
}

async function waitForButtonEnabled(page, testId) {
  await page.waitForFunction((id) => {
    const btn = document.querySelector(`[data-testid="${id}"]`)
    return btn ? !btn.disabled : true
  }, testId, { timeout: 2000 }).catch(() => {})
}

async function waitForQuestionAdvance(page, prevId) {
  await page.waitForFunction((prev) => {
    const el = document.querySelector('[data-testid="quiz-question-card"]')
    return el && el.getAttribute('data-question-id') !== prev
  }, prevId, { timeout: 5000 }).catch(() => {})
}

export async function dismissHelpOverlays(page) {
  await ensureNoOverlays(page)
}

// Utility: remove obstructive overlays (help tour, leftover modals) if present
async function ensureNoOverlays(page) {
  // Remove help tour overlay if it somehow rendered
  try {
    await page.evaluate(() => {
      try {
        window.__E2E__ = true
        localStorage.setItem('helpSystem.tour.seen.v1','true')
        localStorage.setItem('e2e.suppressTour','true')
      } catch(_) {}
    })
    const overlayLocator = page.getByTestId('help-tour-overlay')
    if (await overlayLocator.count() > 0) {
      const closeButtons = [
        page.getByTestId('help-tour-close'),
        page.getByTestId('help-tour-dismiss'),
        page.getByTestId('help-tour-open-panel')
      ]
      for (const btn of closeButtons) {
        if (await btn.isVisible().catch(() => false)) {
          await btn.click()
          break
        }
      }
      if (await overlayLocator.count() > 0) {
        await page.keyboard.press('Escape').catch(() => {})
      }
    }
  } catch (_) {
    // overlay not found; ignore
  }
  // Dismiss session recovery if it appears mid-quiz
  if (await page.getByTestId('session-recovery-overlay').isVisible().catch(()=>false)) {
    const dismissAll = page.getByTestId('session-recovery-dismiss-all')
    if (await dismissAll.isVisible().catch(()=>false)) {
      await dismissAll.click()
    } else {
      const close = page.getByTestId('session-recovery-close')
      if (await close.isVisible().catch(()=>false)) await close.click()
    }
  }
}

async function waitForQuizReady(page) {
  const start = Date.now()
  const quizRoot = page.getByTestId('quiz-root')
  const quizLoading = page.getByTestId('quiz-loading')
  const questionText = page.getByTestId('quiz-question-text')
  try {
    await Promise.race([
      quizRoot.waitFor({ timeout: 6000 }).catch(()=>null),
      quizLoading.waitFor({ timeout: 6000 }).catch(()=>null)
    ])
    await questionText.waitFor({ timeout: 6000 })
  } catch (e) {
    // Fallback: look for options container
    const optionsVisible = await page.getByTestId('quiz-options-container').isVisible().catch(()=>false)
    await page.evaluate((info) => {
      try { localStorage.setItem('e2e.quizReady.debug', JSON.stringify(info)) } catch(_) {}
    }, {
      error: String(e),
      time: Date.now() - start,
      rootVisible: await quizRoot.isVisible().catch(()=>false),
      loadingVisible: await quizLoading.isVisible().catch(()=>false),
      optionsVisible
    })
    if (!optionsVisible) throw e
  }
}
