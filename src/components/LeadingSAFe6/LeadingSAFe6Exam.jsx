import { useTheme } from '../../contexts/ThemeContext.jsx';
import styles from './LeadingSAFe6Exam.module.css'

function LeadingSAFe6Exam({ onGoHome, onGoToStudyMaterials, onStartQuiz, numberOfQuestions = 40 }) {
  const { autoShowExplanation } = useTheme();

  return (
    <div className={styles.examContainer}>
      <header className={styles.examHeader}>
        <div className={styles.brand}>
          <div className={styles.logo}>LACE Studio</div>
          <div className={styles.tagline}>Leading SAFe 6 Practice Exam</div>
        </div>
        <button className={styles.homeButton} onClick={onGoHome}>
          ← Back to Home
        </button>
      </header>

      <main className={styles.examContent}>
        <div className={styles.examInfo}>
          <h1>Leading SAFe 6.0: Scaled Agile Framework</h1>
          <p className={styles.examDescription}>
            Test your knowledge of the Scaled Agile Framework (SAFe) 6.0 and Lean-Agile leadership principles.
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
              <p>77% or higher</p>
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
                <h3>Applying SAFe Principles</h3>
                <p>Understanding and implementing the 10 SAFe principles in Lean-Agile environments</p>
                <span className={styles.domainWeight}>20%</span>
              </div>
              <div className={styles.domainCard}>
                <h3>Supporting Program Execution</h3>
                <p>Leading Program Increment planning, execution, and continuous improvement</p>
                <span className={styles.domainWeight}>19%</span>
              </div>
              <div className={styles.domainCard}>
                <h3>Supporting Team Execution</h3>
                <p>Coaching Agile teams and facilitating team events and processes</p>
                <span className={styles.domainWeight}>16%</span>
              </div>
              <div className={styles.domainCard}>
                <h3>Building High-Performing Teams</h3>
                <p>Developing Agile teams and fostering a culture of continuous learning</p>
                <span className={styles.domainWeight}>15%</span>
              </div>
              <div className={styles.domainCard}>
                <h3>Establishing Team Agility</h3>
                <p>Implementing Scrum, Kanban, and XP practices within SAFe</p>
                <span className={styles.domainWeight}>13%</span>
              </div>
              <div className={styles.domainCard}>
                <h3>Planning Program Increments</h3>
                <p>Facilitating PI planning events and managing dependencies</p>
                <span className={styles.domainWeight}>12%</span>
              </div>
              <div className={styles.domainCard}>
                <h3>Enabling Organizational Change</h3>
                <p>Leading transformation initiatives and organizational change management</p>
                <span className={styles.domainWeight}>5%</span>
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
                  <h4>Read Questions Carefully</h4>
                  <p>Take time to understand what each question is asking before selecting your answer.</p>
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
                  <h4>Focus on SAFe Principles</h4>
                  <p>Many questions test your understanding of the core SAFe principles and values.</p>
                </div>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>📖</span>
                <div>
                  <h4>Use Study Materials</h4>
                  <p>Review the study materials before taking the exam for better preparation.</p>
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

export default LeadingSAFe6Exam