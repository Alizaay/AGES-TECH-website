import { useEffect } from 'react'

const useLockBodyScroll = (locked = true) => {
  useEffect(() => {
    if (!locked) return undefined

    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [locked])
}

export default useLockBodyScroll