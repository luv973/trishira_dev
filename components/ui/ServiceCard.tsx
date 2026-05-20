import { Check } from "lucide-react";
import type { Service } from "@/lib/data";

/** A single service tile with icon, tagline and feature list. */
export function ServiceCard({ service }: { service: Service }) {
  const { icon: Icon, title, tagline, points } = service;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-card">
      {/* gold sweep on hover */}
      <span
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-gold-300 to-gold transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden
      />

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
        <Icon className="h-7 w-7" strokeWidth={1.6} />
      </div>

      <h3 className="text-xl text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{tagline}</p>

      <ul className="mt-5 space-y-2.5 border-t border-navy/10 pt-5">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-2.5 text-sm text-ink/80">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.6} />
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}
