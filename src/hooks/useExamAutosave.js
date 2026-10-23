import { useCallback, useEffect, useRef, useState } from 'react'
import { useAutosave } from '../contexts/AutosaveContext.jsx'

export function useExamAutosave({ examType, examState, examSubmitted, onRestoreState }) {
  const { saveExamState, loadExamState, clearExamState, AUTOSAVE_INTERVAL, DEBOUNCE_DELAY } = useAutosave()
  const [activeSessionId, setActiveSessionId] = useState(() => `session-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`)
  const [showSessionRecovery, setShowSessionRecovery] = useState(true)
  const restoreRef = useRef(onRestoreState)
  restoreRef.current = onRestoreState
  const stateRef = useRef(examState)
  stateRef.current = examState
  const hasProgress = Object.keys(examState.selectedAnswers || {}).length > 0

  useEffect(() => {
    if (!hasProgress || examSubmitted || !examState.shuffledQuestions?.length) return undefined
    const timeout = setTimeout(() => {
      saveExamState(examType, activeSessionId, stateRef.current)
    }, DEBOUNCE_DELAY)
    return () => clearTimeout(timeout)
  }, [activeSessionId, DEBOUNCE_DELAY, examState.bookmarkedQuestions, examState.currentQuestion, examState.selectedAnswers, examSubmitted, examType, hasProgress, saveExamState])

  useEffect(() => {
    if (!hasProgress || examSubmitted || !examState.shuffledQuestions?.length) return undefined
    const interval = setInterval(() => saveExamState(examType, activeSessionId, stateRef.current), AUTOSAVE_INTERVAL)
    return () => clearInterval(interval)
  }, [activeSessionId, AUTOSAVE_INTERVAL, examSubmitted, examType, hasProgress, saveExamState])

  useEffect(() => {
    if (examSubmitted) clearExamState(examType, activeSessionId)
  }, [activeSessionId, clearExamState, examSubmitted, examType])

  const restoreSession = useCallback((session) => {
    const savedState = loadExamState(examType, session.sessionId)
    if (savedState) {
      setActiveSessionId(session.sessionId)
      restoreRef.current(savedState)
    }
    setShowSessionRecovery(false)
  }, [examType, loadExamState])

  const dismissRecovery = useCallback(() => setShowSessionRecovery(false), [])

  return { showSessionRecovery, restoreSession, dismissRecovery }
}
