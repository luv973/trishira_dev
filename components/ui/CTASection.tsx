import { MessageCircle, Phone } from "lucide-react";
import { company, whatsappLink } from "@/lib/data";
import { Button } from "./Button";

interface CTASectionProps {
  title?: string;
  description?: string;
}

/** Closing call-to-action band with consultation and WhatsApp actions. */
export function CTASection({
  title = "Let's Build Your Dream Project",
  description = "Book your free site consultation today and get a transparent, SOR-based construction estimate.",
}: CTASectionProps) {
  return (
    <section className="container-x py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="absolute inset-0 bg-blueprint opacity-50" aria-hidden />
        <div
          className="absolute -right-16 -top-16 h-60 w-60 rounded-full bg-gold/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-20 -left-10 h-60 w-60 rounded-full bg-gold/10 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl text-cream sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/70">{description}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="gold" size="lg">
              Book Free Consultation
            </Button>
            <Button href={whatsappLink()} external variant="outline" size="lg">
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>

          <p className="mt-7 flex items-center justify-center gap-2 text-sm text-cream/60">
            <Phone className="h-4 w-4 text-gold" />
            Or call us directly:
            <a
              href={`tel:+${company.phoneDigits}`}
              className="font-semibold text-cream transition-colors hover:text-gold"
            >
              {company.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
