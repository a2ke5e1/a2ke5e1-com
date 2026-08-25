"use client";

import { cn } from "@/lib/utils";
import { useNavigationItems } from "@/hooks/useNavigationItems";
import { NavigationDrawerItem } from "./NavigationDrawerItem";
import { Icons } from "../Icons/icons";
import { IconButton } from "../Button/IconButton";
import { ThemeToggle } from "../Button/ThemeToggle";

interface NavigationDrawerProps {
  open: boolean;
  onClose: () => void;
  className?: string;
}

export const NavigationDrawer = ({
  open,
  onClose,
  className,
}: NavigationDrawerProps) => {
  const navigationItems = useNavigationItems();

  return (
    <div
      className={cn(!open && "pointer-events-none", className)}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-scrim/50 transition-opacity duration-standard-default-effects ease-standard-default-effects",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "absolute inset-y-0 left-0 flex w-72 max-w-[80vw] flex-col justify-between overflow-y-auto bg-surface-container shadow-lg transition-transform duration-standard-default-spatial ease-standard-default-spatial rounded-r-4xl",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col gap-1 p-4">
          <div className="mb-2 flex items-center ps-1">
            <IconButton
              icon={Icons.Outlined.MenuOpen}
              label="Close navigation menu"
              onClick={onClose}
            />
          </div>
          {navigationItems.map((item, index) => (
            <NavigationDrawerItem
              key={index}
              label={item.label}
              href={item.href}
              icon={item.icon}
              selected={item.selected}
              onClick={onClose}
            />
          ))}
        </div>
        <div className="p-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};
