/**
 * ============================================================================
 * AGES-TECH DESIGN SYSTEM
 * ============================================================================
 * File: spacing.js
 * ----------------------------------------------------------------------------
 * Description:
 * Centralized spacing tokens for the entire application.
 *
 * Rules:
 * ----------------------------------------------------------------------------
 * • Never hardcode padding or margin values.
 * • Use semantic spacing tokens.
 * • Every component must consume this file.
 * • Tailwind theme will import these values.
 * ============================================================================
 */

/* ============================================================================
   BASE SPACING SCALE
============================================================================ */

export const SPACING = {
  0: "0rem",
  px: "1px",

  0.5: "0.125rem", // 2px
  1: "0.25rem", // 4px
  1.5: "0.375rem", // 6px
  2: "0.5rem", // 8px
  2.5: "0.625rem", // 10px
  3: "0.75rem", // 12px
  3.5: "0.875rem", // 14px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  7: "1.75rem", // 28px
  8: "2rem", // 32px
  9: "2.25rem", // 36px
  10: "2.5rem", // 40px
  11: "2.75rem", // 44px
  12: "3rem", // 48px
  14: "3.5rem", // 56px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  28: "7rem", // 112px
  32: "8rem", // 128px
  36: "9rem", // 144px
  40: "10rem", // 160px
  44: "11rem", // 176px
  48: "12rem", // 192px
  52: "13rem", // 208px
  56: "14rem", // 224px
  60: "15rem", // 240px
  64: "16rem", // 256px
};

/* ============================================================================
   RESPONSIVE SECTION SPACING
============================================================================ */

export const SECTION = {
  xs: {
    mobile: "3rem",
    tablet: "4rem",
    desktop: "5rem",
  },

  sm: {
    mobile: "4rem",
    tablet: "5rem",
    desktop: "6rem",
  },

  md: {
    mobile: "5rem",
    tablet: "6rem",
    desktop: "7rem",
  },

  lg: {
    mobile: "6rem",
    tablet: "7rem",
    desktop: "8rem",
  },

  xl: {
    mobile: "7rem",
    tablet: "8rem",
    desktop: "9rem",
  },

  "2xl": {
    mobile: "8rem",
    tablet: "9rem",
    desktop: "10rem",
  },
};

/* ============================================================================
   CONTAINER SYSTEM
============================================================================ */

export const CONTAINER = {
  maxWidth: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1400px",
    "3xl": "1480px",
    full: "1600px",
  },

  padding: {
    mobile: "1rem",
    tablet: "1.5rem",
    laptop: "2rem",
    desktop: "2.5rem",
    wide: "3rem",
  },
};

/* ============================================================================
   GRID SYSTEM
============================================================================ */

export const GRID = {
  columns: 12,

  gutter: {
    xs: "0.75rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
  },

  gap: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
  },
};

/* ============================================================================
   CARD SPACING
============================================================================ */

export const CARD = {
  padding: {
    xs: "1rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
  },

  gap: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.25rem",
    xl: "1.5rem",
  },
};

/* ============================================================================
   BUTTON SPACING
============================================================================ */

export const BUTTON = {
  paddingX: {
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
  },

  paddingY: {
    sm: "0.625rem",
    md: "0.875rem",
    lg: "1rem",
    xl: "1.125rem",
  },

  gap: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
  },
};

/* ============================================================================
   FORM CONTROLS
============================================================================ */

export const FORM = {
  fieldGap: "1.5rem",

  labelGap: "0.5rem",

  inputPaddingX: "1rem",

  inputPaddingY: "0.875rem",

  helperGap: "0.375rem",

  sectionGap: "2rem",
};

/* ============================================================================
   NAVIGATION
============================================================================ */

export const NAVBAR = {
  height: "88px",

  mobileHeight: "72px",

  linkGap: "2rem",

  actionGap: "1rem",
};

/* ============================================================================
   FOOTER
============================================================================ */

export const FOOTER = {
  topSpacing: "6rem",

  bottomSpacing: "2rem",

  columnGap: "3rem",

  rowGap: "2rem",
};

/* ============================================================================
   ICON SIZES
============================================================================ */

export const ICON = {
  xs: "1rem",
  sm: "1.25rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "2.5rem",
  "2xl": "3rem",
};

/* ============================================================================
   EXPORT
============================================================================ */

const spacing = {
  SPACING,
  SECTION,
  CONTAINER,
  GRID,
  CARD,
  BUTTON,
  FORM,
  NAVBAR,
  FOOTER,
  ICON,
};

export default spacing;