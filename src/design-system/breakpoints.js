/**
 * ============================================================================
 * AGES-TECH DESIGN SYSTEM
 * ============================================================================
 * File: breakpoints.js
 * ----------------------------------------------------------------------------
 * Description
 * ----------------------------------------------------------------------------
 * Responsive design tokens for AGES-TECH.
 *
 * PURPOSE
 * ----------------------------------------------------------------------------
 * • Centralized responsive breakpoints
 * • Shared by Tailwind
 * • Shared by JS hooks
 * • Shared by components
 * • Shared by animations
 * • Shared by layouts
 *
 * RULES
 * ----------------------------------------------------------------------------
 * ❌ Never hardcode media query values
 * ❌ Never use random screen sizes
 *
 * ✅ Always consume these tokens
 * ============================================================================
 */

/* ============================================================================
   SCREEN BREAKPOINTS (Tailwind)
============================================================================ */

export const SCREENS = {
  xs: "375px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1440px",
  "3xl": "1600px",
  "4xl": "1920px",
};

/* ============================================================================
   DEVICE WIDTHS (JavaScript)
============================================================================ */

export const DEVICES = {
  mobileSmall: 320,
  mobile: 375,
  mobileLarge: 480,

  tablet: 768,

  laptop: 1024,

  desktop: 1280,

  desktopLarge: 1440,

  ultraWide: 1600,

  fullHD: 1920,

  fourK: 2560,
};

/* ============================================================================
   CONTAINER WIDTHS
============================================================================ */

export const CONTAINERS = {
  narrow: "960px",

  default: "1280px",

  wide: "1400px",

  full: "1480px",

  fluid: "100%",
};

/* ============================================================================
   GRID SYSTEM
============================================================================ */

export const GRID = {
  columns: 12,

  gutter: {
    mobile: "16px",

    tablet: "24px",

    desktop: "32px",

    wide: "40px",
  },

  margin: {
    mobile: "20px",

    tablet: "32px",

    desktop: "48px",
  },
};

/* ============================================================================
   LAYOUT DIMENSIONS
============================================================================ */

export const LAYOUT = {
  navbar: {
    mobile: "72px",
    desktop: "88px",
  },

  footer: {
    topSpacing: "96px",
    bottomSpacing: "32px",
  },

  sidebar: {
    expanded: "280px",
    collapsed: "88px",
  },

  drawer: {
    width: "320px",
  },

  modal: {
    maxWidth: "720px",
  },
};

/* ============================================================================
   MEDIA QUERIES
============================================================================ */

export const MEDIA = {
  mobile: `(min-width: ${SCREENS.xs})`,

  tablet: `(min-width: ${SCREENS.md})`,

  laptop: `(min-width: ${SCREENS.lg})`,

  desktop: `(min-width: ${SCREENS.xl})`,

  desktopLarge: `(min-width: ${SCREENS["2xl"]})`,

  ultraWide: `(min-width: ${SCREENS["3xl"]})`,

  fullHD: `(min-width: ${SCREENS["4xl"]})`,
};

/* ============================================================================
   ORIENTATION
============================================================================ */

export const ORIENTATION = {
  portrait: "(orientation: portrait)",

  landscape: "(orientation: landscape)",
};

/* ============================================================================
   RESPONSIVE HELPERS
============================================================================ */

export const RESPONSIVE = {
  mobileOnly: `(max-width: 639px)`,

  tabletOnly: `(min-width:768px) and (max-width:1023px)`,

  laptopOnly: `(min-width:1024px) and (max-width:1279px)`,

  desktopOnly: `(min-width:1280px)`,

  touch: "(pointer: coarse)",

  mouse: "(pointer: fine)",
};

/* ============================================================================
   EXPORT
============================================================================ */

const breakpoints = {
  SCREENS,

  DEVICES,

  CONTAINERS,

  GRID,

  LAYOUT,

  MEDIA,

  ORIENTATION,

  RESPONSIVE,
};

export default breakpoints;