import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import config from '@/config'
import logoFull from '@/assets/icons/LOGO1.png'
import logoMark from '@/assets/icons/logo.png'

/**
 * Brand logo
 * - lockup="full" → LOGO1.png (mark + wordmark + tagline)
 * - lockup="mark" → logo.png (icon only)
 */
const BrandLogo = ({
  to = '/',
  lockup = 'full',
  asLink = true,
  className,
  onClick,
}) => {
  const isMark = lockup === 'mark'
  const src = isMark ? logoMark : logoFull

  const content = (
    <img
      src={src}
      alt={config.appName}
      className={clsx(
        'w-auto object-contain object-left',
        isMark
          ? 'h-9 max-w-[40px] sm:h-12 sm:max-w-none md:h-14'
          : 'h-11 max-w-[min(180px,52vw)] xs:max-w-[min(200px,58vw)] sm:h-16 sm:max-w-none md:h-[4.5rem] lg:h-[5.25rem]'
      )}
      width={isMark ? 56 : 320}
      height={isMark ? 56 : 96}
    />
  )

  const classes = clsx(
    'inline-flex items-center',
    isMark
      ? 'shrink-0'
      : 'max-w-[min(180px,52vw)] xs:max-w-[min(200px,58vw)] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[480px]',
    className
  )

  if (!asLink) {
    return <div className={classes}>{content}</div>
  }

  return (
    <Link
      to={to}
      onClick={onClick}
      className={classes}
      aria-label={config.appName}
    >
      {content}
    </Link>
  )
}

BrandLogo.propTypes = {
  to: PropTypes.string,
  lockup: PropTypes.oneOf(['full', 'mark']),
  asLink: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default BrandLogo
