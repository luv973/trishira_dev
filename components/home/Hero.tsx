"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { company, valueProps } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section className="relative isolate flex min-h-svh items-center overflow-hidden bg-navy">
      {/* backdrop */}
      <div className="absolute inset-0 bg-blueprint opacity-70" aria-hidden />
      <div
        className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-gold/15 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute -right-24 bottom-0 h-112 w-112 rounded-full bg-navy-500/45 blur-[130px]"
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-cream/95 to-transparent"
        aria-hidden
      />

      <div className="container-x relative grid items-center gap-12 pb-24 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-36">
        {/* ---- Left: copy ---- */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold"
          >
            <MapPin className="h-3.5 w-3.5" />
            {company.city}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl leading-[1.08] text-cream sm:text-5xl lg:text-6xl xl:text-[4rem]"
          >
            Complete Turnkey{" "}
            <span className="text-gradient-gold">Construction</span>, From Design to Delivery
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg"
          >
            Trishira Developers builds residential, commercial and institutional projects with
            branded materials, transparent SOR-based pricing and a firm on-time handover commitment.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/packages" variant="gold" size="lg">
              Explore Packages
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Free Consultation
            </Button>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-cream/75"
          >
            {company.segments.map((segment, index) => (
              <li key={segment} className="flex items-center gap-5">
                {index > 0 && <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />}
                {segment}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ---- Right: promise card ---- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* rotating seal */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="absolute -right-5 -top-9 z-20 hidden h-28 w-28 sm:block lg:-right-8"
            aria-hidden
          >
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <defs>
                <path
                  id="hero-seal"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <circle cx="50" cy="50" r="48" fill="#0d1e42" stroke="#c9a14a" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="#c9a14a" strokeWidth="0.75" />
              <text fill="#c9a14a" fontSize="8.4" fontWeight="700" letterSpacing="1.6">
                <textPath href="#hero-seal" startOffset="0%">
                  • ONE TEAM • ONE COMMITMENT • COMPLETE DELIVERY
                </textPath>
              </text>
            </svg>
          </motion.div>
          {/* glass card */}
          <div className="relative rounded-3xl border border-white/12 bg-white/6 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              The Trishira Promise
            </p>
            <h2 className="mt-1.5 text-xl text-cream sm:text-2xl">Everything handled, end to end</h2>

            <ul className="mt-6 space-y-1">
              {valueProps.map((prop) => {
                const Icon = prop.icon;
                return (
                  <li
                    key={prop.title}
                    className="flex items-start gap-4 rounded-2xl p-3 transition-colors hover:bg-white/5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/12 text-gold ring-1 ring-gold/25">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-cream">{prop.title}</span>
                      <span className="block text-sm text-cream/60">{prop.text}</span>
                    </span>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/packages"
              className="group mt-6 flex items-center justify-between rounded-2xl bg-linear-to-r from-gold-300 to-gold px-5 py-4 text-navy transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider opacity-80">
                  Packages starting at
                </span>
                <span className="text-2xl font-extrabold">
                  ₹1,100 <span className="text-sm font-semibold">/ sq.ft</span>
                </span>
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-gold transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
