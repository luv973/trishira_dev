import { processSteps } from "@/lib/data";

/** The 5-step "How We Work" process — horizontal on desktop, vertical on mobile. */
export function ProcessTimeline() {
  return (
    <>
      {/* Desktop / tablet — horizontal */}
      <ol className="hidden gap-4 md:grid md:grid-cols-5">
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          const isLast = index === processSteps.length - 1;
          return (
            <li key={step.title} className="relative flex flex-col items-center text-center">
              {!isLast && (
                <span
                  className="absolute left-1/2 top-9 h-0.5 w-full bg-linear-to-r from-gold/55 to-gold/15"
                  aria-hidden
                />
              )}
              <div className="relative z-10 flex h-18 w-18 items-center justify-center rounded-2xl bg-navy text-gold ring-4 ring-cream">
                <Icon className="h-8 w-8" strokeWidth={1.6} />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-br from-gold-300 to-gold text-xs font-bold text-navy ring-4 ring-cream">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-base text-navy">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          );
        })}
      </ol>

      {/* Mobile — vertical */}
      <ol className="relative space-y-7 md:hidden">
        <span
          className="absolute bottom-6 left-[1.85rem] top-6 w-0.5 bg-linear-to-b from-gold via-gold/40 to-transparent"
          aria-hidden
        />
        {processSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li key={step.title} className="relative flex gap-5">
              <div className="relative z-10 flex h-[3.7rem] w-[3.7rem] shrink-0 items-center justify-center rounded-2xl bg-navy text-gold ring-4 ring-cream">
                <Icon className="h-7 w-7" strokeWidth={1.6} />
                <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-gold-300 to-gold text-[0.7rem] font-bold text-navy ring-4 ring-cream">
                  {index + 1}
                </span>
              </div>
              <div className="pt-1.5">
                <h3 className="text-base text-navy">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
}
