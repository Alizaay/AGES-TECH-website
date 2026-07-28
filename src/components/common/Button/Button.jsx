import { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

/**
 * ============================================================================
 * AGES-TECH DESIGN SYSTEM
 * ============================================================================
 * Button Component
 * ----------------------------------------------------------------------------
 * Reusable button component used across the application.
 *
 * Features
 * ----------------------------------------------------------------------------
 * ✓ Multiple Variants
 * ✓ Multiple Sizes
 * ✓ Loading State
 * ✓ Disabled State
 * ✓ Left / Right Icons
 * ✓ Full Width
 * ✓ Icon Only
 * ✓ Forward Ref
 * ✓ Accessible
 * ============================================================================
 */

const variantClasses = {
  primary: [
    "bg-brand-500",
    "text-white",
    "shadow-button",
    "hover:bg-brand-600",
    "active:bg-brand-700",
  ],

  secondary: [
    "bg-secondary-500",
    "text-white",
    "hover:bg-secondary-600",
    "active:bg-secondary-700",
  ],

  outline: [
    "border",
    "border-brand-500",
    "bg-transparent",
    "text-brand-500",
    "hover:bg-brand-50",
  ],

  ghost: [
    "bg-transparent",
    "text-brand-500",
    "hover:bg-brand-50",
  ],

  text: [
    "bg-transparent",
    "text-brand-500",
    "hover:underline",
    "shadow-none",
    "px-0",
  ],

  gradient: [
    "bg-primary-gradient",
    "text-white",
    "hover:opacity-95",
  ],

  success: [
    "bg-success",
    "text-white",
    "hover:brightness-95",
  ],

  danger: [
    "bg-error",
    "text-white",
    "hover:brightness-95",
  ],
};

const sizeClasses = {
  sm: "h-10 px-4 text-sm",

  md: "h-12 px-6 text-button",

  lg: "h-14 px-8 text-base",

  xl: "h-16 px-10 text-lg",
};

const iconSizes = {
  sm: 16,
  md: 18,
  lg: 20,
  xl: 22,
};

const Spinner = ({ size }) => (
  <svg
    className="animate-spin"
    width={iconSizes[size]}
    height={iconSizes[size]}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="3"
      opacity=".25"
    />

    <path
      fill="currentColor"
      d="M22 12A10 10 0 0012 2v4a6 6 0 016 6h4z"
    />
  </svg>
);

Spinner.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      type = "button",
      disabled = false,
      loading = false,
      fullWidth = false,
      rounded = true,
      leftIcon,
      rightIcon,
      iconOnly = false,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={clsx(
          "inline-flex items-center justify-center gap-2",
          "font-semibold",
          "transition-all duration-300",
          "select-none",
          "whitespace-nowrap",
          "shrink-0",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-brand-500",
          "focus-visible:ring-offset-2",
          "disabled:pointer-events-none",
          "disabled:opacity-60",

          rounded ? "rounded-full" : "rounded-2xl",

          fullWidth && "w-full",

          iconOnly && "aspect-square px-0",

          sizeClasses[size],

          variantClasses[variant],

          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <Spinner size={size} />
            {!iconOnly && <span>Loading...</span>}
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="flex items-center">
                {leftIcon}
              </span>
            )}

            {!iconOnly && children}

            {rightIcon && (
              <span className="flex items-center">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

Button.propTypes = {
  children: PropTypes.node,

  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline",
    "ghost",
    "text",
    "gradient",
    "success",
    "danger",
  ]),

  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
  ]),

  type: PropTypes.oneOf([
    "button",
    "submit",
    "reset",
  ]),

  disabled: PropTypes.bool,

  loading: PropTypes.bool,

  fullWidth: PropTypes.bool,

  rounded: PropTypes.bool,

  iconOnly: PropTypes.bool,

  leftIcon: PropTypes.node,

  rightIcon: PropTypes.node,

  className: PropTypes.string,
};

export default Button;
