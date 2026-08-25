import { cn } from "@/lib/utils";

export const TechBadge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={cn(
      "rounded-full bg-tertiary-container px-3 py-1 text-label-small text-on-tertiary-container inline-flex items-center",
      className,
    )}
  >
    #{children}
  </span>
);