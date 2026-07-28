export { scrollToTop, scrollToElement, getScrollProgress } from '@/lib/scroll'

export const getFocusableElements = (container) => {
  if (!container) return []
  return Array.from(
    container.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    )
  )
}

export default { getFocusableElements }