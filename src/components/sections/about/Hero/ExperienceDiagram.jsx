import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import expertiseIcon from '@/assets/logos/aboutus/Expertise.png'
import impactIcon from '@/assets/logos/aboutus/Impact.png'
import approachIcon from '@/assets/logos/aboutus/Approach.png'
import commitmentIcon from '@/assets/logos/aboutus/Commitment.png'
import './ExperienceDiagram.css'

/**
 * Same layout as the HTML `#pws-circle-area` prototype:
 * navy circle + white cross + quadrant icons + center hub.
 */
const ICONS = [
  {
    id: 'impact',
    label: 'Impact',
    icon: impactIcon,
    className: 'pws-icon pws-icon-top',
  },
  {
    id: 'approach',
    label: 'Approach',
    icon: approachIcon,
    className: 'pws-icon pws-icon-right',
  },
  {
    id: 'commitment',
    label: 'Commitment',
    icon: commitmentIcon,
    className: 'pws-icon pws-icon-bottom',
  },
  {
    id: 'expertise',
    label: 'Expertise',
    icon: expertiseIcon,
    className: 'pws-icon pws-icon-left',
  },
]

const TARGET_YEARS = 8

const ExperienceDiagram = ({ className = '' }) => {
  const reduceMotion = useReducedMotion()
  const areaRef = useRef(null)
  const [years, setYears] = useState(reduceMotion ? TARGET_YEARS : 0)
  const [visible, setVisible] = useState(Boolean(reduceMotion))

  useEffect(() => {
    if (reduceMotion) return undefined

    const node = areaRef.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reduceMotion])

  useEffect(() => {
    if (!visible || reduceMotion) return undefined

    let frame = 0
    const duration = 900
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setYears(Math.round(eased * TARGET_YEARS))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible, reduceMotion])

  return (
    <div
      ref={areaRef}
      id="pws-circle-area"
      className={`pws-circle-area ${visible ? 'is-visible' : ''} ${className}`.trim()}
      role="img"
      aria-label="8+ years of experience across Expertise, Impact, Commitment, and Approach"
      style={{ '--radius': '34%' }}
    >
      <svg viewBox="0 0 400 400" aria-hidden="true">
        <circle cx="200" cy="200" r="200" fill="#062b55" />
        <line x1="200" y1="0" x2="200" y2="400" stroke="white" strokeWidth="18" />
        <line x1="0" y1="200" x2="400" y2="200" stroke="white" strokeWidth="18" />
      </svg>

      {ICONS.map((item) => (
        <div key={item.id} className={item.className}>
          <img src={item.icon} alt="" width={56} height={56} draggable={false} />
          {item.label}
        </div>
      ))}

      <div id="pws-center" className="pws-center">
        <h3 id="pws-counter" className="pws-counter">
          {years}+
        </h3>
        <span>
          Years of
          <br />
          Experience
        </span>
      </div>
    </div>
  )
}

export default ExperienceDiagram
