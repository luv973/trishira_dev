import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";
import type { ConstructionPackage } from "@/lib/data";
import { tierTheme } from "@/lib/packageTheme";
import { cn } from "@/lib/utils";

/** Pricing card for a construction package, used on Home and Packages pages. */
export function PackageCard({ pkg }: { pkg: ConstructionPackage }) {
  const theme = tierTheme[pkg.tier];
  const dark = pkg.popular;

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-2 sm:p-8",
        dark
          ? "border-gold/30 bg-navy text-cream shadow-card"
          : cn("border-navy/10 bg-white text-ink shadow-soft hover:shadow-card", theme.border),
      )}
    >
      {pkg.popular && (
        <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-linear-to-r from-gold-300 to-gold px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-navy shadow-gold">
          <Star className="h-3.5 w-3.5 fill-navy" /> Most Popular
        </span>
      )}

      {/* Tier + name */}
      <div className="flex items-center justify-between gap-3">
        <span
          className={cn(
            "rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em]",
            theme.badge,
          )}
        >
          {pkg.badge}
        </span>
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.2em]",
            dark ? "text-gold" : theme.accent,
          )}
        >
          {pkg.tier}
        </span>
      </div>

      <h3 className={cn("mt-4 text-2xl", dark ? "text-cream" : "text-navy")}>{pkg.name}</h3>
      <p className={cn("mt-1 text-sm", dark ? "text-cream/60" : "text-muted")}>{pkg.category}</p>

      {/* Price */}
      <div className="mt-5 flex items-end gap-1.5">
        <span className={cn("text-4xl font-extrabold tracking-tight", dark ? "text-gold" : "text-navy")}>
          ₹{pkg.priceLabel}
        </span>
        <span className={cn("pb-1 text-sm font-medium", dark ? "text-cream/60" : "text-muted")}>
          / sq.ft
        </span>
      </div>

      <p
        className={cn(
          "mt-4 border-t pt-5 text-sm leading-relaxed",
          dark ? "border-white/12 text-cream/70" : "border-navy/10 text-ink/75",
        )}
      >
        {pkg.summary}
      </p>

      {/* Key inclusions */}
      <ul className="mt-5 flex-1 space-y-2.5">
        {pkg.scope.slice(0, 5).map((item) => (
          <li
            key={item}
            className={cn("flex items-start gap-2.5 text-sm", dark ? "text-cream/85" : "text-ink/80")}
          >
            <Check
              className={cn("mt-0.5 h-4 w-4 shrink-0", dark ? "text-gold" : "text-gold")}
              strokeWidth={2.6}
            />
            {item}
          </li>
        ))}
      </ul>

      <Link
        href={`/packages/${pkg.slug}`}
        className={cn(
          "group mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
          dark
            ? "bg-linear-to-r from-gold-300 to-gold text-navy hover:-translate-y-0.5 focus-visible:ring-offset-navy"
            : "border border-navy/15 text-navy hover:border-navy hover:bg-navy hover:text-cream focus-visible:ring-offset-white",
        )}
      >
        View Full Details
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
