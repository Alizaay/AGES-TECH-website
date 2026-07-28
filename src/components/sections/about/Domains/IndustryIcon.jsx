import industry1 from '@/assets/icons/industry1.png'
import industry2 from '@/assets/icons/industry2.png'
import industry3 from '@/assets/icons/industry3.png'
import industry4 from '@/assets/icons/industry4.png'
import industry5 from '@/assets/icons/industry5.png'
import industry6 from '@/assets/icons/industry6.png'

const INDUSTRY_ICONS = {
  edtech: industry1,
  medtech: industry2,
  fintech: industry3,
  mobility: industry4,
  infrastructure: industry5,
  industrial: industry6,
}

/**
 * Industry icon from branded PNG assets (industry1–6).
 */
export const IndustryIcon = ({ name, className = 'size-14', alt = '' }) => {
  const src = INDUSTRY_ICONS[name]
  if (!src) return null

  return (
    <img
      src={src}
      alt={alt}
      className={`object-contain ${className}`}
      draggable={false}
    />
  )
}

export default IndustryIcon
