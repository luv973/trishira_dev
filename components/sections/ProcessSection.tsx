import { ProcessTimeline } from "@/components/ui/ProcessTimeline";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** "How We Work" section — reused on Home and Contact pages. */
export function ProcessSection() {
  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="How We Work"
            title={
              <>
                A Simple, Transparent <span className="text-gradient-gold">5-Step Process</span>
              </>
            }
            description="From the first consultation to the final handover, here is exactly how we bring your project to life."
          />
        </Reveal>
        <Reveal delay={0.1} className="mt-14">
          <ProcessTimeline />
        </Reveal>
      </div>
    </section>
  );
}
