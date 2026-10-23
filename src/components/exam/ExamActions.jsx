import { useState } from 'react'
import styles from './ExamActions.module.css'

export default function ExamActions({
  onExit,
  onSubmit,
  answeredCount,
  totalQuestions,
  backClassName = '',
  submitClassName = '',
}) {
  const [pendingAction, setPendingAction] = useState(null)
  const unansweredCount = totalQuestions - answeredCount
  const isSubmit = pendingAction === 'submit'

  const confirmAction = () => {
    const action = pendingAction
    setPendingAction(null)
    if (action === 'submit') onSubmit()
    if (action === 'exit') onExit()
  }

  return (
    <>
      <button type="button" onClick={() => setPendingAction('exit')} className={backClassName} data-testid="quiz-back-home">
        ← Back to Home
      </button>
      <button type="button" onClick={() => setPendingAction('submit')} className={submitClassName} disabled={answeredCount === 0} data-testid="quiz-submit">
        Submit Exam ({answeredCount}/{totalQuestions})
      </button>

      {pendingAction && (
        <div className={styles.overlay} role="presentation" onMouseDown={() => setPendingAction(null)}>
          <div className={styles.dialog} role="alertdialog" aria-modal="true" aria-labelledby="exam-action-title" aria-describedby="exam-action-description" onMouseDown={event => event.stopPropagation()}>
            <h2 id="exam-action-title">{isSubmit ? 'Submit this exam?' : 'Leave this exam?'}</h2>
            <p id="exam-action-description">
              {isSubmit
                ? unansweredCount > 0
                  ? `${unansweredCount} question${unansweredCount === 1 ? ' is' : 's are'} still unanswered. You cannot change answers after submission.`
                  : 'You have answered every question. You cannot change answers after submission.'
                : 'Your current session is saved automatically so you can recover it later.'}
            </p>
            <div className={styles.actions}>
              <button type="button" className={styles.cancelButton} onClick={() => setPendingAction(null)} autoFocus>Continue exam</button>
              <button type="button" className={isSubmit ? styles.submitButton : styles.leaveButton} onClick={confirmAction}>
                {isSubmit ? 'Submit exam' : 'Leave exam'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
