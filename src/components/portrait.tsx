import Image from "next/image";
import { cn } from "@/lib/cn";

export function Portrait({
  alt,
  priority = false,
  className,
  sizes = "(min-width: 768px) 40vw, 100vw",
}: {
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src="/portrait.jpg"
      alt={alt}
      width={460}
      height={460}
      priority={priority}
      sizes={sizes}
      className={cn("h-auto w-full object-cover object-[center_18%]", className)}
    />
  );
}
