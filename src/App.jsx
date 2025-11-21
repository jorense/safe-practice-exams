import { useState, useEffect } from 'react'
import { ThemeProvider, useTheme } from './contexts/ThemeContext.jsx'
import { ProgressProvider, useProgress } from './contexts/ProgressContext.jsx'
import { StudyIntelligenceProvider } from './contexts/StudyIntelligenceContext.jsx'
import { NotificationProvider } from './contexts/NotificationContext.jsx'
import { AutosaveProvider } from './contexts/AutosaveContext.jsx'
import { AnalyticsProvider } from './contexts/AnalyticsContext.jsx'
import LeadingSAFe6Exam from './components/LeadingSAFe6/LeadingSAFe6Exam.jsx'
import LeadingSAFe6ExamQuiz from './components/LeadingSAFe6/LeadingSAFe6ExamQuiz.jsx'
import SAFeTeams6Exam from './components/SAFeTeams6/SAFeTeams6Exam.jsx'
import SAFeTeams6ExamQuiz from './components/SAFeTeams6/SAFeTeams6ExamQuiz.jsx'
import PSM2Exam from './components/PSM2/PSM2Exam.jsx'
import PSM2ExamQuiz from './components/PSM2/PSM2ExamQuiz.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Achievements from './components/Achievements/Achievements.jsx'
import SmartReview from './components/SmartReview/SmartReview.jsx'
import StudyCompanion from './components/StudyCompanion/StudyCompanion.jsx'
import NotificationSettings from './components/NotificationSettings/NotificationSettings.jsx'
import AchievementNotification from './components/Achievements/AchievementNotification.jsx'
import TimingAnalyticsPage from './components/shared/TimingAnalyticsPage.jsx'
import AdvancedDashboard from './components/analytics/AdvancedDashboard.jsx'
import StudyMaterials from './StudyMaterials.jsx'
import HamburgerMenu from './components/navigation/HamburgerMenu.jsx'
import './App.css'
import './pwa-styles.css'

function App() {
  // Re-introduce only the providers required for current visible features.
  return (
    <ThemeProvider>
      <ProgressProvider>
        <NotificationProvider>
          <StudyIntelligenceProvider>
            <AutosaveProvider>
              <AnalyticsProvider>
                <AppContent />
              </AnalyticsProvider>
            </AutosaveProvider>
          </StudyIntelligenceProvider>
        </NotificationProvider>
      </ProgressProvider>
    </ThemeProvider>
  )
}

