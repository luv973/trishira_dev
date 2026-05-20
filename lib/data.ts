/**
 * Trishira Developers — Central content source.
 *
 * Every piece of marketing copy, package detail and contact value lives here.
 * Update this file to change the website content — no component edits required.
 */
import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  Bug,
  Building2,
  ClipboardList,
  Clock,
  Crown,
  Droplets,
  FileSignature,
  Gem,
  Hammer,
  Handshake,
  HardHat,
  Home,
  IndianRupee,
  KeyRound,
  Layers,
  PaintRoller,
  PencilRuler,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Site / company                                                     */
/* ------------------------------------------------------------------ */

/** Public site URL — update before deploying to your real domain. */
export const SITE_URL = "https://trishiradevelopers.com";

export const company = {
  name: "Trishira Developers",
  shortName: "Trishira",
  tagline: "From Design to Delivery, We Deliver Complete Turnkey Projects",
  intro:
    "Trishira Developers delivers complete turnkey construction solutions for residential, commercial and institutional projects — combining engineering expertise, branded materials and transparent costing.",
  segments: ["Residential", "Commercial", "Institutional"],

  phoneDisplay: "+91 80527 40238",
  phoneDigits: "918052740238",
  email: "trishiradevelopers@gmail.com",
  city: "Kanpur, Uttar Pradesh",
  registration: "09LEFPS7650GIZT",

  instagram: "@trishiradevelopers",
  instagramUrl: "https://www.instagram.com/trishiradevelopers",
  facebook: "Trishira Developers",
  facebookUrl: "https://www.facebook.com/trishiradevelopers",
} as const;

/** Build a pre-filled WhatsApp chat link. */
export function whatsappLink(message?: string): string {
  const text = message ?? "Hello Trishira Developers, I would like to know more about your construction packages.";
  return `https://wa.me/${company.phoneDigits}?text=${encodeURIComponent(text)}`;
}

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Contact", href: "/contact" },
] as const;

/* ------------------------------------------------------------------ */
/*  Shared types                                                       */
/* ------------------------------------------------------------------ */

export interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  points: string[];
}

export interface Material {
  label: string;
  value: string;
}

export type PackageTier = "Silver" | "Gold" | "Diamond";

export interface ConstructionPackage {
  slug: string;
  tier: PackageTier;
  badge: string;
  name: string;
  category: string;
  price: number;
  priceLabel: string;
  tagline: string;
  promise: string;
  popular: boolean;
  summary: string;
  bestFor: string;
  scopeTitle: string;
  scope: string[];
  materials: Material[];
  excludes: string[];
  highlights: Feature[];
}

/* ------------------------------------------------------------------ */
/*  Promises / value props                                             */
/* ------------------------------------------------------------------ */

/** The four "Our Promise" badges from the catalogue. */
export const promises: Feature[] = [
  { icon: ShieldCheck, title: "Quality Materials", text: "Branded, tested materials only." },
  { icon: HardHat, title: "Expert Team", text: "Experienced engineers & crew." },
  { icon: Clock, title: "Timely Delivery", text: "Projects completed on schedule." },
  { icon: Handshake, title: "Transparent Dealing", text: "Clear pricing, zero surprises." },
];

/** Hero value propositions. */
export const valueProps: Feature[] = [
  { icon: Building2, title: "Complete Turnkey Solutions", text: "From planning to handover." },
  { icon: Home, title: "Residential & Commercial", text: "Customised for every need." },
  { icon: ShieldCheck, title: "Quality Construction", text: "Built with strength & precision." },
  { icon: Clock, title: "On Time, Every Time", text: "A commitment we stand by." },
];

/** "Why Choose Us" — the differentiators. */
export const whyChooseUs: Feature[] = [
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    text: "Clear SOR-based costing with absolutely no hidden charges.",
  },
  {
    icon: BadgeCheck,
    title: "Branded & Tested Materials",
    text: "Only trusted, quality-tested brands go into your home.",
  },
  {
    icon: HardHat,
    title: "Strong Site Supervision",
    text: "Experienced engineers monitor every stage on site.",
  },
  {
    icon: Clock,
    title: "Timely Project Delivery",
    text: "Committed timelines — we deliver on schedule.",
  },
  {
    icon: Handshake,
    title: "Complete Turnkey Responsibility",
    text: "One team owns your project from design to delivery.",
  },
];

/** "Our Commitment" band. */
export const commitments: Feature[] = [
  { icon: Gem, title: "Quality Materials", text: "Premium, branded inputs." },
  { icon: Building2, title: "Strong & Safe Construction", text: "Engineered for durability." },
  { icon: Clock, title: "On-Time Delivery", text: "We value your timeline." },
  { icon: Users, title: "Customer Satisfaction", text: "Your trust, our priority." },
];

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */

