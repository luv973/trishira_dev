import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  breadcrumb?: Crumb[];
  children?: ReactNode;
}

/** Compact dark hero banner used at the top of every inner page. */
export function PageHero({ eyebrow, title, description, breadcrumb, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pb-16 pt-32 sm:pb-20 sm:pt-36">
      <div className="absolute inset-0 bg-blueprint opacity-60" aria-hidden />
      <div
        className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-navy-500/45 blur-3xl"
        aria-hidden
      />

      <div className="container-x relative">
        {breadcrumb && (
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-cream/55"
          >
            {breadcrumb.map((crumb, index) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-gold">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-gold">{crumb.label}</span>
                )}
                {index < breadcrumb.length - 1 && (
                  <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-7 bg-gold" aria-hidden />
            {eyebrow}
          </span>
        )}

        <h1 className="mt-4 max-w-3xl text-4xl text-cream sm:text-5xl lg:text-[3.3rem]">
          {title}
        </h1>

        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/70">{description}</p>
        )}

        {children}
      </div>
    </section>
  );
}
