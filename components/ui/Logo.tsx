import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

/**
 * Official Trishira Developers logo served from /images/logo.png.
 * Place the PNG at public/images/logo.png.
 */
export function Logo({ className, width = 56, height = 56 }: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="Trishira Developers"
      width={width}
      height={height}
      priority
      className={cn("object-contain", className)}
    />
  );
}

/** Mark-only variant — same image at a smaller default size. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo.png"
      alt="Trishira Developers"
      width={48}
      height={48}
      priority
      className={cn("object-contain", className)}
    />
  );
}
