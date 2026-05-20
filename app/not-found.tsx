import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-navy px-5 py-32">
      <div className="absolute inset-0 bg-blueprint opacity-60" aria-hidden />
      <div
        className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-gold/12 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-xl text-center">
        <p className="text-gradient-gold font-heading text-7xl font-extrabold sm:text-9xl">404</p>
        <h1 className="mt-4 text-3xl text-cream sm:text-4xl">Page Not Found</h1>
        <p className="mx-auto mt-3 max-w-md text-cream/65">
          The page you are looking for doesn&apos;t exist or may have been moved. Let&apos;s get you
          back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="gold" size="lg">
            Back to Home
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
