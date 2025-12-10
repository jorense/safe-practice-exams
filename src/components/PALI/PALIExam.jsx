import { useTheme } from '../../contexts/ThemeContext.jsx';
import { getExamStats, resetExamHistory } from '../../utils/questionHistory.js';
import { paliQuestions } from './PALIQuestions.js';
import styles from './PALIExam.module.css'

function PALIExam({ 
  onGoHome, 
  onGoToStudyMaterials, 
  onStartQuiz, 
  numberOfQuestions = 30,
  autoShowExplanation = false,
  onNumberOfQuestionsChange,
  onAutoShowExplanationChange,
  examMode = 'exam',
  onExamModeChange,
  includeSeenQuestions = true,
  onIncludeSeenQuestionsChange
}) {
  const { theme } = useTheme();
  
  // Get exam statistics
  const examStats = getExamStats('pali', paliQuestions.length);

  const handleResetHistory = () => {
    if (window.confirm('Are you sure you want to reset your practice history? This will clear all tracked questions and cannot be undone.')) {
      resetExamHistory('pali');
      window.location.reload(); // Reload to update stats
    }
  };

  // Calculate timer info for display
  const getTimerInfo = () => {
    if (numberOfQuestions <= 30) {
      return {
        duration: "60 minutes",
        mode: "Certification Mode",
        description: "Matches real PAL-I exam timing"
      }
    } else if (numberOfQuestions <= 50) {
      const minutes = Math.round((numberOfQuestions * 120) / 60)
      return {
        duration: `${minutes} minutes`,
        mode: "Practice Mode", 
        description: "2 minutes per question"
      }
    } else {
      return {
        duration: "Unlimited",
        mode: "Study Mode",
        description: "No time pressure"
      }
    }
  }

  const timerInfo = getTimerInfo();

  return (
    <div className={styles.examContainer}>
      <header className={styles.examHeader}>
        <div className={styles.brand}>
          <div className={styles.logo}>LACE Studio</div>
          <div className={styles.tagline}>Professional Agile Leadership I Practice Exam</div>
        </div>
        <button className={styles.homeButton} onClick={onGoHome}>
          ← Back to Home
        </button>
      </header>

      <main className={styles.examContent}>
        <div className={styles.examInfo}>
          <h1>Professional Agile Leadership I: Agile Leadership Essentials</h1>
          <p className={styles.examDescription}>
            Validate your understanding of Agile leadership mindset, culture transformation, empiricism, and creating conditions for high-performing teams.
          </p>

          <div className={styles.examDetails}>
            <div className={styles.detailCard}>
              <h3>📝 Questions</h3>
              <p>{numberOfQuestions} practice questions</p>
            </div>
            <div className={styles.detailCard}>
              <h3>⏱️ {timerInfo.mode}</h3>
              <p>{timerInfo.duration}</p>
              <small style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                {timerInfo.description}
              </small>
            </div>
            <div className={styles.detailCard}>
              <h3>🎯 Passing Score</h3>
              <p>85% or higher</p>
            </div>
            <div className={styles.detailCard}>
              <h3>🔄 Retakes</h3>
              <p>Unlimited attempts</p>
            </div>
          </div>

          {/* Exam Settings Panel */}
          <div className={styles.examSettings}>
            <h2>⚙️ Exam Settings</h2>
            
            <div className={styles.settingGroup}>
              <label htmlFor="questionCount">
                Number of Questions:
                <span className={styles.settingValue}>{numberOfQuestions}</span>
              </label>
              <input
                id="questionCount"
                type="range"
                min="10"
                max={paliQuestions.length}
                step="5"
                value={numberOfQuestions}
                onChange={(e) => onNumberOfQuestionsChange(parseInt(e.target.value))}
                className={styles.slider}
              />
              <div className={styles.rangeLabels}>
                <span>10</span>
                <span>{paliQuestions.length}</span>
              </div>
            </div>

            <div className={styles.settingGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={autoShowExplanation}
                  onChange={(e) => onAutoShowExplanationChange(e.target.checked)}
                  className={styles.checkbox}
                />
                <span>Auto-show explanations after answering</span>
              </label>
              <p className={styles.settingDescription}>
                When enabled, explanations appear automatically after each answer
              </p>
            </div>

            <div className={styles.settingGroup}>
              <label>Exam Mode:</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="examMode"
                    value="exam"
                    checked={examMode === 'exam'}
                    onChange={(e) => onExamModeChange(e.target.value)}
                  />
                  <span>Exam Mode</span>
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="examMode"
                    value="practice"
                    checked={examMode === 'practice'}
                    onChange={(e) => onExamModeChange(e.target.value)}
                  />
                  <span>Practice Mode</span>
                </label>
              </div>
              <p className={styles.settingDescription}>
                {examMode === 'exam' 
                  ? 'Exam mode: Timed, review at the end'
                  : 'Practice mode: Untimed, immediate feedback'}
              </p>
            </div>

            <div className={styles.settingGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={includeSeenQuestions}
                  onChange={(e) => onIncludeSeenQuestionsChange(e.target.checked)}
                  className={styles.checkbox}
                />
                <span>Include previously seen questions</span>
              </label>
              <p className={styles.settingDescription}>
                When disabled, you'll only see questions you haven't encountered yet
              </p>
            </div>
          </div>

          {/* Practice History Stats */}
          <div className={styles.statsPanel}>
            <h2>📊 Your Practice History</h2>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>{examStats.totalSeen}</div>
                <div className={styles.statLabel}>Questions Seen</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>{examStats.percentageSeen}%</div>
                <div className={styles.statLabel}>Coverage</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>{examStats.unseenCount}</div>
                <div className={styles.statLabel}>Questions Remaining</div>
              </div>
            </div>
            <button 
              onClick={handleResetHistory}
              className={styles.resetButton}
            >
              Reset Practice History
            </button>
          </div>

          <div className={styles.examActions}>
            <button className={styles.startButton} onClick={onStartQuiz}>
              Start Practice Exam →
            </button>
            {onGoToStudyMaterials && (
              <button className={styles.studyButton} onClick={onGoToStudyMaterials}>
                📚 Study Materials
              </button>
            )}
          </div>
        </div>

        <aside className={styles.examSidebar}>
          <div className={styles.infoCard}>
            <h3>About PAL-I</h3>
            <p>
              The Professional Agile Leadership - Essentials (PAL-I) certification validates your understanding of Agile leadership mindset and how leaders can support organizational agility.
            </p>
          </div>

          <div className={styles.infoCard}>
            <h3>Focus Areas</h3>
            <ul className={styles.topicList}>
              <li>Agile Leadership Mindset</li>
              <li>Creating High-Performing Teams</li>
              <li>Empiricism and Agility</li>
              <li>Agile Culture</li>
              <li>Organizational Design</li>
              <li>Value-Driven Delivery</li>
              <li>Leading Change</li>
              <li>Systems Thinking</li>
            </ul>
          </div>

          <div className={styles.infoCard}>
            <h3>Real Exam Details</h3>
            <ul className={styles.examDetailsList}>
              <li><strong>Questions:</strong> 36 multiple choice</li>
              <li><strong>Duration:</strong> 60 minutes</li>
              <li><strong>Passing:</strong> 85% (31 correct)</li>
              <li><strong>Language:</strong> English only</li>
              <li><strong>Format:</strong> Online, closed book</li>
            </ul>
          </div>

          <div className={styles.infoCard}>
            <h3>💡 Study Tips</h3>
            <ul className={styles.tipsList}>
              <li>Focus on leadership mindset over frameworks</li>
              <li>Understand empiricism in leadership context</li>
              <li>Study organizational design for agility</li>
              <li>Practice with real-world scenarios</li>
              <li>Review Scrum.org PAL reading list</li>
            </ul>
          </div>
        </aside>
      </main>

      <footer className={styles.examFooter}>
        <p>
          This is an unofficial practice exam. For official certification, visit{' '}
          <a href="https://www.scrum.org/assessments/professional-agile-leadership-certification" target="_blank" rel="noopener noreferrer">
            Scrum.org PAL-I
          </a>
        </p>
      </footer>
    </div>
  );
}

export default PALIExam;
