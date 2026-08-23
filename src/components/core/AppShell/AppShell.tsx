"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavigationRail } from "../NavigationRail/NavigationRail";
import { NavigationDrawer } from "../NavigationDrawer/NavigationDrawer";
import { TopAppBar } from "../TopAppBar/TopAppBar";
import { Footer } from "../Footer/Footer";

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsDrawerOpen(false);
  }

  useEffect(() => {
    if (!isDrawerOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsDrawerOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isDrawerOpen]);

  return (
    <div className="flex min-h-dvh flex-col md:flex-row">
      <NavigationRail className="absolute top-0 z-40 h-screen hidden md:flex md:sticky transition-[translate,opacity,display] transition-discrete duration-standard-fast-spatial ease-standard-fast-spatial starting:opacity-0 starting:-translate-x-full opacity-0 -translate-x-full md:opacity-100 md:translate-x-0" />
      <NavigationDrawer
        className="fixed inset-0 z-50 md:hidden"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
      <div className="relative flex min-w-0 flex-1 flex-col">
        <TopAppBar
          className="sticky top-0 z-40 flex md:absolute md:inset-x-0 md:hidden transition-[translate,opacity,display] transition-discrete duration-standard-fast-spatial ease-standard-fast-spatial starting:opacity-0 starting:-translate-y-full md:opacity-0 md:-translate-y-full"
          onMenuClick={() => setIsDrawerOpen(true)}
        />
        {children}
      </div>
    </div>
  );
};
