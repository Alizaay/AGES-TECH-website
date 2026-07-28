import { useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { cn } from '@/utils/helpers'
import NavSectionIcon from './NavSectionIcon'

/**
 * Desktop nav item.
 * - Plain links for items without sections
 * - Items with sections: click/navigate opens the full page; hover opens mega-menu
 */
const NavItem = ({ item, openMenu, setOpenMenu, onNavigate }) => {
  const location = useLocation()
  const linkRef = useRef(null)

  const hasSections = Array.isArray(item.sections) && item.sections.length > 0
  const menuKey = item.path
  const isOpen = openMenu === menuKey
  const isRouteActive =
    location.pathname === item.path ||
    (item.path !== '/' && location.pathname.startsWith(`${item.path}/`))

  if (!hasSections) {
    return (
      <NavLink
        to={item.path}
        onClick={onNavigate}
        className={({ isActive }) =>
          cn(
            'relative whitespace-nowrap px-1 py-2 text-sm font-medium transition-colors hover:text-[#4DB7E8]',
            isActive ? 'text-[#4DB7E8]' : 'text-text-heading'
          )
        }
      >
        {({ isActive }) => (
          <>
            {item.label}
            {isActive && (
              <span className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-[#4DB7E8]" />
            )}
          </>
        )}
      </NavLink>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenMenu(menuKey)}
    >
      <Link
        ref={linkRef}
        to={item.path}
        onClick={onNavigate}
        onFocus={() => setOpenMenu(menuKey)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          'relative inline-flex items-center gap-1 whitespace-nowrap px-1 py-2 text-sm font-medium transition-colors hover:text-[#4DB7E8]',
          isOpen || isRouteActive ? 'text-[#4DB7E8]' : 'text-text-heading'
        )}
      >
        {item.label}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden="true"
          className={cn(
            'transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        >
          <path
            d="M2 3.5L5 6.5L8 3.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {(isOpen || isRouteActive) && (
          <span className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-[#4DB7E8]" />
        )}
      </Link>
    </div>
  )
}

/**
 * Full-viewport-width dark mega menu bar — links to specific page sections.
 */
export const MegaMenuBar = ({ item, onNavigate, onClose }) => {
  if (!item?.sections?.length) return null

  const count = item.sections.length

  return (
    <div
      className="absolute inset-x-0 top-full z-40 w-full"
      onMouseEnter={() => {}}
    >
      <nav
        aria-label={`${item.label} sections`}
        className="w-full bg-[#06152E] shadow-[0_16px_40px_rgba(6,21,46,0.35)]"
      >
        <ul
          className={cn(
            'mx-auto w-full max-w-[1600px] items-center gap-2 px-4 py-4 sm:px-6 md:px-8 md:py-5 lg:px-10',
            count > 5
              ? 'grid grid-cols-2 gap-2 lg:grid-cols-3 xl:flex xl:flex-nowrap xl:justify-between'
              : 'flex flex-wrap justify-between sm:flex-nowrap'
          )}
        >
          {item.sections.map((section) => {
            const href = section.to || `${item.path}#${section.hash}`

            return (
              <li
                key={section.hash}
                className={cn(
                  'min-w-0',
                  count > 5
                    ? 'xl:flex-1'
                    : 'min-w-[120px] flex-1 basis-[45%] sm:basis-0'
                )}
              >
                <Link
                  to={href}
                  onClick={() => {
                    onNavigate?.()
                    onClose?.()
                  }}
                  className="group flex min-h-11 items-center justify-center gap-2 px-2 py-2.5 text-center text-xs font-semibold text-white transition hover:text-[#4DB7E8] sm:text-sm md:gap-2.5 md:text-[15px] xl:justify-center"
                >
                  <span className="shrink-0 text-[#4DB7E8] transition group-hover:scale-110">
                    <NavSectionIcon
                      name={section.icon || 'ceo'}
                      src={section.iconSrc}
                      bg={section.iconBg}
                    />
                  </span>
                  <span className="leading-snug">{section.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

MegaMenuBar.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        hash: PropTypes.string.isRequired,
        icon: PropTypes.string,
        to: PropTypes.string,
      })
    ),
  }),
  onNavigate: PropTypes.func,
  onClose: PropTypes.func,
}

NavItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        hash: PropTypes.string.isRequired,
        icon: PropTypes.string,
        to: PropTypes.string,
      })
    ),
  }).isRequired,
  openMenu: PropTypes.string,
  setOpenMenu: PropTypes.func.isRequired,
  onNavigate: PropTypes.func,
}

export default NavItem
