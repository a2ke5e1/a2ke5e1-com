"use client";

import { useTheme } from "@/hooks/useTheme";
import { IconButton } from "./IconButton";
import { Icon } from "../Icons/icon";
import { Icons } from "../Icons/icons";

export interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      className={className}
      label={
        theme === "dark"
          ? "Switch to light theme"
          : theme === "light"
            ? "Switch to dark theme"
            : "Toggle theme"
      }
      onClick={toggleTheme}
    >
      <Icon className="text-2xl dark:hidden!">{Icons.Outlined.DarkMode}</Icon>
      <Icon className="hidden! text-2xl dark:block!">
        {Icons.Outlined.LightMode}
      </Icon>
    </IconButton>
  );
};

export { ThemeToggle };
