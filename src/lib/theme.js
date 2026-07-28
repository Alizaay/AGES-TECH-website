import { storage } from './storage'

export const THEME_STORAGE_KEY = 'ages-tech-theme'

export const getStoredTheme = () => storage.get(THEME_STORAGE_KEY, null)

export const setStoredTheme = (theme) => storage.set(THEME_STORAGE_KEY, theme)

export const applyThemeToDocument = (theme) => {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('data-theme', theme)
}

export default {
  THEME_STORAGE_KEY,
  getStoredTheme,
  setStoredTheme,
  applyThemeToDocument,
}