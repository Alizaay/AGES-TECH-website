import { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { character360 } from '@/data/about'
import ProjectDetails from './ProjectDetails'
import ProjectNavigation from './ProjectNavigation'

/**
 * Interactive product showcase — card select, keyboard, and swipe (no arrow UI).
 */
const ProductShowcase = ({
  projects = character360.projects,
  ecosystem = character360.ecosystem,
}) => {
  const [activeId, setActiveId] = useState(projects[0]?.id)
  const touchStartX = useRef(null)
  const sectionRef = useRef(null)

  const activeIndex = Math.max(
    0,
    projects.findIndex((project) => project.id === activeId)
  )
  const activeProject = projects[activeIndex] || projects[0]

  const selectById = useCallback(
    (id) => {
      if (projects.some((project) => project.id === id)) {
        setActiveId(id)
      }
    },
    [projects]
  )

  const goPrev = useCallback(() => {
    const nextIndex = (activeIndex - 1 + projects.length) % projects.length
    setActiveId(projects[nextIndex].id)
  }, [activeIndex, projects])

  const goNext = useCallback(() => {
    const nextIndex = (activeIndex + 1) % projects.length
    setActiveId(projects[nextIndex].id)
  }, [activeIndex, projects])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return

      const target = event.target
      if (
        target instanceof HTMLElement &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return
      }

      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const inView = rect.top < window.innerHeight && rect.bottom > 0
      if (!inView) return

      event.preventDefault()
      if (event.key === 'ArrowLeft') goPrev()
      else goNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goPrev, goNext])

  const onTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null
  }

  const onTouchEnd = (event) => {
    if (touchStartX.current == null) return
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current
    const delta = endX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(delta) < 48) return
    if (delta > 0) goPrev()
    else goNext()
  }

  if (!activeProject) return null

  return (
    <div ref={sectionRef} className="w-full min-w-0">
      <div
        className="mt-8 touch-pan-y sm:mt-10"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <ProjectDetails project={activeProject} />
      </div>

      <div className="mt-8 sm:mt-10 lg:mt-12">
        <ProjectNavigation
          projects={projects}
          activeId={activeProject.id}
          onSelect={selectById}
          ecosystem={ecosystem}
        />
      </div>
    </div>
  )
}

ProductShowcase.propTypes = {
  projects: PropTypes.array,
  ecosystem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }),
}

export default ProductShowcase
