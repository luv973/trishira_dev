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
  ChefHat,
  ClipboardList,
  Clock,
  Crown,
  Diamond,
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
  Lightbulb,
  PaintRoller,
  PencilRuler,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wrench,
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
    "Trishira Developers delivers complete turnkey construction solutions for residential, commercial and institutional projects — combining engineering expertise, branded materials and transparent SOR-based costing.",
  segments: ["Residential", "Commercial", "Institutional"],

  phoneDisplay: "+91 80527 40238",
  phoneDigits: "918052740238",
  email: "trishiradevelopers@gmail.com",
  city: "Kanpur, Uttar Pradesh",
  registration: "09LEFPS7650G1ZT",

  instagram: "@trishiradevelopers",
  instagramUrl: "https://www.instagram.com/trishiradevelopers/",
  facebook: "Trishira Developers",
  facebookUrl: "https://www.facebook.com/share/18miLqek4X/",
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

export type PackageTier = "Silver" | "Gold" | "Platinum" | "Diamond";

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
  { icon: Users, title: "Consultation", text: "Understanding your needs, site and budget." },
  { icon: PencilRuler, title: "Planning & Design", text: "Smart planning and drawings for better living." },
  { icon: FileSignature, title: "Estimation & Agreement", text: "Transparent SOR pricing and a clear agreement." },
  { icon: Hammer, title: "Construction", text: "Quality construction executed with care." },
  { icon: KeyRound, title: "Handover", text: "On-time delivery, complete satisfaction." },
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
      "Complete grey-structure construction with full pre and post-construction anti-termite protection — the solid, IS-standard base for your building.",
    bestFor: "Clients who want only structure work with termite protection.",
    scopeTitle: "Scope of Work",
    scope: [
      "Site clearing & layout marking",
      "Excavation & foundation work",
      "PCC (Plain Cement Concrete)",
      "RCC work (footing, column, beam, slab)",
      "Brickwork masonry",
      "Staircase construction",
      "Internal & external plaster",
      "Waterproofing treatment",
      "Anti-termite treatment (pre & post construction)",
    ],
    materials: [
      { label: "Cement", value: "UltraTech / ACC / JK Cement" },
      { label: "Steel", value: "Jindal / Kamdhenu Fe500" },
      { label: "Sand", value: "Approved local source" },
      { label: "Aggregate", value: "IS Standard" },
      { label: "Anti-termite Chemical", value: "Dr. Fixit / Bayer / Equivalent" },
    ],
    excludes: [
      "Electrical & plumbing work",
      "Finishing items",
      "Doors, windows, tiles, paint",
      "POP / ceiling work",
    ],
    highlights: [
      { icon: ShieldCheck, title: "Strong Structure", text: "Engineered RCC built for long-term strength." },
      { icon: Bug, title: "Termite Protection", text: "Pre and post-construction anti-termite treatment." },
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
    bestFor: "Clients who want structure plus essential services, ready for finishing.",
    scopeTitle: "What's Included",
    scope: [
      "Everything in the Silver Package",
      "Electrical conduit & wiring (basic points)",
      "Plumbing lines (internal & external)",
      "Bathroom waterproofing treatment",
      "Provision for sanitary fittings",
      "Anti-termite treatment (pre & post construction)",
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
      "Flooring & wall tiles",
      "Painting, putty & final paint",
      "Doors, windows",
      "Kitchen platform",
      "POP / false ceiling",
      "Sanitary fittings",
    ],
    highlights: [
      { icon: Layers, title: "Structure + Services", text: "Grey structure with all essential services built in." },
      { icon: Droplets, title: "Leak-Proof Systems", text: "Waterproofing for bathrooms and terrace." },
      { icon: Zap, title: "Concealed Wiring", text: "Safe, branded concealed electrical network." },
      { icon: BadgeCheck, title: "Branded Materials", text: "Trusted brands for wiring, pipes and fittings." },
    ],
  },
  {
    slug: "platinum",
    tier: "Platinum",
    badge: "Package C",
    name: "Complete Finishing Package",
    category: "Complete Finishing",
    price: 1800,
    priceLabel: "1,800",
    tagline: "Complete Finishing",
    promise: "Real Work. Real Quality. Real Trust.",
    popular: true,
    summary:
      "Our most demanded package — a fully finished, ready-to-live-in home with tiles, paint, doors, windows, kitchen platform and sanitary fittings included.",
    bestFor: "Clients who want a complete, ready-to-move-in home.",
    scopeTitle: "What's Included",
    scope: [
      "All work in Package B (Gold)",
      "Complete structure (RCC + brickwork + plaster)",
      "Electrical wiring (concealed)",
      "Plumbing system (internal & external)",
      "Waterproofing treatment",
      "Tiles flooring (standard range)",
      "Wall tiles (bathroom & kitchen)",
      "Painting (putty + primer + finish)",
      "Kitchen granite platform",
      "Doors & windows (standard)",
      "Sanitary fittings (standard)",
      "Anti-termite treatment (pre & post construction)",
    ],
    materials: [
      { label: "Electrical", value: "Havells / Polycab / Anchor" },
      { label: "Pipes", value: "Supreme / Astral" },
      { label: "Tiles", value: "Kajaria / Somany" },
      { label: "Paint", value: "Asian Paints" },
      { label: "Sanitary", value: "Cera / Hindware" },
    ],
    excludes: [
      "Modular kitchen",
      "Designer false ceiling",
      "Premium / luxury finishes",
    ],
    highlights: [
      { icon: Star, title: "Most Demanded", text: "The most preferred choice for complete home construction." },
      { icon: Home, title: "Ready to Move In", text: "A fully finished home — just unpack and live." },
      { icon: PaintRoller, title: "Quality Finishing", text: "Branded tiles, paint and sanitary fittings." },
      { icon: BadgeCheck, title: "Best Cost Balance", text: "The smartest balance of cost and quality." },
    ],
  },
  {
    slug: "diamond",
    tier: "Diamond",
    badge: "Package D",
    name: "Premium Turnkey Package",
    category: "Premium Turnkey",
    price: 2100,
    priceLabel: "2,100",
    tagline: "Premium Turnkey",
    promise: "Enhanced Living with Better Finishes & Smart Design.",
    popular: false,
    summary:
      "Premium turnkey solution with modular kitchen, designer false ceiling with LED lights, better finishes and improved fittings for an elevated living experience.",
    bestFor: "Clients who want a premium living experience and a better-quality finished home.",
    scopeTitle: "What's Included",
    scope: [
      "All work in Platinum Package",
      "Complete structure + finishing",
      "Modular kitchen (standard)",
      "False ceiling (POP + LED lights)",
      "Premium electrical fittings",
      "Better quality tiles & paints",
      "Sanitary fittings (better range)",
      "Doors & windows (improved quality)",
      "Wall tiles (full height in bathrooms)",
      "Kitchen granite platform",
      "Complete finishing & handover",
    ],
    materials: [
      { label: "Tiles", value: "Kajaria / Somany (better range)" },
      { label: "Paint", value: "Asian Paints (Apcolite / Premium Emulsion)" },
      { label: "Sanitary", value: "Cera / Hindware (mid-premium)" },
      { label: "Pipes", value: "Supreme / Astral" },
      { label: "Electrical", value: "Havells / Polycab / Anchor" },
      { label: "Kitchen", value: "Standard modular setup" },
      { label: "Doors", value: "Laminated flush doors" },
      { label: "Windows", value: "UPVC / Aluminium" },
    ],
    excludes: ["Custom luxury items (if any special requirement)"],
    highlights: [
      { icon: Crown, title: "Premium Turnkey", text: "A fully delivered, premium-quality home experience." },
      { icon: ChefHat, title: "Modular Kitchen", text: "Standard modular kitchen with granite platform." },
      { icon: Lightbulb, title: "False Ceiling + LED", text: "Designer POP ceilings with concealed LED lighting." },
      { icon: Diamond, title: "Improved Aesthetics", text: "Better finishes, fittings and overall quality." },
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
    "Site clearing & layout marking",
    "Excavation & foundation work",
    "PCC (Plain Cement Concrete)",
    "RCC work (footing, column, beam, slab)",
    "Brickwork masonry",
    "Staircase construction",
    "Internal & external plaster",
    "Waterproofing treatment",
    "Anti-termite treatment (pre & post)",
    "Electrical conduit & wiring (basic points)",
    "Plumbing lines (internal & external)",
    "Bathroom waterproofing treatment",
    "Sanitary fittings provision",
    "Tiles flooring",
    "Wall tiles (bathroom & kitchen)",
    "Painting (putty + primer + finish)",
    "Kitchen granite platform",
    "Doors & windows",
    "Modular kitchen (standard)",
    "False ceiling (POP + LED)",
    "Complete finishing & handover",
  ],
  matrix: {
    silver: [
      true, true, true, true, true, true, true, true, true,
      false, false, false, false, false, false, false, false, false, false, false, false,
    ],
    gold: [
      true, true, true, true, true, true, true, true, true,
      true, true, true, true,
      false, false, false, false, false, false, false, false,
    ],
    platinum: [
      true, true, true, true, true, true, true, true, true,
      true, true, true, true,
      true, true, true, true, true,
      false, false, false,
    ],
    diamond: [
      true, true, true, true, true, true, true, true, true,
      true, true, true, true,
      true, true, true, true, true,
      true, true, true,
    ],
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

/** Why-clients-choose-our-packages strip from the catalogue. */
export const packagePerks: Feature[] = [
  { icon: Award, title: "Best Cost & Quality", text: "The smartest balance of price and finish." },
  { icon: Home, title: "Complete Ready Home", text: "End-to-end, ready-to-move-in solutions." },
  { icon: Wrench, title: "Flexible Material Selection", text: "Adjust brands and specs to your preference." },
  { icon: Users, title: "Ideal For Residential Families", text: "Crafted for real homes and real families." },
];

/* ------------------------------------------------------------------ */
/*  Founder / Leadership                                               */
/* ------------------------------------------------------------------ */

export const founder = {
  name: "Er. Navprafull Srivastav",                        // ← Replace with actual founder name
  designation: "Founder & CEO, Trishira Developers",
  imageSrc: "/images/iMAGE.png",
  title: "Leading with Trust, Building with Excellence",
  message:
    "At Trishira Developers, we believe that every project is more than a structure — it is a promise built on trust, quality, and commitment. Our mission is to create spaces that reflect innovation, functionality, and long-term value. With a customer-first approach and attention to every detail, we strive to deliver excellence in every project.",
  quote:
    "Quality construction is not just about buildings; it is about creating lasting relationships and fulfilling dreams.",
} as const;

