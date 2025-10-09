import { useState, useEffect, useCallback } from 'react'
import './SAFeTeams6ExamQuiz.module.css'
import { safeTeams6Questions } from './SAFeTeams6Questions'

function SAFeTeams6ExamQuiz({ onGoHome, onGoToExam, numberOfQuestions, darkMode }) {
  // Shuffle and select questions
  const [selectedQuestions, setSelectedQuestions] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showExplanation, setShowExplanation] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)
  const [score, setScore] = useState(0)
  const [flaggedQuestions, setFlaggedQuestions] = useState(new Set())
  const [reviewMode, setReviewMode] = useState(false)
  const [showResults, setShowResults] = useState(false)

  // Initialize quiz questions
  useEffect(() => {
    const shuffled = [...safeTeams6Questions].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, numberOfQuestions)
    setSelectedQuestions(selected)
  }, [numberOfQuestions])

  // Get current question
  const currentQuestion = selectedQuestions[currentQuestionIndex]

  const handleAnswerSelect = (answerIndex) => {
    if (reviewMode) return
    
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: answerIndex
    })
    setShowExplanation(false)
  }

  const handleNext = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setShowExplanation(false)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setShowExplanation(false)
    }
  }

  const handleShowExplanation = () => {
    setShowExplanation(true)
  }

  const handleFlag = () => {
    const newFlagged = new Set(flaggedQuestions)
    if (flaggedQuestions.has(currentQuestionIndex)) {
      newFlagged.delete(currentQuestionIndex)
    } else {
      newFlagged.add(currentQuestionIndex)
    }
    setFlaggedQuestions(newFlagged)
  }

  const handleFinishQuiz = () => {
    let correctCount = 0
    selectedQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctCount++
      }
    })
    setScore(correctCount)
    setQuizComplete(true)
    setShowResults(true)
  }

  const handleReviewAnswers = () => {
    setReviewMode(true)
    setCurrentQuestionIndex(0)
    setShowResults(false)
  }

  const handleRetakeQuiz = () => {
    // Reset all state
    const shuffled = [...safeTeams6Questions].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, numberOfQuestions)
    setSelectedQuestions(selected)
    setCurrentQuestionIndex(0)
    setSelectedAnswers({})
    setShowExplanation(false)
    setQuizComplete(false)
    setScore(0)
    setFlaggedQuestions(new Set())
    setReviewMode(false)
    setShowResults(false)
  }

  const jumpToQuestion = (index) => {
    setCurrentQuestionIndex(index)
    setShowExplanation(false)
    setShowResults(false)
  }

  // Show results view
  if (showResults && quizComplete) {
    const percentage = Math.round((score / selectedQuestions.length) * 100)
    const passed = percentage >= 70

    return (
      <div className={`quiz-container ${darkMode ? 'dark' : ''}`}>
        <header className="quiz-header">
          <div className="header-content">
            <h1>SAFe for Teams 6.0 Practice Exam Results</h1>
            <button onClick={onGoToExam} className="nav-button">← Back to Exam</button>
          </div>
        </header>

        <main className="results-container">
          <div className="results-summary">
            <div className={`score-display ${passed ? 'passed' : 'failed'}`}>
              <div className="score-circle">
                <span className="score-number">{percentage}%</span>
                <span className="score-label">{passed ? 'PASSED' : 'NEEDS IMPROVEMENT'}</span>
              </div>
            </div>

            <div className="score-details">
              <div className="detail-item">
                <span className="label">Correct Answers:</span>
                <span className="value">{score} / {selectedQuestions.length}</span>
              </div>
              <div className="detail-item">
                <span className="label">Percentage:</span>
                <span className="value">{percentage}%</span>
              </div>
              <div className="detail-item">
                <span className="label">Passing Score:</span>
                <span className="value">70%</span>
              </div>
            </div>

            <div className="results-actions">
              <button onClick={handleReviewAnswers} className="review-button">
                📝 Review Answers
              </button>
              <button onClick={handleRetakeQuiz} className="retake-button">
                🔄 Retake Quiz
              </button>
              <button onClick={onGoHome} className="home-button">
                🏠 Go Home
              </button>
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (!currentQuestion) {
    return (
      <div className={`quiz-container ${darkMode ? 'dark' : ''}`}>
        <div className="loading">Loading questions...</div>
      </div>
    )
  }

  return (
    <div className={`quiz-container ${darkMode ? 'dark' : ''}`}>
      <header className="quiz-header">
        <div className="header-content">
          <div className="quiz-progress">
            <span>Question {currentQuestionIndex + 1} of {selectedQuestions.length}</span>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentQuestionIndex + 1) / selectedQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <button onClick={onGoToExam} className="nav-button">← Exit Quiz</button>
        </div>
      </header>

      <aside className="question-navigator">
        <h3>Questions</h3>
        <div className="question-grid">
          {selectedQuestions.map((_, index) => (
            <button
              key={index}
              onClick={() => jumpToQuestion(index)}
              className={`question-nav-button ${
                index === currentQuestionIndex ? 'current' : ''
              } ${
                selectedAnswers.hasOwnProperty(index) ? 'answered' : ''
              } ${
                flaggedQuestions.has(index) ? 'flagged' : ''
              } ${
                reviewMode && selectedAnswers[index] === selectedQuestions[index].correctAnswer ? 'correct' : ''
              } ${
                reviewMode && selectedAnswers.hasOwnProperty(index) && selectedAnswers[index] !== selectedQuestions[index].correctAnswer ? 'incorrect' : ''
              }`}
            >
              {index + 1}
              {flaggedQuestions.has(index) && <span className="flag-indicator">🚩</span>}
            </button>
          ))}
        </div>
      </aside>

      <main className="quiz-main">
        <div className="question-container">
          <div className="question-header">
            <div className="question-meta">
              <span className="domain-tag">{currentQuestion.domain}</span>
              <span className="difficulty-tag">{currentQuestion.difficulty}</span>
              <button 
                onClick={handleFlag}
                className={`flag-button ${flaggedQuestions.has(currentQuestionIndex) ? 'flagged' : ''}`}
              >
                🚩 {flaggedQuestions.has(currentQuestionIndex) ? 'Unflag' : 'Flag'}
              </button>
            </div>
          </div>

          <div className="question-text">
            <h2>{currentQuestion.question}</h2>
          </div>

          <div className="answers-container">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={reviewMode}
                className={`answer-option ${
                  selectedAnswers[currentQuestionIndex] === index ? 'selected' : ''
                } ${
                  showExplanation || reviewMode ? (
                    index === currentQuestion.correctAnswer ? 'correct' : 
                    selectedAnswers[currentQuestionIndex] === index ? 'incorrect' : ''
                  ) : ''
                }`}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>

          {(showExplanation || reviewMode) && (
            <div className="explanation-container">
              <h3>Explanation:</h3>
              <p>{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="quiz-controls">
            <div className="navigation-controls">
              <button 
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="nav-control"
              >
                ← Previous
              </button>
              
              {!reviewMode && (
                <button 
                  onClick={handleShowExplanation}
                  disabled={!selectedAnswers.hasOwnProperty(currentQuestionIndex) || showExplanation}
                  className="explanation-button"
                >
                  Show Explanation
                </button>
              )}
              
              <button 
                onClick={handleNext}
                disabled={currentQuestionIndex === selectedQuestions.length - 1}
                className="nav-control"
              >
                Next →
              </button>
            </div>

            {!reviewMode && currentQuestionIndex === selectedQuestions.length - 1 && (
              <button 
                onClick={handleFinishQuiz}
                className="finish-button"
                disabled={Object.keys(selectedAnswers).length < selectedQuestions.length}
              >
                Finish Quiz
              </button>
            )}

            {reviewMode && (
              <div className="review-controls">
                <button onClick={() => setShowResults(true)} className="back-to-results">
                  ← Back to Results
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default SAFeTeams6ExamQuiz