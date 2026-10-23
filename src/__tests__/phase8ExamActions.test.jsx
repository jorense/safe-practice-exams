import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, test, vi } from 'vitest'
import ExamActions from '../components/exam/ExamActions.jsx'

describe('Phase 8 critical-action confirmations', () => {
  test('warns about unanswered questions before submission', async () => {
    const user = userEvent.setup()
    const onSubmit = vi.fn()
    render(<ExamActions onExit={vi.fn()} onSubmit={onSubmit} answeredCount={2} totalQuestions={5} />)

    await user.click(screen.getByRole('button', { name: 'Submit Exam (2/5)' }))
    expect(screen.getByRole('alertdialog')).toHaveTextContent('3 questions are still unanswered')
    await user.click(screen.getByRole('button', { name: 'Submit exam' }))
    expect(onSubmit).toHaveBeenCalledOnce()
  })

  test('allows a user to cancel leaving the exam', async () => {
    const user = userEvent.setup()
    const onExit = vi.fn()
    render(<ExamActions onExit={onExit} onSubmit={vi.fn()} answeredCount={1} totalQuestions={5} />)

    await user.click(screen.getByRole('button', { name: /Back to Home/ }))
    await user.click(screen.getByRole('button', { name: 'Continue exam' }))
    expect(onExit).not.toHaveBeenCalled()
    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument()
  })
})
