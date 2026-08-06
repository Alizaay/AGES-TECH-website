import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import navigation from '@/config/navigation'
import useScroll from '@/hooks/useScroll'
import { useApp } from '@/context/AppContext'
import MobileMenu from '@/components/navigation/MobileMenu'
import BrandLogo from '@/components/common/BrandLogo'
import NavItem, { MegaMenuBar } from './NavItem'
import { cn } from '@/utils/helpers'

const Navbar = () => {
  const { scrolled } = useScroll()
  const location = useLocation()
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useApp()
  const [openMenu, setOpenMenu] = useState(null)
  const headerRef = useRef(null)

  const activeDropdownItem = navigation.find((item) => item.path === openMenu)

  useEffect(() => {
    setOpenMenu(null)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (!openMenu) return undefined

    const handleOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenMenu(null)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') setOpenMenu(null)
    }

    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [openMenu])

  useEffect(() => {
    if (isMobileMenuOpen) setOpenMenu(null)
  }, [isMobileMenuOpen])

  const handleNavigate = () => {
    setOpenMenu(null)
    closeMobileMenu()
  }

  return (
    <>
      {/* Spacer so page content isn’t covered by the fixed header */}
      <div
        className="h-16 shrink-0 sm:h-[72px] md:h-20"
        aria-hidden="true"
      />

      <header
        ref={headerRef}
        className={cn(
          'fixed inset-x-0 top-0 z-50 w-full transition-[background-color,box-shadow] duration-300',
          scrolled || openMenu || isMobileMenuOpen
            ? 'bg-white shadow-[0_1px_0_rgba(16,42,67,0.06)]'
            : 'bg-white/95 backdrop-blur-sm'
        )}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <nav className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-6 md:h-20 md:px-8 lg:px-10">
          <BrandLogo lockup="full" onClick={handleNavigate} />

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 lg:flex xl:gap-6 2xl:gap-8">
            {navigation.map((item) => (
              <li key={`${item.path}-${item.label}`}>
                <NavItem
                  item={item}
                  openMenu={openMenu}
                  setOpenMenu={setOpenMenu}
                  onNavigate={handleNavigate}
                />
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/contact"
              onClick={handleNavigate}
              className="hidden rounded-full bg-[#0B1B3A] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#152848] sm:inline-flex sm:px-5 sm:py-2.5 sm:text-sm md:px-6"
            >
              Get Started
            </Link>

            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-lg text-text-heading transition hover:bg-neutral-100 lg:hidden"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        <div className="hidden lg:block">
          {activeDropdownItem && (
            <MegaMenuBar
              item={activeDropdownItem}
              onNavigate={handleNavigate}
              onClose={() => setOpenMenu(null)}
            />
          )}
        </div>

        <MobileMenu />
      </header>
    </>
  )
}

export default Navbar
