/**
 * ============================================================================
 * AGES-TECH DESIGN SYSTEM
 * ============================================================================
 * File: radius.js
 * ----------------------------------------------------------------------------
 * Description
 * ----------------------------------------------------------------------------
 * Centralized border radius tokens for the entire application.
 *
 * PURPOSE
 * ----------------------------------------------------------------------------
 * • Maintain visual consistency
 * • Prevent random border-radius values
 * • Provide semantic radius tokens
 * • Future-proof for theming
 * • Single source of truth
 *
 * RULES
 * ----------------------------------------------------------------------------
 * ❌ Never use rounded-xl directly inside components
 * ❌ Never hardcode border radius
 *
 * ✅ Always consume values from this file
 * ============================================================================
 */

/* ============================================================================
   BASE RADIUS SCALE
============================================================================ */

export const RADIUS = {
  none: "0px",

  xs: "2px",

  sm: "4px",

  md: "6px",

  lg: "8px",

  xl: "12px",

  "2xl": "16px",

  "3xl": "20px",

  "4xl": "24px",

  "5xl": "32px",

  full: "9999px",
};

/* ============================================================================
   BUTTONS
============================================================================ */

export const BUTTON_RADIUS = {
  xs: RADIUS.lg,

  sm: RADIUS.xl,

  md: RADIUS["2xl"],

  lg: RADIUS.full,

  pill: RADIUS.full,
};

/* ============================================================================
   CARDS
============================================================================ */

export const CARD_RADIUS = {
  compact: RADIUS.xl,

  default: RADIUS["2xl"],

  large: RADIUS["3xl"],

  feature: RADIUS["3xl"],

  service: RADIUS["3xl"],

  glass: RADIUS["4xl"],

  testimonial: RADIUS["3xl"],

  project: RADIUS["3xl"],
};

/* ============================================================================
   FORM ELEMENTS
============================================================================ */

export const INPUT_RADIUS = {
  input: RADIUS.xl,

  textarea: RADIUS.xl,

  select: RADIUS.xl,

  checkbox: RADIUS.sm,

  radio: RADIUS.full,
};

/* ============================================================================
   BADGES
============================================================================ */

export const BADGE_RADIUS = {
  sm: RADIUS.full,

  md: RADIUS.full,

  lg: RADIUS.full,

  tag: RADIUS.full,

  chip: RADIUS.full,
};

/* ============================================================================
   MEDIA
============================================================================ */

export const MEDIA_RADIUS = {
  image: RADIUS["2xl"],

  video: RADIUS["3xl"],

  avatar: RADIUS.full,

  icon: RADIUS.full,

  logo: RADIUS.none,
};

/* ============================================================================
   OVERLAYS
============================================================================ */

export const OVERLAY_RADIUS = {
  modal: RADIUS["4xl"],

  drawer: RADIUS["3xl"],

  dropdown: RADIUS.xl,

  tooltip: RADIUS.md,

  popover: RADIUS["2xl"],
};

/* ============================================================================
   LAYOUT
============================================================================ */

export const LAYOUT_RADIUS = {
  section: RADIUS["5xl"],

  container: RADIUS.none,

  navbar: RADIUS.full,

  footer: RADIUS.none,
};

/* ============================================================================
   COMPONENT SHORTCUTS
============================================================================ */

export const COMPONENT_RADIUS = {
  button: BUTTON_RADIUS.md,

  card: CARD_RADIUS.default,

  input: INPUT_RADIUS.input,

  badge: BADGE_RADIUS.md,

  avatar: MEDIA_RADIUS.avatar,

  image: MEDIA_RADIUS.image,

  modal: OVERLAY_RADIUS.modal,

  dropdown: OVERLAY_RADIUS.dropdown,

  section: LAYOUT_RADIUS.section,
};

/* ============================================================================
   EXPORT
============================================================================ */

const radius = {
  RADIUS,

  BUTTON_RADIUS,

  CARD_RADIUS,

  INPUT_RADIUS,

  BADGE_RADIUS,

  MEDIA_RADIUS,

  OVERLAY_RADIUS,

  LAYOUT_RADIUS,

  COMPONENT_RADIUS,
};

export default radius;