function AppContent() {
  const { theme, setLightTheme, setDarkTheme, autoShowExplanation, setAutoShowExplanation } = useTheme()
  const { achievements, getNewAchievements } = useProgress()
  const [currentPage, setCurrentPage] = useState('home')
  const [studyExamType, setStudyExamType] = useState('Leading SAFe 6')
  const [achievementNotification, setAchievementNotification] = useState(null)
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [numberOfQuestions, setNumberOfQuestions] = useState(() => {
    const savedQuestionCount = localStorage.getItem('lace-studio-question-count')
    const count = savedQuestionCount ? Number(savedQuestionCount) : 45
    // Migration: Update old default of 40 to new default of 45
    return count === 40 ? 45 : count
  })
  
  // Add exam mode state management
  const [examMode, setExamMode] = useState(() => {
    const savedExamMode = localStorage.getItem('lace-studio-exam-mode')
    return savedExamMode || 'exam'
  })

  // Save numberOfQuestions to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lace-studio-question-count', numberOfQuestions.toString())
  }, [numberOfQuestions])

  // Save examMode to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('lace-studio-exam-mode', examMode)
  }, [examMode])

  // One-time migration effect to update localStorage for migrated users
  useEffect(() => {
    const savedQuestionCount = localStorage.getItem('lace-studio-question-count')
    if (savedQuestionCount === '40') {
      localStorage.setItem('lace-studio-question-count', '45')
    }
  }, [])

  // Watch for new achievements and show notifications
  useEffect(() => {
    const newAchievements = getNewAchievements()
    if (newAchievements.length > 0) {
      setAchievementNotification(newAchievements[0])
    }
  }, [achievements, getNewAchievements])

  const startExam = (examType) => {
    if (examType === 'Leading SAFe 6') {
      setCurrentPage('leading-safe-6')
    } else if (examType === 'SAFe for Teams 6.0') {
      setCurrentPage('safe-teams-6')
    } else if (examType === 'PSM II') {
      setCurrentPage('psm-2')
    }
  }

  const startLeadingSAFe6Quiz = () => {
    setCurrentPage('leading-safe-6-quiz')
  }

  const startSAFeTeams6Quiz = () => {
    setCurrentPage('safe-teams-6-quiz')
  }

  const startPSM2Quiz = () => {
    setCurrentPage('psm-2-quiz')
  }

  const goToStudyMaterials = (examType = 'Leading SAFe 6') => {
    setStudyExamType(examType)
    setCurrentPage('study-materials')
  }

  const goHome = () => {
    setCurrentPage('home')
  }

  const goToSettings = () => {
    setCurrentPage('settings')
  }

  const goToDashboard = () => {
    setCurrentPage('dashboard')
  }

  const goToAchievements = () => {
    setCurrentPage('achievements')
  }

  const goToSmartReview = () => {
    setCurrentPage('smart-review')
  }

  const goToStudyCompanion = () => {
    setCurrentPage('study-companion')
  }

  const goToNotifications = () => {
    // Guard: only navigate if NotificationProvider is mounted (window flag set below)
    if (window.__NOTIFICATION_PROVIDER_READY__) {
      setCurrentPage('notifications')
    } else {
      console.warn('Notifications provider not ready yet.')
      // Optional: add a transient local notification substitute later
    }
  }

  const goToTiming = () => {
    setCurrentPage('timing')
  }

  const goToAdvancedAnalytics = () => {
    setCurrentPage('advanced-analytics')
  }

  const goToExams = () => {
    setCurrentPage('exams')
  }

  // Hamburger menu handlers
  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen)
  }

  const closeHamburgerMenu = () => {
    setIsHamburgerOpen(false)
  }

  // Navigation structure for hamburger menu
  const navigationItems = {
    primary: [
      { key: 'home', icon: '🏠', label: 'Home', action: 'home' },
      { key: 'exams', icon: '📋', label: 'Exams', action: 'exams' }
    ],
    secondary: [
      { key: 'dashboard', icon: '📊', label: 'Dashboard', action: 'dashboard' },
      { key: 'achievements', icon: '🏆', label: 'Achievements', action: 'achievements' },
      { key: 'smart-review', icon: '🎯', label: 'Smart Review', action: 'smart-review' },
      { key: 'study-companion', icon: '🧠', label: 'AI Study Companion', action: 'study-companion' },
      { key: 'timing', icon: '⏱️', label: 'Timing Analytics', action: 'timing' },
      { key: 'advanced-analytics', icon: '📈', label: 'Advanced Analytics', action: 'advanced-analytics' }
    ],
    utility: [
      { key: 'notifications', icon: '🔔', label: 'Notifications', action: 'notifications' },
      { key: 'settings', icon: '⚙️', label: 'Settings', action: 'settings' }
    ]
  }

  const goBackToExam = () => {
    if (studyExamType === 'Leading SAFe 6') {
      setCurrentPage('leading-safe-6')
    } else if (studyExamType === 'SAFe for Teams 6.0') {
      setCurrentPage('safe-teams-6')
    }
  }

  const goBackToLeadingSAFe6 = () => {
    setCurrentPage('leading-safe-6')
  }

  const goBackToSAFeTeams6 = () => {
    setCurrentPage('safe-teams-6')
  }

  const goBackToPSM2 = () => {
    setCurrentPage('psm-2')
  }

  // Leading SAFe 6 Exam Page
  if (currentPage === 'leading-safe-6') {
    return (
      <LeadingSAFe6Exam 
        onGoHome={goHome} 
        onGoToStudyMaterials={() => goToStudyMaterials('Leading SAFe 6')} 
        onStartQuiz={startLeadingSAFe6Quiz} 
        numberOfQuestions={numberOfQuestions} 
        autoShowExplanation={autoShowExplanation}
        onNumberOfQuestionsChange={setNumberOfQuestions}
        onAutoShowExplanationChange={setAutoShowExplanation}
        examMode={examMode}
        onExamModeChange={setExamMode}
      />
    )
  }

  // Leading SAFe 6 Quiz Page
  if (currentPage === 'leading-safe-6-quiz') {
    return (
      <LeadingSAFe6ExamQuiz 
        onGoHome={goHome} 
        onGoBackToExam={goBackToLeadingSAFe6} 
        numberOfQuestions={numberOfQuestions} 
        autoShowExplanation={autoShowExplanation} 
        examMode={examMode}
      />
    )
  }

  // SAFe for Teams 6.0 Exam Page
  if (currentPage === 'safe-teams-6') {
    return (
      <SAFeTeams6Exam 
        onGoHome={goHome} 
        onGoToStudyMaterials={() => goToStudyMaterials('SAFe for Teams 6.0')} 
        onStartQuiz={startSAFeTeams6Quiz} 
        numberOfQuestions={numberOfQuestions} 
        autoShowExplanation={autoShowExplanation}
        onNumberOfQuestionsChange={setNumberOfQuestions}
        onAutoShowExplanationChange={setAutoShowExplanation}
        examMode={examMode}
        onExamModeChange={setExamMode}
      />
    )
  }

  // SAFe for Teams 6.0 Quiz Page
  if (currentPage === 'safe-teams-6-quiz') {
    return (
      <SAFeTeams6ExamQuiz 
        onGoHome={goHome} 
        onGoBackToExam={goBackToSAFeTeams6} 
        numberOfQuestions={numberOfQuestions} 
        autoShowExplanation={autoShowExplanation} 
        examMode={examMode}
      />
    )
  }

  // PSM II Exam Page
  if (currentPage === 'psm-2') {
    return (
      <PSM2Exam 
        onGoHome={goHome} 
        onGoToStudyMaterials={() => goToStudyMaterials('PSM II')} 
        onStartQuiz={startPSM2Quiz} 
        numberOfQuestions={numberOfQuestions} 
        autoShowExplanation={autoShowExplanation}
        onNumberOfQuestionsChange={setNumberOfQuestions}
        onAutoShowExplanationChange={setAutoShowExplanation}
        examMode={examMode}
        onExamModeChange={setExamMode}
      />
    )
  }

  // PSM II Quiz Page
  if (currentPage === 'psm-2-quiz') {
    return (
      <PSM2ExamQuiz 
        onGoHome={goHome} 
        onGoBackToExam={goBackToPSM2} 
        numberOfQuestions={numberOfQuestions} 
        autoShowExplanation={autoShowExplanation} 
        examMode={examMode}
      />
    )
  }

  // Study Materials Page
  if (currentPage === 'study-materials') {
    return <StudyMaterials onGoHome={goBackToExam} examType={studyExamType} />
  }

  // Analytics Page
  if (currentPage === 'dashboard') {
    return <Dashboard onGoHome={goHome} />
  }

  if (currentPage === 'achievements') {
    return <Achievements onGoHome={goHome} />
  }

  if (currentPage === 'smart-review') {
    return <SmartReview onGoHome={goHome} onStartExam={startExam} />
  }

  if (currentPage === 'study-companion') {
    return <StudyCompanion 
      examType={studyExamType === 'Leading SAFe 6' ? 'leadingsafe' : 'safeteams'}
      onStartRecommendedSession={(config) => {
        setNumberOfQuestions(config.questionCount);
        goHome();
      }}
      onGoHome={goHome}
      onGoToDashboard={goToDashboard}
      onGoToSettings={goToSettings}
    />
  }

  if (currentPage === 'notifications') {
    return <NotificationSettings onGoHome={goHome} />
  }

  // Timing Analytics Page
  if (currentPage === 'timing') {
    return <TimingAnalyticsPage onGoHome={goHome} />
  }

  // Advanced Analytics Dashboard
  if (currentPage === 'advanced-analytics') {
    return <AdvancedDashboard onGoHome={goHome} />
  }

  // Settings Page
  if (currentPage === 'settings') {
    return (
      <>
        <header className="header">
          <div className="header-content">
            <div className="brand">
              <div className="logo-container">
                <div className="logo-fallback">LACE Studio</div>
              </div>
              <div className="tagline">Practice Exams - Settings</div>
            </div>
            <nav className="nav">
              <button onClick={goToNotifications} className="nav-button">
                <span className="nav-icon">🔔</span><span>Notifications</span>
              </button>
              <button onClick={goHome} className="nav-button">
                <span className="nav-icon">🏠</span><span>Home</span>
              </button>
            </nav>
            <HamburgerMenu
              isOpen={isHamburgerOpen}
              onToggle={toggleHamburgerMenu}
              onClose={closeHamburgerMenu}
              navigationItems={navigationItems}
              currentPage={currentPage}
              onNavigate={(page) => {
                switch (page) {
                  case 'home':
                    goHome();
                    break;
                  case 'exams':
                    goToExams();
                    break;
                  case 'dashboard':
                    goToDashboard();
                    break;
                  case 'achievements':
                    goToAchievements();
                    break;
                  case 'smart-review':
                    goToSmartReview();
                    break;
                  case 'study-companion':
                    goToStudyCompanion();
                    break;
                  case 'timing':
                    goToTiming();
                    break;
                  case 'notifications':
                    goToNotifications();
                    break;
                  case 'advanced-analytics':
                    goToAdvancedAnalytics();
                    break;
                  case 'settings':
                    goToSettings();
                    break;
                  default:
                    break;
                }
                closeHamburgerMenu();
              }}
            />
          </div>
        </header>

        <main className="main-content">
          <div className="settings-container">
            <h1>Settings</h1>

            <div className="settings-section">
              <h2>Appearance</h2>
              <div className="setting-item">
                <label htmlFor="themeSelect">Theme:</label>
                <select
                  id="themeSelect"
                  value={theme}
                  onChange={(e) => {
                    if (e.target.value === 'light') {
                      setLightTheme()
                    } else {
                      setDarkTheme()
                    }
                  }}
                  className="settings-select"
                >
                  <option value="light">Light Theme (Default)</option>
                  <option value="dark">Dark Theme</option>
                </select>
              </div>
              <div className="settings-info">
                <p>Current theme: <strong>{theme === 'light' ? 'Light' : 'Dark'}</strong></p>
                <p className="settings-note">
                  Theme changes take effect immediately and are saved to your browser.
                </p>
              </div>
            </div>

            <div className="settings-section">
              <h2>Exam Configuration</h2>
              <div className="setting-item">
                <label htmlFor="questionCount">Number of Questions per Exam:</label>
                <select
                  id="questionCount"
                  value={numberOfQuestions}
                  onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
                  className="settings-select"
                >
                  <option value={10}>10 Questions</option>
                  <option value={20}>20 Questions</option>
                  <option value={40}>40 Questions</option>
                  <option value={45}>45 Questions (Default)</option>
                  <option value={50}>50 Questions</option>
                  <option value={100}>100 Questions</option>
                  <option value={185}>185 Questions (SAFe Teams 6.0 Complete)</option>
                  <option value={200}>200 Questions (Leading SAFe 6 Complete)</option>
                </select>
              </div>
              <div className="settings-info">
                <p>Current setting: <strong>{numberOfQuestions} questions</strong> per exam</p>
                <p className="settings-note">
                  This setting applies to all practice exams. Changes take effect immediately and are saved to your browser.
                </p>
              </div>
              <div style={{ marginTop: '1.5rem' }} />
              <div className="setting-item">
                <label htmlFor="autoShowExplanation">Automatically show detailed explanations:</label>
                <input
                  id="autoShowExplanation"
                  type="checkbox"
                  checked={autoShowExplanation}
                  onChange={e => setAutoShowExplanation(e.target.checked)}
                  style={{ marginLeft: '0.75rem' }}
                />
              </div>
              <div className="settings-info">
                <p>Current setting: <strong>{autoShowExplanation ? 'On' : 'Off'}</strong></p>
                <p className="settings-note">
                  When enabled, detailed explanations will be automatically shown in all exams.<br />Default is Off.
                </p>
              </div>
            </div>

            <div className="settings-actions">
              <button onClick={goHome} className="settings-back-button">
                Save & Return to Home
              </button>
            </div>
          </div>
        </main>
      </>
    )
  }

  // Exams Page
  if (currentPage === 'exams') {
    return (
      <>
        <header className="header">
          <div className="header-content">
            <div className="brand">
              <div className="logo-container">
                <div className="logo-fallback">LACE Studio</div>
              </div>
              <div className="tagline">Practice Exams</div>
            </div>
            <nav className="nav">
            <button onClick={goHome} className="nav-button">
              <span className="nav-icon">🏠</span><span>Home</span>
            </button>
            <button onClick={goToSettings} className="nav-button settings-button">
              <span className="nav-icon">⚙️</span><span>Settings</span>
            </button>
          </nav>
          <HamburgerMenu
            isOpen={isHamburgerOpen}
            onToggle={toggleHamburgerMenu}
            onClose={closeHamburgerMenu}
            navigationItems={navigationItems}
            currentPage={currentPage}
            onNavigate={(page) => {
              switch (page) {
                case 'home':
                  goHome();
                  break;
                case 'exams':
                  goToExams();
                  break;
                case 'dashboard':
                  goToDashboard();
                  break;
                case 'achievements':
                  goToAchievements();
                  break;
                case 'smart-review':
                  goToSmartReview();
                  break;
                case 'study-companion':
                  goToStudyCompanion();
                  break;
                case 'timing':
                  goToTiming();
                  break;
                case 'notifications':
                  goToNotifications();
                  break;
                case 'advanced-analytics':
                  goToAdvancedAnalytics();
                  break;
                case 'settings':
                  goToSettings();
                  break;
                default:
                  break;
              }
              closeHamburgerMenu();
            }}
          />
          </div>
        </header>

        <main className="main-content">
          <div className="hero-section">
            <h1>Available Practice Exams</h1>
            <p className="hero-subtitle">
              Choose from our comprehensive collection of Agile and Scrum certification practice exams
            </p>

            <div className="cta-section">
              <div className="exam-group">
                <h2 className="exam-group-title">Agile & Scrum Certifications</h2>
                <div className="exam-buttons agile-exams">
                  <button
                    className="cta-button leading-safe-6 recommended"
                    data-testid="start-leading-safe-exams"
                    onClick={() => startExam('Leading SAFe 6')}
                  >
                    <span className="button-content">
                      Start Leading SAFe 6 Practice Exam
                      <span className="recommended-badge">Available</span>
                    </span>
                  </button>
                  <button
                    className="cta-button safe-teams-6 recommended"
                    data-testid="start-safe-teams-exams"
                    onClick={() => startExam('SAFe for Teams 6.0')}
                  >
                    <span className="button-content">
                      Start SAFe for Teams 6.0 Practice Exam
                      <span className="recommended-badge">Available</span>
                    </span>
                  </button>
                  <button
                    className="cta-button psm-2 recommended"
                    data-testid="start-psm2-exams"
                    onClick={() => startExam('PSM II')}
                  >
                    <span className="button-content">
                      Start PSM II Practice Exam
                      <span className="recommended-badge">Available</span>
                    </span>
                  </button>
                </div>
              </div>

              <div className="exam-group coming-soon-group">
                <h2 className="exam-group-title">Coming Soon</h2>
                <div className="exam-buttons coming-soon-exams">
                  <button
                    className="cta-button coming-soon-button pspo-1"
                    disabled
                  >
                    <span className="button-content">
                      PSPO 1 Practice Exam
                      <span className="coming-soon-badge">Coming Soon</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="footer">
          <p>&copy; 2025 LACE Studio Practice Exams. Empowering Agile professionals worldwide.</p>
        </footer>
      </>
    )
  }

  // Home Page
  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="brand">
            <div className="logo-container">
              <div className="logo-fallback">LACE Studio</div>
            </div>
            <div className="tagline">Practice Exams</div>
          </div>
          <nav className="nav">
            <button onClick={goToExams} className="nav-button" data-testid="nav-exams">
              <span className="nav-icon">📋</span><span>Exams</span>
            </button>
            <button onClick={goToDashboard} className="nav-button dashboard-button" data-testid="nav-dashboard">
              <span className="nav-icon">📊</span><span>Dashboard</span>
            </button>
            <button onClick={goToAchievements} className="nav-button achievements-button" data-testid="nav-achievements">
              <span className="nav-icon">🏆</span><span>Achievements</span>
            </button>
            <button onClick={goToSmartReview} className="nav-button smart-review-button" data-testid="nav-review">
              <span className="nav-icon">🎯</span><span>Review</span>
            </button>
            <button onClick={goToStudyCompanion} className="nav-button study-companion-button" data-testid="nav-ai">
              <span className="nav-icon">🧠</span><span>AI</span>
            </button>
            <button onClick={goToTiming} className="nav-button timing-button" data-testid="nav-timing">
              <span className="nav-icon">⏱️</span><span>Timing</span>
            </button>
            <button onClick={goToAdvancedAnalytics} className="nav-button advanced-analytics-button" data-testid="nav-analytics">
              <span className="nav-icon">📈</span><span>Analytics</span>
            </button>
            <button onClick={goToNotifications} className="nav-button notifications-button" data-testid="nav-alerts">
              <span className="nav-icon">🔔</span><span>Alerts</span>
            </button>
            <button onClick={goToSettings} className="nav-button settings-button" data-testid="nav-settings">
              <span className="nav-icon">⚙️</span><span>Settings</span>
            </button>
          </nav>
          <HamburgerMenu
            isOpen={isHamburgerOpen}
            onToggle={toggleHamburgerMenu}
            onClose={closeHamburgerMenu}
            navigationItems={navigationItems}
            currentPage={currentPage}
            onNavigate={(page) => {
              switch (page) {
                case 'home':
                  goHome();
                  break;
                case 'exams':
                  goToExams();
                  break;
                case 'dashboard':
                  goToDashboard();
                  break;
                case 'achievements':
                  goToAchievements();
                  break;
                case 'smart-review':
                  goToSmartReview();
                  break;
                case 'study-companion':
                  goToStudyCompanion();
                  break;
                case 'timing':
                  goToTiming();
                  break;
                case 'notifications':
                  goToNotifications();
                  break;
                case 'advanced-analytics':
                  goToAdvancedAnalytics();
                  break;
                case 'settings':
                  goToSettings();
                  break;
                default:
                  break;
              }
              closeHamburgerMenu();
            }}
          />
        </div>
      </header>

      <main className="main-content">
        <div className="hero-section">
          <h1>Master Your SAFe Certifications</h1>
          <p className="hero-subtitle">
            Prepare for success with our comprehensive practice exams designed by SAFe experts
          </p>

          <div className="featured-exams-section">
            <div className="featured-exams-card">
              <h2 className="featured-title">🌟 Featured Practice Exam</h2>
              <p className="featured-subtitle">Start with our flagship certification track</p>

              <div className="featured-exams-grid">
                <div className="featured-exam-item">
                  <button
                    className="featured-exam-button leading-safe-6"
                    onClick={() => startExam('Leading SAFe 6')}
                  >
                      <div className="featured-exam-content" data-testid="start-leading-safe-home">
                      <h3>Leading SAFe 6</h3>
                      <p>Scaled Agile Framework</p>
                      <span className="featured-badge available">Available</span>
                    </div>
                  </button>
                </div>

                <div className="featured-exam-item">
                  <button
                    className="featured-exam-button safe-teams-6"
                    onClick={() => startExam('SAFe for Teams 6.0')}
                  >
                      <div className="featured-exam-content" data-testid="start-safe-teams-home">
                      <h3>SAFe for Teams 6.0</h3>
                      <p>Team-Level SAFe Certification</p>
                      <span className="featured-badge available">Available</span>
                    </div>
                  </button>
                </div>

                <div className="featured-exam-item">
                  <button
                    className="featured-exam-button psm-2"
                    onClick={() => startExam('PSM II')}
                  >
                      <div className="featured-exam-content" data-testid="start-psm2-home">
                      <h3>PSM II</h3>
                      <p>Professional Scrum Master II</p>
                      <span className="featured-badge available">Available</span>
                    </div>
                  </button>
                </div>

                <div className="featured-exam-item">
                  <button
                    className="featured-exam-button pspo-1 coming-soon"
                    disabled
                  >
                    <div className="featured-exam-content">
                      <h3>PSPO 1</h3>
                      <p>Professional Scrum Product Owner I</p>
                      <span className="featured-badge coming-soon-badge">Coming Soon</span>
                    </div>
                  </button>
                </div>
              </div>

              <div className="featured-actions">
                <button onClick={goToExams} className="view-all-exams-button">
                  View All Practice Exams →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="features">
          <div className="feature-card">
            <div className="feature-header">
              <h3>🎯 Comprehensive Coverage</h3>
            </div>
            <p>Practice exams covering all key domains and competencies for each certification</p>
          </div>
          <div className="feature-card">
            <div className="feature-header">
              <h3>📊 Detailed Analytics</h3>
            </div>
            <p>Track your progress and identify areas for improvement with comprehensive results</p>
          </div>
          <div className="feature-card">
            <div className="feature-header">
              <h3>⏱️ Timed Exams</h3>
            </div>
            <p>Realistic exam simulation with proper time constraints and scoring</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2025 LACE Studio Practice Exams. Empowering Agile professionals worldwide.</p>
      </footer>

      {/* Achievement Notification */}
        <div data-testid="achievement-notification-wrapper">
          <AchievementNotification
            achievement={achievementNotification}
            onClose={() => setAchievementNotification(null)}
          />
        </div>
    </>
  )
}

export default App
