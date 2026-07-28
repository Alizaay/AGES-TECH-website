export const scrollToTop = (smooth = true) => {
  window.scrollTo({
    top: 0,
    behavior: smooth ? 'smooth' : 'auto',
  })
}

export const scrollToElement = (id, offset = 80) => {
  const el = document.getElementById(id)
  if (!el) return

  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
}

export const getScrollProgress = () => {
  const doc = document.documentElement
  const scrollTop = doc.scrollTop || document.body.scrollTop
  const scrollHeight = doc.scrollHeight - doc.clientHeight
  return scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
}

export default { scrollToTop, scrollToElement, getScrollProgress }