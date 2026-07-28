/**
 * ============================================================================
 * AGES-TECH DESIGN SYSTEM
 * ============================================================================
 * File: animations.js
 * ----------------------------------------------------------------------------
 * Description
 * ----------------------------------------------------------------------------
 * Centralized Motion Design System.
 *
 * PURPOSE
 * ----------------------------------------------------------------------------
 * • Standardize animations
 * • Standardize transitions
 * • Standardize Framer Motion variants
 * • Standardize hover interactions
 * • Standardize page transitions
 * • Premium animation language
 *
 * RULES
 * ----------------------------------------------------------------------------
 * ❌ Never create animation values inside components
 * ❌ Never hardcode durations
 * ❌ Never hardcode easing
 *
 * ✅ Always consume motion tokens
 * ============================================================================
 */

/* ============================================================================
   DURATIONS
============================================================================ */

export const DURATION = {
  instant: 0.1,

  fast: 0.2,

  normal: 0.35,

  slow: 0.5,

  slower: 0.7,

  page: 0.8,

  hero: 1,

  background: 8,
};

/* ============================================================================
   EASING
============================================================================ */

export const EASING = {
  linear: "linear",

  ease: "ease",

  easeIn: "easeIn",

  easeOut: "easeOut",

  easeInOut: "easeInOut",

  smooth: [0.22, 1, 0.36, 1],

  bounce: [0.34, 1.56, 0.64, 1],

  accelerate: [0.4, 0, 1, 1],

  decelerate: [0, 0, 0.2, 1],
};

/* ============================================================================
   SPRING PRESETS
============================================================================ */

export const SPRING = {
  soft: {
    type: "spring",
    stiffness: 120,
    damping: 18,
  },

  smooth: {
    type: "spring",
    stiffness: 180,
    damping: 22,
  },

  button: {
    type: "spring",
    stiffness: 320,
    damping: 24,
  },

  modal: {
    type: "spring",
    stiffness: 240,
    damping: 24,
  },
};

/* ============================================================================
   STAGGER
============================================================================ */

export const STAGGER = {
  xs: 0.05,

  sm: 0.08,

  md: 0.12,

  lg: 0.16,

  xl: 0.22,
};

/* ============================================================================
   FADE VARIANTS
============================================================================ */

export const FADE = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASING.smooth,
    },
  },
};

/* ============================================================================
   FADE UP
============================================================================ */

export const FADE_UP = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
};

/* ============================================================================
   FADE DOWN
============================================================================ */

export const FADE_DOWN = {
  hidden: {
    opacity: 0,
    y: -40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
};

/* ============================================================================
   SLIDE LEFT
============================================================================ */

export const SLIDE_LEFT = {
  hidden: {
    opacity: 0,
    x: 60,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
};

/* ============================================================================
   SLIDE RIGHT
============================================================================ */

export const SLIDE_RIGHT = {
  hidden: {
    opacity: 0,
    x: -60,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: DURATION.slow,
      ease: EASING.smooth,
    },
  },
};

/* ============================================================================
   SCALE
============================================================================ */

export const SCALE = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: DURATION.normal,
      ease: EASING.smooth,
    },
  },
};

/* ============================================================================
   FLOATING
============================================================================ */

export const FLOAT = {
  animate: {
    y: [0, -12, 0],

    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

/* ============================================================================
   BUTTON HOVER
============================================================================ */

export const BUTTON_HOVER = {
  whileHover: {
    scale: 1.04,
    y: -2,
  },

  whileTap: {
    scale: 0.98,
  },
};

/* ============================================================================
   CARD HOVER
============================================================================ */

export const CARD_HOVER = {
  whileHover: {
    y: -8,
    scale: 1.015,
  },

  transition: SPRING.soft,
};

/* ============================================================================
   IMAGE HOVER
============================================================================ */

export const IMAGE_HOVER = {
  whileHover: {
    scale: 1.05,
  },

  transition: {
    duration: DURATION.slow,
  },
};

/* ============================================================================
   PAGE TRANSITION
============================================================================ */

export const PAGE = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
  },

  exit: {
    opacity: 0,
  },

  transition: {
    duration: DURATION.page,
    ease: EASING.smooth,
  },
};

/* ============================================================================
   EXPORT
============================================================================ */

const animations = {
  DURATION,

  EASING,

  SPRING,

  STAGGER,

  FADE,

  FADE_UP,

  FADE_DOWN,

  SLIDE_LEFT,

  SLIDE_RIGHT,

  SCALE,

  FLOAT,

  BUTTON_HOVER,

  CARD_HOVER,

  IMAGE_HOVER,

  PAGE,
};

export default animations;