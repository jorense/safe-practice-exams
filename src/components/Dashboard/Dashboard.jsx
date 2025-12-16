import React, { useState } from 'react';
import { useProgress } from '../../contexts/ProgressContext';
import { exportResultsToExcel } from '../../utils/exportResultsToExcel.js';
import { exportDataJSON, downloadJSON } from '../../utils/exportDataJSON.js';
import { generateShareLink, copyToClipboard, getTimeRemaining } from '../../utils/shareProgress.js';
import styles from './Dashboard.module.css';

function Dashboard({ onGoHome }) {
  const { sessionHistory, streakData, achievements, getAnalytics } = useProgress();
  const analytics = getAnalytics();
  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState(null);
  const [importError, setImportError] = useState(null);
  const [importSuccess, setImportSuccess] = useState(false);
  const [shareLink, setShareLink] = useState(null);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const [shareLinkExpiry, setShareLinkExpiry] = useState(null);

  // Get recent performance trend
  const recentSessions = sessionHistory.slice(0, 10).reverse(); // Last 10 sessions in chronological order

  // Get study time data
  const totalStudyTime = sessionHistory.reduce((sum, session) => sum + (session.timeUsed || 0), 0);
  const averageSessionTime = sessionHistory.length > 0 ? Math.round(totalStudyTime / sessionHistory.length / 60) : 0; // in minutes

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': return '📈';
      case 'declining': return '📉';
      default: return '➖';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'improving': return 'var(--success-color)';
      case 'declining': return 'var(--danger-color)';
      default: return 'var(--text-secondary)';
    }
  };

  const handleExport = async () => {
    setExportError(null);
    setIsExporting(true);
    try {
      await exportResultsToExcel({ attempt: null, questions: null, selectedAnswers: null, timingData: null, includeRaw: false });
    } catch (err) {
      console.error('Excel export failed', err);
      setExportError(err.message);
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportJSON = () => {
    try {
      const jsonData = exportDataJSON();
      const timestamp = new Date().toISOString().split('T')[0];
      downloadJSON(jsonData, `practice-exam-backup-${timestamp}.json`);
    } catch (err) {
      console.error('JSON export failed:', err);
      setExportError(err.message);
    }
  };

  const handleGenerateShareLink = async () => {
    try {
      setExportError(null);
      const link = generateShareLink();
      const expiryTime = Date.now() + (30 * 60 * 1000); // 30 minutes
      setShareLink(link);
      setShareLinkExpiry(expiryTime);
      setShareLinkCopied(false);
      
      // Auto-copy to clipboard
      const copied = await copyToClipboard(link);
      if (copied) {
        setShareLinkCopied(true);
        setTimeout(() => setShareLinkCopied(false), 3000);
      }
    } catch (err) {
      console.error('Share link generation failed:', err);
      setExportError(err.message || 'Failed to generate share link');
    }
  };

  const handleCopyShareLink = async () => {
    if (shareLink) {
      const copied = await copyToClipboard(shareLink);
      if (copied) {
        setShareLinkCopied(true);
        setTimeout(() => setShareLinkCopied(false), 3000);
      }
    }
  };

  const handleImport = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setImportError(null);
    setImportSuccess(false);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        
        // Validate the imported data structure
        if (!data || typeof data !== 'object') {
          throw new Error('Invalid data format');
        }

        // Import different types of data
        let imported = false;
        
        // Import session history
        if (Array.isArray(data.sessionHistory)) {
          localStorage.setItem('practice-exam-history', JSON.stringify(data.sessionHistory));
          imported = true;
        } else if (Array.isArray(data)) {
          // Fallback: if root is array, assume it's session history
          localStorage.setItem('practice-exam-history', JSON.stringify(data));
          imported = true;
        }

        // Import question tracking data
        if (data.questionTracking) {
          Object.entries(data.questionTracking).forEach(([key, value]) => {
            localStorage.setItem(key, JSON.stringify(value));
          });
          imported = true;
        }

        // Import achievements if present
        if (data.achievements) {
          localStorage.setItem('exam-achievements', JSON.stringify(data.achievements));
          imported = true;
        }

        if (imported) {
          setImportSuccess(true);
          setTimeout(() => {
            window.location.reload(); // Reload to reflect imported data
          }, 1500);
        } else {
          throw new Error('No valid data found in file');
        }
      } catch (err) {
        console.error('Import failed:', err);
        setImportError(err.message || 'Failed to import data. Please check the file format.');
      }
    };
    reader.readAsText(file);
    event.target.value = ''; // Reset input
  };

  const handleResetAllData = () => {
    if (window.confirm('Are you sure you want to reset ALL practice data? This will permanently delete your session history, progress, and achievements. This action cannot be undone.')) {
      // Clear all practice exam related data
      const keysToRemove = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (
          key.includes('practice-exam') ||
          key.includes('lace-studio') ||
          key.includes('exam-achievements') ||
          key === 'psm2-seen' ||
          key === 'pspo1-seen' ||
          key === 'pali-seen' ||
          key === 'leadingsafe6-seen' ||
          key === 'safeteams6-seen'
        )) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(key => localStorage.removeItem(key));
      window.location.reload();
    }
  };

  if (!analytics.totalSessions) {
    return (
      <div className={styles.analyticsContainer}>
        <header className={styles.analyticsHeader}>
          <div className={styles.brand}>
            <div className={styles.logo}>LACE Studio</div>
            <div className={styles.tagline}>Performance Analytics</div>
          </div>
          <button className={styles.homeButton} onClick={onGoHome}>
            ← Back to Home
          </button>
        </header>

        <main className={styles.analyticsContent}>
          <div className={styles.noDataMessage}>
            <div className={styles.noDataIcon}>📊</div>
            <h2>No Performance Data Yet</h2>
            <p>Complete your first practice exam to see detailed analytics, progress tracking, and personalized insights.</p>
            <button className={styles.startButton} onClick={onGoHome}>
              Start Your First Exam
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.analyticsContainer}>
      <header className={styles.analyticsHeader}>
        <div className={styles.brand}>
          <div className={styles.logo}>LACE Studio</div>
          <div className={styles.tagline}>Performance Analytics</div>
        </div>
        <button className={styles.homeButton} onClick={onGoHome}>
          ← Back to Home
        </button>
      </header>

      <main className={styles.analyticsContent}>
        {/* Overview Stats */}
        <section className={styles.overviewSection}>
          <h2>📈 Performance Overview</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{analytics.averageScore}%</div>
              <div className={styles.statLabel}>Average Score</div>
              <div className={styles.statTrend} style={{ color: getTrendColor(analytics.recentTrend) }}>
                {getTrendIcon(analytics.recentTrend)} {analytics.recentTrend}
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{analytics.totalSessions}</div>
              <div className={styles.statLabel}>Exams Completed</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{analytics.totalQuestions}</div>
              <div className={styles.statLabel}>Questions Answered</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statValue}>{formatTime(totalStudyTime)}</div>
              <div className={styles.statLabel}>Total Study Time</div>
            </div>
          </div>
        </section>

        {/* Study Streaks & Achievements */}
        <section className={styles.streaksSection}>
          <h2>🔥 Study Progress</h2>
          <div className={styles.streaksGrid}>
            <div className={styles.streakCard}>
              <div className={styles.streakValue}>{streakData.currentStreak}</div>
              <div className={styles.streakLabel}>Current Streak</div>
              <div className={styles.streakSubtext}>
                {streakData.currentStreak > 0 ? 'Keep it up! 🚀' : 'Start today! 💪'}
              </div>
            </div>
            <div className={styles.streakCard}>
              <div className={styles.streakValue}>{streakData.longestStreak}</div>
              <div className={styles.streakLabel}>Longest Streak</div>
            </div>
            <div className={styles.achievementsCard}>
              <div className={styles.achievementsHeader}>
                <h3>🏆 Achievements ({achievements.length})</h3>
              </div>
              <div className={styles.achievementsList}>
                {achievements.length > 0 ? (
                  achievements.slice(0, 3).map(achievement => (
                    <div key={achievement.id} className={styles.achievementItem}>
                      <span className={styles.achievementIcon}>{achievement.icon}</span>
                      <div>
                        <div className={styles.achievementTitle}>{achievement.title}</div>
                        <div className={styles.achievementDesc}>{achievement.description}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className={styles.noAchievements}>Complete more exams to unlock achievements!</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Domain Performance */}
        <section className={styles.domainSection}>
          <h2>📚 Domain Performance</h2>
          <div className={styles.domainGrid}>
            {Object.keys(analytics.domainPerformance).length > 0 ? (
              <>
                <div className={styles.domainCard}>
                  <h3>💪 Strongest Areas</h3>
                  <div className={styles.domainList}>
                    {analytics.strongestDomains.map(({ domain, score }) => (
                      <div key={domain} className={styles.domainItem}>
                        <span className={styles.domainName}>{domain}</span>
                        <span className={styles.domainScore} style={{ color: 'var(--success-color)' }}>
                          {score}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.domainCard}>
                  <h3>📖 Areas for Improvement</h3>
                  <div className={styles.domainList}>
                    {analytics.weakestDomains.length > 0 ? (
                      analytics.weakestDomains.map(({ domain, score }) => (
                        <div key={domain} className={styles.domainItem}>
                          <span className={styles.domainName}>{domain}</span>
                          <span className={styles.domainScore} style={{ color: 'var(--warning-color)' }}>
                            {score}%
                          </span>
                        </div>
                      ))
                    ) : (
                      <p>Great job! No weak areas identified. 🎉</p>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className={styles.noDomainData}>
                <p>Complete more exams to see domain-specific performance breakdown.</p>
              </div>
            )}
          </div>
        </section>

        {/* Recent Performance Chart */}
        <section className={styles.chartSection}>
          <h2>📊 Recent Performance Trend</h2>
          <div className={styles.chartContainer}>
            {recentSessions.length > 0 ? (
              <div className={styles.scoreChart}>
                {recentSessions.map((session, index) => (
                  <div key={session.id} className={styles.chartBar}>
                    <div 
                      className={styles.chartBarFill}
                      style={{ 
                        height: `${session.score}%`,
                        backgroundColor: session.score >= 70 ? 'var(--success-color)' : 'var(--warning-color)'
                      }}
                    />
                    <div className={styles.chartBarLabel}>
                      {new Date(session.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className={styles.chartBarValue}>{session.score}%</div>
                  </div>
                ))}
              </div>
            ) : (
              <p>Complete more exams to see performance trends.</p>
            )}
          </div>
        </section>

        {/* Data Management */}
        <section className={styles.dataManagementSection}>
          <h2>💾 Data Management</h2>
          <div className={styles.dataManagementCard}>
            <p className={styles.dataManagementDescription}>
              Export your progress to save a backup, generate a shareable link (expires in 30 min), or import previously exported data.
            </p>
            <div className={styles.dataManagementActions}>
              <button 
                onClick={handleExport} 
                className={styles.exportButton}
                disabled={isExporting}
              >
                � {isExporting ? 'Exporting...' : 'Export Excel'}
              </button>
              
              <button 
                onClick={handleExportJSON} 
                className={styles.exportButton}
              >
                📄 Export JSON
              </button>
              
              <button 
                onClick={handleGenerateShareLink} 
                className={styles.shareButton}
              >
                🔗 Generate Share Link
              </button>
              
              <label className={styles.importButton}>
                📥 Import Progress
                <input 
                  type="file" 
                  accept=".json" 
                  onChange={handleImport}
                  style={{ display: 'none' }}
                />
              </label>
              
              <button 
                onClick={handleResetAllData}
                className={styles.resetButton}
              >
                🔄 Reset All Data
              </button>
            </div>
            
            {shareLink && (
              <div className={styles.shareLinkContainer}>
                <div className={styles.shareLinkHeader}>
                  <span className={styles.shareLinkTitle}>🔗 Share Link Generated</span>
                  <span className={styles.shareLinkExpiry}>
                    ⏱️ Expires in {shareLinkExpiry ? getTimeRemaining(shareLinkExpiry) : '30 minutes'}
                  </span>
                </div>
                <div className={styles.shareLinkBox}>
                  <input 
                    type="text" 
                    value={shareLink} 
                    readOnly 
                    className={styles.shareLinkInput}
                    onClick={(e) => e.target.select()}
                  />
                  <button 
                    onClick={handleCopyShareLink}
                    className={styles.copyButton}
                  >
                    {shareLinkCopied ? '✅ Copied!' : '📋 Copy'}
                  </button>
                </div>
                <p className={styles.shareLinkInfo}>
                  💡 Share this link with others or paste it in a new browser to import your progress. Link expires in 30 minutes.
                </p>
              </div>
            )}
            
            {exportError && (
              <div className={styles.errorMessage}>❌ {exportError}</div>
            )}
            {importError && (
              <div className={styles.errorMessage}>❌ Import failed: {importError}</div>
            )}
            {importSuccess && (
              <div className={styles.successMessage}>✅ Data imported successfully! Refreshing...</div>
            )}
          </div>
        </section>

        {/* Session History */}
        <section className={styles.historySection}>
          <h2>📋 Recent Sessions</h2>
          <div className={styles.sessionsList}>
            {sessionHistory.slice(0, 5).map(session => (
              <div key={session.id} className={styles.sessionItem}>
                <div className={styles.sessionInfo}>
                  <div className={styles.sessionTitle}>{session.examType}</div>
                  <div className={styles.sessionMeta}>
                    {new Date(session.timestamp).toLocaleDateString()} • 
                    {session.correctAnswers}/{session.totalQuestions} correct • 
                    {session.timeUsed ? formatTime(session.timeUsed) : 'N/A'}
                  </div>
                </div>
                <div className={styles.sessionScore} style={{ 
                  color: session.score >= 70 ? 'var(--success-color)' : 'var(--warning-color)' 
                }}>
                  {session.score}%
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;