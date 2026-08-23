import { cn } from "@/lib/utils";

export interface MediaSplitProps {
  mediaPosition?: "left" | "right";
  className?: string;
  children?: React.ReactNode;
}

export function MediaSplit({
  mediaPosition = "right",
  className,
  children,
}: MediaSplitProps) {
  return (
    <div
      className={cn(
        "my-8 grid gap-6 md:grid-cols-2",
        mediaPosition === "left" && "[&>[data-slot=media]]:md:order-first",
        className,
      )}
    >
      {children}
    </div>
  );
}
