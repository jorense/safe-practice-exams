import { useTheme } from '../../contexts/ThemeContext.jsx';
import styles from './LeadingSAFe6Exam.module.css'
import DataPersistenceNotice from '../autosave/DataPersistenceNotice.jsx'

function LeadingSAFe6Exam({ 
  onGoHome, 
  onGoToStudyMaterials, 
  onStartQuiz, 
  numberOfQuestions = 45,
  autoShowExplanation = false,
  onNumberOfQuestionsChange,
  onAutoShowExplanationChange,
  examMode = 'exam',
  onExamModeChange
}) {
  const { theme } = useTheme();

  // Calculate timer information based on question count
  const getTimerInfo = () => {
    if (numberOfQuestions <= 45) {
      return "90 minutes"
    } else if (numberOfQuestions <= 100) {
      return `${numberOfQuestions * 2} minutes`
    } else {
      return "Unlimited time"
    }
  }

  return (
    <div className={styles.examContainer}>
  <header className={styles.examHeader} data-testid="leading-safe-exam-header">
        <div className={styles.brand}>
          <div className={styles.logo}>LACE Studio</div>
          <div className={styles.tagline}>Leading SAFe 6 Practice Exam</div>
        </div>
        <button className={styles.homeButton} onClick={onGoHome}>
          ← Back to Home
        </button>
      </header>

  <main className={styles.examContent} data-testid="leading-safe-exam-settings">
        {/* Temporary cross-browser support notice (Firefox / Safari) */}
        {typeof navigator !== 'undefined' && /firefox|safari/i.test(navigator.userAgent) && !/chrome|edg/i.test(navigator.userAgent) && (
          <div style={{
            background: '#fff3cd',
            color: '#7a5b00',
            border: '1px solid #f7d98b',
            padding: '0.85rem 1rem',
            borderRadius: '6px',
            marginBottom: '1.25rem',
            fontSize: '0.9rem',
            lineHeight: 1.4
          }} data-testid="browser-support-warning">
            <strong>Browser Notice:</strong> Full exam stability is currently optimized for Chrome / Edge. 
            You are using a Firefox/Safari-based browser; if you experience an unexpected interruption after starting the quiz, please try again in a Chromium browser while we finalize a cross‑browser fix.
          </div>
        )}
        <div className={styles.examInfo}>
          <h1>Leading SAFe 6.0: Scaled Agile Framework</h1>
          <p className={styles.examDescription}>
            Test your knowledge of the Scaled Agile Framework (SAFe) 6.0 and Lean-Agile leadership principles.
          </p>

          <div className={styles.examDetails} data-testid="leading-safe-exam-details">
            <div className={styles.detailCard}>
              <h3>📝 Questions</h3>
              <p>{numberOfQuestions} practice questions</p>
            </div>
            <div className={styles.detailCard}>
              <h3>⏱️ Time Limit</h3>
              <p>{getTimerInfo()}</p>
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

          {/* Exam Settings Panel */}
          <div className={styles.examSettings} data-testid="leading-safe-exam-config">
            <h2>⚙️ Exam Settings</h2>
            <div className={styles.settingsGrid}>
              <div className={styles.settingCard}>
                <h4>Number of Questions</h4>
                <select 
                  value={numberOfQuestions} 
                  data-testid="leading-safe-questions-select"
                  onChange={(e) => onNumberOfQuestionsChange && onNumberOfQuestionsChange(Number(e.target.value))}
                  className={styles.settingSelect}
                >
                  <option value={10}>10 Questions</option>
                  <option value={20}>20 Questions</option>
                  <option value={40}>40 Questions</option>
                  <option value={45}>45 Questions (Default)</option>
                  <option value={50}>50 Questions</option>
                  <option value={100}>100 Questions</option>
                  <option value={200}>200 Questions (Complete Bank)</option>
                </select>
                <p className={styles.settingDescription}>
                  Choose how many questions you want to practice with
                </p>
              </div>
              <div className={styles.settingCard}>
                <h4>Exam Mode</h4>
                <select 
                  value={examMode} 
                  data-testid="leading-safe-exam-mode-select"
                  onChange={(e) => onExamModeChange && onExamModeChange(e.target.value)}
                  className={styles.settingSelect}
                >
                  <option value="exam">🎓 Exam Mode (Realistic Simulation)</option>
                  <option value="practice">📚 Practice Mode (Instant Feedback)</option>
                </select>
                <p className={styles.settingDescription}>
                  {examMode === 'exam' 
                    ? 'Single-select questions only. No feedback until you check your answer.' 
                    : 'Instant feedback when you select an answer. Explanation shown immediately for enhanced learning.'}
                </p>
              </div>
              <div className={styles.settingCard}>
                <h4>Auto-Show Explanations {examMode === 'practice' && <span style={{color: 'var(--text-secondary)', fontSize: '0.875rem'}}>(Exam Mode only)</span>}</h4>
                <label className={styles.checkboxLabel}>
                  <input 
                    type="checkbox" 
                    checked={autoShowExplanation}
                    data-testid="leading-safe-auto-explanation-checkbox"
                    onChange={(e) => onAutoShowExplanationChange && onAutoShowExplanationChange(e.target.checked)}
                    className={styles.settingCheckbox}
                    disabled={examMode === 'practice'}
                  />
                  <span className={styles.checkboxText}>
                    Automatically expand explanations in Exam Mode
                  </span>
                </label>
                <p className={styles.settingDescription}>
                  {examMode === 'practice' 
                    ? 'Practice Mode always shows explanations automatically' 
                    : 'When enabled, explanations expand automatically after checking your answer'}
                </p>
              </div>
              {/* 4th tile: Local progress / persistence notice */}
              <div className={styles.settingCard} data-testid="leading-safe-storage-tile">
                <h4>Local Progress Storage</h4>
                <p className={styles.settingDescription} style={{marginBottom:'0.75rem'}}>
                  Progress & results are saved only in this browser (no cloud sync). Clearing site data / using private mode erases them.
                </p>
                <DataPersistenceNotice />
              </div>
            </div>
          </div>

          <div className={styles.examDomains} data-testid="leading-safe-exam-domains">
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

          <div className={styles.examActions} data-testid="leading-safe-exam-actions">
            <button 
              className={`${styles.actionButton} ${styles.primary}`}
              data-testid="leading-safe-start-quiz"
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

          <div className={styles.examTips} data-testid="leading-safe-exam-tips">
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
                  <p>
                    {numberOfQuestions <= 45 
                      ? `You have 90 minutes for ${numberOfQuestions} questions. This matches the real exam format.`
                      : numberOfQuestions <= 100 
                      ? `You have ${numberOfQuestions * 2} minutes for ${numberOfQuestions} questions (2 minutes per question).`
                      : `No time limit for ${numberOfQuestions} questions. Take your time to learn thoroughly.`
                    }
                  </p>
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