export const services: Service[] = [
  {
    slug: "turnkey",
    icon: Building2,
    title: "Complete Turnkey Construction",
    tagline: "From planning to handover — everything handled by us.",
    points: ["End-to-end project execution", "Single point of responsibility", "Planning to final handover"],
  },
  {
    slug: "civil",
    icon: Hammer,
    title: "Civil & RCC Works",
    tagline: "Strong, precise structural execution.",
    points: ["Foundation to slab", "Brickwork & plaster", "Structural RCC execution"],
  },
  {
    slug: "plumbing",
    icon: Droplets,
    title: "Plumbing Systems",
    tagline: "Leak-proof water & drainage networks.",
    points: ["Internal & external piping", "Drainage & waterproofing", "Sanitary fittings provision"],
  },
  {
    slug: "electrical",
    icon: Zap,
    title: "Electrical Works",
    tagline: "Safe, concealed electrical systems.",
    points: ["Concealed wiring", "Switches & fittings", "DB & distribution setup"],
  },
  {
    slug: "finishing",
    icon: PaintRoller,
    title: "Finishing Works",
    tagline: "The premium touch that makes a house a home.",
    points: ["Tiles & marble", "Painting & putty", "False ceiling (POP)"],
  },
  {
    slug: "planning",
    icon: ClipboardList,
    title: "Planning & Estimation",
    tagline: "Transparent paperwork before the first brick.",
    points: ["BOQ preparation", "Bank loan estimation", "Drawing & approvals"],
  },
];

/* ------------------------------------------------------------------ */
/*  Work process                                                       */
/* ------------------------------------------------------------------ */

