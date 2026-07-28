import {
  motionValue,
  useAnimationFrame,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion'
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from 'react'
import type { OrbitItem } from './types'

const TAU = Math.PI * 2
/** Icons sit on the ring — radius as fraction of stage width */
const DEFAULT_RADIUS_RATIO = 0.42
const MAX_SLOTS = 12

export interface AnimatedOrbitNode {
  id: string
  slotIndex: number
  icon: string
  title: string
  number: string
  radius: number
  x: MotionValue<number>
  y: MotionValue<number>
  angle: MotionValue<number>
}

export interface UseOrbitAnimationOptions {
  items: OrbitItem[]
  /** Seconds for one full revolution around the center */
  rotationSpeed?: number
  enabled?: boolean
  /** anticlockwise = Figma / reference motion */
  direction?: 'anticlockwise' | 'clockwise'
  radiusRatio?: number
}

export interface UseOrbitAnimationResult {
  containerRef: RefObject<HTMLDivElement | null>
  nodes: AnimatedOrbitNode[]
  dots: Array<{ key: string; x: MotionValue<number>; y: MotionValue<number> }>
  isAnimating: boolean
}

function polar(angle: number, radius: number) {
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  }
}

function baseAngle(index: number, count: number) {
  // Equal spacing from top (−π/2); works for 7 stages → 360°/7
  return -Math.PI / 2 + (TAU * index) / count
}

/**
 * Continuous polar orbit: each node travels around the center logo.
 * x/y from angle — no parent rotate, so icons & labels stay upright.
 */
export function useOrbitAnimation({
  items,
  rotationSpeed = 40,
  enabled = true,
  direction = 'anticlockwise',
  radiusRatio = DEFAULT_RADIUS_RATIO,
}: UseOrbitAnimationOptions): UseOrbitAnimationResult {
  const prefersReducedMotion = useReducedMotion()
  const isAnimating = Boolean(enabled && !prefersReducedMotion)

  const containerRef = useRef<HTMLDivElement | null>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  const offsetRef = useRef(0)
  const itemsRef = useRef(items)
  const radiusRef = useRef(0)
  const directionRef = useRef(direction)
  const isAnimatingRef = useRef(isAnimating)
  const radPerMsRef = useRef(TAU / (Math.max(rotationSpeed, 0.001) * 1000))

  const slotMotionRef = useRef(
    Array.from({ length: MAX_SLOTS }, () => ({
      angle: motionValue(0),
      x: motionValue(0),
      y: motionValue(0),
    }))
  )

  const dotMotionRef = useRef(
    Array.from({ length: MAX_SLOTS }, () => ({
      x: motionValue(0),
      y: motionValue(0),
    }))
  )

  itemsRef.current = items
  directionRef.current = direction
  isAnimatingRef.current = isAnimating
  radPerMsRef.current = TAU / (Math.max(rotationSpeed, 0.001) * 1000)

  // Radius as fraction of stage — keeps labels readable at each size.
  // Desktop (≥450) keeps the full 0.42 desktop ratio.
  const effectiveRatio =
    containerWidth > 0 && containerWidth < 300
      ? Math.min(radiusRatio, 0.35)
      : containerWidth > 0 && containerWidth < 380
        ? Math.min(radiusRatio, 0.37)
        : containerWidth > 0 && containerWidth < 450
          ? Math.min(radiusRatio, 0.39)
          : radiusRatio

  const radius = useMemo(
    () => containerWidth * effectiveRatio,
    [containerWidth, effectiveRatio]
  )
  radiusRef.current = radius

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const sync = () => setContainerWidth(el.getBoundingClientRect().width)
    sync()
    const observer = new ResizeObserver(sync)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const writePositions = (currentItems: OrbitItem[], offset: number) => {
    const count = currentItems.length
    const r = radiusRef.current
    if (count === 0 || r <= 0) return

    for (let i = 0; i < count; i += 1) {
      const angle = baseAngle(i, count) + offset
      const { x, y } = polar(angle, r)
      const slot = slotMotionRef.current[i]
      slot.angle.set(angle)
      slot.x.set(x)
      slot.y.set(y)

      const mid = polar(angle + TAU / count / 2, r)
      const dot = dotMotionRef.current[i]
      dot.x.set(mid.x)
      dot.y.set(mid.y)
    }
  }

  useEffect(() => {
    writePositions(items, offsetRef.current)
  }, [items, radius])

  useAnimationFrame((_, delta) => {
    if (isAnimatingRef.current) {
      const sign = directionRef.current === 'anticlockwise' ? -1 : 1
      offsetRef.current += sign * radPerMsRef.current * delta
    }
    writePositions(itemsRef.current, offsetRef.current)
  })

  const nodes: AnimatedOrbitNode[] = useMemo(() => {
    if (radius <= 0) return []
    return items.map((item, index) => {
      const slot = slotMotionRef.current[index]
      return {
        id: item.id,
        slotIndex: index,
        icon: item.icon,
        title: item.title,
        number: item.number,
        radius,
        x: slot.x,
        y: slot.y,
        angle: slot.angle,
      }
    })
  }, [items, radius])

  const dots = useMemo(() => {
    if (radius <= 0 || items.length === 0) return []
    return items.map((_, index) => ({
      key: `dot-${index}`,
      x: dotMotionRef.current[index].x,
      y: dotMotionRef.current[index].y,
    }))
  }, [items.length, radius])

  return {
    containerRef,
    nodes,
    dots,
    isAnimating,
  }
}

export default useOrbitAnimation
