/**
 * ============================================================================
 * AGES-TECH DESIGN SYSTEM
 * ============================================================================
 * File: shadows.js
 * ----------------------------------------------------------------------------
 * Description
 * ----------------------------------------------------------------------------
 * Centralized shadow system for AGES-TECH.
 *
 * PURPOSE
 * ----------------------------------------------------------------------------
 * • Consistent elevation across the UI
 * • Premium soft shadow language
 * • Semantic shadow tokens
 * • Glassmorphism support
 * • Tailwind Ready
 * • Future Dark Mode Ready
 *
 * RULES
 * ----------------------------------------------------------------------------
 * ❌ Never hardcode box-shadow values
 * ❌ Never use Tailwind default shadows
 *
 * ✅ Always consume these tokens
 * ============================================================================
 */

/* ============================================================================
   BASE SHADOW TOKENS
============================================================================ */

export const SHADOW = {
  none: "none",

  xs: "0px 1px 2px rgba(15,23,42,0.05)",

  sm: "0px 2px 6px rgba(15,23,42,0.06)",

  md: "0px 8px 24px rgba(15,23,42,0.08)",

  lg: "0px 12px 32px rgba(15,23,42,0.10)",

  xl: "0px 20px 48px rgba(15,23,42,0.12)",

  "2xl": "0px 28px 64px rgba(15,23,42,0.16)",

  "3xl": "0px 40px 80px rgba(15,23,42,0.20)",

  inner: "inset 0px 2px 4px rgba(15,23,42,0.08)",
};

/* ============================================================================
   GLASSMORPHISM
============================================================================ */

export const GLASS_SHADOW = {
  light: "0px 8px 32px rgba(255,255,255,0.15)",

  medium: "0px 16px 40px rgba(255,255,255,0.20)",

  strong: "0px 24px 60px rgba(255,255,255,0.25)",
};

/* ============================================================================
   BUTTON SHADOWS
============================================================================ */

export const BUTTON_SHADOW = {
  primary: "0px 10px 30px rgba(47,128,237,0.22)",

  hover: "0px 16px 40px rgba(47,128,237,0.30)",

  active: "0px 6px 18px rgba(47,128,237,0.18)",

  focus: "0 0 0 4px rgba(47,128,237,0.18)",

  disabled: "none",
};

/* ============================================================================
   CARD SHADOWS
============================================================================ */

export const CARD_SHADOW = {
  flat: SHADOW.none,

  soft: SHADOW.sm,

  default: SHADOW.md,

  hover: SHADOW.lg,

  floating: SHADOW.xl,

  elevated: SHADOW["2xl"],

  premium: SHADOW["3xl"],
};

/* ============================================================================
   FORM ELEMENTS
============================================================================ */

export const FORM_SHADOW = {
  input: "0px 2px 6px rgba(15,23,42,0.04)",

  focus: "0 0 0 4px rgba(47,128,237,0.14)",

  success: "0 0 0 4px rgba(34,197,94,0.14)",

  warning: "0 0 0 4px rgba(245,158,11,0.14)",

  error: "0 0 0 4px rgba(239,68,68,0.14)",
};

/* ============================================================================
   NAVIGATION
============================================================================ */

export const NAVIGATION_SHADOW = {
  navbar: "0px 8px 28px rgba(15,23,42,0.05)",

  sticky: "0px 16px 40px rgba(15,23,42,0.08)",

  dropdown: "0px 20px 50px rgba(15,23,42,0.12)",
};

/* ============================================================================
   OVERLAYS
============================================================================ */

export const OVERLAY_SHADOW = {
  modal: "0px 32px 80px rgba(15,23,42,0.20)",

  drawer: "0px 24px 64px rgba(15,23,42,0.18)",

  popover: "0px 16px 48px rgba(15,23,42,0.12)",

  tooltip: "0px 10px 30px rgba(15,23,42,0.18)",
};

/* ============================================================================
   MEDIA
============================================================================ */

export const MEDIA_SHADOW = {
  image: "0px 20px 48px rgba(15,23,42,0.10)",

  imageHover: "0px 30px 72px rgba(15,23,42,0.16)",

  video: "0px 30px 80px rgba(15,23,42,0.14)",
};

/* ============================================================================
   SECTION EFFECTS
============================================================================ */

export const SECTION_SHADOW = {
  hero: "0px 40px 90px rgba(47,128,237,0.08)",

  floating: "0px 24px 60px rgba(15,23,42,0.06)",

  glowBlue: "0px 0px 100px rgba(47,128,237,0.15)",

  glowCyan: "0px 0px 120px rgba(6,182,212,0.12)",
};

/* ============================================================================
   COMPONENT SHORTCUTS
============================================================================ */

export const COMPONENT_SHADOW = {
  button: BUTTON_SHADOW.primary,

  card: CARD_SHADOW.default,

  cardHover: CARD_SHADOW.hover,

  input: FORM_SHADOW.input,

  navbar: NAVIGATION_SHADOW.navbar,

  dropdown: NAVIGATION_SHADOW.dropdown,

  modal: OVERLAY_SHADOW.modal,

  image: MEDIA_SHADOW.image,

  hero: SECTION_SHADOW.hero,
};

/* ============================================================================
   EXPORT
============================================================================ */

const shadows = {
  SHADOW,

  GLASS_SHADOW,

  BUTTON_SHADOW,

  CARD_SHADOW,

  FORM_SHADOW,

  NAVIGATION_SHADOW,

  OVERLAY_SHADOW,

  MEDIA_SHADOW,

  SECTION_SHADOW,

  COMPONENT_SHADOW,
};

export default shadows;