import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "gold" | "outline" | "navy" | "light";
type Size = "md" | "lg";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Render as a plain external anchor (opens in a new tab). */
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

const variants: Record<Variant, string> = {
  gold:
    "bg-linear-to-r from-gold-300 via-gold to-gold-400 text-navy shadow-gold " +
    "hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-14px_rgba(201,161,74,0.62)]",
  outline:
    "border border-gold/55 text-gold hover:bg-gold hover:text-navy hover:-translate-y-0.5",
  navy: "bg-navy text-cream hover:bg-navy-600 hover:-translate-y-0.5",
  light: "bg-cream text-navy hover:bg-white hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-[0.95rem]",
};

/** Primary call-to-action link, styled for internal routes or external URLs. */
export function Button({
  href,
  children,
  variant = "gold",
  size = "md",
  external = false,
  className,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
