import clsx from "clsx";
import PropTypes from "prop-types";

/**
 * ============================================================================
 * AGES-TECH DESIGN SYSTEM
 * ============================================================================
 *
 * Component:
 * Container
 *
 * Description
 * ----------------------------------------------------------------------------
 * Responsive layout wrapper used throughout the application.
 *
 * Features
 * ----------------------------------------------------------------------------
 * • Responsive
 * • Semantic sizes
 * • Center aligned
 * • Custom className
 * • HTML tag customization
 * • Zero hardcoded page layouts
 *
 * Usage
 * ----------------------------------------------------------------------------
 *
 * <Container>
 *    ...
 * </Container>
 *
 * <Container size="wide">
 *    ...
 * </Container>
 *
 * <Container size="narrow">
 *    ...
 * </Container>
 *
 * ============================================================================
 */

const sizeClasses = {
  narrow: "max-w-[980px]",

  default: "max-w-[1280px]",

  wide: "max-w-[1400px]",

  full: "max-w-[1600px]",

  fluid: "max-w-none",
};

const paddingClasses = {
  none: "",

  sm: "px-4 md:px-6",

  md: "px-5 md:px-8 lg:px-10",

  lg: "px-6 md:px-10 lg:px-12",
};

const Container = ({
  children,
  size = "default",
  padding = "md",
  className = "",
  as: Component = "div",
}) => {
  return (
    <Component
      className={clsx(
        "w-full mx-auto",
        sizeClasses[size],
        paddingClasses[padding],
        className
      )}
    >
      {children}
    </Component>
  );
};

Container.propTypes = {
  children: PropTypes.node,

  size: PropTypes.oneOf([
    "narrow",
    "default",
    "wide",
    "full",
    "fluid",
  ]),

  padding: PropTypes.oneOf([
    "none",
    "sm",
    "md",
    "lg",
  ]),

  className: PropTypes.string,

  as: PropTypes.elementType,
};

export default Container;