/**
 * ============================================================================
 * AGES-TECH DESIGN SYSTEM
 * ============================================================================
 *
 * File:
 * tailwind.js
 *
 * Description
 * ----------------------------------------------------------------------------
 * Converts Design Tokens into Tailwind Theme Tokens.
 *
 * This file is the bridge between:
 *
 * Design System
 *        ↓
 * Tailwind CSS
 *
 * Never hardcode values inside tailwind.config.js.
 *
 * ============================================================================
 */

import { COLORS } from "./colors";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LETTER_SPACING,
  LINE_HEIGHT,
} from "./typography";

import {
  SPACING,
  CONTAINER,
} from "./spacing";

import {
  RADIUS,
} from "./radius";

import {
  SHADOW,
} from "./shadows";

import {
  SCREENS,
  CONTAINERS,
} from "./breakpoints";

import {
  Z_INDEX,
} from "./zIndex";

import {
  DURATION,
} from "./animations";

/* ============================================================================
   THEME
============================================================================ */

const rawTheme = {

  container: {

    center: true,

    padding: {

      DEFAULT: CONTAINER.padding.mobile,

      sm: CONTAINER.padding.mobile,

      md: CONTAINER.padding.tablet,

      lg: CONTAINER.padding.laptop,

      xl: CONTAINER.padding.desktop,

      "2xl": CONTAINER.padding.wide,

    },

    screens: {

      sm: CONTAINER.maxWidth.sm,

      md: CONTAINER.maxWidth.md,

      lg: CONTAINER.maxWidth.lg,

      xl: CONTAINER.maxWidth.xl,

      "2xl": CONTAINER.maxWidth["2xl"],

      "3xl": CONTAINER.maxWidth["3xl"],

    },

  },

  screens: SCREENS,

  extend: {

    /* ---------------------------------------------------------------------- */
    /* Colors */
    /* ---------------------------------------------------------------------- */

    colors: {

      ...COLORS,

    },

    /* ---------------------------------------------------------------------- */
    /* Fonts */
    /* ---------------------------------------------------------------------- */

    fontFamily: {

      ...FONT_FAMILY,

    },

    fontSize: {

      ...FONT_SIZE,

    },

    fontWeight: {

      ...FONT_WEIGHT,

    },

    letterSpacing: {

      ...LETTER_SPACING,

    },

    lineHeight: {

      ...LINE_HEIGHT,

    },

    /* ---------------------------------------------------------------------- */
    /* Spacing */
    /* ---------------------------------------------------------------------- */

    spacing: {

      ...SPACING,

    },

    /* ---------------------------------------------------------------------- */
    /* Radius */
    /* ---------------------------------------------------------------------- */

    borderRadius: {

      ...RADIUS,

    },

    /* ---------------------------------------------------------------------- */
    /* Shadows */
    /* ---------------------------------------------------------------------- */

    boxShadow: {

      ...SHADOW,

    },

    /* ---------------------------------------------------------------------- */
    /* Z Index */
    /* ---------------------------------------------------------------------- */

    zIndex: {

      ...Z_INDEX,

    },

    /* ---------------------------------------------------------------------- */
    /* Background Images */
    /* ---------------------------------------------------------------------- */

    backgroundImage: {

      "hero-gradient": COLORS.gradients.hero,

      "primary-gradient": COLORS.gradients.primary,

      "secondary-gradient": COLORS.gradients.secondary,

      "footer-gradient": COLORS.gradients.footer,

      "glass-gradient": COLORS.gradients.glass,

    },

    /* ---------------------------------------------------------------------- */
    /* Max Width */
    /* ---------------------------------------------------------------------- */

    maxWidth: {

      narrow: CONTAINERS.narrow,

      content: CONTAINERS.default,

      wide: CONTAINERS.wide,

      full: CONTAINERS.full,

    },

    /* ---------------------------------------------------------------------- */
    /* Transition */
    /* ---------------------------------------------------------------------- */

    transitionTimingFunction: {

      DEFAULT: "cubic-bezier(.22,1,.36,1)",

    },

    /* ---------------------------------------------------------------------- */
    /* Keyframes / Animations */
    /* ---------------------------------------------------------------------- */

    keyframes: {

      fadeIn: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },

      fadeInUp: {
        from: { opacity: "0", transform: "translateY(24px)" },
        to: { opacity: "1", transform: "translateY(0)" },
      },

    },

    animation: {

      "fade-in": `fadeIn ${DURATION.normal}s cubic-bezier(.22,1,.36,1) forwards`,

      "fade-in-up": `fadeInUp ${DURATION.slow}s cubic-bezier(.22,1,.36,1) forwards`,

    },

  },

};

/**
 * Deep-clone into plain data.
 *
 * The tokens above are imported as live ESM bindings. When Tailwind's
 * internal `cloneDeep` walks this object during config resolution, it can
 * recurse through those live getters and overflow the call stack. Cloning
 * through JSON strips all bindings/getters and leaves a 100% plain object,
 * which is all Tailwind ever needs.
 */
export const theme = JSON.parse(JSON.stringify(rawTheme));

export default theme;