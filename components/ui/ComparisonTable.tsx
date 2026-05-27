import { Check, X } from "lucide-react";
import { comparison, packages } from "@/lib/data";
import { cn } from "@/lib/utils";

type MatrixKey = keyof typeof comparison.matrix;

/** Yes / no indicator used in both the table and mobile cards. */
function Mark({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-600">
      <Check className="h-4 w-4" strokeWidth={3} />
      <span className="sr-only">Included</span>
    </span>
  ) : (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-500/10 text-rose-400">
      <X className="h-4 w-4" strokeWidth={3} />
      <span className="sr-only">Not included</span>
    </span>
  );
}

/** Feature comparison across all four packages — table on desktop, cards on mobile. */
export function ComparisonTable() {
  return (
    <>
      {/* Desktop / tablet table */}
      <div className="hidden overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-soft md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="bg-navy text-cream">
                <th className="px-5 py-5 text-sm font-semibold uppercase tracking-[0.12em]">
                  Features
                </th>
                {packages.map((pkg) => (
                  <th
                    key={pkg.slug}
                    className={cn("px-3 py-5 text-center", pkg.popular && "bg-navy-600")}
                  >
                    <span className="block text-sm font-bold text-cream sm:text-base">
                      {pkg.tier}
                    </span>
                    <span className="mt-0.5 block text-[0.7rem] font-semibold text-cream/60 sm:text-xs">
                      {pkg.badge}
                    </span>
                    <span className="mt-0.5 block text-xs font-semibold text-gold">
                      ₹{pkg.priceLabel}/sq.ft
                    </span>
                    {pkg.popular && (
                      <span className="mt-1.5 inline-block rounded-full bg-gold px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-navy">
                        Most Popular
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.features.map((feature, row) => (
                <tr
                  key={feature}
                  className="border-t border-navy/10 transition-colors hover:bg-cream/60"
                >
                  <td className="px-5 py-3.5 text-sm font-medium text-navy">{feature}</td>
                  {packages.map((pkg) => (
                    <td
                      key={pkg.slug}
                      className={cn("px-3 py-3.5 text-center", pkg.popular && "bg-gold/[0.06]")}
                    >
                      <div className="flex justify-center">
                        <Mark ok={comparison.matrix[pkg.slug as MatrixKey][row]} />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile cards */}
      <div className="grid gap-5 md:hidden">
        {packages.map((pkg) => (
          <div
            key={pkg.slug}
            className={cn(
              "overflow-hidden rounded-2xl border bg-white shadow-soft",
              pkg.popular ? "border-gold/40" : "border-navy/10",
            )}
          >
            <div className="flex items-center justify-between bg-navy px-5 py-4">
              <div>
                <span className="block text-base font-bold text-cream">{pkg.tier}</span>
                <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-cream/60">
                  {pkg.badge}
                </span>
              </div>
              <span className="text-sm font-semibold text-gold">₹{pkg.priceLabel}/sq.ft</span>
            </div>
            <ul className="divide-y divide-navy/10">
              {comparison.features.map((feature, row) => (
                <li key={feature} className="flex items-center justify-between gap-4 px-5 py-3">
                  <span className="text-sm font-medium text-navy">{feature}</span>
                  <Mark ok={comparison.matrix[pkg.slug as MatrixKey][row]} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
