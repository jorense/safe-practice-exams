import { useState, useEffect } from 'react'
import styles from './PALIExamQuiz.module.css'
import { paliQuestions } from './PALIQuestions'
import Results from '../shared/Results.jsx'
import { useProgress } from '../../contexts/ProgressContext.jsx'
import { filterQuestions, prioritizeQuestions, isQuestionSeen, recordQuestionAttempts } from '../../utils/questionHistory.js'

function PALIExamQuiz({ onGoHome, onGoBackToExam, numberOfQuestions = 30, autoShowExplanation = false, examMode = 'exam', includeSeenQuestions = true }) {
  const { recordSession } = useProgress()

  // Adaptive timer calculation function
  const calculateTimerDuration = (questionCount) => {
    if (questionCount <= 30) {
      // Certification mode: 60 minutes (3600 seconds)
      return 3600
    } else if (questionCount <= 50) {
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
  const [timeRemaining, setTimeRemaining] = useState(initialTimer)
  const [showResults, setShowResults] = useState(false)
  const [totalTimeUsed, setTotalTimeUsed] = useState(0)
  const [examSubmitted, setExamSubmitted] = useState(false)
  const [shuffledQuestions, setShuffledQuestions] = useState([])
  
  // Per-question timing states
  const [questionTimings, setQuestionTimings] = useState({}) // { questionId: totalTimeSpent }
  const [questionStartTime, setQuestionStartTime] = useState(null)
  const [currentQuestionTime, setCurrentQuestionTime] = useState(0)

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
    let availableQuestions = paliQuestions
    
    // Filter questions based on exam mode
    if (examMode === 'exam') {
      // Exam mode: only single-select questions (filter out multi-select)
      availableQuestions = paliQuestions.filter(q => !q.questionType || q.questionType !== 'multiple')
    }
    // Practice mode: include all questions (single-select + multi-select)
    
    // Filter based on seen/unseen preference
    const filteredQuestions = filterQuestions(availableQuestions, 'pali', includeSeenQuestions)
    
    // If not enough unseen questions, fall back to all questions
    const questionsToUse = filteredQuestions.length >= numberOfQuestions 
      ? filteredQuestions 
      : availableQuestions
    
    // Prioritize unseen questions (this function now handles internal shuffling)
    const prioritized = prioritizeQuestions(questionsToUse, 'pali')
    
    // Take the requested number of questions (already prioritized and shuffled)
    const selectedQuestions = prioritized.slice(0, numberOfQuestions)
    
    // Shuffle the options for each question to prevent visual patterns
    const questionsWithShuffledOptions = selectedQuestions.map(shuffleQuestionOptions)
    setShuffledQuestions(questionsWithShuffledOptions)
  }, [numberOfQuestions, examMode, includeSeenQuestions])

  // Track per-question timing - start timing when question changes
  useEffect(() => {
    if (shuffledQuestions.length > 0 && !examSubmitted) {
      const currentQ = shuffledQuestions[currentQuestion]
      if (currentQ) {
        // Save time for previous question if there was one
        if (questionStartTime !== null) {
          const previousQ = shuffledQuestions[currentQuestion - 1] || shuffledQuestions[currentQuestion + 1]
          if (previousQ) {
            const timeSpent = Date.now() - questionStartTime
            setQuestionTimings(prev => ({
              ...prev,
              [previousQ.id]: (prev[previousQ.id] || 0) + timeSpent
            }))
          }
        }
        
        // Start timing current question
        setQuestionStartTime(Date.now())
        setCurrentQuestionTime(0)
      }
    }
  }, [currentQuestion, shuffledQuestions, examSubmitted])

  // Update current question timer every second
  useEffect(() => {
    if (questionStartTime && !examSubmitted) {
      const timer = setInterval(() => {
        setCurrentQuestionTime(Date.now() - questionStartTime)
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [questionStartTime, examSubmitted])

  // Timer effect - only runs when timer is enabled
  useEffect(() => {
    if (hasTimer && timeRemaining > 0 && !examSubmitted) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000)
      return () => clearTimeout(timer)
    } else if (hasTimer && timeRemaining === 0 && !examSubmitted) {
      handleSubmitExam()
    }
  }, [timeRemaining, examSubmitted, hasTimer])

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
  }, [currentQuestion, revealedAnswers, autoShowExplanation, shuffledQuestions])

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
      // Handle multi-select questions
      const currentSelections = selectedAnswers[question.id] || []
      const isAlreadySelected = currentSelections.includes(optionIndex)
      
      let newSelections
      if (isAlreadySelected) {
        // Remove selection
        newSelections = currentSelections.filter(idx => idx !== optionIndex)
      } else {
        // Add selection if not at limit
        if (currentSelections.length < question.selectCount) {
          newSelections = [...currentSelections, optionIndex].sort()
        } else {
          // At limit - replace last selection
          newSelections = [...currentSelections.slice(0, -1), optionIndex].sort()
        }
      }
      
      setSelectedAnswers(prev => ({
        ...prev,
        [question.id]: newSelections
      }))
    } else {
      // Handle single-select questions (existing behavior)
      setSelectedAnswers(prev => ({
        ...prev,
        [question.id]: optionIndex
      }))
    }
    
    // Practice mode: Show instant feedback
    // Exam mode: No feedback until "Check Answer" is clicked
    if (examMode === 'practice') {
      setRevealedAnswers(prev => ({
        ...prev,
        [question.id]: true
      }))
      
      // Auto-expand explanation in practice mode
      setCollapsedExplanations(prev => ({
        ...prev,
        [question.id]: false
      }))
    } else if (examMode === 'exam') {
      // Exam mode: Only reveal if autoShowExplanation is enabled
      if (autoShowExplanation) {
        setRevealedAnswers(prev => ({
          ...prev,
          [question.id]: true
        }))
        
        setCollapsedExplanations(prev => ({
          ...prev,
          [question.id]: false
        }))
      }
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
    const timeUsed = hasTimer ? (initialTimer - timeRemaining) : 0
    setTotalTimeUsed(timeUsed)
    
    // Save timing for current question before submitting
    if (questionStartTime && shuffledQuestions[currentQuestion]) {
      const currentQ = shuffledQuestions[currentQuestion]
      const timeSpent = Date.now() - questionStartTime
      setQuestionTimings(prev => {
        const finalTimings = {
          ...prev,
          [currentQ.id]: (prev[currentQ.id] || 0) + timeSpent
        }
        
        // Store per-question timings in localStorage for analysis
        const examTimingData = {
          examType: 'PSM II',
          date: new Date().toISOString(),
          totalTimeUsed: timeUsed,
          questionTimings: finalTimings,
          questions: shuffledQuestions.map(q => ({
            id: q.id,
            question: q.question.substring(0, 100) + '...', // Truncate for storage
            domain: q.domain,
            difficulty: q.difficulty
          }))
        }
        
        // Store in localStorage with timestamp key
        const storageKey = `examTiming_${Date.now()}`
        localStorage.setItem(storageKey, JSON.stringify(examTimingData))
        
        return finalTimings
      })
    }

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
      examType: 'PSM II',
      score: score,
      totalQuestions: shuffledQuestions.length,
      correctAnswers: effectiveCorrectAnswers,
      timeUsed: timeUsed,
      timeLimitSec: initialTimer,
      domainPerformance: domainPerformance,
      incorrectQuestions: incorrectQuestions,
      date: new Date().toISOString()
    })

    // Record question attempts in history
    const questionResults = shuffledQuestions.map((question) => {
      const userAnswer = selectedAnswers[question.id]
      let isCorrect = false
      
      if (question.questionType === 'multiple') {
        const userSelections = userAnswer || []
        const correctAnswers = question.correctAnswers || []
        isCorrect = userSelections.length === correctAnswers.length &&
          userSelections.every(ans => correctAnswers.includes(ans))
      } else {
        isCorrect = userAnswer === question.correctAnswer
      }
      
      return {
        id: question.id,
        isCorrect: isCorrect
      }
    })
    
    recordQuestionAttempts('pali', questionResults)

    setExamSubmitted(true)
  }

  if (shuffledQuestions.length === 0) {
    return (
      <div className={styles.loadingContainer}>
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
        title="Professional Scrum Master II Results"
        questions={shuffledQuestions}
        selectedAnswers={selectedAnswers}
        totalTimeSec={totalTimeUsed}
        timeLimitSec={3600}
        passThreshold={70}
        onGoHome={onGoHome}
        onStudyMore={onGoBackToExam}
        onRetakeIncorrect={() => {
          // Reset exam state for retake
          setExamSubmitted(false)
          setCurrentQuestion(0)
          setSelectedAnswers({})
          setRevealedAnswers({})
          setCollapsedExplanations({})
          setTimeRemaining(5400)
          setTotalTimeUsed(0)
          // Reset timing states
          setQuestionTimings({})
          setQuestionStartTime(null)
          setCurrentQuestionTime(0)
        }}
      />
    )
  }

  const currentQ = shuffledQuestions[currentQuestion]
  const isAnswered = selectedAnswers[currentQ.id] !== undefined
  const isRevealed = revealedAnswers[currentQ.id]
  const selectedOption = selectedAnswers[currentQ.id]
  const isExplanationCollapsed = collapsedExplanations[currentQ.id] !== false

  const answeredCount = Object.keys(selectedAnswers).length
  const progressPercent = (answeredCount / shuffledQuestions.length) * 100

  return (
    <div className={styles.quizContainer}>
      <header className={styles.quizHeader}>
        <div className={styles.quizHeaderContent}>
          <div className={styles.quizInfo}>
            <div className={styles.examTitle}>PSM II Practice Exam</div>
            <div className={styles.questionCounter}>
              Question {currentQuestion + 1} of {shuffledQuestions.length}
            </div>
          </div>
        
          <div className={styles.timerSection}>
            {hasTimer ? (
              <div className={styles.timer}>
                <span className={styles.timerLabel}>
                  {numberOfQuestions <= 45 ? 'Certification Mode:' : 'Practice Mode:'} Time Remaining:
                </span>
                <span className={`${styles.timerValue} ${timeRemaining < 600 ? styles.timerWarning : ''}`}>
                  {formatTime(timeRemaining)}
                </span>
              </div>
            ) : (
              <div className={styles.timer}>
                <span className={styles.timerLabel}>Study Mode:</span>
                <span className={styles.timerValue}>Unlimited Time</span>
              </div>
            )}
          </div>

          <div className={styles.headerActions}>
            <button onClick={onGoHome} className={styles.backButton}>
              ← Back to Home
            </button>
            <button 
              onClick={handleSubmitExam} 
              className={styles.submitButton}
              disabled={answeredCount === 0}
            >
              Submit Exam ({answeredCount}/{shuffledQuestions.length})
            </button>
          </div>
        </div>
      </header>

      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <main className={styles.quizContent}>
        <div className={styles.questionSection}>
          <div className={styles.questionCard}>
            <div className={styles.questionHeader}>
              <div className={styles.questionMeta}>
                <span className={styles.domain}>{currentQ.domain}</span>
                <span className={styles.difficulty}>{currentQ.difficulty}</span>
                {isQuestionSeen('pali', currentQ.id) ? (
                  <span className={styles.seenBadge}>🔄 Seen</span>
                ) : (
                  <span className={styles.newBadge}>✨ New</span>
                )}
                <span className={styles.questionTimer}>
                  Time on question: {formatMilliseconds(currentQuestionTime)}
                </span>
              </div>
            </div>
            
            {/* Question instruction for multi-select */}
            {currentQ.questionType === 'multiple' && (
              <div className={styles.questionInstruction}>
                Select exactly {currentQ.selectCount} answer{currentQ.selectCount > 1 ? 's' : ''}
              </div>
            )}
            
            <h2 className={styles.questionText}>{currentQ.question}</h2>
            
            <div className={styles.optionsContainer}>
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
                  <>
                    {/* Show feedback based on whether answer is correct */}
                    {(() => {
                      const isMultiSelect = currentQ.questionType === 'multiple'
                      const userAnswer = selectedAnswers[currentQ.id]
                      let isAnswerCorrect = false
                      
                      if (isMultiSelect) {
                        const userSelections = userAnswer || []
                        const correctAnswers = currentQ.correctAnswers || []
                        isAnswerCorrect = userSelections.length === correctAnswers.length &&
                          userSelections.every(ans => correctAnswers.includes(ans))
                      } else {
                        isAnswerCorrect = userAnswer === currentQ.correctAnswer
                      }
                      
                      return (
                        <div className={isAnswerCorrect ? styles.correctFeedback : styles.incorrectFeedback}>
                          <div className={styles.feedbackHeader}>
                            <span className={styles.feedbackIcon}>
                              {isAnswerCorrect ? '✅' : '❌'}
                            </span>
                            <span className={styles.feedbackTitle}>
                              {isAnswerCorrect ? 'Correct Answer!' : 'Incorrect Answer'}
                            </span>
                          </div>
                          {!isAnswerCorrect && (
                            <div className={styles.feedbackText}>
                              {isMultiSelect ? (
                                <p>The correct answers are: <strong>{currentQ.correctAnswers.map(idx => String.fromCharCode(65 + idx)).join(', ')}</strong></p>
                              ) : (
                                <p>The correct answer is: <strong>{String.fromCharCode(65 + currentQ.correctAnswer)}</strong></p>
                              )}
                            </div>
                          )}
                        </div>
                      )
                    })()}
                    
                    <div className={styles.explanationHeader}>
                      <span className={styles.explanationIcon}>💡</span>
                      <span className={styles.explanationTitle}>Explanation</span>
                    </div>
                  </>
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
            >
              ← Previous
            </button>
            
            <span className={styles.questionInfo}>
              {currentQuestion + 1} / {shuffledQuestions.length}
            </span>
            
            <button
              onClick={nextQuestion}
              disabled={currentQuestion === shuffledQuestions.length - 1}
              className={styles.navButton}
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
                  onClick={() => goToQuestion(index)}
                >
                  {index + 1}
                </button>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

export default PALIExamQuiz