import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { commitments, company } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Trishira Developers is a Kanpur-based turnkey construction company delivering residential, commercial and institutional projects with engineering expertise and transparent pricing.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={
          <>
            Engineering Homes, <span className="text-gradient-gold">Building Trust</span>
          </>
        }
        description={company.intro}
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* ---- Our story ---- */}
      <section className="container-x py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title={
                <>
                  From Design to Delivery — <span className="text-gradient-gold">A Promise We Keep</span>
                </>
              }
            />
            <p className="mt-5 leading-relaxed text-muted">
              At Trishira Developers, we specialise in delivering complete turnkey construction
              solutions for residential and commercial projects. From the first drawing to the final
              handover, every stage is handled by one accountable team.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              We combine engineering expertise, branded materials and transparent costing to ensure
              every project is built with strength, precision and trust. We don&apos;t just construct
              buildings — we deliver complete homes, ready for living.
            </p>
            <div className="mt-8">
              <Button href="/packages" variant="navy">
                Explore Our Packages
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl bg-navy p-7 shadow-card sm:p-9">
              <div className="absolute inset-0 bg-blueprint opacity-50" aria-hidden />
              <div
                className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gold/15 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <h3 className="text-lg font-bold uppercase tracking-[0.14em] text-gold">
                  Our Commitment
                </h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {commitments.map((commitment) => {
                    const Icon = commitment.icon;
                    return (
                      <div
                        key={commitment.title}
                        className="rounded-2xl border border-white/10 bg-white/5 p-5"
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/25">
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </span>
                        <p className="mt-4 text-sm font-semibold text-cream">{commitment.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-cream/60">
                          {commitment.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />

      <CTASection
        title="Let's Build Something That Lasts"
        description="Partner with a team that treats your project like its own. Book a free consultation today."
      />
    </>
  );
}
