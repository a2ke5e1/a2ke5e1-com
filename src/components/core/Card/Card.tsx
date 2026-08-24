import Link from "next/link";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

export interface CardProps {
  href: string;
  cover?: StaticImageData;
  date?: Date | string;
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
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

export const Card = ({
  href,
  cover,
  date,
  title,
  subtitle,
  description,
  tags,
  className,
}: CardProps) => (
  <Link
    href={href}
    className={cn(
      "group relative isolate flex flex-col overflow-hidden rounded-3xl bg-surface-container-low transition-[border-radius] duration-standard-default-effects ease-standard-default-effects active:rounded-[2.5rem] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-secondary-container before:opacity-0 before:transition-opacity before:duration-standard-default-effects before:ease-standard-default-effects hover:before:opacity-100 active:before:opacity-state-active",
      className,
    )}
  >
    {cover && (
      <Image
        src={cover}
        alt=""
        sizes="(min-width: 768px) 640px, 100vw"
        className="aspect-video w-full rounded-3xl object-cover"
      />
    )}
    <div className="flex flex-col gap-3 p-6">
      {date && (
        <time
          dateTime={toDateInput(date)}
          className="text-label-medium text-on-surface-variant font-semibold"
        >
          {formatDate(date)}
        </time>
      )}
      <h2 className="text-title-large text-on-surface font-extrabold">{title}</h2>
      {/* {subtitle && (
        <p className="text-body-medium text-on-surface-variant">{subtitle}</p>
      )} */}
      {description && (
        <p className="text-body-medium text-on-surface-variant line-clamp-3 font-medium">
          {description}
        </p>
      )}
      {tags && tags.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="inline-flex items-center rounded-full bg-tertiary-container px-3 py-1 text-label-small text-on-tertiary-container"
            >
              #{tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  </Link>
);
