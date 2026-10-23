import { useCallback, useState } from 'react'

export function useQuestionBookmarks(questions) {
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState(new Set())

  const toggleBookmark = useCallback((questionIndex) => {
    const questionId = questions[questionIndex]?.id
    if (questionId === undefined) return
    setBookmarkedQuestions(previous => {
      const next = new Set(previous)
      if (next.has(questionId)) next.delete(questionId)
      else next.add(questionId)
      return next
    })
  }, [questions])

  const restoreBookmarks = useCallback((questionIds = []) => {
    setBookmarkedQuestions(new Set(questionIds))
  }, [])

  const clearBookmarks = useCallback(() => setBookmarkedQuestions(new Set()), [])

  return { bookmarkedQuestions, toggleBookmark, restoreBookmarks, clearBookmarks }
}
