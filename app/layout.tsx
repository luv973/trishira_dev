import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SITE_URL, company } from "@/lib/data";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Trishira Developers — Turnkey Construction Experts in Kanpur",
    template: "%s | Trishira Developers",
  },
  description: company.intro,
  keywords: [
    "Trishira Developers",
    "construction company Kanpur",
    "turnkey construction",
    "house construction Kanpur",
    "residential construction",
    "commercial construction",
    "civil contractor Kanpur",
    "construction packages Kanpur",
    "Silver package construction",
    "Gold package construction",
    "Platinum package construction",
    "Diamond turnkey package",
    "SOR based construction pricing",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  applicationName: company.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: company.name,
    title: "Trishira Developers — Turnkey Construction Experts in Kanpur",
    description: company.intro,
  },
  twitter: {
    card: "summary_large_image",
    title: "Trishira Developers — Turnkey Construction Experts",
    description: company.intro,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "construction",
};

export const viewport: Viewport = {
  themeColor: "#0a1733",
  width: "device-width",
  initialScale: 1,
};

/** Structured data — helps search engines understand the business. */
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.name,
  description: company.intro,
  url: SITE_URL,
  telephone: `+${company.phoneDigits}`,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kanpur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: "Kanpur, Uttar Pradesh",
  sameAs: [company.instagramUrl, company.facebookUrl],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
