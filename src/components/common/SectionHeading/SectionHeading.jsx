import clsx from "clsx";
import PropTypes from "prop-types";

import Typography from "../Typography";
import Button from "../Button";

/**
 * ============================================================================
 * AGES-TECH DESIGN SYSTEM
 * ============================================================================
 * Component : SectionHeading
 * ----------------------------------------------------------------------------
 * Reusable heading block for every website section.
 *
 * Features
 * ----------------------------------------------------------------------------
 * ✓ Badge / Eyebrow
 * ✓ Responsive Title
 * ✓ Description
 * ✓ CTA Button
 * ✓ Left / Center / Right Alignment
 * ✓ Semantic HTML
 * ✓ Reusable
 * ============================================================================
 */

const alignmentClasses = {
  left: {
    wrapper: "items-start text-left",
    description: "mr-auto",
    action: "justify-start",
  },

  center: {
    wrapper: "items-center text-center mx-auto",
    description: "mx-auto",
    action: "justify-center",
  },

  right: {
    wrapper: "items-end text-right ml-auto",
    description: "ml-auto",
    action: "justify-end",
  },
};

const maxWidthClasses = {
  sm: "max-w-xl",
  md: "max-w-2xl",
  lg: "max-w-3xl",
  xl: "max-w-4xl",
  full: "max-w-full",
};

const SectionHeading = ({
  badge,
  title,
  description,
  subtitle,
  action,
  align = "left",
  maxWidth = "lg",
  className,
}) => {
  const currentAlignment = alignmentClasses[align];

  /**
   * `subtitle` is accepted as a backwards-compatible alias for
   * `description` — most call sites across the app were written using
   * `subtitle`, which this component never recognized, silently dropping
   * that copy. `description` remains the primary/documented prop name.
   */
  const resolvedDescription = description ?? subtitle;

  return (
    <header
      className={clsx(
        "flex flex-col gap-5",
        currentAlignment.wrapper,
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {badge && (
        <Typography
          as="span"
          variant="label"
          weight="semibold"
          color="primary"
          className="uppercase tracking-[0.18em]"
        >
          {badge}
        </Typography>
      )}

      {title && (
        <Typography
          as="h2"
          variant="heading-xl"
          weight="bold"
          color="heading"
          balance
        >
          {title}
        </Typography>
      )}

      {resolvedDescription && (
        <Typography
          as="p"
          variant="body-lg"
          color="body"
          className={clsx(
            "leading-relaxed",
            currentAlignment.description
          )}
        >
          {resolvedDescription}
        </Typography>
      )}

      {action && (
        <div
          className={clsx(
            "flex w-full pt-2",
            currentAlignment.action
          )}
        >
          <Button
            variant={action.variant || "primary"}
            size={action.size || "md"}
            onClick={action.onClick}
            leftIcon={action.leftIcon}
            rightIcon={action.rightIcon}
          >
            {action.label}
          </Button>
        </div>
      )}
    </header>
  );
};

SectionHeading.propTypes = {
  badge: PropTypes.node,

  title: PropTypes.node.isRequired,

  description: PropTypes.node,

  /** Alias for `description` (kept for backwards compatibility) */
  subtitle: PropTypes.node,

  align: PropTypes.oneOf([
    "left",
    "center",
    "right",
  ]),

  maxWidth: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "full",
  ]),

  action: PropTypes.shape({
    label: PropTypes.string.isRequired,
    variant: PropTypes.string,
    size: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
  }),

  className: PropTypes.string,
};

export default SectionHeading;