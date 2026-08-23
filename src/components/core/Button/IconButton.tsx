import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { MaterialIcon } from "../Icons/icons";
import { Icon } from "../Icons/icon";
import Link from "next/link";
import type { ReactNode } from "react";

const iconButtonVariants = cva(
  "relative inline-flex h-12 w-12 items-center justify-center rounded-full text-on-surface transition-colors before:absolute before:inset-0 before:rounded-full before:bg-on-surface before:opacity-0 hover:before:opacity-state-hover focus-visible:before:opacity-state-focus active:before:opacity-state-active",
  {
    variants: {},
    defaultVariants: {},
  },
);

export interface IconButtonProps
  extends VariantProps<typeof iconButtonVariants> {
  icon?: MaterialIcon;
  label: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

const IconButton = ({
  className,
  icon,
  label,
  href,
  onClick,
  children,
}: IconButtonProps) => {
  const classes = cn(iconButtonVariants(), className);
  const content =
    children ?? (icon ? <Icon className="text-2xl">{icon}</Icon> : null);

  if (href) {
    return (
      <Link href={href} aria-label={label} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      className={cn(classes, "cursor-pointer")}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export { IconButton };