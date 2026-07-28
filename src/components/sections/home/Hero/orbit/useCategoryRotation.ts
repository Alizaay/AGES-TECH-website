import { useCallback, useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { Category } from './types'

export interface UseCategoryRotationOptions {
  categories: Category[]
  autoRotate?: boolean
  changeInterval?: number
}

export interface UseCategoryRotationResult {
  activeIndex: number
  activeCategory: Category | null
  /** Monotonic step counter — advances every interval (drives orbit slots) */
  tick: number
  isPaused: boolean
  goTo: (index: number) => void
  next: () => void
  prev: () => void
  pause: () => void
  resume: () => void
}

/**
 * Every `changeInterval` ms: advances `tick` (orbit step) and category index.
 * Pause/resume supported for hover.
 */
export function useCategoryRotation({
  categories,
  autoRotate = true,
  changeInterval = 3000,
}: UseCategoryRotationOptions): UseCategoryRotationResult {
  const prefersReducedMotion = useReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)
  const [tick, setTick] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const count = categories.length

  const goTo = useCallback(
    (index: number) => {
      if (count === 0) return
      setActiveIndex(((index % count) + count) % count)
    },
    [count]
  )

  const next = useCallback(() => {
    setTick((value) => value + 1)
    if (count > 1) {
      setActiveIndex((current) => (current + 1) % count)
    }
  }, [count])

  const prev = useCallback(() => {
    setTick((value) => value + 1)
    if (count > 1) {
      setActiveIndex((current) => (current - 1 + count) % count)
    }
  }, [count])

  const pause = useCallback(() => setIsPaused(true), [])
  const resume = useCallback(() => setIsPaused(false), [])

  useEffect(() => {
    if (count === 0) {
      setActiveIndex(0)
      return
    }
    if (activeIndex >= count) setActiveIndex(0)
  }, [activeIndex, count])

  useEffect(() => {
    if (!autoRotate || prefersReducedMotion || isPaused) return

    const id = window.setInterval(() => {
      setTick((value) => value + 1)
      if (count > 1) {
        setActiveIndex((current) => (current + 1) % count)
      }
    }, changeInterval)

    return () => window.clearInterval(id)
  }, [autoRotate, changeInterval, count, isPaused, prefersReducedMotion])

  return {
    activeIndex,
    activeCategory: count > 0 ? (categories[activeIndex] ?? null) : null,
    tick,
    isPaused,
    goTo,
    next,
    prev,
    pause,
    resume,
  }
}

export default useCategoryRotation
