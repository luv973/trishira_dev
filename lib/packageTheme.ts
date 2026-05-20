import type { PackageTier } from "./data";

/** Visual theming for each construction package tier. */
export interface TierTheme {
  /** Tier badge chip. */
  badge: string;
  /** Accent text colour. */
  accent: string;
  /** Icon container on a light card. */
  iconWrap: string;
  /** Price pill. */
  priceWrap: string;
  /** Decorative glow gradient start colour. */
  halo: string;
  /** Card hover border colour. */
  border: string;
  /** Solid label dot. */
  dot: string;
}

export const tierTheme: Record<PackageTier, TierTheme> = {
  Silver: {
    badge: "bg-linear-to-r from-[#cdd4de] to-[#9aa6b6] text-navy",
    accent: "text-slate-500",
    iconWrap: "bg-slate-100 text-navy ring-1 ring-slate-200",
    priceWrap: "bg-navy text-cream",
    halo: "bg-slate-300/35",
    border: "hover:border-slate-300",
    dot: "bg-slate-400",
  },
  Gold: {
    badge: "bg-linear-to-r from-gold-300 to-gold text-navy",
    accent: "text-gold",
    iconWrap: "bg-gold/12 text-gold ring-1 ring-gold/25",
    priceWrap: "bg-linear-to-r from-gold-300 to-gold text-navy",
    halo: "bg-gold-300/35",
    border: "hover:border-gold/45",
    dot: "bg-gold",
  },
  Diamond: {
    badge: "bg-navy text-gold ring-1 ring-gold/40",
    accent: "text-gold",
    iconWrap: "bg-navy text-gold ring-1 ring-gold/25",
    priceWrap: "bg-navy text-gold ring-1 ring-gold/30",
    halo: "bg-gold-300/40",
    border: "hover:border-navy/25",
    dot: "bg-navy",
  },
};
