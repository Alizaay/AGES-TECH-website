import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls the matching `#hash` element into view whenever the route's hash
 * changes (including on initial load). Retries briefly so destination pages
 * have time to mount before we measure.
 */
const useScrollToHash = () => {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return undefined

    const id = hash.replace('#', '')
    let cancelled = false
    let timer

    const tryScroll = (attempt = 0) => {
      if (cancelled) return
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      if (attempt < 12) {
        timer = window.setTimeout(() => tryScroll(attempt + 1), 40)
      }
    }

    const raf = requestAnimationFrame(() => tryScroll(0))

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      if (timer) window.clearTimeout(timer)
    }
  }, [hash, pathname])
}

export default useScrollToHash
