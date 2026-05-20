import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { company, navLinks, packages } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy text-cream/75">
      {/* gold top accent */}
      <div className="h-1 w-full bg-linear-to-r from-gold-300 via-gold to-gold-400" />
      <div className="absolute inset-0 bg-blueprint opacity-40" aria-hidden />

      <div className="container-x relative">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/65">
              Complete turnkey construction solutions — built with strength, precision and trust.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={company.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/80 transition-colors hover:border-gold hover:bg-gold hover:text-navy"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={company.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream/80 transition-colors hover:border-gold hover:bg-gold hover:text-navy"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-gold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Packages */}
          <nav aria-label="Construction packages">
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-gold">
              Our Packages
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {packages.map((pkg) => (
                <li key={pkg.slug}>
                  <Link
                    href={`/packages/${pkg.slug}`}
                    className="transition-colors hover:text-gold"
                  >
                    {pkg.tier} — ₹{pkg.priceLabel}/sq.ft
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="transition-colors hover:text-gold">
                  All Services
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-gold">
              Get In Touch
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li>
                <a
                  href={`tel:+${company.phoneDigits}`}
                  className="flex items-start gap-3 transition-colors hover:text-gold"
                >
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {company.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-start gap-3 break-all transition-colors hover:text-gold"
                >
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                {company.city}
              </li>
            </ul>
            <p className="mt-4 text-xs text-cream/50">
              Reg. No. <span className="font-semibold text-cream/75">{company.registration}</span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-cream/55 sm:flex-row">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p>From Design to Delivery — Complete Turnkey Construction.</p>
        </div>
      </div>
    </footer>
  );
}
