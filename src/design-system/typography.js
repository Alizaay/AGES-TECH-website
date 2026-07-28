/**
 * ============================================================================
 * AGES-TECH DESIGN SYSTEM
 * ----------------------------------------------------------------------------
 * File: typography.js
 * ----------------------------------------------------------------------------
 * Typography Tokens
 *
 * This file is the single source of truth for:
 * • Font Families
 * • Font Sizes
 * • Font Weights
 * • Line Heights
 * • Letter Spacing
 * • Responsive Typography
 * ============================================================================
 */

export const FONT_FAMILY = {
  /**
   * Brand Logo
   */
  logo: ['"Arima Koshi"', "cursive"],

  /**
   * Main Website Font
   *
   * Replace "Inter" with the exact font from Figma
   * once extracted.
   */
  primary: ['"Inter"', "sans-serif"],

  /**
   * Optional Secondary Font
   */
  secondary: ['"Inter"', "sans-serif"],

  mono: ['"JetBrains Mono"', "monospace"],
};

/* -------------------------------------------------------------------------- */
/* FONT WEIGHTS */
/* -------------------------------------------------------------------------- */

export const FONT_WEIGHT = {
  thin: 100,
  extraLight: 200,
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

/* -------------------------------------------------------------------------- */
/* LINE HEIGHTS */
/* -------------------------------------------------------------------------- */

export const LINE_HEIGHT = {
  none: 1,
  tight: 1.15,
  snug: 1.25,
  normal: 1.5,
  relaxed: 1.65,
  loose: 1.8,
};

/* -------------------------------------------------------------------------- */
/* LETTER SPACING */
/* -------------------------------------------------------------------------- */

export const LETTER_SPACING = {
  tighter: "-0.06em",
  tight: "-0.04em",
  normal: "0",
  wide: "0.03em",
  wider: "0.06em",
};

/* -------------------------------------------------------------------------- */
/* TYPOGRAPHY SCALE */
/* -------------------------------------------------------------------------- */

export const FONT_SIZE = {
  /**
   * Display
   */

  "display-2xl": [
    "clamp(4rem,7vw,6rem)",
    {
      lineHeight: "1.05",
      letterSpacing: "-0.05em",
      fontWeight: 800,
    },
  ],

  "display-xl": [
    "clamp(3.5rem,6vw,5rem)",
    {
      lineHeight: "1.08",
      letterSpacing: "-0.05em",
      fontWeight: 800,
    },
  ],

  "display-lg": [
    "clamp(3rem,5vw,4rem)",
    {
      lineHeight: "1.1",
      letterSpacing: "-0.04em",
      fontWeight: 700,
    },
  ],

  /**
   * Headings
   */

  "heading-xl": [
    "clamp(2.5rem,4vw,3.5rem)",
    {
      lineHeight: "1.15",
      letterSpacing: "-0.03em",
      fontWeight: 700,
    },
  ],

  "heading-lg": [
    "clamp(2rem,3vw,3rem)",
    {
      lineHeight: "1.2",
      letterSpacing: "-0.025em",
      fontWeight: 700,
    },
  ],

  "heading-md": [
    "clamp(1.75rem,2.5vw,2.25rem)",
    {
      lineHeight: "1.3",
      letterSpacing: "-0.02em",
      fontWeight: 600,
    },
  ],

  "heading-sm": [
    "clamp(1.375rem,2vw,1.75rem)",
    {
      lineHeight: "1.35",
      fontWeight: 600,
    },
  ],

  /**
   * Body
   */

  "body-xl": [
    "1.25rem",
    {
      lineHeight: "1.8",
      fontWeight: 400,
    },
  ],

  "body-lg": [
    "1.125rem",
    {
      lineHeight: "1.75",
      fontWeight: 400,
    },
  ],

  body: [
    "1rem",
    {
      lineHeight: "1.7",
      fontWeight: 400,
    },
  ],

  "body-sm": [
    ".9375rem",
    {
      lineHeight: "1.65",
      fontWeight: 400,
    },
  ],

  /**
   * Utility
   */

  label: [
    ".875rem",
    {
      lineHeight: "1.4",
      fontWeight: 500,
    },
  ],

  caption: [
    ".75rem",
    {
      lineHeight: "1.4",
      fontWeight: 500,
    },
  ],

  button: [
    ".95rem",
    {
      lineHeight: "1.2",
      fontWeight: 600,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* EXPORT */
/* -------------------------------------------------------------------------- */

const typography = {
  FONT_FAMILY,
  FONT_WEIGHT,
  LINE_HEIGHT,
  LETTER_SPACING,
  FONT_SIZE,
};

export default typography;