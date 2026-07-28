import { createContext, useContext, useState, useEffect } from 'react'
import {
  getStoredTheme,
  setStoredTheme,
  applyThemeToDocument,
} from '@/lib/theme'

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const stored = getStoredTheme()
    if (stored) setTheme(stored)
  }, [])

  useEffect(() => {
    applyThemeToDocument(theme)
    setStoredTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export default ThemeContext