export interface ProcessStep {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const processSteps: ProcessStep[] = [
  { icon: Users, title: "Consultation", text: "We understand your needs, site and budget." },
  { icon: PencilRuler, title: "Planning & Design", text: "Smart planning and drawings for better living." },
  { icon: FileSignature, title: "Estimation & Agreement", text: "Transparent SOR pricing and a clear agreement." },
  { icon: Hammer, title: "Construction", text: "Quality construction executed with care." },
  { icon: KeyRound, title: "Handover", text: "On-time delivery of your complete home." },
];

/* ------------------------------------------------------------------ */
/*  Construction packages                                              */
/* ------------------------------------------------------------------ */

export const packages: ConstructionPackage[] = [
  {
    slug: "silver",
    tier: "Silver",
    badge: "Package A",
    name: "Structural Work Package",
    category: "Structural (Basic)",
    price: 1100,
    priceLabel: "1,100",
    tagline: "Structural (Basic)",
    promise: "Strong Foundation. Solid Future.",
    popular: false,
    summary:
      "Complete grey-structure construction with pre-construction anti-termite protection — the solid, IS-standard base for your building.",
    bestFor: "Clients who want only structural (grey structure) work with termite protection.",
    scopeTitle: "Scope of Work",
    scope: [
      "Site clearing & layout marking",
      "Excavation & foundation",
      "PCC (Plain Cement Concrete)",
      "Anti-termite treatment (pre-construction)",
      "RCC — footing, column, beam & slab",
      "Brickwork masonry",
      "Staircase construction",
      "Internal & external plaster",
    ],
    materials: [
      { label: "Cement", value: "UltraTech / ACC / JK Cement" },
      { label: "Steel", value: "Jindal / Kamdhenu Fe500" },
      { label: "Sand", value: "Approved local source" },
      { label: "Aggregate", value: "IS Standard" },
      { label: "Anti-termite Chemical", value: "Dr. Fixit / Bayer / Equivalent" },
    ],
    excludes: ["Electrical work", "Plumbing work", "Tiles / flooring", "Doors & windows", "Painting"],
    highlights: [
      { icon: ShieldCheck, title: "Strong Structure", text: "Engineered RCC built for long-term strength." },
      { icon: Bug, title: "Termite Protection", text: "Pre-construction anti-termite treatment included." },
      { icon: BadgeCheck, title: "Quality Materials", text: "IS-standard, branded structural materials." },
      { icon: HardHat, title: "Expert Execution", text: "Skilled supervision at every structural stage." },
    ],
  },
  {
    slug: "gold",
    tier: "Gold",
    badge: "Package B",
    name: "Structure + Services Package",
    category: "Structure + Services",
    price: 1500,
    priceLabel: "1,500",
    tagline: "Structure + Services",
    promise: "Stronger Structure. Essential Services. Smarter Living.",
    popular: false,
    summary:
      "Everything in the Silver package plus concealed electrical, plumbing, waterproofing and sanitary provisions — a structure fully ready for finishing.",
    bestFor: "Clients who want a strong structure with essential services, ready for finishing.",
    scopeTitle: "What's Included",
    scope: [
      "Everything in the Silver Package",
      "Electrical conduit & concealed wiring",
      "Plumbing system (internal & external)",
      "Waterproofing treatment (bathroom & terrace)",
      "Sanitary provision (basic fittings)",
      "Overhead & underground water tank provision",
    ],
    materials: [
      { label: "Wires", value: "Finolex / Havells / Polycab" },
      { label: "Switches", value: "Anchor / GM Modular" },
      { label: "Pipes", value: "Supreme / Astral (CPVC & PVC)" },
      { label: "Fittings", value: "Astral / Supreme" },
      { label: "Waterproofing", value: "Dr. Fixit / Fosroc / Sika" },
      { label: "Conduits", value: "AKG / Supreme" },
      { label: "DB Box", value: "Havells / Legrand" },
    ],
    excludes: [
      "Tiles & flooring",
      "Painting (putty & finish)",
      "Doors & windows",
      "False ceiling",
      "Modular kitchen",
    ],
    highlights: [
      { icon: Layers, title: "Structure + Services", text: "Grey structure with all essential services built in." },
      { icon: Droplets, title: "Leak-Proof Systems", text: "Waterproofing for bathrooms and terrace." },
      { icon: Zap, title: "Concealed Wiring", text: "Safe, branded concealed electrical network." },
      { icon: BadgeCheck, title: "Branded Materials", text: "Trusted brands for wiring, pipes and fittings." },
    ],
  },
  {
    slug: "diamond",
    tier: "Diamond",
    badge: "Package C",
    name: "Complete Turnkey Package",
    category: "Complete Turnkey",
    price: 2000,
    priceLabel: "2,000",
    tagline: "Complete Turnkey",
    promise: "Dream It. We Build It. You Live It.",
    popular: true,
    summary:
      "A beautifully finished, ready-to-move-in home — structure, services, finishing, false ceiling and modular kitchen platform, all handled by us.",
    bestFor: "Clients who want a complete, ready-to-move-in house with zero hassle.",
    scopeTitle: "What's Included",
    scope: [
      "All structural work",
      "Brickwork & plaster",
      "Electrical work (concealed)",
      "Plumbing & sanitary",
      "Waterproofing treatment",
      "Tiles & flooring",
      "Doors & windows",
      "Painting (putty + primer + finish)",
      "False ceiling (POP)",
      "Modular kitchen platform",
      "Complete finishing",
      "Site cleaning & handover",
    ],
    materials: [
      { label: "Cement", value: "UltraTech / ACC / JK Cement" },
      { label: "Steel", value: "Jindal / Kamdhenu Fe500" },
      { label: "Bricks", value: "Best quality bricks" },
      { label: "Tiles", value: "Kajaria / Nitco / Somany" },
      { label: "Paint", value: "Asian Paints / Berger" },
      { label: "Sanitary", value: "Cera / Hindware / Parryware" },
      { label: "Pipes", value: "Supreme / Astral (CPVC & PVC)" },
      { label: "Electrical", value: "Havells / Anchor / Polycab" },
      { label: "Doors", value: "Flush door / WPC / Ply flush" },
      { label: "Windows", value: "UPVC / Aluminium" },
      { label: "Kitchen", value: "Granite platform + SS sink" },
      { label: "Waterproofing", value: "Dr. Fixit / Fosroc / Sika" },
    ],
    excludes: [],
    highlights: [
      { icon: Home, title: "Ready to Move In", text: "A complete home — just unpack and live." },
      { icon: Gem, title: "Premium Finish", text: "Designer tiles, paint and false ceiling." },
      { icon: Crown, title: "Modular Kitchen", text: "Granite platform with stainless-steel sink." },
      { icon: Handshake, title: "Zero Hassle", text: "One team owns everything, end to end." },
    ],
  },
];

/** Look up a single package by slug. */
export function getPackage(slug: string): ConstructionPackage | undefined {
  return packages.find((p) => p.slug === slug);
}

/* ------------------------------------------------------------------ */
/*  Package comparison matrix                                          */
/* ------------------------------------------------------------------ */

export const comparison = {
  features: [
    "Structure (Civil + RCC)",
    "Electrical Work",
    "Plumbing Work",
    "Finishing (Tiles / Paint)",
    "False Ceiling / POP",
    "Doors & Windows",
    "Ready to Move",
  ],
  matrix: {
    silver: [true, false, false, false, false, false, false],
    gold: [true, true, true, false, false, false, false],
    diamond: [true, true, true, true, true, true, true],
  },
} as const;

/* ------------------------------------------------------------------ */
/*  Misc reusable highlights                                           */
/* ------------------------------------------------------------------ */

export const aboutHighlights: Feature[] = [
  { icon: Sparkles, title: "Engineering Expertise", text: "Sound structural design and execution." },
  { icon: Award, title: "Quality Assurance", text: "Built with strength, precision and trust." },
  { icon: Handshake, title: "Transparent Costing", text: "Honest, SOR-based pricing throughout." },
];
