import type { Metadata } from "next";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Complete construction services from Trishira Developers — turnkey construction, civil & RCC works, plumbing, electrical, finishing, and planning & estimation.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Complete Construction <span className="text-gradient-gold">Services</span>
          </>
        }
        description="Every discipline your project needs — engineered, supervised and delivered by one accountable team, from foundation to finishing."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />

      {/* ---- Services grid ---- */}
      <section className="container-x py-20 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="What We Do"
            title={
              <>
                Six Core Services, <span className="text-gradient-gold">One Trusted Team</span>
              </>
            }
            description="Whether you need only the structure or a fully finished home, our services cover the entire construction journey."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.06} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <ProcessSection />

      <CTASection
        title="Need a Service Not Listed Here?"
        description="Tell us about your project — our team will guide you with a transparent plan and estimate."
      />
    </>
  );
}
