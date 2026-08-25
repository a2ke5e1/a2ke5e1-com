import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { MaterialIcon } from "../Icons/icons";
import React from "react";
import { Icon } from "../Icons/icon";
import Link from "next/link";

const navigationRailItemIconVariants = cva(
  "relative px-4 py-1 rounded-3xl text-center transition-colors before:absolute before:inset-0 before:rounded-3xl before:bg-on-secondary-container before:opacity-0 group-hover:before:opacity-state-hover group-focus-visible:before:opacity-state-focus group-active:before:opacity-state-active",
  {
    variants: {
      selected: {
        true: "bg-secondary-container text-on-secondary-container",
        false: "text-on-surface-variant",
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
);

const navigationRailItemTextVariants = cva(
  "text-center transition-colors break-all text-xs leading-4",
  {
    variants: {
      selected: {
        true: "text-secondary font-semibold",
        false: "text-on-surface-variant font-medium",
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
);

export interface NavigationRailItemProps
  extends
    React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof navigationRailItemIconVariants>,
    VariantProps<typeof navigationRailItemTextVariants> {
  label?: string;
  icon: MaterialIcon;
  href: string;
}

const NavigationRailItem = React.forwardRef<
  HTMLAnchorElement,
  NavigationRailItemProps
>(({ className, selected, label, href, icon, ...props }, ref) => {
  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col items-center justify-center gap-2 px-3 pt-1",
        className,
      )}
      ref={ref}
      {...props}
    >
      <Icon className={cn(navigationRailItemIconVariants({ selected }))}>
        {icon}
      </Icon>
      {label ? (
        <span className={cn(navigationRailItemTextVariants({ selected }))}>
          {label}
        </span>
      ) : null}
    </Link>
  );
});
NavigationRailItem.displayName = "NavigationRailItem";

export { NavigationRailItem };
