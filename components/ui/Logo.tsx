import { cn } from "@/lib/utils";

interface LogoProps {
  /** "light" for dark backgrounds, "dark" for light backgrounds. */
  variant?: "light" | "dark";
  /** Hide the wordmark and render only the building mark. */
  markOnly?: boolean;
  className?: string;
}

/** The Trishira Developers building mark — three rising towers with a spire. */
export function LogoMark({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const towerA = variant === "light" ? "#c9a14a" : "#0a1733";
  const towerB = variant === "light" ? "#e7cf94" : "#122a5c";
  const accent = "#c9a14a";

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Trishira Developers"
      fill="none"
    >
      {/* spire */}
      <path
        d="M32.5 13V4M27.5 8.5 32.5 3l5 5.5"
        stroke={accent}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* towers */}
      <rect x="7.5" y="29" width="14" height="27" rx="2.4" fill={towerA} />
      <rect x="25" y="13" width="15" height="43" rx="2.4" fill={towerB} />
      <rect x="43" y="22" width="14" height="34" rx="2.4" fill={towerA} />
      {/* gold base */}
      <rect x="5" y="57" width="54" height="3.6" rx="1.8" fill={accent} />
    </svg>
  );
}

/** Full logo lock-up: building mark plus the Trishira Developers wordmark. */
export function Logo({ variant = "light", markOnly = false, className }: LogoProps) {
  const wordmark = variant === "light" ? "text-cream" : "text-navy";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark variant={variant} className="h-9 w-9 shrink-0" />
      {!markOnly && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-heading text-[1.32rem] font-extrabold tracking-tight",
              wordmark,
            )}
          >
            TRISHIRA
          </span>
          <span className="mt-1 flex items-center gap-1.5">
            <span className="h-px w-3 bg-gold" aria-hidden />
            <span className="text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-gold">
              Developers
            </span>
            <span className="h-px flex-1 bg-gold/45" aria-hidden />
          </span>
        </span>
      )}
    </span>
  );
}
