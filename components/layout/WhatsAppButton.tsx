import { WhatsAppIcon } from "@/components/ui/SocialIcons";
import { whatsappLink } from "@/lib/data";

/** Floating WhatsApp call-to-action, fixed to the bottom-right on every page. */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Trishira Developers on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-110 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <span
        className="absolute inset-0 rounded-full bg-[#25D366]"
        style={{ animation: "pulse-ring 2.6s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
        aria-hidden
      />
      <WhatsAppIcon className="relative h-7 w-7 sm:h-8 sm:w-8" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-navy px-3 py-1.5 text-xs font-semibold text-cream opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 md:block">
        Chat with us
      </span>
    </a>
  );
}
