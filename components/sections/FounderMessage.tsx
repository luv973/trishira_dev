"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { founder } from "@/lib/data";

/**
 * "Message from the Founder" section — Light background with dotted texture.
 * Desktop: image left, content right. Mobile: image top, content below.
 */
export function FounderMessage() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Subtle dot texture (utility defined in globals.css) */}
      <div className="absolute inset-0 bg-dots opacity-60" aria-hidden />

      {/* Soft ambient glow */}
      <div
        className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-gold/8 blur-[100px]"
        aria-hidden
      />

      <div className="container-x relative">
        {/* ── Centered section heading ── */}
        <Reveal>
          <SectionHeading
            eyebrow="Leadership"
            title={
              <>
                Message from the <span className="text-gradient-gold">Founder</span>
              </>
            }
          />
        </Reveal>

        {/* ── Two-column grid ── */}
        <div className="mt-12 grid items-center gap-10 lg:mt-16 lg:grid-cols-[420px_1fr] lg:gap-16">

          {/* ── Left: portrait ── */}
          <Reveal delay={0.08}>
            <div className="group relative mx-auto max-w-[320px] lg:mx-0 lg:max-w-none">
              {/* Decorative gold offset border */}
              <div
                className="absolute -bottom-4 -right-4 h-full w-full rounded-[20px] border-2 border-gold/35"
                aria-hidden
              />
              <Image
                src={founder.imageSrc}
                alt={`${founder.name} — ${founder.designation}`}
                width={420}
                height={530}
                className="relative z-10 w-full rounded-2xl object-cover shadow-card transition-transform duration-500 group-hover:scale-[1.016]"
                style={{ objectPosition: "center top" }}
              />
            </div>
          </Reveal>

          {/* ── Right: content ── */}
          <div className="flex flex-col gap-6">

            {/* Founder title / headline */}
            <Reveal delay={0.14}>
              <h3 className="font-heading text-2xl leading-snug text-navy sm:text-[1.8rem]">
                {founder.title.split(", ").map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <span key={i}>
                      {part},{" "}
                    </span>
                  ) : (
                    <span key={i} className="text-gradient-gold">
                      {part}
                    </span>
                  )
                )}
              </h3>
            </Reveal>

            {/* Founder message */}
            <Reveal delay={0.20}>
              <p className="leading-relaxed text-muted">
                &ldquo;{founder.message}&rdquo;
              </p>
            </Reveal>

            {/* Highlighted quote card */}
            <Reveal delay={0.26}>
              <div className="relative overflow-hidden rounded-2xl bg-navy p-6 shadow-card">
                <div className="absolute inset-0 bg-blueprint opacity-40" aria-hidden />
                <div
                  className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gold/12 blur-3xl"
                  aria-hidden
                />
                <div className="relative flex gap-4">
                  <Quote
                    className="mt-0.5 h-6 w-6 shrink-0 text-gold"
                    aria-hidden
                  />
                  <p className="text-sm leading-relaxed text-cream/85 sm:text-base">
                    {founder.quote}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Founder attribution */}
            <Reveal delay={0.32}>
              <div className="flex items-center gap-4 pt-1">
                <span className="h-px w-10 shrink-0 bg-gold" aria-hidden />
                <div>
                  <p className="text-base font-bold text-navy">{founder.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{founder.designation}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
