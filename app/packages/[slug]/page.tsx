import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PackageDetail } from "@/components/packages/PackageDetail";
import { getPackage, packages } from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

/** Pre-render one static page per package (silver / gold / diamond). */
export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) {
    return { title: "Package Not Found" };
  }
  return {
    title: `${pkg.tier} Package — ${pkg.name}`,
    description: `${pkg.name} at ₹${pkg.priceLabel}/sq.ft. ${pkg.summary}`,
    alternates: { canonical: `/packages/${pkg.slug}` },
  };
}

export default async function PackageSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const pkg = getPackage(slug);
  if (!pkg) {
    notFound();
  }
  return <PackageDetail pkg={pkg} />;
}
