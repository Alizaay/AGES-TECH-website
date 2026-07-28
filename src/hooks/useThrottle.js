import { useState, useEffect, useRef } from 'react'

const useThrottle = (value, interval = 200) => {
  const [throttled, setThrottled] = useState(value)
  const lastRan = useRef(Date.now())

  useEffect(() => {
    const remaining = interval - (Date.now() - lastRan.current)
    if (remaining <= 0) {
      lastRan.current = Date.now()
      setThrottled(value)
      return undefined
    }

    const id = setTimeout(() => {
      lastRan.current = Date.now()
      setThrottled(value)
    }, remaining)

    return () => clearTimeout(id)
  }, [value, interval])

  return throttled
}

export default useThrottle