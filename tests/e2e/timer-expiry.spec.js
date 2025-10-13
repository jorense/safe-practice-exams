import { test, expect } from '@playwright/test'
import { goToLeadingSafeExamSettings, startLeadingSafeQuiz, answerFirstNQuestions } from './_helpers'

// Simplified: ensure small exam can be completed & results rendered (no timer force dependency)
test.describe('Exam completion (small set)', () => {
  test('complete 10-question exam and view results', async ({ page }) => {
    await goToLeadingSafeExamSettings(page)
    await startLeadingSafeQuiz(page, { questionCount: 10 })
    // Answer all questions quickly
    await answerFirstNQuestions(page, 10)
    // Navigate to last question just in case
    // Attempt submission
    await page.getByTestId('quiz-submit').click()
    await expect(page.getByTestId('results-score')).toBeVisible()
  })
})
