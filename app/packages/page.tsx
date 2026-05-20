import type { Metadata } from "next";
import { ComparisonTable } from "@/components/ui/ComparisonTable";
import { CTASection } from "@/components/ui/CTASection";
import { PackageCard } from "@/components/ui/PackageCard";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { packages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Construction Packages",
  description:
    "Compare Trishira Developers' construction packages — Silver (₹1,100/sq.ft), Gold (₹1,500/sq.ft) and Diamond Complete Turnkey (₹2,000/sq.ft).",
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
        description="Flexible, transparent solutions designed for every budget — from structural grey-work to a complete, ready-to-move-in home."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Packages" }]}
      />

      {/* ---- Package cards ---- */}
      <section className="container-x py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Choose Your Scope"
            title={
              <>
                Three Packages, <span className="text-gradient-gold">One Standard of Quality</span>
              </>
            }
            description="Every package is built with branded materials, strong site supervision and transparent SOR-based pricing."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.slug} delay={index * 0.1} className="h-full">
              <PackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          Prices are indicative and may vary with site conditions, design and specifications.
        </p>
      </section>

      {/* ---- Comparison ---- */}
      <section className="bg-white py-20 sm:py-24">
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
        </div>
      </section>

      <CTASection
        title="Not Sure Which Package Fits?"
        description="Tell us about your plot and budget — we'll recommend the right package and a transparent estimate."
      />
    </>
  );
}
