"use client";

import { cn } from "@/lib/utils";
import { useNavigationItems } from "@/hooks/useNavigationItems";
import { NavigationRailItem } from "./NavigationRailItem";
import { ThemeToggle } from "../Button/ThemeToggle";

interface NavigationRailProps {
  className?: string;
}

export const NavigationRail = ({ className }: NavigationRailProps) => {
  const navigationItems = useNavigationItems();
  return (
    <div
      className={cn(
        "w-24 flex-col items-center justify-between overflow-y-auto bg-surface",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-2 py-4">
        {navigationItems.map((item, index) => (
          <NavigationRailItem
            key={index}
            label={item.label}
            href={item.href}
            icon={item.icon}
            selected={item.selected}
          />
        ))}
      </div>
      <div className="flex flex-col items-center gap-2 py-4">
        <ThemeToggle />
      </div>
    </div>
  );
};