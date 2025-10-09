import { useTheme } from './contexts/ThemeContext.jsx'
import './StudyMaterials.css'

const StudyMaterials = ({ onGoHome, examType }) => {
  const { theme } = useTheme()

  const getStudyContent = () => {
    switch (examType) {
      case 'Leading SAFe 6':
        return {
          title: 'Leading SAFe 6 Study Materials',
          description: 'Comprehensive resources to help you prepare for the Leading SAFe 6.0 certification exam.',
          sections: [
            {
              title: 'Core Concepts',
              items: [
                'SAFe Principles and Values',
                'Lean-Agile Leadership',
                'Team and Technical Agility',
                'Agile Product Delivery',
                'Enterprise Solution Delivery',
                'Lean Portfolio Management',
                'Organizational Agility',
                'Continuous Learning Culture'
              ]
            },
            {
              title: 'Key Resources',
              items: [
                'SAFe 6.0 Framework Overview',
                'Implementation Roadmap',
                'Agile Release Trains (ARTs)',
                'Program Increment (PI) Planning',
                'DevOps and Release on Demand',
                'Metrics and Measurement',
                'Leading Change',
                'Coaching and Facilitation'
              ]
            },
            {
              title: 'Recommended Reading',
              items: [
                'SAFe 6.0 Distilled by Richard Knaster and Dean Leffingwell',
                'Lean-Agile Software Development by Alan Shalloway',
                'The Lean Startup by Eric Ries',
                'Accelerate by Nicole Forsgren, Jez Humble, and Gene Kim'
              ]
            }
          ]
        }
      case 'SAFe for Teams 6.0':
        return {
          title: 'SAFe for Teams 6.0 Study Materials',
          description: 'Essential resources to help you prepare for the SAFe for Teams 6.0 certification exam, focusing on team-level practices and built-in quality.',
          sections: [
            {
              title: 'Team Agility (35%)',
              items: [
                'Scrum Framework in SAFe',
                'Iteration Planning and Execution',
                'Daily Stand-ups and Team Collaboration',
                'Iteration Review and Retrospective',
                'Team Kanban and Work-in-Progress Limits',
                'Story Writing and Acceptance Criteria',
                'Team Estimation and Velocity',
                'Cross-functional Team Dynamics'
              ]
            },
            {
              title: 'Technical Agility (35%)',
              items: [
                'Built-in Quality Practices',
                'Test-Driven Development (TDD)',
                'Behavior-Driven Development (BDD)',
                'Continuous Integration (CI)',
                'Continuous Deployment (CD)',
                'Pair Programming and Code Reviews',
                'Refactoring and Technical Debt Management',
                'Definition of Done and Acceptance Testing'
              ]
            },
            {
              title: 'Business Agility (30%)',
              items: [
                'Lean Thinking and Value Stream Mapping',
                'Program Increment (PI) Planning Participation',
                'Feature and User Story Development',
                'Customer Centricity and Value Delivery',
                'Agile Release Train (ART) Participation',
                'System Demo and Inspect & Adapt',
                'Innovation and Planning (IP) Iteration',
                'Continuous Value Delivery'
              ]
            },
            {
              title: 'Key SAFe Practices',
              items: [
                'Team Backlog Management',
                'Dependency Management',
                'Risk and Issue Management',
                'Metrics and KPIs for Teams',
                'SAFe Team Events Calendar',
                'Architectural Runway',
                'Enabler Stories and Spikes',
                'Team Performance Indicators'
              ]
            },
            {
              title: 'Recommended Reading',
              items: [
                'SAFe 6.0 Distilled by Richard Knaster and Dean Leffingwell',
                'Agile Testing by Lisa Crispin and Janet Gregory',
                'Clean Code by Robert C. Martin',
                'Continuous Delivery by Jez Humble and David Farley',
                'The DevOps Handbook by Gene Kim, Patrick Debois, John Willis, and Jez Humble',
                'User Stories Applied by Mike Cohn'
              ]
            }
          ]
        }
      default:
        return {
          title: 'Study Materials',
          description: 'Study resources will be available here.',
          sections: []
        }
    }
  }

  const studyContent = getStudyContent()

  return (
    <div className={`study-materials-container ${theme}`}>
      <header className="header">
        <div className="brand">
          <div className="logo-container">
            <div className="logo-fallback">LACE Studio</div>
          </div>
          <div className="tagline">Study Materials</div>
        </div>
        <nav className="nav">
          <button onClick={onGoHome} className="nav-button">← Back to Exam</button>
        </nav>
      </header>

      <main className="main-content">
        <div className="study-content">
          <div className="study-header">
            <h1>{studyContent.title}</h1>
            <p className="study-description">{studyContent.description}</p>
          </div>

          <div className="study-sections">
            {studyContent.sections.map((section, index) => (
              <div key={index} className="study-section">
                <h2>{section.title}</h2>
                <ul className="study-list">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="study-item">
                      <span className="study-bullet">📚</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {examType === 'Leading SAFe 6' && (
            <div className="additional-resources">
              <h2>Additional Resources</h2>
              <div className="resource-cards">
                <div className="resource-card">
                  <h3>🌐 Official SAFe Website</h3>
                  <p>Visit scaledagileframework.com for the latest updates and official documentation.</p>
                </div>
                <div className="resource-card">
                  <h3>📖 Practice Tests</h3>
                  <p>Take multiple practice exams to familiarize yourself with the question format and timing.</p>
                </div>
                <div className="resource-card">
                  <h3>🎯 Focus Areas</h3>
                  <p>Pay special attention to PI Planning, ART implementation, and Lean-Agile leadership principles.</p>
                </div>
              </div>
            </div>
          )}

          {examType === 'SAFe for Teams 6.0' && (
            <div className="additional-resources">
              <h2>Additional Resources</h2>
              <div className="resource-cards">
                <div className="resource-card">
                  <h3>🌐 Official SAFe Website</h3>
                  <p>Visit scaledagileframework.com for team-level guidance and the latest SAFe 6.0 updates.</p>
                </div>
                <div className="resource-card">
                  <h3>🛠️ Technical Practices</h3>
                  <p>Focus on mastering TDD, CI/CD, and other built-in quality practices essential for agile teams.</p>
                </div>
                <div className="resource-card">
                  <h3>👥 Team Collaboration</h3>
                  <p>Practice Scrum events, team estimation techniques, and cross-functional collaboration skills.</p>
                </div>
                <div className="resource-card">
                  <h3>📊 Metrics & KPIs</h3>
                  <p>Understand team velocity, burn-down charts, and other metrics used to track team performance.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default StudyMaterials