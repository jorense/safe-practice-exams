import { useState, useEffect } from 'react'
import styles from './LeadingSAFe6ExamQuiz.module.css'
import { leadingSAFe6Questions } from './LeadingSAFe6Questions.js'
import Results from '../shared/Results.jsx'
import ProgressIndicator from '../exam/ProgressIndicator.jsx'

import SessionRecovery from '../autosave/SessionRecovery.jsx'
import HelpSystem, { MultiSelectHelp } from '../help/HelpSystem.jsx'
import { useProgress } from '../../contexts/ProgressContext.jsx'
import { useStudyIntelligence } from '../../contexts/StudyIntelligenceContext.jsx'
import { useAutosave } from '../../contexts/AutosaveContext.jsx'
import { useExamTiming } from '../../hooks/useExamTiming.js'

function LeadingSAFe6ExamQuiz({ onGoHome, onGoBackToExam, numberOfQuestions = 45, autoShowExplanation = false, examMode = 'exam', scheduler }) {
  const { recordSession } = useProgress()
  const { updateSpacedRepetition } = useStudyIntelligence()
  const { saveExamState, loadExamState, clearExamState, AUTOSAVE_INTERVAL, DEBOUNCE_DELAY } = useAutosave()

  // Adaptive timer calculation function
  const calculateTimerDuration = (questionCount) => {
    if (questionCount <= 45) {
      // Certification mode: 90 minutes (5400 seconds)
      return 5400
    } else if (questionCount <= 100) {
      // Practice mode: 2 minutes per question (120 seconds each)
      return questionCount * 120
    } else {
      // Study mode: No timer (0 = unlimited)
      return 0
    }
  }

  const initialTimer = calculateTimerDuration(numberOfQuestions)
  const hasTimer = initialTimer > 0

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [revealedAnswers, setRevealedAnswers] = useState({})
  const [collapsedExplanations, setCollapsedExplanations] = useState({})
  // countdown handled by hook (countdown == time remaining when timed)
  const [showResults, setShowResults] = useState(false)
  const [totalTimeUsed, setTotalTimeUsed] = useState(0)
  const [examSubmitted, setExamSubmitted] = useState(false)
  const [shuffledQuestions, setShuffledQuestions] = useState([])
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState(new Set())
  const [sessionId] = useState(() => `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`)
  const [showSessionRecovery, setShowSessionRecovery] = useState(true)
  const [lastAutosave, setLastAutosave] = useState(Date.now())
  const [timingResetToken, setTimingResetToken] = useState(0)
  
  // Hook-based timing
  const currentQuestionId = shuffledQuestions[currentQuestion]?.id
  const { questionTimings, currentQuestionTime, countdown, finalize } = useExamTiming({
    enabledCountdownSeconds: hasTimer ? initialTimer : 0,
    questionId: currentQuestionId || '__loading__',
    isExamSubmitted: examSubmitted,
    scheduler,
    resetToken: timingResetToken
  })

  // Utility function to shuffle array
  const shuffleArray = (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Utility function to shuffle question options and update correct answer index
  const shuffleQuestionOptions = (question) => {
    const optionIndices = question.options.map((option, i) => ({ index: i, option }))
    const shuffledOptions = shuffleArray(optionIndices)
    
    const newQuestion = {
      ...question,
      options: shuffledOptions.map(item => item.option),
      optionMapping: shuffledOptions.map(item => item.index) // Keep track of original positions
    }
    
    // Handle single-select questions
    if (!question.questionType || question.questionType !== 'multiple') {
      newQuestion.correctAnswer = shuffledOptions.findIndex(item => item.index === question.correctAnswer)
      newQuestion.originalCorrectAnswer = question.correctAnswer // Keep track for explanations
    } 
    // Handle multi-select questions
    else {
      newQuestion.correctAnswers = question.correctAnswers.map(originalIndex => 
        shuffledOptions.findIndex(item => item.index === originalIndex)
      )
      newQuestion.originalCorrectAnswers = question.correctAnswers // Keep track for explanations
    }
    
    return newQuestion
  }

  // Initialize shuffled questions on component mount
  useEffect(() => {
    try {
      let availableQuestions = leadingSAFe6Questions
      
      // Filter questions based on exam mode
      if (examMode === 'exam') {
        // Exam mode: only single-select questions (filter out multi-select)
        availableQuestions = leadingSAFe6Questions.filter(q => !q.questionType || q.questionType !== 'multiple')
      }
      // Practice mode: include all questions (single-select + multi-select)
      
      const shuffled = shuffleArray(availableQuestions)
      const selectedQuestions = shuffled.slice(0, numberOfQuestions)
      // Shuffle the options for each question to prevent visual patterns
      const questionsWithShuffledOptions = selectedQuestions.map(shuffleQuestionOptions)
      setShuffledQuestions(questionsWithShuffledOptions)

      if (typeof window !== 'undefined') {
        try {
          const logs = JSON.parse(localStorage.getItem('e2e.logs') || '[]')
          logs.push({ t: Date.now(), msg: `quiz-init-success count=${questionsWithShuffledOptions.length}` })
          localStorage.setItem('e2e.logs', JSON.stringify(logs))
        } catch(_) {}
      }
    } catch (err) {
      if (typeof window !== 'undefined') {
        try {
          const logs = JSON.parse(localStorage.getItem('e2e.logs') || '[]')
          logs.push({ t: Date.now(), msg: 'quiz-init-error', error: err && (err.message || String(err)), stack: err && err.stack })
          localStorage.setItem('e2e.logs', JSON.stringify(logs))
          localStorage.setItem('e2e.quizInitError', JSON.stringify({ message: err.message, stack: err.stack }))
        } catch(_) {}
      }
      // Rethrow so React error overlay still shows in dev (optional)
      // console.error(err)
    }
  }, [numberOfQuestions, examMode])

  // Session recovery and autosave initialization
  useEffect(() => {
    if (shuffledQuestions.length === 0) return

    // Try to load existing session data
    const savedSession = loadExamState('leadingsafe6', sessionId)
    
    if (savedSession && savedSession.shuffledQuestions) {
      // Restore session data
      setCurrentQuestion(savedSession.currentQuestion || 0)
      setSelectedAnswers(savedSession.selectedAnswers || {})
      setRevealedAnswers(savedSession.revealedAnswers || {})
      setCollapsedExplanations(savedSession.collapsedExplanations || {})
      setBookmarkedQuestions(new Set(savedSession.bookmarkedQuestions || []))
      // timing restoration: we restore historical timings only; current question elapsed restarts
      // (Hook does not currently accept hydration for in-progress question)
      // questionTimings is immutable from hook consumer side so can't directly set; skip for now.
      setTotalTimeUsed(savedSession.totalTimeUsed || 0)
      // countdown restoration not yet supported; could extend hook with initialCountdown later
      
      // Use saved questions to maintain consistency
      setShuffledQuestions(savedSession.shuffledQuestions)
      setShowSessionRecovery(false)
    } else {
      setShowSessionRecovery(false)
    }
  }, [loadExamState, sessionId, shuffledQuestions.length])

  // Autosave effect - debounced saving of exam state
  useEffect(() => {
    if (shuffledQuestions.length === 0 || examSubmitted) return

    const saveTimeout = setTimeout(() => {
      const currentTime = Date.now()
      
      // Only save if there's meaningful progress or enough time has passed
      const hasProgress = Object.keys(selectedAnswers).length > 0
      const timeSinceLastSave = currentTime - lastAutosave
      
      if (hasProgress && timeSinceLastSave >= DEBOUNCE_DELAY) {
        const examState = {
          currentQuestion,
          selectedAnswers,
          revealedAnswers,
          collapsedExplanations,
          bookmarkedQuestions: Array.from(bookmarkedQuestions),
          questionTimings, // hook returns up-to-date aggregate
          currentQuestionTime,
          totalTimeUsed,
          timeRemaining: countdown,
          shuffledQuestions,
          totalQuestions: shuffledQuestions.length,
          examMode,
          numberOfQuestions,
          autoShowExplanation
        }
        
        saveExamState('leadingsafe6', sessionId, examState)
        setLastAutosave(currentTime)
      }
    }, DEBOUNCE_DELAY)

    return () => clearTimeout(saveTimeout)
  }, [
    currentQuestion, selectedAnswers, revealedAnswers, collapsedExplanations,
    bookmarkedQuestions, questionTimings, currentQuestionTime, totalTimeUsed,
    countdown, shuffledQuestions, examSubmitted, examMode, numberOfQuestions,
    autoShowExplanation, saveExamState, sessionId, lastAutosave, DEBOUNCE_DELAY
  ])

  // Periodic autosave (fallback)
  useEffect(() => {
    if (shuffledQuestions.length === 0 || examSubmitted) return

    const interval = setInterval(() => {
      const hasProgress = Object.keys(selectedAnswers).length > 0
      
      if (hasProgress) {
        const examState = {
          currentQuestion,
          selectedAnswers,
          revealedAnswers,
          collapsedExplanations,
          bookmarkedQuestions: Array.from(bookmarkedQuestions),
          questionTimings,
          currentQuestionTime,
          totalTimeUsed,
          timeRemaining: countdown,
          shuffledQuestions,
          totalQuestions: shuffledQuestions.length,
          examMode,
          numberOfQuestions,
          autoShowExplanation
        }
        
        saveExamState('leadingsafe6', sessionId, examState)
        setLastAutosave(Date.now())
      }
    }, AUTOSAVE_INTERVAL)

    return () => clearInterval(interval)
  }, [
    currentQuestion, selectedAnswers, revealedAnswers, collapsedExplanations,
    bookmarkedQuestions, questionTimings, currentQuestionTime, totalTimeUsed,
    countdown, shuffledQuestions, examSubmitted, examMode, numberOfQuestions,
    autoShowExplanation, saveExamState, sessionId, AUTOSAVE_INTERVAL
  ])

  // Countdown completion auto-submit
  useEffect(() => {
    if (hasTimer && countdown === 0 && !examSubmitted) {
      handleSubmitExam()
    }
  }, [hasTimer, countdown, examSubmitted])

  useEffect(() => {
    if (shuffledQuestions.length > 0 && autoShowExplanation) {
      const currentQ = shuffledQuestions[currentQuestion];
      if (revealedAnswers[currentQ?.id]) {
        setCollapsedExplanations(prev => ({
          ...prev,
          [currentQ.id]: false
        }))
      }
    }
  }, [currentQuestion, revealedAnswers, shuffledQuestions, autoShowExplanation])

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const formatMilliseconds = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const handleAnswerSelect = (optionIndex) => {
    if (examSubmitted) return
    
    const question = shuffledQuestions[currentQuestion]
    const isMultiSelect = question.questionType === 'multiple'
    
    if (isMultiSelect) {
      // Multi-select: allow temporary over-selection to surface explicit warning state
      const currentSelections = selectedAnswers[question.id] || []
      const isAlreadySelected = currentSelections.includes(optionIndex)
      let newSelections
      if (isAlreadySelected) {
        newSelections = currentSelections.filter(i => i !== optionIndex)
      } else {
        newSelections = [...currentSelections, optionIndex].sort()
      }
      setSelectedAnswers(prev => ({ ...prev, [question.id]: newSelections }))
    } else {
      // Handle single-select questions (existing behavior)
      setSelectedAnswers(prev => ({
        ...prev,
        [question.id]: optionIndex
      }))
    }
    
    setRevealedAnswers(prev => ({
      ...prev,
      [question.id]: true
    }))

    if (autoShowExplanation) {
      setCollapsedExplanations(prev => ({
        ...prev,
        [question.id]: false
      }))
    }
  }

  const toggleExplanation = (questionId) => {
    setCollapsedExplanations(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }))
  }

  const goToQuestion = (index) => {
    setCurrentQuestion(index)
  }

  const nextQuestion = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmitExam = () => {
    // finalize current question timing via hook
    finalize()
    const timeUsed = hasTimer ? (initialTimer - countdown) : 0
    setTotalTimeUsed(timeUsed)
    // Store per-question timings in localStorage for analysis
    const examTimingData = {
      examType: 'Leading SAFe 6',
      date: new Date().toISOString(),
      totalTimeUsed: timeUsed,
      questionTimings,
      questions: shuffledQuestions.map(q => ({
        id: q.id,
        question: q.question.substring(0, 100) + '...',
        domain: q.domain,
        difficulty: q.difficulty
      }))
    }
    const storageKey = `examTiming_${Date.now()}`
    localStorage.setItem(storageKey, JSON.stringify(examTimingData))

    // Calculate score and domain performance with support for multi-select questions
    let totalScore = 0
    const domainPerformance = {}
    
    shuffledQuestions.forEach((question) => {
      let questionScore = 0
      const userAnswer = selectedAnswers[question.id]
      
      if (question.questionType === 'multiple') {
        // Multi-select scoring: partial credit based on correct selections
        const userSelections = userAnswer || []
        const correctAnswers = question.correctAnswers || []
        
        if (userSelections.length > 0) {
          const correctSelected = userSelections.filter(idx => correctAnswers.includes(idx)).length
          const incorrectSelected = userSelections.filter(idx => !correctAnswers.includes(idx)).length
          const missedCorrect = correctAnswers.filter(idx => !userSelections.includes(idx)).length
          
          // Scoring formula: (correct selections - incorrect selections) / total correct answers
          // Minimum score is 0, maximum is 1
          questionScore = Math.max(0, (correctSelected - incorrectSelected) / correctAnswers.length)
        }
      } else {
        // Single-select scoring: 1 if correct, 0 if incorrect
        const isCorrect = userAnswer === question.correctAnswer
        questionScore = isCorrect ? 1 : 0
      }
      
      totalScore += questionScore
      
      // Update spaced repetition for each question
      const questionId = `leadingsafe_${question.id}`;
      const performance = questionScore > 0.5 ? questionScore : 0.2; // Use actual score or low performance
      updateSpacedRepetition(questionId, Math.floor(performance * 5)); // Convert to 0-5 scale
      
      // Track domain performance
      const domain = question.domain || 'General'
      if (!domainPerformance[domain]) {
        domainPerformance[domain] = { correct: 0, total: 0 }
      }
      domainPerformance[domain].total++
      domainPerformance[domain].correct += questionScore
    })

    const score = Math.round((totalScore / shuffledQuestions.length) * 100)
    const effectiveCorrectAnswers = Math.round(totalScore)

    // Get questions that need review (score < 1.0)
    const incorrectQuestions = shuffledQuestions.filter((question) => {
      const userAnswer = selectedAnswers[question.id]
      
      if (question.questionType === 'multiple') {
        const userSelections = userAnswer || []
        const correctAnswers = question.correctAnswers || []
        
        if (userSelections.length === 0) return true
        
        const correctSelected = userSelections.filter(idx => correctAnswers.includes(idx)).length
        const incorrectSelected = userSelections.filter(idx => !correctAnswers.includes(idx)).length
        const questionScore = Math.max(0, (correctSelected - incorrectSelected) / correctAnswers.length)
        
        return questionScore < 1.0
      } else {
        return userAnswer !== question.correctAnswer
      }
    })

    // Record the session
    recordSession({
      examType: 'Leading SAFe 6',
      score: score,
      totalQuestions: shuffledQuestions.length,
      correctAnswers: effectiveCorrectAnswers,
      timeUsed: timeUsed,
      timeLimitSec: initialTimer,
      domainPerformance: domainPerformance,
      incorrectQuestions: incorrectQuestions,
      date: new Date().toISOString()
    })

    // Clear autosave data since exam is completed
    clearExamState('leadingsafe6', sessionId)

    setExamSubmitted(true)
  }

  if (shuffledQuestions.length === 0) {
    if (typeof window !== 'undefined' && window.__E2E__) {
      try {
        const logs = JSON.parse(localStorage.getItem('e2e.logs') || '[]')
        logs.push({ t: Date.now(), msg: 'quiz-loading (no questions yet)' })
        localStorage.setItem('e2e.logs', JSON.stringify(logs))
      } catch(_) {}
    }
    return (
      <div className={styles.loadingContainer} data-testid="quiz-loading">
        <div className={styles.loading}>
          <h2>Preparing your exam...</h2>
          <div className={styles.spinner}></div>
        </div>
      </div>
    )
  }

  if (examSubmitted) {
    return (
      <Results
        title="Leading SAFe 6 Exam Results"
        questions={shuffledQuestions}
        selectedAnswers={selectedAnswers}
        totalTimeSec={totalTimeUsed}
        timeLimitSec={5400}
        passThreshold={77}
        onGoHome={onGoHome}
        onStudyMore={onGoBackToExam}
        onRetakeIncorrect={() => {
          // Reset exam state for retake
          setExamSubmitted(false)
          setCurrentQuestion(0)
          setSelectedAnswers({})
          setRevealedAnswers({})
          setCollapsedExplanations({})
          setTotalTimeUsed(0)
          setTimingResetToken(token => token + 1)
        }}
      />
    )
  }

  const handleBookmarkToggle = (questionIndex) => {
    const questionId = shuffledQuestions[questionIndex].id
    setBookmarkedQuestions(prev => {
      const newBookmarks = new Set(prev)
      if (newBookmarks.has(questionId)) {
        newBookmarks.delete(questionId)
      } else {
        newBookmarks.add(questionId)
      }
      return newBookmarks
    })
  }

  const handleQuestionJump = (questionIndex) => {
    finalize()
    setCurrentQuestion(questionIndex)
  }

  const handleSessionRestore = (session) => {
    const savedState = loadExamState('leadingsafe6', session.sessionId)
    if (savedState) {
      // Restore all saved state
      setCurrentQuestion(savedState.currentQuestion || 0)
      setSelectedAnswers(savedState.selectedAnswers || {})
      setRevealedAnswers(savedState.revealedAnswers || {})
      setCollapsedExplanations(savedState.collapsedExplanations || {})
      setBookmarkedQuestions(new Set(savedState.bookmarkedQuestions || []))
      // Cannot hydrate in-progress timing; historical timings already stored inside hook internal state only if we extend it.
      setTotalTimeUsed(savedState.totalTimeUsed || 0)

      setShuffledQuestions(savedState.shuffledQuestions || [])
    }
    setShowSessionRecovery(false)
  }

  const handleSessionDismiss = () => {
    setShowSessionRecovery(false)
  }

  const currentQ = shuffledQuestions[currentQuestion]
  const isAnswered = selectedAnswers[currentQ.id] !== undefined
  const isRevealed = revealedAnswers[currentQ.id]
  const selectedOption = selectedAnswers[currentQ.id]
  const isExplanationCollapsed = collapsedExplanations[currentQ.id] !== false

  const answeredCount = Object.keys(selectedAnswers).length
  const progressPercent = (answeredCount / shuffledQuestions.length) * 100

  return (
    <>
  <div className={styles.quizContainer} data-testid="quiz-root">
        
        <header className={styles.quizHeader}>
        <div className={styles.quizHeaderContent}>
          <div className={styles.quizInfo}>
            <div className={styles.examTitle}>Leading SAFe 6 Practice Exam</div>
            <div className={styles.questionCounter}>
              Question {currentQuestion + 1} of {shuffledQuestions.length}
            </div>
          </div>
        
          {hasTimer ? (
            <div className={styles.timerSection}>
              <div className={styles.timer}>
                <span className={styles.timerLabel}>Time Remaining:</span>
                <span className={`${styles.timerValue} ${countdown < 600 ? styles.timerWarning : ''}`}>
                  {formatTime(countdown)}
                </span>
              </div>
            </div>
          ) : (
            <div className={styles.timerSection}>
              <div className={styles.timer}>
                <span className={styles.timerLabel}>Study Mode:</span>
                <span className={styles.timerValue}>
                  Unlimited Time
                </span>
              </div>
            </div>
          )}

          <div className={styles.headerActions}>
            <button onClick={onGoHome} className={styles.backButton} data-testid="quiz-back-home">
              ← Back to Home
            </button>
            <button 
              onClick={handleSubmitExam} 
              className={styles.submitButton}
              data-testid="quiz-submit"
              disabled={answeredCount === 0}
            >
              Submit Exam ({answeredCount}/{shuffledQuestions.length})
            </button>
          </div>
        </div>
      </header>

      <ProgressIndicator
        currentQuestion={currentQuestion}
        totalQuestions={shuffledQuestions.length}
        answeredQuestions={Object.keys(selectedAnswers).length}
        questions={shuffledQuestions.map((q, index) => ({
          id: q.id,
          number: index + 1,
          answered: selectedAnswers[q.id] !== undefined,
          bookmarked: bookmarkedQuestions.has(q.id)
        }))}
        onQuestionJump={handleQuestionJump}
        onBookmarkToggle={handleBookmarkToggle}
      />

      <main className={styles.quizContent}>
        <div className={styles.questionSection}>
            <div className={styles.questionCard} data-testid="quiz-question-card" data-question-id={currentQ.id}>
            <div className={styles.questionHeader}>
              <div className={styles.questionMeta}>
                <span className={styles.domain}>{currentQ.domain}</span>
                <span className={styles.difficulty}>{currentQ.difficulty}</span>
                <span className={styles.questionTimer}>
                  Time on question: {formatMilliseconds(currentQuestionTime)}
                </span>
              </div>
            </div>
            
            {/* Enhanced question instruction for multi-select */}
            {currentQ.questionType === 'multiple' ? (
              <div className={styles.questionInstruction}>
                <div className={styles.multiSelectBadge}>
                  <span className={styles.badgeIcon}>☑</span>
                  Multiple Choice <MultiSelectHelp position="right" />
                </div>
                <div className={styles.selectionRequirement} data-testid="multi-select-requirement">
                  Select exactly <strong>{currentQ.selectCount}</strong> answer{currentQ.selectCount > 1 ? 's' : ''}
                </div>
                <div className={styles.selectionProgress} data-testid="multi-select-progress">
                  {(() => {
                    const currentSelections = selectedAnswers[currentQ.id] || []
                    const selectedCount = currentSelections.length
                    const remaining = currentQ.selectCount - selectedCount
                    return (
                      <span className={`${styles.progressText} ${
                        selectedCount === currentQ.selectCount ? styles.complete : 
                        selectedCount > currentQ.selectCount ? styles.warning : ''
                      }`}>
                        {selectedCount} of {currentQ.selectCount} selected
                        {remaining > 0 && ` (${remaining} more needed)`}
                        {selectedCount > currentQ.selectCount && ` (${selectedCount - currentQ.selectCount} too many)`}
                      </span>
                    )
                  })()}
                </div>
              </div>
            ) : (
              <div className={styles.questionInstruction}>
                <div className={styles.singleSelectBadge}>
                  <span className={styles.badgeIcon}>●</span>
                  Single Choice
                </div>
                <div className={styles.selectionRequirement}>
                  Select <strong>one</strong> answer
                </div>
              </div>
            )}
            
            <h2 className={styles.questionText} data-testid="quiz-question-text">{currentQ.question}</h2>
            
            <div className={styles.optionsContainer} data-testid="quiz-options-container">
              {currentQ.options.map((option, index) => {
                const isMultiSelect = currentQ.questionType === 'multiple'
                const currentSelections = selectedAnswers[currentQ.id] || (isMultiSelect ? [] : null)
                const isSelected = isMultiSelect 
                  ? currentSelections.includes(index)
                  : selectedOption === index
                
                // Determine if this option is correct
                const isCorrect = isMultiSelect
                  ? currentQ.correctAnswers.includes(index)
                  : index === currentQ.correctAnswer
                
                const showResult = isRevealed
                
                let optionClass = styles.option
                if (showResult) {
                  if (isCorrect) {
                    optionClass += ` ${styles.correct}`
                  } else if (isSelected && !isCorrect) {
                    optionClass += ` ${styles.incorrect}`
                  }
                } else if (isSelected) {
                  optionClass += ` ${styles.selected}`
                }

                return (
                  <button
                    key={index}
                    className={optionClass}
                    data-testid={`quiz-option-${index}`}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={examSubmitted}
                  >
                    <span className={styles.optionIndicator}>
                      {isMultiSelect ? (
                        isSelected ? '☑' : '☐'
                      ) : (
                        isSelected ? '●' : '○'
                      )}
                    </span>
                    <span className={styles.optionLetter}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className={styles.optionText}>{option}</span>
                    {showResult && isCorrect && (
                      <span className={styles.checkMark}>✓</span>
                    )}
                    {showResult && isSelected && !isCorrect && (
                      <span className={styles.xMark}>✗</span>
                    )}
                  </button>
                )
              })}
            </div>

            {isRevealed && (
              <div className={styles.explanationSection}>
                {examMode === 'exam' && (
                  <button
                    className={styles.explanationToggle}
                    onClick={() => toggleExplanation(currentQ.id)}
                  >
                    {isExplanationCollapsed ? '▼' : '▲'} Explanation
                  </button>
                )}
                
                {examMode === 'practice' && (
                  <div className={styles.explanationHeader}>
                    <span className={styles.explanationIcon}>💡</span>
                    <span className={styles.explanationTitle}>Explanation</span>
                  </div>
                )}
                
                {(examMode === 'practice' || !isExplanationCollapsed) && (
                  <div className={styles.explanationContent}>
                    <p>{currentQ.explanation}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className={styles.navigationSection}>
          <div className={styles.questionNavigation}>
            <button
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className={styles.navButton}
              data-testid="quiz-prev"
            >
              ← Previous
            </button>
            
            <span className={styles.questionInfo} data-testid="quiz-progress">
              {currentQuestion + 1} / {shuffledQuestions.length}
            </span>
            
            <button
              onClick={nextQuestion}
              disabled={currentQuestion === shuffledQuestions.length - 1}
              className={styles.navButton}
              data-testid="quiz-next"
            >
              Next →
            </button>
          </div>

          <div className={styles.questionGrid}>
            {shuffledQuestions.map((_, index) => {
              const questionId = shuffledQuestions[index].id
              const isAnswered = selectedAnswers[questionId] !== undefined
              const isCurrent = index === currentQuestion
              
              return (
                <button
                  key={index}
                  className={`${styles.questionNumber} ${
                    isCurrent ? styles.current : ''
                  } ${isAnswered ? styles.answered : ''}`}
                  data-testid={`quiz-jump-${index+1}`}
                  onClick={() => goToQuestion(index)}
                >
                  {index + 1}
                </button>
              )
            })}
          </div>
        </div>
      </main>
      
      {/* Session Recovery Modal */}
      {showSessionRecovery && (
        <SessionRecovery
          examType="leadingsafe6"
          onRestore={handleSessionRestore}
          onDismiss={handleSessionDismiss}
        />
      )}
      
  {/* Contextual Help System restored (lightweight panel + tour) */}
  <HelpSystem isEnabled={true} examContext="exam" />
    </div>
    </>
  )
}

export default LeadingSAFe6ExamQuiz