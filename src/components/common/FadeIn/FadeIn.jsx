import PropTypes from 'prop-types'
import { motion, useReducedMotion } from 'framer-motion'
import clsx from 'clsx'

const EASE = [0.16, 1, 0.3, 1]

/**
 * Scroll fade-in / fade-out for text and content blocks.
 * Enters when in view; fades out when scrolling away (unless once).
 */
export function FadeIn({
  as = 'div',
  children,
  className,
  delay = 0,
  duration = 0.55,
  y = 18,
  once = false,
  amount = 0.3,
  style,
}) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as] || motion.div

  if (reduceMotion) {
    const Tag = as === 'div' || as === 'span' || as === 'p' || as === 'h1' || as === 'h2' || as === 'h3' || as === 'ul' || as === 'li' || as === 'section' || as === 'article'
      ? as
      : 'div'
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={clsx(className)}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount, margin: '0px 0px -8% 0px' }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}

FadeIn.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number,
  y: PropTypes.number,
  once: PropTypes.bool,
  amount: PropTypes.number,
  style: PropTypes.object,
}

/**
 * Stagger children fade-in / fade-out as a group.
 */
export function FadeInStagger({
  as = 'div',
  children,
  className,
  stagger = 0.08,
  delay = 0,
  once = false,
  amount = 0.2,
}) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as] || motion.div
  const StaticTag = as === 'ul' || as === 'ol' || as === 'section' ? as : 'div'

  if (reduceMotion) {
    return <StaticTag className={className}>{children}</StaticTag>
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: '0px 0px -8% 0px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </MotionTag>
  )
}

FadeInStagger.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  stagger: PropTypes.number,
  delay: PropTypes.number,
  once: PropTypes.bool,
  amount: PropTypes.number,
}

export function FadeInItem({ children, className, as = 'div', y = 14 }) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion[as] || motion.div
  const StaticTag = as === 'li' || as === 'article' || as === 'span' ? as : 'div'

  if (reduceMotion) {
    return <StaticTag className={className}>{children}</StaticTag>
  }

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: EASE },
        },
      }}
    >
      {children}
    </MotionTag>
  )
}

FadeInItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  as: PropTypes.string,
  y: PropTypes.number,
}

export default FadeIn
