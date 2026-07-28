import { useState, useEffect } from 'react'
import { storage } from '@/lib/storage'

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => storage.get(key, initialValue))

  useEffect(() => {
    storage.set(key, value)
  }, [key, value])

  return [value, setValue]
}

export default useLocalStorage