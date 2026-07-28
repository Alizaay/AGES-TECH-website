import PropTypes from 'prop-types'
import clsx from 'clsx'

/**
 * Icons for mega-menu items.
 * - `src` → project image assets (Service / Stage PNGs)
 * - `bg="white"` → white circular backing (used for stage icons)
 * - fallback → cyan stroke SVGs for About sections
 */
const NavSectionIcon = ({ name, src, bg, className = 'size-5' }) => {
  if (src) {
    const image = (
      <img
        src={src}
        alt=""
        className={clsx(
          'object-contain',
          bg === 'white' ? 'size-[70%]' : className
        )}
        width={20}
        height={20}
        draggable={false}
      />
    )

    if (bg === 'white') {
      return (
        <span
          className={clsx(
            'inline-flex shrink-0 items-center justify-center rounded-full bg-white shadow-sm',
            className === 'size-5' ? 'size-7' : className
          )}
        >
          {image}
        </span>
      )
    }

    return image
  }

  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.7',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  switch (name) {
    case 'ceo':
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <circle cx="12" cy="9" r="2.5" />
          <path d="M8 17c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" />
        </svg>
      )
    case 'tech':
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="10" rx="1.5" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.5 5.5l1.5 1.5M17 17l1.5 1.5M18.5 5.5L17 7M7 17l-1.5 1.5" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    case 'industries':
      return (
        <svg {...common}>
          <path d="M4 20V9l5-3v3l5-3v14M4 20h16M14 20V10h6v10" />
          <path d="M7 12h1M7 15h1M10 12h1M10 15h1M16 13h1M16 16h1" />
        </svg>
      )
    case 'progress':
      return (
        <svg {...common}>
          <path d="M8 4h8l-2 6h3L9 20l1.5-7H7.5L8 4z" />
        </svg>
      )
    case 'highlights':
      return (
        <svg {...common}>
          <path d="M4 18V10M9 18V6M14 18v-5M19 18V8" />
          <path d="M3 18h18" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      )
  }
}

NavSectionIcon.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  bg: PropTypes.oneOf(['white']),
  className: PropTypes.string,
}

export default NavSectionIcon
