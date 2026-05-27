"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { company, navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-white shadow-lg shadow-navy/10"
          : "bg-white/92 shadow-sm backdrop-blur-md",
      )}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        {/*
          Logo wrapped in a navy container so the image (which has a dark
          background) always reads cleanly against the white navbar.
        */}
        <Link href="/" aria-label="Trishira Developers — Home" className="shrink-0">
          <div className="overflow-hidden rounded-xl bg-white p-1 ring-1 ring-white/20 shadow-sm transition-transform duration-300 hover:scale-105">
            <Logo className="h-12 w-12" width={500} height={500} />
          </div>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive(link.href)
                    ? "text-gold"
                    : "text-navy/75 hover:text-gold",
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:+${company.phoneDigits}`}
            className="hidden items-center gap-2 text-sm font-medium text-navy/70 transition-colors hover:text-gold xl:flex"
          >
            <Phone className="h-4 w-4 text-gold" />
            {company.phoneDisplay}
          </a>
          <Button href="/contact" variant="gold">
            Get a Quote
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy/15 text-navy/75 transition-colors hover:border-gold hover:text-gold lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu — white background, navy text */}
      <div
        className={cn(
          "overflow-hidden border-navy/8 bg-white transition-[max-height] duration-300 ease-out lg:hidden",
          open ? "max-h-[34rem] border-t" : "max-h-0",
        )}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "block rounded-xl px-4 py-3 text-[0.95rem] font-medium transition-colors",
                  isActive(link.href)
                    ? "bg-gold/10 text-gold"
                    : "text-navy/75 hover:bg-navy/5 hover:text-gold",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="container-x flex flex-col gap-3 pb-6">
          <a
            href={`tel:+${company.phoneDigits}`}
            className="flex items-center gap-2 text-sm font-medium text-navy/75"
          >
            <Phone className="h-4 w-4 text-gold" />
            {company.phoneDisplay}
          </a>
          <Button href="/contact" variant="gold" className="w-full">
            Get a Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
