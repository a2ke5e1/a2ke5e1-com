"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icon/icon";
import { Ripple } from "@/components/ripple/ripple";
import { ThemeToggleButton } from "@/components/button/button";

// Define the styles for the nav link using cva
const navLinkVariants = cva(
  "rounded-3xl flex flex-col justify-center items-center relative w-[3.5rem] h-8 transition-colors",
  {
    variants: {
      active: {
        true: "bg-secondary-container text-on-secondary-container",
        false: "text-on-surface-variant",
      },
    },
  }
);

const navTextVariants = cva("text-[0.75rem] leading-4", {
  variants: {
    active: {
      true: "text-on-secondary-container font-bold",
      false: "text-on-surface-variant",
    },
  },
});

export interface NavLinkProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navLinkVariants> {
  title: string;
  href: string;
  icon: string;
  selectedIcon: string;
  isSelected: (path: string) => boolean;
  asChild?: boolean;
}

const NavLink = React.forwardRef<HTMLDivElement, NavLinkProps>(
  (
    {
      title,
      href,
      icon,
      selectedIcon,
      isSelected,
      active,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : "div";
    return (
      <Link href={href} prefetch className="flex flex-col items-center">
        <Component
          className={cn(navLinkVariants({ active }))}
          ref={ref}
          {...props}
        >
          <Ripple />
          <Icon>
            <span
              className={
                active
                  ? "material-symbols-rounded-selected"
                  : "material-symbols-rounded"
              }
            >
              {active ? selectedIcon : icon}
            </span>
          </Icon>
        </Component>

        <p className={cn(navTextVariants({ active }))}>{title}</p>
      </Link>
    );
  }
);
NavLink.displayName = "NavLink";

// The NavigationRail component
export const NavigationRail = () => {
  const routerPathName = usePathname();

  const isSelected = (pathName: string): boolean => {
    if (pathName !== "/") {
      return routerPathName.startsWith(pathName);
    }
    return routerPathName === "/" && pathName === "/";
  };

  return (
    <div className="bg-surface text-on-surface w-[4.5rem] h-screen flex flex-col justify-between fixed top-0 left-0">
      <div></div>
      <div className="flex flex-col mx-auto w-fit h-fit my-2 gap-4">
        <NavLink
          href="/"
          title="Home"
          icon="home"
          selectedIcon="home"
          isSelected={isSelected}
          active={isSelected("/")}
        />
        <NavLink
          href="/projects"
          title="Projects"
          icon="explore"
          selectedIcon="explore"
          isSelected={isSelected}
          active={isSelected("/projects")}
        />
        <NavLink
          href="/renders"
          title="Renders"
          icon="deployed_code"
          selectedIcon="deployed_code"
          isSelected={isSelected}
          active={isSelected("/renders")}
        />
        <NavLink
          href="/about"
          title="About Me"
          icon="account_circle"
          selectedIcon="account_circle"
          isSelected={isSelected}
          active={isSelected("/about")}
        />
      </div>
      <div className="flex flex-col mx-auto w-fit h-fit my-2 gap-4">
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export const BottomNavigation = () => {
  const routerPathName = usePathname();

  const isSelected = (pathName: string): boolean => {
    if (pathName !== "/") {
      return routerPathName.startsWith(pathName);
    }
    return routerPathName === "/" && pathName === "/";
  };

  return (
    <div className="bg-surface text-on-surface flex flex-row justify-center fixed bottom-0 w-screen">
      <div className="flex flex-row mx-auto w-fit h-fit my-2 gap-4">
        <NavLink
          href="/"
          title="Home"
          icon="home"
          selectedIcon="home"
          isSelected={isSelected}
          active={isSelected("/")}
        />
        <NavLink
          href="/projects"
          title="Projects"
          icon="explore"
          selectedIcon="explore"
          isSelected={isSelected}
          active={isSelected("/projects")}
        />
        <NavLink
          href="/renders"
          title="Renders"
          icon="deployed_code"
          selectedIcon="deployed_code"
          isSelected={isSelected}
          active={isSelected("/renders")}
        />
        <NavLink
          href="/about"
          title="About Me"
          icon="account_circle"
          selectedIcon="account_circle"
          isSelected={isSelected}
          active={isSelected("/about")}
        />
      </div>
    </div>
  );
};
