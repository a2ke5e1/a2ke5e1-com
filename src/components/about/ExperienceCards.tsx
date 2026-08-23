import { ExperienceCard } from "./ExperienceCard";
import type { ExperienceItem } from "@/types/experience";

export interface ExperienceCardsProps {
  items?: string;
}

export function ExperienceCards({ items }: ExperienceCardsProps) {
  let parsed: unknown;
  try {
    parsed = JSON.parse(items ?? "");
  } catch {
    parsed = [];
  }

  if (!Array.isArray(parsed)) return null;

  return (
    <div className="my-8 grid gap-4 md:grid-cols-2 md:[&>*:first-child]:col-span-2">
      {parsed.map((item, index) => {
        const { company, position, duration } = item as ExperienceItem;
        return (
          <ExperienceCard
            key={`${company}-${position}-${index}`}
            company={company}
            position={position}
            duration={duration}
          />
        );
      })}
    </div>
  );
}
