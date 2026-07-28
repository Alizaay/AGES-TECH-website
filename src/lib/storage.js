const isBrowser = typeof window !== 'undefined'

export const storage = {
  get(key, fallback = null) {
    if (!isBrowser) return fallback
    try {
      const raw = localStorage.getItem(key)
      if (raw === null) return fallback
      return JSON.parse(raw)
    } catch {
      return fallback
    }
  },
  set(key, value) {
    if (!isBrowser) return
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // ignore quota / private mode errors
    }
  },
  remove(key) {
    if (!isBrowser) return
    localStorage.removeItem(key)
  },
}

export default storage