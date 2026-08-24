import Image from "next/image";
import { cn } from "@/lib/utils";

export interface HeroBannerProps {
  title?: string;
  description?: string;
  date?: Date | string;
  image: { src: string; alt: string };
  className?: string;
}

function toDateInput(date: Date | string): string {
  return (typeof date === "string" ? new Date(date) : date)
    .toISOString()
    .split("T")[0];
}

function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(typeof date === "string" ? new Date(date) : date);
}

export function HeroBanner({
  title,
  description,
  date,
  image,
  className,
}: HeroBannerProps) {
  return (
    <div
      className={cn(
        "grid grid-flow-row gap-2 sm:grid-cols-2 grid-cols-1 *:min-h-48!",
        className,
      )}
    >
      <div className="bg-surface-container-low rounded-xl p-10 sm:p-14 flex flex-col justify-center gap-1">
        {date && (
          <time
            dateTime={toDateInput(date)}
            className="text-title-medium text-on-surface-variant mb-3 font-bold"
          >
            {formatDate(date)}
          </time>
        )}
        {title && (
          <h1 className="text-display-large font-bold text-on-surface">
            {title}
          </h1>
        )}
        {description && (
          <p className="text-body-large text-on-surface mt-1 font-medium">
            {description}
          </p>
        )}
      </div>
      <Image
        className="bg-surface-container rounded-xl md:h-138.5 w-full object-cover"
        src={image.src}
        alt={image.alt}
        width={800}
        height={800}
        loading="lazy"
      />
    </div>
  );
}