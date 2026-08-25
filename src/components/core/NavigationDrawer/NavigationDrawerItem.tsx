import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { MaterialIcon } from "../Icons/icons";
import React from "react";
import { Icon } from "../Icons/icon";
import Link from "next/link";

const navigationDrawerItemVariants = cva(
  "relative flex h-14 w-full items-center gap-3 rounded-full px-4 text-start transition-colors before:absolute before:inset-0 before:rounded-full before:bg-on-secondary-container before:opacity-0 hover:before:opacity-state-hover focus-visible:before:opacity-state-focus active:before:opacity-state-active",
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

export interface NavigationDrawerItemProps
  extends
    React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof navigationDrawerItemVariants> {
  label?: string;
  icon: MaterialIcon;
  href: string;
}

const NavigationDrawerItem = React.forwardRef<
  HTMLAnchorElement,
  NavigationDrawerItemProps
>(({ className, selected, label, href, icon, ...props }, ref) => {
  return (
    <Link
      href={href}
      className={cn(navigationDrawerItemVariants({ selected }), className)}
      ref={ref}
      {...props}
    >
      <Icon className="text-2xl">{icon}</Icon>
      {label ? <span className="text-sm font-medium">{label}</span> : null}
    </Link>
  );
});
NavigationDrawerItem.displayName = "NavigationDrawerItem";

export { NavigationDrawerItem };