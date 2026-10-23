import { act, render } from '@testing-library/react'
import { useState } from 'react'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { AutosaveProvider } from '../contexts/AutosaveContext.jsx'
import { useExamAutosave } from '../hooks/useExamAutosave.js'

const question = { id: 1, question: 'Example?', options: ['A', 'B'], correctAnswer: 0 }

function Harness({ submitted = false }) {
  const [selectedAnswers] = useState({ 1: 0 })
  useExamAutosave({
    examType: 'pali',
    examSubmitted: submitted,
    examState: {
      currentQuestion: 0,
      selectedAnswers,
      bookmarkedQuestions: [1],
      shuffledQuestions: [question],
      totalQuestions: 1,
    },
    onRestoreState: vi.fn(),
  })
  return null
}

describe('Phase 8 autosave', () => {
  beforeEach(() => {
    localStorage.clear()
    vi.useFakeTimers()
  })

  afterEach(() => vi.useRealTimers())

  test('debounces a recoverable exam snapshot and clears it after submission', () => {
    const view = render(<AutosaveProvider><Harness /></AutosaveProvider>)

    act(() => vi.advanceTimersByTime(2100))
    const savedKey = Array.from({ length: localStorage.length }, (_, index) => localStorage.key(index))
      .find(key => key.startsWith('lace-studio-autosave-pali-'))
    expect(savedKey).toBeTruthy()
    expect(JSON.parse(localStorage.getItem(savedKey))).toMatchObject({
      selectedAnswers: { 1: 0 },
      bookmarkedQuestions: [1],
      totalQuestions: 1,
    })

    view.rerender(<AutosaveProvider><Harness submitted /></AutosaveProvider>)
    expect(localStorage.getItem(savedKey)).toBeNull()
  })
})
