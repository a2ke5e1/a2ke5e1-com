"use client";

import { AppNavigationItems } from "@/config/navigationConfig";
import { NavigationRailItemProps } from "@/components/core/NavigationRail/NavigationRailItem";
import { usePathname } from "next/navigation";

export const useNavigationItems = (): NavigationRailItemProps[] => {
  const pathname = usePathname();

  return AppNavigationItems.map((item) => {
    const selected =
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
    return {
      label: item.label,
      href: item.href,
      icon: selected ? (item.selectedIcon ?? item.icon) : item.icon,
      selected: selected,
    };
  });
};