import { ArrowRight, Quote } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { FounderMessage } from "@/components/sections/FounderMessage";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { PackageCard } from "@/components/ui/PackageCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { aboutHighlights, company, packages, promises, services } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* ---- Promise strip (overlaps the hero) ---- */}
      <section className="container-x relative z-10 -mt-16 sm:-mt-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <Reveal key={promise.title} delay={index * 0.08} className="h-full">
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <span>
                    <span className="block font-semibold text-navy">{promise.title}</span>
                    <span className="mt-0.5 block text-sm text-muted">{promise.text}</span>
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---- About preview ---- */}
      <section className="container-x py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="About Trishira Developers"
              title={
                <>
                  We Don&apos;t Just Build Houses —{" "}
                  <span className="text-gradient-gold">We Build Trust</span>
                </>
              }
            />
            <p className="mt-5 leading-relaxed text-muted">
              At Trishira Developers, we specialise in delivering complete turnkey construction
              solutions for residential, commercial and institutional projects.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              We combine engineering expertise, branded materials and transparent costing to ensure
              every project is built with strength, precision and trust.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {aboutHighlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={highlight.title}
                    className="rounded-xl border border-navy/10 bg-white p-4 shadow-soft"
                  >
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.7} />
                    <p className="mt-2.5 text-sm font-semibold text-navy">{highlight.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{highlight.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Button href="/about" variant="navy">
                More About Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl bg-navy p-8 shadow-card sm:p-10">
              <div className="absolute inset-0 bg-blueprint opacity-50" aria-hidden />
              <div
                className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-gold/15 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <Quote className="h-11 w-11 text-gold" />
                <p className="mt-5 font-heading text-2xl leading-snug text-cream sm:text-[1.7rem]">
                  &ldquo;We don&apos;t just construct buildings — we deliver complete homes, ready
                  for living.&rdquo;
                </p>
                <div className="mt-7 h-px w-full bg-white/12" />
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-cream">{company.name}</p>
                    <p className="text-xs text-cream/55">
                      {company.segments.join(" • ")}
                    </p>
                  </div>
                  <div className="rounded-lg border border-gold/25 bg-gold/10 px-3 py-2 text-right">
                    <p className="text-[0.6rem] uppercase tracking-wider text-gold/80">
                      Registration No.
                    </p>
                    <p className="text-xs font-semibold text-cream">{company.registration}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- Services ---- */}
      <section className="bg-white py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Our Services"
              title={
                <>
                  Complete Construction <span className="text-gradient-gold">Services</span>
                </>
              }
              description="Every discipline your project needs — engineered, supervised and delivered by one accountable team."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.06} className="h-full">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 flex justify-center">
            <Button href="/services" variant="navy">
              View All Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />

      {/* ---- Packages ---- */}
      <section className="container-x py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Construction Packages"
            title={
              <>
                Flexible Packages for <span className="text-gradient-gold">Every Budget</span>
              </>
            }
            description="From structural grey-work to a complete turnkey home — choose the scope that fits your needs and budget."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.slug} delay={index * 0.08} className="h-full">
              <PackageCard pkg={pkg} />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 flex justify-center">
          <Button href="/packages" variant="navy">
            Compare All Packages
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Reveal>
      </section>

      <ProcessSection />

      <FounderMessage />

      <CTASection />
    </>
  );
}
