import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('lace-studio-theme')
    return savedTheme || 'light'
  })

  // Initialize auto show explanation setting
  const [autoShowExplanation, setAutoShowExplanation] = useState(() => {
    const saved = localStorage.getItem('lace-studio-auto-explanation')
    return saved === 'true'
  })

  // Apply theme immediately on mount and whenever it changes
  useEffect(() => {
    localStorage.setItem('lace-studio-theme', theme)
    // Apply theme to document body and root element
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme'
    document.documentElement.className = theme === 'dark' ? 'dark-theme' : 'light-theme'
  }, [theme])

  // Apply theme immediately on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('lace-studio-theme') || 'light'
    document.body.className = savedTheme === 'dark' ? 'dark-theme' : 'light-theme'
    document.documentElement.className = savedTheme === 'dark' ? 'dark-theme' : 'light-theme'
  }, [])

  // Save auto explanation setting to localStorage
  useEffect(() => {
    localStorage.setItem('lace-studio-auto-explanation', autoShowExplanation.toString())
  }, [autoShowExplanation])

  const setLightTheme = () => setTheme('light')
  const setDarkTheme = () => setTheme('dark')

  const value = {
    theme,
    setLightTheme,
    setDarkTheme,
    autoShowExplanation,
    setAutoShowExplanation
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}