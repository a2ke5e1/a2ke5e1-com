"use client";

import { useRouter } from "next/navigation";
import { FilledButton, FilledTonalButton } from "./button";
import type { ReactNode } from "react";

type NavButtonProps = {
  variant?: "filled" | "filled-tonal";
  href: string;
  children: ReactNode;
  className?: string;
};

export function NavButton({
  variant = "filled",
  href,
  children,
  className,
}: NavButtonProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  if (variant === "filled") {
    return (
      <FilledButton className={className} onClick={handleClick}>
        {children}
      </FilledButton>
    );
  }

  return (
    <FilledTonalButton className={className} onClick={handleClick}>
      {children}
    </FilledTonalButton>
  );
}
