import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import navigation from '@/config/navigation'
import { useApp } from '@/context/AppContext'
import { cn } from '@/utils/helpers'
import NavSectionIcon from '@/components/navigation/Navbar/NavSectionIcon'

/**
 * Mobile / tablet drawer menu.
 * About Us expands into a dark navy panel matching the desktop mega-menu.
 */
const MobileMenu = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useApp()
  const [expanded, setExpanded] = useState(null)

  if (!isMobileMenuOpen) return null

  return (
    <div className="border-t border-border-light bg-white lg:hidden">
      <ul className="flex max-h-[min(75vh,640px)] flex-col gap-1 overflow-y-auto px-4 py-3 sm:px-6">
        {navigation.map((item) => {
          const hasSections = Array.isArray(item.sections) && item.sections.length > 0
          const itemKey = `${item.path}-${item.label}`
          const isExpanded = expanded === itemKey

          if (!hasSections) {
            return (
              <li key={itemKey}>
                <NavLink
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-xl px-3 py-3 text-base font-medium transition',
                      isActive
                        ? 'bg-brand-50 text-[#4DB7E8]'
                        : 'text-text-heading hover:bg-neutral-50'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            )
          }

          return (
            <li key={itemKey}>
              <div className="flex items-center gap-1">
                <NavLink
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    cn(
                      'block flex-1 rounded-xl px-3 py-3 text-base font-medium transition',
                      isActive || isExpanded
                        ? 'text-[#4DB7E8]'
                        : 'text-text-heading hover:bg-neutral-50'
                    )
                  }
                >
                  {item.label}
                </NavLink>

                <button
                  type="button"
                  onClick={() =>
                    setExpanded((current) => (current === itemKey ? null : itemKey))
                  }
                  aria-expanded={isExpanded}
                  aria-label={`Toggle ${item.label} sections`}
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl text-text-muted transition hover:bg-brand-50 hover:text-[#4DB7E8]"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 10 10"
                    fill="none"
                    aria-hidden="true"
                    className={cn(
                      'transition-transform duration-200',
                      isExpanded && 'rotate-180'
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
                </button>
              </div>

              {isExpanded && (
                <ul className="mb-2 mt-1 overflow-hidden rounded-2xl bg-[#06152E] px-2 py-2">
                  {item.sections.map((section) => (
                    <li key={section.hash}>
                      <Link
                        to={section.to || `${item.path}#${section.hash}`}
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:text-[#4DB7E8]"
                      >
                        <span className="text-[#4DB7E8]">
                          <NavSectionIcon
                            name={section.icon || 'ceo'}
                            src={section.iconSrc}
                            bg={section.iconBg}
                          />
                        </span>
                        {section.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}

        <li className="pt-2 sm:hidden">
          <NavLink
            to="/contact"
            onClick={closeMobileMenu}
            className="block rounded-full bg-[#0B1B3A] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Get Started
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu
