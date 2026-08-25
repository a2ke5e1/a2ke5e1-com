import { cn } from "@/lib/utils";

export interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  className?: string;
}

export function ExperienceCard({
  company,
  position,
  duration,
  className,
}: ExperienceCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1 rounded-3xl bg-surface-container-low p-6",
        className,
      )}
    >
      <p className="text-label-small text-on-surface-variant mb-1">{duration}</p>
      <h3 className="text-title-large font-bold text-on-surface">{company}</h3>
      <p className="text-body-medium text-on-surface-variant">{position}</p>
    </div>
  );
}
