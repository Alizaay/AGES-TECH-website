import { useState, useEffect, useRef } from 'react'

/**
 * Observe element visibility via IntersectionObserver.
 * Alias sibling of useAnimation for clearer naming.
 */
const useIntersection = (options = {}) => {
  const { threshold = 0.2, triggerOnce = true, root = null, rootMargin = '0px' } = options
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [entry, setEntry] = useState(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([observerEntry]) => {
        setEntry(observerEntry)
        if (observerEntry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) observer.unobserve(node)
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, root, rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, triggerOnce, root, rootMargin])

  return { ref, isVisible, entry }
}

export default useIntersection