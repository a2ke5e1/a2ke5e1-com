import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { MaterialIcon } from "./icons";

const iconVariants = cva("material-symbols-rounded", {
  variants: {
    fill: {
      outlined: "",
      filled: "material-symbols-filled",
    },
  },
  defaultVariants: { fill: "outlined" },
});

export function Icon({
  children,
  className,
}: {
  children: MaterialIcon;
  className?: string;
}) {
  return (
    <span className={cn(iconVariants({ fill: children.fill }), className)}>
      {children.name}
    </span>
  );
}