"use client";

import { cn } from "@/lib/utils";
import { Icons } from "../Icons/icons";
import { IconButton } from "../Button/IconButton";

interface TopAppBarProps {
  onMenuClick: () => void;
  className?: string;
}

export const TopAppBar = ({ onMenuClick, className }: TopAppBarProps) => {
  return (
    <header className={cn("flex h-16 items-center gap-2 px-2 bg-surface", className)}>
      <IconButton
        icon={Icons.Outlined.Menu}
        label="Open navigation menu"
        onClick={onMenuClick}
      />
      <a href="#">a2ke5e1.com</a>
    </header>
  );
};
