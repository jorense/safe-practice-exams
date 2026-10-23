import { useMemo } from 'react'
import styles from './ProgressIndicator.module.css'

const ProgressIndicator = ({
  currentQuestion,
  questions,
  selectedAnswers = {},
  bookmarkedQuestions = new Set(),
  onQuestionClick,
  onBookmarkToggle,
  showQuestionGrid = true,
  className = '',
}) => {
  const bookmarked = bookmarkedQuestions instanceof Set ? bookmarkedQuestions : new Set(bookmarkedQuestions)
  const totalQuestions = questions.length
  const answeredCount = useMemo(
    () => questions.filter(question => selectedAnswers[question.id] !== undefined).length,
    [questions, selectedAnswers],
  )
  const progressPercent = totalQuestions ? (answeredCount / totalQuestions) * 100 : 0
  const current = questions[currentQuestion]
  const currentBookmarked = current ? bookmarked.has(current.id) : false

  return (
    <section className={`${styles.progressContainer} ${className}`} aria-label="Exam progress">
      <div className={styles.progressSection}>
        <div className={styles.progressHeader}>
          <div className={styles.progressStats}>
            <span className={styles.currentProgress}>{answeredCount} of {totalQuestions} answered</span>
            <span className={styles.progressPercent}>{Math.round(progressPercent)}% Complete</span>
          </div>
          {current && (
            <button
              type="button"
              className={`${styles.bookmarkButton} ${currentBookmarked ? styles.bookmarkActive : ''}`}
              onClick={() => onBookmarkToggle?.(currentQuestion)}
              aria-pressed={currentBookmarked}
              aria-label={`${currentBookmarked ? 'Remove bookmark from' : 'Bookmark'} question ${currentQuestion + 1}`}
            >
              <span aria-hidden="true">{currentBookmarked ? '🔖' : '☆'}</span>
              {currentBookmarked ? 'Bookmarked' : 'Bookmark'}
            </button>
          )}
        </div>

        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar} role="progressbar" aria-valuenow={Math.round(progressPercent)} aria-valuemin="0" aria-valuemax="100" aria-label={`${answeredCount} of ${totalQuestions} questions answered`}>
            <div className={styles.progressFill} style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <div className={styles.progressLabels}>
          <span className={styles.progressLabel}>✓ {answeredCount} Answered</span>
          <span className={styles.progressLabel}>🔖 {bookmarked.size} Bookmarked</span>
          <span className={styles.progressLabel}>⏳ {totalQuestions - answeredCount} Remaining</span>
        </div>
      </div>

      {showQuestionGrid && (
        <div className={styles.questionGrid}>
          <div className={styles.gridHeader}>
            <h2 className={styles.gridTitle}>Question navigator</h2>
            <span className={styles.navigatorHint}>Select a number to jump to that question</span>
          </div>
          <div className={styles.gridContainer}>
            {questions.map((question, index) => {
              const isAnswered = selectedAnswers[question.id] !== undefined
              const isBookmarked = bookmarked.has(question.id)
              const isCurrent = currentQuestion === index
              const stateClass = isCurrent ? styles.current : isBookmarked ? styles.bookmarked : isAnswered ? styles.answered : styles.unanswered

              return (
                <button
                  type="button"
                  key={question.id}
                  className={`${styles.questionDot} ${stateClass}`}
                  onClick={() => onQuestionClick?.(index)}
                  aria-current={isCurrent ? 'step' : undefined}
                  aria-label={`Question ${index + 1}${isCurrent ? ', current' : ''}${isAnswered ? ', answered' : ''}${isBookmarked ? ', bookmarked' : ''}`}
                >
                  {index + 1}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}

export default ProgressIndicator
