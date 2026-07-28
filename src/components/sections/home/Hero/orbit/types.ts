export interface OrbitItem {
  id: string
  number: string
  title: string
  /** Icon key rendered as Figma-matching SVG in Orbit */
  icon: string
}

export interface Category {
  id: string
  title: string
  items: OrbitItem[]
}

export interface OrbitNodeState {
  id: string
  angle: number
  radius: number
  icon: string
  title: string
  number: string
  x: number
  y: number
}

/** Figma label sides — top/bottom centered; left/right beside icon */
export type LabelPlacement = 'top' | 'right' | 'bottom' | 'left'

export interface OrbitProps {
  categories: Category[]
  /** Seconds for one full revolution around the center logo */
  rotationSpeed?: number
  centerLogo?: string
  /** Optional class for the center logo image */
  centerLogoClassName?: string
  className?: string
  /** @deprecated Continuous orbit; kept for API compat */
  autoRotate?: boolean
  /** @deprecated Continuous orbit; kept for API compat */
  changeInterval?: number
}

export type OrbitDirection = 'anticlockwise' | 'clockwise'

export const ORBIT_SPRING = {
  type: 'spring' as const,
  stiffness: 85,
  damping: 18,
  mass: 0.85,
}

/**
 * Map math angle (0 = east/right, + = clockwise with y-down) to Figma label side.
 * Top & bottom → label stack below icon (centered).
 * East half → label to the right (left-aligned).
 * West half → label to the left (right-aligned).
 */
export function placementFromAngle(angleRad: number): LabelPlacement {
  const deg = (((angleRad * 180) / Math.PI) % 360 + 360) % 360
  // 0° right, 90° bottom, 180° left, 270° top
  if (deg >= 245 && deg < 295) return 'top'
  if (deg >= 295 || deg < 65) return 'right'
  if (deg >= 65 && deg < 115) return 'bottom'
  return 'left'
}
