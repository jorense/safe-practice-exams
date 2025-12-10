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
            <div className={styles.settingsGrid}>
              <div className={styles.settingCard}>
                <h4>Number of Questions</h4>
                <select 
                  value={numberOfQuestions} 
                  onChange={(e) => onNumberOfQuestionsChange && onNumberOfQuestionsChange(Number(e.target.value))}
                  className={styles.settingSelect}
                >
                  <option value={10}>10 Questions</option>
                  <option value={20}>20 Questions</option>
                  <option value={30}>30 Questions (Certification)</option>
                  <option value={50}>50 Questions</option>
                  <option value={75}>75 Questions</option>
                  <option value={100}>100 Questions</option>
                  <option value={150}>150 Questions</option>
                  <option value={200}>200 Questions</option>
                  <option value={300}>300 Questions (All)</option>
                </select>
                <p className={styles.settingDescription}>
                  Choose how many questions you want to practice with
                </p>
              </div>
              <div className={styles.settingCard}>
                <h4>Exam Mode</h4>
                <select 
                  value={examMode} 
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
              
              {/* Question History Settings */}
              <div className={styles.settingCard}>
                <h4>Question History</h4>
                <label className={styles.checkboxLabel}>
                  <input 
                    type="checkbox" 
                    checked={includeSeenQuestions}
                    onChange={(e) => onIncludeSeenQuestionsChange && onIncludeSeenQuestionsChange(e.target.checked)}
                    className={styles.settingCheckbox}
                  />
                  <span className={styles.checkboxText}>
                    Include previously seen questions
                  </span>
                </label>
                <p className={styles.settingDescription}>
                  {includeSeenQuestions 
                    ? 'All questions will be available, including ones you\'ve practiced before' 
                    : 'Only show questions you haven\'t seen yet'}
                </p>
                <div className={styles.historyStats}>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>{examStats.totalSeen}</span>
                    <span className={styles.statLabel}>Practiced</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>{examStats.totalRemaining}</span>
                    <span className={styles.statLabel}>Remaining</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>{examStats.masteryPercentage}%</span>
                    <span className={styles.statLabel}>Mastery</span>
                  </div>
                </div>
                {examStats.totalSeen > 0 && (
                  <button 
                    onClick={handleResetHistory}
                    className={styles.resetButton}
                  >
                    🔄 Reset Practice History
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className={styles.examDomains}>
            <h2>Exam Domains</h2>
            <div className={styles.domainsGrid}>
              <div className={styles.domainCard}>
                <h3>Agile Leadership Mindset</h3>
                <p>Understanding servant leadership, coaching mindset, and creating conditions for success</p>
                <span className={styles.domainWeight}>25%</span>
              </div>
              <div className={styles.domainCard}>
                <h3>Creating High-Performing Teams</h3>
                <p>Team dynamics, psychological safety, self-organization, and continuous improvement</p>
                <span className={styles.domainWeight}>20%</span>
              </div>
              <div className={styles.domainCard}>
                <h3>Empiricism & Agile Culture</h3>
                <p>Transparency, inspection, adaptation, and fostering organizational agility</p>
                <span className={styles.domainWeight}>20%</span>
              </div>
              <div className={styles.domainCard}>
                <h3>Organizational Design & Change</h3>
                <p>Systems thinking, value-driven delivery, leading transformation, and stakeholder management</p>
                <span className={styles.domainWeight}>35%</span>
              </div>
            </div>
          </div>

          <div className={styles.examActions}>
            <button 
              className={`${styles.actionButton} ${styles.primary}`}
              data-testid="pali-start-quiz"
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
                  <h4>Focus on Leadership Mindset</h4>
                  <p>PAL-I emphasizes leadership mindset over frameworks. Understand how leaders support organizational agility.</p>
                </div>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>⏰</span>
                <div>
                  <h4>Manage Your Time</h4>
                  <p>
                    {timerInfo.duration === "Unlimited" 
                      ? "No time limit - take your time to study each question thoroughly."
                      : `You have ${timerInfo.duration} for ${numberOfQuestions} questions. ${timerInfo.description}.`
                    }
                  </p>
                </div>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>🎯</span>
                <div>
                  <h4>Think Like an Agile Leader</h4>
                  <p>Focus on empowering teams, removing impediments, and creating conditions for high performance.</p>
                </div>
              </div>
              <div className={styles.tipCard}>
                <span className={styles.tipIcon}>📖</span>
                <div>
                  <h4>Study Organizational Design</h4>
                  <p>Understand systems thinking and how organizational structure impacts agility and value delivery.</p>
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
  );
}

export default PALIExam;
