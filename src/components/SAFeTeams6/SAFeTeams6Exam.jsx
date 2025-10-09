import { useTheme } from '../../contexts/ThemeContext.jsx';
import styles from './SAFeTeams6Exam.module.css'

function SAFeTeams6Exam({ onGoHome, onGoToStudyMaterials, onStartQuiz, numberOfQuestions = 40 }) {
  const { autoShowExplanation } = useTheme();

  return (
    <div className={styles.examContainer}>
      <header className={styles.examHeader}>
        <div className={styles.brand}>
          <div className={styles.logo}>LACE Studio</div>
          <div className={styles.tagline}>SAFe for Teams 6.0 Practice Exam</div>
        </div>
        <button className={styles.homeButton} onClick={onGoHome}>
          ← Back to Home
        </button>
      </header>

      <main className={styles.examContent}>
        <div className={styles.examInfo}>
          <h1>SAFe for Teams 6.0: Team-Level Certification</h1>
          <p className={styles.examDescription}>
            Test your knowledge of team-level SAFe practices, built-in quality, and agile collaboration in scaled environments.
          </p>

          <div className={styles.examDetails}>
            <div className={styles.detailCard}>
              <h3>📝 Questions</h3>
              <p>{numberOfQuestions} practice questions</p>
            </div>
            <div className={styles.detailCard}>
              <h3>⏱️ Time Limit</h3>
              <p>90 minutes</p>
            </div>
            <div className={styles.detailCard}>
              <h3>🎯 Passing Score</h3>
              <p>73% or higher</p>
            </div>
            <div className={styles.detailCard}>
              <h3>🔄 Retakes</h3>
              <p>Unlimited attempts</p>
            </div>
          </div>

          <div className={styles.examDomains}>
            <h2>Exam Domains</h2>
            <div className={styles.domainsGrid}>
              <div className={styles.domainCard}>
                <h3>Team Agility</h3>
                <p>Scrum practices, team collaboration, iteration planning, and agile team dynamics</p>
                <span className={styles.domainWeight}>35%</span>
              </div>
              <div className={styles.domainCard}>
                <h3>Technical Agility</h3>
                <p>Built-in Quality practices, Test-Driven Development, Continuous Integration, and DevOps</p>
                <span className={styles.domainWeight}>35%</span>
              </div>
              <div className={styles.domainCard}>
                <h3>Business Agility</h3>
                <p>Lean thinking, PI Planning participation, value delivery, and customer focus</p>
                <span className={styles.domainWeight}>30%</span>
              </div>
            </div>
          </div>

          <div className={styles.examActions}>
            <button 
              className={`${styles.actionButton} ${styles.primary}`}
              onClick={onStartQuiz}
            >
              🚀 Start Practice Exam
            </button>
            <button 
              className={`${styles.actionButton} ${styles.secondary}`}
              onClick={onGoToStudyMaterials}
            >
              📚 Study Materials
            </button>
          </div>

          <div className={styles.examTips}>
            <h2>Exam Tips</h2>
            <div className={styles.tipsGrid}>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>💡</span>
                <div>
                  <h4>Focus on Team Practices</h4>
                  <p>Pay special attention to Scrum events, team roles, and Built-in Quality practices.</p>
                </div>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>⏰</span>
                <div>
                  <h4>Manage Your Time</h4>
                  <p>You have 90 minutes for {numberOfQuestions} questions. Pace yourself accordingly.</p>
                </div>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>🎯</span>
                <div>
                  <h4>Understand Team Context</h4>
                  <p>Focus on how team practices fit within the larger SAFe framework and value streams.</p>
                </div>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>📖</span>
                <div>
                  <h4>Practice Built-in Quality</h4>
                  <p>Review TDD, CI/CD, and other technical practices that enable continuous value delivery.</p>
                </div>
              </div>
            </div>
          </div>

          {autoShowExplanation && (
            <div className={styles.settingsInfo}>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>ℹ️</span>
                <div>
                  <h4>Auto-Explanation Enabled</h4>
                  <p>Detailed explanations will be automatically shown for each question during the exam.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default SAFeTeams6Exam