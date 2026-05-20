import type { Metadata } from "next";
import type { ComponentType } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { company, whatsappLink } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Trishira Developers in Kanpur — call, WhatsApp or email us to book a free site consultation and get a transparent construction estimate.",
  alternates: { canonical: "/contact" },
};

interface ContactCard {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  note: string;
  href: string;
  external?: boolean;
  accent?: boolean;
}

const contactCards: ContactCard[] = [
  {
    icon: Phone,
    label: "Call Us",
    value: company.phoneDisplay,
    note: "Speak with our team directly",
    href: `tel:+${company.phoneDigits}`,
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: company.phoneDisplay,
    note: "Quick replies, right on chat",
    href: whatsappLink(),
    external: true,
    accent: true,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: company.email,
    note: "Send us your project details",
    href: `mailto:${company.email}`,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: company.city,
    note: "Meet us at our office",
    href: "https://www.google.com/maps?q=Kanpur,Uttar+Pradesh",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title={
          <>
            Let&apos;s Build Your <span className="text-gradient-gold">Dream Project</span>
          </>
        }
        description="Your vision, our expertise, perfect execution. Reach out today and get a free site consultation with a transparent estimate."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* ---- Contact details + map ---- */}
      <section className="container-x py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: contact methods */}
          <div>
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Get In Touch"
                title={
                  <>
                    Talk to the <span className="text-gradient-gold">Trishira Team</span>
                  </>
                }
                description="Choose whatever is easiest for you — we usually respond the same day."
              />
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Reveal key={card.label} delay={index * 0.07} className="h-full">
                    <a
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noopener noreferrer" : undefined}
                      className="group flex h-full flex-col gap-3 rounded-2xl border border-navy/10 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-card"
                    >
                      <span
                        className={
                          "flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 " +
                          (card.accent
                            ? "bg-[#25D366] text-white"
                            : "bg-navy text-gold group-hover:bg-gold group-hover:text-navy")
                        }
                      >
                        <Icon className="h-6 w-6" />
                      </span>
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-gold">
                          {card.label}
                        </span>
                        <span className="mt-0.5 block font-heading text-base font-semibold break-words text-navy">
                          {card.value}
                        </span>
                        <span className="mt-1 block text-sm text-muted">{card.note}</span>
                      </span>
                    </a>
                  </Reveal>
                );
              })}
            </div>

            {/* Socials + registration */}
            <Reveal delay={0.15}>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-navy/10 bg-cream/70 p-5">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-navy">Follow us</span>
                  <a
                    href={company.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-cream transition-colors hover:bg-gold hover:text-navy"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a
                    href={company.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-cream transition-colors hover:bg-gold hover:text-navy"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-xs text-muted">
                  Reg. No.{" "}
                  <span className="font-semibold text-navy">{company.registration}</span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: map */}
          <Reveal delay={0.1} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-soft">
              <div className="flex items-center gap-2.5 border-b border-navy/10 px-6 py-4">
                <MapPin className="h-5 w-5 text-gold" />
                <p className="font-heading font-semibold text-navy">
                  Our Location — {company.city}
                </p>
              </div>
              <iframe
                title="Trishira Developers location — Kanpur, Uttar Pradesh"
                src="https://www.google.com/maps?q=Kanpur,Uttar+Pradesh&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full grow border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <ProcessSection />

      {/* ---- Final WhatsApp band ---- */}
      <section className="container-x py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="absolute inset-0 bg-blueprint opacity-50" aria-hidden />
          <div
            className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-gold/20 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl text-cream sm:text-4xl">Book Your Free Site Consultation</h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/70">
              Contact us now to get your construction estimate — transparent pricing, no obligation.
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-base font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat with Us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
