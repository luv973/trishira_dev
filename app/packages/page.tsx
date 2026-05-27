import type { Metadata } from "next";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { CTASection } from "@/components/ui/CTASection";
import { PackageCard } from "@/components/ui/PackageCard";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { packagePerks, packages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Construction Packages",
  description:
    "Compare Trishira Developers' construction packages — Silver (₹1,100/sq.ft), Gold (₹1,500/sq.ft), Platinum (₹1,800/sq.ft) and Diamond Premium Turnkey (₹2,100/sq.ft).",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Packages"
        title={
          <>
            Construction Packages for{" "}
            <span className="text-gradient-gold">Every Requirement</span>
          </>
        }
        description="Flexible, transparent solutions designed for every budget — from structural grey-work to a premium ready-to-move-in home."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Packages" }]}
      />

      {/* ---- Package cards ---- */}
      <section className="container-x py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Choose Your Scope"
            title={
              <>
                Four Packages,{" "}
                <span className="text-gradient-gold">One Standard of Quality</span>
              </>
            }
            description="Every package is built with branded materials, strong site supervision and transparent SOR-based pricing."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.slug} delay={index * 0.08} className="h-full">
              <PackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          Material brands and specifications can be adjusted as per client preference with minor cost variation.
        </p>
      </section>

      {/* ---- Why clients choose our packages ---- */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Why Clients Choose Our Packages"
              title={
                <>
                  Built Around{" "}
                  <span className="text-gradient-gold">Real Family Needs</span>
                </>
              }
              description="From the smartest cost–quality balance to flexible material selection — every package is engineered for real homes."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {packagePerks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <Reveal key={perk.title} delay={index * 0.06} className="h-full">
                  <div className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-cream/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white hover:shadow-card">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                      <Icon className="h-6 w-6" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-5 text-base font-semibold text-navy">{perk.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{perk.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Comparison ---- */}
      <section className="bg-cream/60 py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Package Comparison"
              title={
                <>
                  Compare Every <span className="text-gradient-gold">Feature</span>
                </>
              }
              description="See exactly what each package covers, side by side, so you can choose with confidence."
            />
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <ComparisonTable />
          </Reveal>
          <p className="mt-6 text-center text-xs text-muted">
            Note: Material brands and specifications can be adjusted as per client preference with minor cost variation.
          </p>
        </div>
      </section>

      <CTASection
        title="Not Sure Which Package Fits?"
        description="Tell us about your plot and budget — we'll recommend the right package and a transparent estimate."
      />
    </>
  );
}
