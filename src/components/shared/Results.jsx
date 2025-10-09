import { useMemo, useState } from 'react'
import styles from './Results.module.css'

export default function Results({
  title = 'Exam Results',
  questions,
  selectedAnswers,
  totalTimeSec,
  timeLimitSec = 5400,
  passThreshold = 77,
  onGoHome,
  onStudyMore,
  onRetakeIncorrect,
}) {
  const [showDetails, setShowDetails] = useState(false)

  const attempt = useMemo(() => {
    const total = questions.length
    let correct = 0
    const incorrectQuestions = []
    const domainResults = {}
    
    const perQuestion = questions.map(q => {
      const selected = selectedAnswers[q.id]
      const isCorrect = selected === q.correctAnswer
      if (isCorrect) {
        correct += 1
      } else {
        incorrectQuestions.push(q)
      }

      // Track domain performance
      if (!domainResults[q.domain]) {
        domainResults[q.domain] = { correct: 0, total: 0 }
      }
      domainResults[q.domain].total += 1
      if (isCorrect) {
        domainResults[q.domain].correct += 1
      }

      return {
        question: q,
        selected,
        isCorrect,
        selectedAnswer: selected !== undefined ? q.options[selected] : 'Not answered',
        correctAnswer: q.options[q.correctAnswer]
      }
    })

    const score = Math.round((correct / total) * 100)
    const passed = score >= passThreshold
    const timeUsed = totalTimeSec
    const timeUsedFormatted = formatTime(timeUsed)

    return {
      total,
      correct,
      incorrect: total - correct,
      score,
      passed,
      timeUsed,
      timeUsedFormatted,
      perQuestion,
      incorrectQuestions,
      domainResults
    }
  }, [questions, selectedAnswers, passThreshold, totalTimeSec])

  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className={styles.resultsContainer}>
      <header className={styles.resultsHeader}>
        <div className={styles.resultsHeaderContent}>
          <div className={styles.brand}>
            <div className={styles.logo}>LACE Studio</div>
            <div className={styles.tagline}>Practice Exam Results</div>
          </div>
          <button onClick={onGoHome} className={styles.homeButton}>
            ← Back to Home
          </button>
        </div>
      </header>

      <main className={styles.resultsContent}>
        <div className={styles.resultsCard}>
          <div className={styles.scoreSection}>
            <h1>{title}</h1>
            
            <div className={styles.scoreDisplay}>
              <div className={`${styles.scoreCircle} ${attempt.passed ? styles.passed : styles.failed}`}>
                <div className={styles.scoreNumber}>{attempt.score}%</div>
                <div className={styles.scoreLabel}>
                  {attempt.passed ? 'PASSED' : 'FAILED'}
                </div>
              </div>
            </div>

            <div className={styles.scoreDetails}>
              <div className={styles.scoreItem}>
                <span className={styles.scoreValue}>{attempt.correct}</span>
                <span className={styles.scoreText}>Correct</span>
              </div>
              <div className={styles.scoreItem}>
                <span className={styles.scoreValue}>{attempt.incorrect}</span>
                <span className={styles.scoreText}>Incorrect</span>
              </div>
              <div className={styles.scoreItem}>
                <span className={styles.scoreValue}>{attempt.total}</span>
                <span className={styles.scoreText}>Total</span>
              </div>
              <div className={styles.scoreItem}>
                <span className={styles.scoreValue}>{attempt.timeUsedFormatted}</span>
                <span className={styles.scoreText}>Time Used</span>
              </div>
            </div>
          </div>

          <div className={styles.domainSection}>
            <h2>Performance by Domain</h2>
            <div className={styles.domainGrid}>
              {Object.entries(attempt.domainResults).map(([domain, result]) => {
                const percentage = Math.round((result.correct / result.total) * 100)
                return (
                  <div key={domain} className={styles.domainCard}>
                    <h3>{domain}</h3>
                    <div className={styles.domainScore}>
                      <span className={styles.domainPercentage}>{percentage}%</span>
                      <span className={styles.domainFraction}>
                        ({result.correct}/{result.total})
                      </span>
                    </div>
                    <div className={styles.domainBar}>
                      <div 
                        className={styles.domainFill}
                        style={{ 
                          width: `${percentage}%`,
                          background: percentage >= passThreshold ? 'var(--success-color)' : 'var(--danger-color)'
                        }}
                      ></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className={styles.actionsSection}>
            <h2>What's Next?</h2>
            <div className={styles.actionButtons}>
              <button onClick={onStudyMore} className={styles.actionButton}>
                📚 Study Materials
              </button>
              {attempt.incorrectQuestions.length > 0 && (
                <button 
                  onClick={() => onRetakeIncorrect(attempt.incorrectQuestions.map(q => q.id))} 
                  className={styles.actionButton}
                >
                  🔄 Retake Exam
                </button>
              )}
              <button onClick={onGoHome} className={styles.actionButton}>
                🏠 Back to Home
              </button>
            </div>

            <button 
              onClick={() => setShowDetails(!showDetails)}
              className={styles.detailsToggle}
            >
              {showDetails ? '▲' : '▼'} {showDetails ? 'Hide' : 'Show'} Detailed Results
            </button>
          </div>

          {showDetails && (
            <div className={styles.detailsSection}>
              <h3>Question-by-Question Results</h3>
              <div className={styles.questionResults}>
                {attempt.perQuestion.map((result, index) => (
                  <div 
                    key={result.question.id} 
                    className={`${styles.questionResult} ${result.isCorrect ? styles.correct : styles.incorrect}`}
                  >
                    <div className={styles.questionHeader}>
                      <span className={styles.questionNumber}>Q{index + 1}</span>
                      <span className={`${styles.resultIcon} ${result.isCorrect ? styles.correctIcon : styles.incorrectIcon}`}>
                        {result.isCorrect ? '✓' : '✗'}
                      </span>
                    </div>
                    
                    <div className={styles.questionContent}>
                      <p className={styles.questionText}>{result.question.question}</p>
                      
                      <div className={styles.answerComparison}>
                        <div className={styles.answerItem}>
                          <span className={styles.answerLabel}>Your answer:</span>
                          <span className={`${styles.answerText} ${!result.isCorrect ? styles.wrongAnswer : ''}`}>
                            {result.selectedAnswer}
                          </span>
                        </div>
                        
                        {!result.isCorrect && (
                          <div className={styles.answerItem}>
                            <span className={styles.answerLabel}>Correct answer:</span>
                            <span className={`${styles.answerText} ${styles.rightAnswer}`}>
                              {result.correctAnswer}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className={styles.explanation}>
                        <h4>Explanation:</h4>
                        <p>{result.question.explanation}</p>
                      </div>

                      <div className={styles.questionMeta}>
                        <span className={styles.domain}>{result.question.domain}</span>
                        <span className={styles.difficulty}>{result.question.difficulty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}