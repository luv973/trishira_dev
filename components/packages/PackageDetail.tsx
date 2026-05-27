import Link from "next/link";
import { ArrowRight, Check, ChevronRight, MessageCircle, ShieldCheck, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { PackageCard } from "@/components/ui/PackageCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ConstructionPackage } from "@/lib/data";
import { packages, whatsappLink } from "@/lib/data";
import { tierTheme } from "@/lib/packageTheme";
import { cn } from "@/lib/utils";

export function PackageDetail({ pkg }: { pkg: ConstructionPackage }) {
  const theme = tierTheme[pkg.tier];
  const otherPackages = packages.filter((item) => item.slug !== pkg.slug);
  const enquiry = whatsappLink(
    `Hi Trishira Developers, I'm interested in the ${pkg.tier} Package (${pkg.name} — ₹${pkg.priceLabel}/sq.ft). Please share more details.`,
  );

  return (
    <>
      {/* ---- Hero ---- */}
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
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-cream/55"
          >
            <Link href="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            <Link href="/packages" className="transition-colors hover:text-gold">
              Packages
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            <span className="text-gold">{pkg.tier}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left: intro */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={cn(
                    "rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]",
                    theme.badge,
                  )}
                >
                  {pkg.badge}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {pkg.tier} Package
                </span>
                {pkg.popular && (
                  <span className="rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                    Most Popular
                  </span>
                )}
              </div>

              <h1 className="mt-5 text-4xl text-cream sm:text-5xl">{pkg.name}</h1>
              <p className="mt-3 font-heading text-lg italic text-gold">{pkg.promise}</p>
              <p className="mt-5 max-w-xl leading-relaxed text-cream/70">{pkg.summary}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" variant="gold" size="lg">
                  Get a Free Quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button href={enquiry} external variant="outline" size="lg">
                  <MessageCircle className="h-5 w-5" />
                  Ask on WhatsApp
                </Button>
              </div>
            </div>

            {/* Right: price card */}
            <div className="rounded-3xl border border-gold/25 bg-white/6 p-7 shadow-2xl backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                Package Price
              </p>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-5xl font-extrabold tracking-tight text-cream">
                  ₹{pkg.priceLabel}
                </span>
                <span className="pb-1.5 text-sm font-medium text-cream/60">/ sq.ft</span>
              </div>

              <div className="mt-5 rounded-2xl border border-gold/20 bg-gold/10 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">Best For</p>
                <p className="mt-1 text-sm text-cream/85">{pkg.bestFor}</p>
              </div>

              <ul className="mt-5 space-y-2.5">
                {[
                  "Branded, quality-tested materials",
                  "Strong engineer-led site supervision",
                  "Transparent SOR-based pricing",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-cream/80">
                    <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={2.2} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Scope of work ---- */}
      <section className="container-x py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow={pkg.scopeTitle}
            title={
              <>
                What This Package <span className="text-gradient-gold">Covers</span>
              </>
            }
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {pkg.scope.map((item, index) => (
            <Reveal key={item} delay={index * 0.04}>
              <div className="flex items-start gap-3.5 rounded-2xl border border-navy/10 bg-white p-5 shadow-soft transition-colors hover:border-gold/40">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/12 text-emerald-600">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-ink/85">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Not included */}
        {pkg.excludes.length > 0 ? (
          <Reveal className="mt-8">
            <div className="rounded-2xl border border-navy/10 bg-sand/60 p-6 sm:p-7">
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-navy">
                Not Included in This Package
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
                {pkg.excludes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted">
                    <X className="h-4 w-4 shrink-0 text-rose-400" strokeWidth={2.6} />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted">
                Need these too?{" "}
                <Link href="/packages" className="font-semibold text-navy underline hover:text-gold">
                  Explore a higher package
                </Link>{" "}
                for a more complete solution.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal className="mt-8">
            <div className="flex items-start gap-3.5 rounded-2xl border border-emerald-500/25 bg-emerald-500/8 p-6">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
                <Check className="h-5 w-5" strokeWidth={3} />
              </span>
              <p className="text-sm text-ink/80">
                <span className="font-semibold text-navy">Nothing left out.</span> This is a complete
                turnkey package — your home is delivered fully finished and ready to move in.
              </p>
            </div>
          </Reveal>
        )}
      </section>

      {/* ---- Highlights ---- */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <div className="absolute inset-0 bg-blueprint opacity-50" aria-hidden />
        <div className="container-x relative">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Key Highlights"
              title={
                <>
                  Why Choose the{" "}
                  <span className="text-gradient-gold">{pkg.tier} Package</span>
                </>
              }
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pkg.highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Reveal key={highlight.title} delay={index * 0.08} className="h-full">
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/25">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-5 text-base text-cream">{highlight.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/65">{highlight.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Materials ---- */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Materials Used"
              title={
                <>
                  Branded, <span className="text-gradient-gold">Quality-Tested</span> Materials
                </>
              }
              description="We use only trusted, branded materials — so your home is built to last."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pkg.materials.map((material, index) => (
              <Reveal key={material.label} delay={index * 0.04}>
                <div className="h-full rounded-2xl border border-navy/10 bg-cream/70 p-5 transition-colors hover:border-gold/40">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-gold">
                    {material.label}
                  </p>
                  <p className="mt-1.5 font-heading text-base font-semibold text-navy">
                    {material.value}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Other packages ---- */}
      <section className="container-x py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Compare Options"
            title={
              <>
                Explore Other <span className="text-gradient-gold">Packages</span>
              </>
            }
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherPackages.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.1} className="h-full">
              <PackageCard pkg={item} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <Button href="/packages" variant="navy">
            View Full Comparison Table
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </section>

      <CTASection
        title={`Ready to Start With the ${pkg.tier} Package?`}
        description="Book a free site consultation and get a transparent, SOR-based estimate tailored to your plot."
      />
    </>
  );
}
