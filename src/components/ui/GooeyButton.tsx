"use client";

import Link from "next/link";
import styles from "./gooey-button.module.css";

function ArrowIcon({ direction = "top-right" }: { direction?: "top-right" | "down" }) {
  if (direction === "down") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="7" y1="7" x2="17" y2="17" />
        <polyline points="17 7 17 17 7 17" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

type GooeyButtonBaseProps = {
  /** Text label inside the button */
  label: string;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Color variant */
  variant?: "default" | "dark" | "light";
  /** Custom background color override */
  color?: string;
  /** Custom text color override */
  textColor?: string;
  /** Additional className */
  className?: string;
  /** Arrow icon direction */
  icon?: "top-right" | "down";
};

type GooeyButtonLinkProps = GooeyButtonBaseProps & {
  href: string;
  onClick?: never;
  type?: never;
  disabled?: never;
};

type GooeyButtonActionProps = GooeyButtonBaseProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

type GooeyButtonProps = GooeyButtonLinkProps | GooeyButtonActionProps;

export default function GooeyButton({
  label,
  href,
  onClick,
  type = "button",
  disabled,
  size = "md",
  variant = "default",
  color,
  textColor,
  className = "",
  icon = "top-right",
}: GooeyButtonProps) {
  const sizeClass = size === "lg" ? styles.sizeLg : size === "sm" ? styles.sizeSm : "";
  const variantClass =
    variant === "dark"
      ? styles.variantDark
      : variant === "light"
      ? styles.variantLight
      : "";

  const inlineVars = {
    ...(color ? { "--gooey-color": color } : {}),
    ...(textColor ? { "--gooey-text": textColor } : {}),
  } as React.CSSProperties;

  const sharedClass = `${styles.ctaGroup} ${sizeClass} ${variantClass} ${className}`.trim();

  const inner = (
    <div className={styles.gooeyWrapper}>
      <span className={styles.button}>{label}</span>
      <span className={styles.arrow}>
        <ArrowIcon direction={icon} />
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={sharedClass} style={inlineVars}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={sharedClass}
      style={inlineVars}
    >
      {inner}
    </button>
  );
}

/**
 * Hidden SVG filter — render once in your layout or any parent.
 * Multiple GooeyButtons can share this single filter.
 */
export function GooeyFilter() {
  return (
    <svg
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      aria-hidden="true"
    >
      <defs>
        <filter id="gooey-filter">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="5"
            result="blur"
          />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="gooey"
          />
          <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}
