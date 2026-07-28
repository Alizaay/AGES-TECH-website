/**
 * ============================================================================
 * AGES-TECH DESIGN SYSTEM
 * ----------------------------------------------------------------------------
 * File: colors.js
 * ----------------------------------------------------------------------------
 * Description:
 * Centralized color palette for the entire AGES-TECH project.
 *
 * IMPORTANT RULES
 * ----------------------------------------------------------------------------
 * • Never hardcode HEX values inside components.
 * • Always use semantic color tokens.
 * • Every UI element must reference this file.
 * • Tailwind configuration will consume these tokens.
 * • Future dark mode will also be generated from here.
 * ============================================================================
 */

export const COLORS = {
  /*
   |--------------------------------------------------------------------------
   | BRAND COLORS
   |--------------------------------------------------------------------------
   */

  brand: {
    50: "#EEF7FF",
    100: "#DCEEFF",
    200: "#B8DCFF",
    300: "#8BC5FF",
    400: "#59A5FF",
    500: "#2F80ED",
    600: "#1D6FE8",
    700: "#1559CC",
    800: "#1348A4",
    900: "#143E84",
    950: "#0D2857",
  },

  /*
   |--------------------------------------------------------------------------
   | SECONDARY
   |--------------------------------------------------------------------------
   */

  secondary: {
    50: "#EEF4FF",
    100: "#DCE8FF",
    200: "#C4D7FF",
    300: "#9EBEFF",
    400: "#729DFF",
    500: "#527DFF",
    600: "#3C5FEF",
    700: "#314BCF",
    800: "#2D43AA",
    900: "#2A3D87",
    950: "#18244D",
  },

  /*
   |--------------------------------------------------------------------------
   | CYAN / ACCENT
   |--------------------------------------------------------------------------
   */

  accent: {
    50: "#ECFDFF",
    100: "#CFFAFE",
    200: "#A5F3FC",
    300: "#67E8F9",
    400: "#22D3EE",
    500: "#06B6D4",
    600: "#0891B2",
    700: "#0E7490",
    800: "#155E75",
    900: "#164E63",
    950: "#083344",
  },

  /*
   |--------------------------------------------------------------------------
   | NEUTRAL
   |--------------------------------------------------------------------------
   */

  neutral: {
    0: "#FFFFFF",

    50: "#FAFBFC",
    100: "#F7F9FC",
    200: "#EEF2F7",
    300: "#E4EAF2",
    400: "#CDD6E2",
    500: "#98A6B8",
    600: "#6B7A90",
    700: "#4A5A72",
    800: "#2F3F57",
    900: "#17253A",
    950: "#091220",

    1000: "#000000",
  },

  /*
   |--------------------------------------------------------------------------
   | BACKGROUND
   |--------------------------------------------------------------------------
   */

  background: {
    primary: "#FFFFFF",
    secondary: "#F8FBFF",
    tertiary: "#F4F8FC",
    dark: "#07172F",
    overlay: "rgba(7,23,47,.75)",
  },

  /*
   |--------------------------------------------------------------------------
   | SURFACE
   |--------------------------------------------------------------------------
   */

  surface: {
    primary: "#FFFFFF",
    secondary: "#F9FBFF",
    elevated: "#FFFFFF",
    dark: "#0C1C38",
    glass: "rgba(255,255,255,.72)",
    blur: "rgba(255,255,255,.45)",
  },

  /*
   |--------------------------------------------------------------------------
   | TYPOGRAPHY
   |--------------------------------------------------------------------------
   */

  text: {
    heading: "#102A43",
    title: "#173A63",
    body: "#52606D",
    muted: "#7B8794",
    light: "#9AA5B1",
    white: "#FFFFFF",
    inverse: "#FFFFFF",
  },

  /*
   |--------------------------------------------------------------------------
   | BORDER
   |--------------------------------------------------------------------------
   */

  border: {
    light: "#EDF2F7",
    DEFAULT: "#DFE7F3",
    strong: "#CAD5E2",
    dark: "#20304A",
  },

  /*
   |--------------------------------------------------------------------------
   | STATUS COLORS
   |--------------------------------------------------------------------------
   */

  success: {
    light: "#DCFCE7",
    DEFAULT: "#22C55E",
    dark: "#15803D",
  },

  warning: {
    light: "#FEF3C7",
    DEFAULT: "#F59E0B",
    dark: "#B45309",
  },

  error: {
    light: "#FEE2E2",
    DEFAULT: "#EF4444",
    dark: "#B91C1C",
  },

  info: {
    light: "#DBEAFE",
    DEFAULT: "#3B82F6",
    dark: "#1D4ED8",
  },

  /*
   |--------------------------------------------------------------------------
   | SHADOW COLORS
   |--------------------------------------------------------------------------
   */

  shadow: {
    primary: "rgba(47,128,237,.15)",
    secondary: "rgba(16,42,67,.10)",
    dark: "rgba(15,23,42,.25)",
  },

  /*
   |--------------------------------------------------------------------------
   | GRADIENTS
   |--------------------------------------------------------------------------
   */

  gradients: {
    hero:
      "linear-gradient(135deg,#F8FBFF 0%,#EDF6FF 45%,#FFFFFF 100%)",

    primary:
      "linear-gradient(135deg,#2F80ED 0%,#06B6D4 100%)",

    secondary:
      "linear-gradient(135deg,#173A63 0%,#2F80ED 100%)",

    footer:
      "linear-gradient(180deg,#07172F 0%,#0C2345 100%)",

    glass:
      "linear-gradient(135deg,rgba(255,255,255,.8),rgba(255,255,255,.45))",
  },
};

/*
|--------------------------------------------------------------------------
| Quick Access Tokens
|--------------------------------------------------------------------------
*/

export const BRAND = COLORS.brand;

export const BACKGROUND = COLORS.background;

export const SURFACE = COLORS.surface;

export const TEXT = COLORS.text;

export const BORDER = COLORS.border;

export const STATUS = {
  success: COLORS.success,
  warning: COLORS.warning,
  error: COLORS.error,
  info: COLORS.info,
};

export const GRADIENTS = COLORS.gradients;

/**
 * NOTE: this must be a NEW object (not the same reference as the named
 * `COLORS` export above). Some ESM/CJS interop loaders (e.g. jiti, used by
 * Tailwind/PostCSS to load tailwind.config.js) graft the module namespace
 * back onto a default export that is reference-identical to a named export,
 * which creates a real circular reference (`COLORS.COLORS === COLORS`) and
 * crashes anything that walks or serializes the object (Tailwind's
 * `cloneDeep`, `JSON.stringify`, etc).
 */
export default { ...COLORS };