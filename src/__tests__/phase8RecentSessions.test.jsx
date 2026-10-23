import { act, renderHook, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, test } from 'vitest'
import { ProgressProvider, useProgress } from '../contexts/ProgressContext.jsx'

describe('recent session certification correction', () => {
  beforeEach(() => {
    localStorage.clear()
    localStorage.setItem('lace-studio-session-history', JSON.stringify([{
      id: 1,
      timestamp: '2026-10-23T00:00:00.000Z',
      examType: 'PSM II',
      totalQuestions: 45,
      correctAnswers: 43,
      score: 96,
      timeUsed: 2160,
      domainScores: {},
      questionResults: [],
    }]))
  })

  test('updates and persists the corrected certification title', async () => {
    const wrapper = ({ children }) => <ProgressProvider>{children}</ProgressProvider>
    const { result } = renderHook(() => useProgress(), { wrapper })

    await waitFor(() => expect(result.current.sessionHistory).toHaveLength(1))

    act(() => result.current.updateSessionExamType(1, 'PAL I'))

    expect(result.current.sessionHistory[0].examType).toBe('PAL I')
    await waitFor(() => {
      const saved = JSON.parse(localStorage.getItem('lace-studio-session-history'))
      expect(saved[0].examType).toBe('PAL I')
    })
  })
})
