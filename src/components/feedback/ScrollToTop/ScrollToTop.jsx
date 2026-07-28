import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToTop } from '@/utils/scroll'

const ScrollToTop = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If the URL includes a hash, `useScrollToHash` owns scrolling to that
    // section — skip the top-scroll so it doesn't flash before that happens.
    if (hash) return
    scrollToTop(false)
  }, [pathname, hash])

  return null
}

export default ScrollToTop
