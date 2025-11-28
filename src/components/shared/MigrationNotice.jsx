import { useState, useEffect } from 'react'
import styles from './MigrationNotice.module.css'

function MigrationNotice() {
  const [showNotice, setShowNotice] = useState(false)

  useEffect(() => {
    // Check if user has existing history but hasn't been notified about the new feature
    const hasHistory = localStorage.getItem('practice-exam-history')
    const hasSeenNotice = localStorage.getItem('question-history-migration-notice')
    
    if (hasHistory && !hasSeenNotice) {
      setShowNotice(true)
    }
  }, [])

  const handleDismiss = () => {
    localStorage.setItem('question-history-migration-notice', 'true')
    setShowNotice(false)
  }

  if (!showNotice) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>🎉 New Feature: Smart Question Tracking</h2>
        </div>
        
        <div className={styles.content}>
          <p>
            We've added intelligent question tracking to enhance your practice experience:
          </p>
          
          <ul className={styles.features}>
            <li>
              <strong>✨ Smart Selection:</strong> Prioritizes questions you haven't seen yet
            </li>
            <li>
              <strong>📊 Progress Stats:</strong> Track practiced questions, remaining questions, and mastery percentage
            </li>
            <li>
              <strong>🔄 Visual Badges:</strong> Questions marked as "New" or "Seen" so you always know
            </li>
            <li>
              <strong>⚙️ Flexible Control:</strong> Toggle to include or exclude previously seen questions
            </li>
          </ul>

          <div className={styles.infoBox}>
            <h3>📌 What This Means for You:</h3>
            <p>
              <strong>Your practice history has been preserved!</strong> By default, you'll continue to see 
              all questions (including ones you've already practiced) to maintain your current experience.
            </p>
            <p>
              <strong>Want to focus only on NEW questions?</strong> Go to any exam page, look for the 
              <strong> "Question History"</strong> settings card, and uncheck 
              <strong> "Include previously seen questions"</strong> to see only unseen questions.
            </p>
            <p className={styles.highlight}>
              💡 <strong>Tip:</strong> The stats will show you how many questions you've practiced and your mastery percentage!
            </p>
          </div>

          <div className={styles.actions}>
            <button onClick={handleDismiss} className={styles.primaryButton}>
              Got it, thanks!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MigrationNotice
