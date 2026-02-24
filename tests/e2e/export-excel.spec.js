// Playwright test for Excel export functionality
// Verifies current attempt export (from results screen) and history-only export (from persistence notice)

import { test, expect } from '@playwright/test'
import { goToLeadingSafeExamSettings, startLeadingSafeQuiz, answerFirstNQuestions } from './_helpers'

async function completeExamAndExport(page) {
  await goToLeadingSafeExamSettings(page)
  await startLeadingSafeQuiz(page, { questionCount: 10 })
  await answerFirstNQuestions(page, 2)
  await page.getByTestId('quiz-submit').click()
  await page.getByTestId('results-score-circle').waitFor()
  const [ download ] = await Promise.all([
    page.waitForEvent('download'),
    page.getByTestId('results-export-excel').click()
  ])
  expect(download.suggestedFilename()).toMatch(/exam-results-.*\.xlsx$/)
}

test.describe('Excel Export', () => {
  test('exports current attempt workbook from results page', async ({ page, browserName }) => {
    test.skip(browserName !== 'chromium', 'Full attempt export stable only in Chromium currently')
    await completeExamAndExport(page)
  })

  test('exports history workbook from settings notice (no attempt)', async ({ page, browserName }) => {
    test.skip(browserName !== 'chromium', 'History export smoke limited to Chromium for stability')
    await page.addInitScript(() => {
      try {
        const sample = [{
          date: new Date().toISOString(),
          examType: 'Leading SAFe 6',
          score: 82,
          correctAnswers: 37,
          totalQuestions: 45,
          timeUsed: 1200
        }]
        localStorage.setItem('progress.sessions', JSON.stringify(sample))
        localStorage.setItem('e2e.suppressTour','true')
      } catch {}
    })
    await goToLeadingSafeExamSettings(page)
    const exportBtn = page.getByTestId('data-persistence-export')
    await exportBtn.scrollIntoViewIfNeeded()
    const [ download ] = await Promise.all([
      page.waitForEvent('download'),
      exportBtn.click()
    ])
    expect(download.suggestedFilename()).toMatch(/exam-results-.*\.xlsx$/)
  })
})
