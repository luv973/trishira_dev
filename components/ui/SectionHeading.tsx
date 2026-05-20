import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** "dark" = placed on a dark background. */
  tone?: "light" | "dark";
  className?: string;
}

/** Consistent eyebrow + heading + description block used across sections. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        isCenter ? "items-center text-center" : "items-start text-left",
        isCenter && "mx-auto max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          <span className="h-px w-7 bg-gold" aria-hidden />
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-[2.6rem]",
          tone === "dark" ? "text-cream" : "text-navy",
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-[0.98rem] leading-relaxed sm:text-base",
            tone === "dark" ? "text-cream/70" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
