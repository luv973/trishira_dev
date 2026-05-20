import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/lib/data";

/** Dark "Why Choose Us" section — reused on Home and About pages. */
export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
      <div className="absolute inset-0 bg-blueprint opacity-50" aria-hidden />
      <div
        className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />

      <div className="container-x relative">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            tone="dark"
            title={
              <>
                Built on Trust, <span className="text-gradient-gold">Delivered with Care</span>
              </>
            }
            description="The reasons families and businesses across Kanpur choose Trishira Developers for their construction projects."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={index * 0.07} className="h-full">
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/35 hover:bg-white/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/25 transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <h3 className="mt-5 text-lg text-cream">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{reason.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
