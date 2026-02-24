import { test, expect } from '@playwright/test'
import { goToLeadingSafeExamSettings, startLeadingSafeQuiz, dismissHelpOverlays } from './_helpers'

test.describe('Help System', () => {
  test('help fab toggles panel', async ({ page }) => {
    await goToLeadingSafeExamSettings(page)
    await startLeadingSafeQuiz(page)
    await dismissHelpOverlays(page)

    // Ensure the floating action button has mounted before interacting
    const helpFab = page.getByTestId('help-fab')
    await helpFab.waitFor({ state: 'visible', timeout: 10000 })

    // Open the help panel via the FAB and assert both aria state and panel rendering
    await helpFab.click()
    const helpPanel = page.getByTestId('help-panel')
    await expect(helpPanel).toBeVisible()
    await expect(helpFab).toHaveAttribute('aria-expanded', 'true')

    // Close the panel via the FAB and confirm teardown
    await helpFab.click()
    await expect(helpPanel).toHaveCount(0)
    await expect(helpFab).toHaveAttribute('aria-expanded', 'false')
  })
})
