import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import App from '../App.jsx'

vi.mock('../components/help/HelpSystem.jsx', () => ({
  default: ({ children }) => <>{children}</>,
  MultiSelectHelp: () => null,
}))

const exams = [
  ['Leading SAFe 6', 'start-leading-safe-home'],
  ['SAFe for Teams 6.0', 'start-safe-teams-home'],
  ['PSM II', 'start-psm2-home'],
  ['PAL I', 'start-pali-home'],
  ['PSPO I', 'start-pspo1-exams'],
]

describe('question-count selection', () => {
  beforeEach(() => {
    localStorage.clear()
    localStorage.setItem('lace-studio-question-count', '10')
  })

  afterEach(() => cleanup())

  test.each(exams)('%s keeps the user-selected count when opened', async (_name, startButton) => {
    const user = userEvent.setup()
    render(<App />)

    if (startButton === 'start-pspo1-exams') {
      await user.click(screen.getByRole('button', { name: /View All Practice Exams/i }))
    }
    await user.click(await screen.findByTestId(startButton))

    expect(screen.getAllByRole('combobox')[0]).toHaveValue('10')
  })

  test.each(['exam', 'practice'])('PAL I starts 10 questions in %s mode', async (mode) => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(await screen.findByTestId('start-pali-home'))
    const selects = screen.getAllByRole('combobox')
    await user.selectOptions(selects[0], '10')
    await user.selectOptions(selects[1], mode)
    await user.click(screen.getByTestId('pali-start-quiz'))

    expect(await screen.findByText('Question 1 of 10')).toBeInTheDocument()
  })

  test('migrates the legacy repeat-question default to exclude seen questions', async () => {
    localStorage.setItem('lace-studio-include-seen', 'true')
    localStorage.removeItem('lace-studio-include-seen-v2')
    const user = userEvent.setup()
    render(<App />)

    await user.click(await screen.findByTestId('start-pali-home'))

    expect(screen.getByRole('checkbox', { name: /Include previously seen questions/i })).not.toBeChecked()
    expect(localStorage.getItem('lace-studio-include-seen-v2')).toBe('true')
  })
})
