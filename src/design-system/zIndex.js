/**
 * ============================================================================
 * AGES-TECH DESIGN SYSTEM
 * ============================================================================
 * File: zIndex.js
 * ----------------------------------------------------------------------------
 * Description
 * ----------------------------------------------------------------------------
 * Centralized stacking layer system.
 *
 * PURPOSE
 * ----------------------------------------------------------------------------
 * • Prevent random z-index values
 * • Consistent stacking order
 * • Shared across Tailwind, React & CSS
 * • Future ready
 *
 * RULES
 * ----------------------------------------------------------------------------
 * ❌ Never use z-[9999]
 * ❌ Never hardcode z-index values
 *
 * ✅ Always consume design tokens
 * ============================================================================
 */

/* ============================================================================
   BASE Z-INDEX SCALE
============================================================================ */

export const Z_INDEX = {
  auto: "auto",

  hide: -1,

  base: 0,

  raised: 1,

  content: 5,

  border: 10,

  sticky: 20,

  fixed: 30,

  elevated: 40,

  maximum: 9999,
};

/* ============================================================================
   NAVIGATION LAYERS
============================================================================ */

export const NAVIGATION_Z = {
  navbar: 100,

  stickyNavbar: 110,

  megaMenu: 120,

  mobileMenu: 130,

  sidebar: 140,

  mobileDrawer: 150,
};

/* ============================================================================
   OVERLAY LAYERS
============================================================================ */

export const OVERLAY_Z = {
  backdrop: 300,

  drawer: 320,

  modal: 340,

  popover: 360,

  dropdown: 380,

  tooltip: 400,
};

/* ============================================================================
   FEEDBACK LAYERS
============================================================================ */

export const FEEDBACK_Z = {
  toast: 500,

  snackbar: 520,

  notification: 540,

  loading: 560,

  fullscreenLoader: 580,
};

/* ============================================================================
   DECORATIVE ELEMENTS
============================================================================ */

export const DECORATION_Z = {
  background: -1,

  gradients: 0,

  blur: 1,

  floatingShapes: 2,

  illustrations: 3,

  particles: 4,
};

/* ============================================================================
   CONTENT LAYERS
============================================================================ */

export const CONTENT_Z = {
  hero: 10,

  section: 20,

  card: 30,

  image: 40,

  badge: 50,

  button: 60,
};

/* ============================================================================
   COMPONENT SHORTCUTS
============================================================================ */

export const COMPONENT_Z = {
  navbar: NAVIGATION_Z.navbar,

  mobileMenu: NAVIGATION_Z.mobileMenu,

  sidebar: NAVIGATION_Z.sidebar,

  dropdown: OVERLAY_Z.dropdown,

  modal: OVERLAY_Z.modal,

  tooltip: OVERLAY_Z.tooltip,

  drawer: OVERLAY_Z.drawer,

  backdrop: OVERLAY_Z.backdrop,

  toast: FEEDBACK_Z.toast,

  notification: FEEDBACK_Z.notification,

  loader: FEEDBACK_Z.loading,

  hero: CONTENT_Z.hero,

  card: CONTENT_Z.card,

  button: CONTENT_Z.button,
};

/* ============================================================================
   EXPORT
============================================================================ */

const zIndex = {
  Z_INDEX,

  NAVIGATION_Z,

  OVERLAY_Z,

  FEEDBACK_Z,

  DECORATION_Z,

  CONTENT_Z,

  COMPONENT_Z,
};

export default zIndex;