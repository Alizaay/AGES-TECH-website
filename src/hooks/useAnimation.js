import useIntersection from './useIntersection'

/** @deprecated Prefer useIntersection — kept for backward compatibility */
const useAnimation = (options = {}) => {
  const { ref, isVisible } = useIntersection(options)
  return { ref, isVisible }
}

export default useAnimation