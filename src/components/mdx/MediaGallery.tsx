import { cn } from "@/lib/utils";

export interface MediaGalleryProps {
  cols?: string;
  className?: string;
  children?: React.ReactNode;
}

export function MediaGallery({ cols = "", className, children }: MediaGalleryProps) {
  const columnCount = Number.parseInt(cols, 10);
  const hasColumns = Number.isFinite(columnCount) && columnCount > 0;
  return (
    <div
      className={cn(
        "my-8 grid items-center gap-3 [&>p]:mb-0",
        !hasColumns &&
          "sm:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
        className,
      )}
      style={
        hasColumns
          ? { gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
