import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test, vi } from 'vitest'
import ProgressIndicator from '../components/exam/ProgressIndicator.jsx'

const questions = [{ id: 10 }, { id: 20 }, { id: 30 }]

describe('Phase 8 exam progress and bookmarking', () => {
  test('shows accurate progress and bookmark states', () => {
    render(<ProgressIndicator currentQuestion={1} questions={questions} selectedAnswers={{ 10: 2 }} bookmarkedQuestions={new Set([20])} />)

    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '33')
    expect(screen.getByText('1 of 3 answered')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Remove bookmark from question 2' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: /Question 2, current, bookmarked/ })).toHaveAttribute('aria-current', 'step')
  })

  test('supports bookmarking and question navigation', async () => {
    const user = userEvent.setup()
    const onBookmarkToggle = vi.fn()
    const onQuestionClick = vi.fn()
    render(<ProgressIndicator currentQuestion={0} questions={questions} onBookmarkToggle={onBookmarkToggle} onQuestionClick={onQuestionClick} />)

    await user.click(screen.getByRole('button', { name: 'Bookmark question 1' }))
    await user.click(screen.getByRole('button', { name: 'Question 3' }))
    expect(onBookmarkToggle).toHaveBeenCalledWith(0)
    expect(onQuestionClick).toHaveBeenCalledWith(2)
  })
})
