import { useEffect, useRef } from 'react'
import styles from './HamburgerMenu.module.css'

const HamburgerMenu = ({ 
  isOpen, 
  onToggle, 
  navigationItems, 
  currentPage,
  onNavigate,
  onClose 
}) => {
  const currentYear = new Date().getFullYear()
  const toggleRef = useRef(null)
  const menuRef = useRef(null)
  const closeRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key !== 'Tab' || !menuRef.current) return
      const focusable = [...menuRef.current.querySelectorAll('button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])')]
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [isOpen, onClose])

  return (
    <div className={styles.hamburgerContainer}>
      {/* Hamburger Button */}
      <button 
        ref={toggleRef}
        className={`${styles.hamburgerButton} ${isOpen ? styles.open : ''}`}
        onClick={onToggle}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-menu"
        data-testid="nav-hamburger-toggle"
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className={styles.menuOverlay} onClick={onClose}>
          <nav 
            id="mobile-navigation-menu"
            ref={menuRef}
            className={styles.mobileMenu}
            onClick={(e) => e.stopPropagation()}
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Header */}
            <div className={styles.menuHeader}>
              <div className={styles.menuBrand}>
                <span className={styles.menuLogo}>LACE Studio</span>
                <span className={styles.menuTagline}>Practice Exams</span>
              </div>
              <button 
                ref={closeRef}
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* Navigation Sections */}
            <div className={styles.menuContent}>
              {/* Primary Navigation */}
              <section className={styles.menuSection}>
                <h3 className={styles.sectionTitle}>Main</h3>
                <div className={styles.menuItems}>
                  {navigationItems.primary.map((item) => (
                    <button
                      key={item.key}
                      className={`${styles.menuItem} ${currentPage === item.key ? styles.active : ''}`}
                      onClick={() => {
                        onNavigate(item.action)
                        onClose()
                      }}
                    >
                      <span className={styles.menuIcon}>{item.icon}</span>
                      <span className={styles.menuLabel}>{item.label}</span>
                      {item.badge && (
                        <span className={styles.menuBadge}>{item.badge}</span>
                      )}
                    </button>
                  ))}
                </div>
              </section>

              {/* Secondary Navigation */}
              <section className={styles.menuSection}>
                <h3 className={styles.sectionTitle}>Study Tools</h3>
                <div className={styles.menuItems}>
                  {navigationItems.secondary.map((item) => (
                    <button
                      key={item.key}
                      className={`${styles.menuItem} ${currentPage === item.key ? styles.active : ''}`}
                      onClick={() => {
                        onNavigate(item.action)
                        onClose()
                      }}
                    >
                      <span className={styles.menuIcon}>{item.icon}</span>
                      <span className={styles.menuLabel}>{item.label}</span>
                      {item.badge && (
                        <span className={styles.menuBadge}>{item.badge}</span>
                      )}
                    </button>
                  ))}
                </div>
              </section>

              {/* Utility Navigation */}
              <section className={styles.menuSection}>
                <h3 className={styles.sectionTitle}>Settings</h3>
                <div className={styles.menuItems}>
                  {navigationItems.utility.map((item) => (
                    <button
                      key={item.key}
                      className={`${styles.menuItem} ${currentPage === item.key ? styles.active : ''}`}
                      onClick={() => {
                        onNavigate(item.action)
                        onClose()
                      }}
                    >
                      <span className={styles.menuIcon}>{item.icon}</span>
                      <span className={styles.menuLabel}>{item.label}</span>
                      {item.badge && (
                        <span className={styles.menuBadge}>{item.badge}</span>
                      )}
                    </button>
                  ))}
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className={styles.menuFooter}>
              <p className={styles.footerText}>
                © {currentYear} LACE Studio Practice Exams
              </p>
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu
