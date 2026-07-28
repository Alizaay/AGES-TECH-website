import clsx from "clsx";
import PropTypes from "prop-types";

/**
 * ============================================================================
 * AGES-TECH DESIGN SYSTEM
 * ============================================================================
 * Component : Typography
 * ----------------------------------------------------------------------------
 * Single, reusable text primitive that maps design-system typography tokens
 * (see src/design-system/typography.js) onto Tailwind utility classes.
 *
 * Features
 * ----------------------------------------------------------------------------
 * ✓ Semantic variant -> font-size scale (text-heading-xl, text-body-lg, ...)
 * ✓ Semantic weight -> font-weight scale
 * ✓ Semantic color -> design-system color tokens
 * ✓ Sensible default HTML tag per variant, overridable via `as`
 * ✓ Optional text-wrap balance for headings
 * ============================================================================
 */

const VARIANT_TAGS = {
  "display-2xl": "h1",
  "display-xl": "h1",
  "display-lg": "h1",
  "heading-xl": "h2",
  "heading-lg": "h2",
  "heading-md": "h3",
  "heading-sm": "h4",
  "body-xl": "p",
  "body-lg": "p",
  body: "p",
  "body-sm": "p",
  label: "span",
  caption: "span",
  button: "span",
};

const WEIGHT_CLASSES = {
  thin: "font-thin",
  extralight: "font-extraLight",
  light: "font-light",
  regular: "font-regular",
  medium: "font-medium",
  semibold: "font-semiBold",
  semiBold: "font-semiBold",
  bold: "font-bold",
  extrabold: "font-extraBold",
  extraBold: "font-extraBold",
  black: "font-black",
};

const COLOR_CLASSES = {
  heading: "text-text-heading",
  title: "text-text-title",
  body: "text-text-body",
  muted: "text-text-muted",
  light: "text-text-light",
  white: "text-text-white",
  inverse: "text-text-inverse",
  primary: "text-brand-500",
  secondary: "text-secondary-500",
  accent: "text-accent-500",
  success: "text-success",
  warning: "text-warning",
  error: "text-error",
  inherit: "",
};

const Typography = ({
  as,
  variant = "body",
  weight,
  color,
  balance = false,
  className,
  children,
  ...props
}) => {
  const Tag = as || VARIANT_TAGS[variant] || "p";

  return (
    <Tag
      className={clsx(
        `text-${variant}`,
        weight && (WEIGHT_CLASSES[weight] || `font-${weight}`),
        color && (COLOR_CLASSES[color] ?? `text-${color}`),
        balance && "text-balance",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

Typography.propTypes = {
  as: PropTypes.elementType,

  variant: PropTypes.oneOf([
    "display-2xl",
    "display-xl",
    "display-lg",
    "heading-xl",
    "heading-lg",
    "heading-md",
    "heading-sm",
    "body-xl",
    "body-lg",
    "body",
    "body-sm",
    "label",
    "caption",
    "button",
  ]),

  weight: PropTypes.oneOf([
    "thin",
    "extralight",
    "light",
    "regular",
    "medium",
    "semibold",
    "semiBold",
    "bold",
    "extrabold",
    "extraBold",
    "black",
  ]),

  color: PropTypes.string,

  balance: PropTypes.bool,

  className: PropTypes.string,

  children: PropTypes.node,
};

export default Typography;
