import { useState, useEffect } from 'react'
import styles from './LeadingSAFe6ExamQuiz.module.css'
import { leadingSAFe6Questions } from './LeadingSAFe6Questions.js'
import Results from '../shared/Results.jsx'
import { useProgress } from '../../contexts/ProgressContext.jsx'
import { useStudyIntelligence } from '../../contexts/StudyIntelligenceContext.jsx'

function LeadingSAFe6ExamQuiz({ onGoHome, onGoBackToExam, numberOfQuestions = 45, autoShowExplanation = false }) {
  const { recordSession } = useProgress()
  const { updateSpacedRepetition } = useStudyIntelligence()

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
  const [timeRemaining, setTimeRemaining] = useState(initialTimer)
  const [showResults, setShowResults] = useState(false)
  const [totalTimeUsed, setTotalTimeUsed] = useState(0)
  const [examSubmitted, setExamSubmitted] = useState(false)
  const [shuffledQuestions, setShuffledQuestions] = useState([])

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
    const optionIndices = [0, 1, 2, 3].map(i => ({ index: i, option: question.options[i] }))
    const shuffledOptions = shuffleArray(optionIndices)
    
    const newQuestion = {
      ...question,
      options: shuffledOptions.map(item => item.option),
      correctAnswer: shuffledOptions.findIndex(item => item.index === question.correctAnswer),
      originalCorrectAnswer: question.correctAnswer, // Keep track for explanations
      optionMapping: shuffledOptions.map(item => item.index) // Keep track of original positions
    }
    
    return newQuestion
  }

  // Initialize shuffled questions on component mount
  useEffect(() => {
    const shuffled = shuffleArray(leadingSAFe6Questions)
    const selectedQuestions = shuffled.slice(0, numberOfQuestions)
    // Shuffle the options for each question to prevent visual patterns
    const questionsWithShuffledOptions = selectedQuestions.map(shuffleQuestionOptions)
    setShuffledQuestions(questionsWithShuffledOptions)
  }, [numberOfQuestions])

  // Timer effect - only runs when timer is enabled
  useEffect(() => {
    if (hasTimer && timeRemaining > 0 && !examSubmitted) {
      const timer = setTimeout(() => setTimeRemaining(timeRemaining - 1), 1000)
      return () => clearTimeout(timer)
    } else if (hasTimer && timeRemaining === 0 && !examSubmitted) {
      handleSubmitExam()
    }
  }, [hasTimer, timeRemaining, examSubmitted])

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

  const handleAnswerSelect = (optionIndex) => {
    if (examSubmitted) return
    
    const question = shuffledQuestions[currentQuestion]
    setSelectedAnswers(prev => ({
      ...prev,
      [question.id]: optionIndex
    }))
    
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
    const timeUsed = hasTimer ? (initialTimer - timeRemaining) : 0
    setTotalTimeUsed(timeUsed)

    // Calculate score and domain performance
    let correctAnswers = 0
    const domainPerformance = {}
    
    shuffledQuestions.forEach((question) => {
      const isCorrect = selectedAnswers[question.id] === question.correctAnswer
      if (isCorrect) correctAnswers++
      
      // Update spaced repetition for each question
      const questionId = `leadingsafe_${question.id}`;
      const performance = isCorrect ? 1.0 : 0.2; // High performance if correct, low if incorrect
      updateSpacedRepetition(questionId, Math.floor(performance * 5)); // Convert to 0-5 scale
      
      // Track domain performance
      const domain = question.domain || 'General'
      if (!domainPerformance[domain]) {
        domainPerformance[domain] = { correct: 0, total: 0 }
      }
      domainPerformance[domain].total++
      if (isCorrect) domainPerformance[domain].correct++
    })

    const score = Math.round((correctAnswers / shuffledQuestions.length) * 100)

    // Get incorrect questions for smart review
    const incorrectQuestions = shuffledQuestions.filter((question) =>
      selectedAnswers[question.id] !== question.correctAnswer
    )

    // Record the session
    recordSession({
      examType: 'Leading SAFe 6',
      score: score,
      totalQuestions: shuffledQuestions.length,
      correctAnswers: correctAnswers,
      timeUsed: timeUsed,
      timeLimitSec: initialTimer,
      domainPerformance: domainPerformance,
      incorrectQuestions: incorrectQuestions,
      date: new Date().toISOString()
    })

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
          setTimeRemaining(initialTimer)
          setTotalTimeUsed(0)
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
            <div className={styles.examTitle}>Leading SAFe 6 Practice Exam</div>
            <div className={styles.questionCounter}>
              Question {currentQuestion + 1} of {shuffledQuestions.length}
            </div>
          </div>
        
          {hasTimer ? (
            <div className={styles.timerSection}>
              <div className={styles.timer}>
                <span className={styles.timerLabel}>Time Remaining:</span>
                <span className={`${styles.timerValue} ${timeRemaining < 600 ? styles.timerWarning : ''}`}>
                  {formatTime(timeRemaining)}
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
              </div>
            </div>
            
            <h2 className={styles.questionText}>{currentQ.question}</h2>
            
            <div className={styles.optionsContainer}>
              {currentQ.options.map((option, index) => {
                const isSelected = selectedOption === index
                const isCorrect = index === currentQ.correctAnswer
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
                    <span className={styles.optionLetter}>
                      {index + 1}
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
                <button
                  className={styles.explanationToggle}
                  onClick={() => toggleExplanation(currentQ.id)}
                >
                  {isExplanationCollapsed ? '▼' : '▲'} Explanation
                </button>
                
                {!isExplanationCollapsed && (
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

export default LeadingSAFe6ExamQuiz