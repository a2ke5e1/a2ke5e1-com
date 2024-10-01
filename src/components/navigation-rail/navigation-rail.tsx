"use client";

import { IconButton, TextButton } from "@/components/button/button";
import { Icon } from "@/components/icon/icon";
import Link from "next/link";
import { usePathname } from "next/navigation";


type NavLinkProps = {
  href: string;
  icon: string;
  selectedIcon: string;
  isSelected: (path: string) => boolean;
};

const NavLink: React.FC<NavLinkProps> = ({ href, icon, selectedIcon, isSelected }) => (
  <Link href={href}>
    <IconButton selected={isSelected(href)}>
      <Icon>
        <span className="material-symbols-rounded">{icon}</span>
      </Icon>
      <Icon slot="selected">
        <span className="material-symbols-rounded-selected">{selectedIcon}</span>
      </Icon>
    </IconButton>
  </Link>
);


export const NavigationRail = () => {
  const routerPathName = usePathname();

  const isSelected = (pathName: string): boolean => {
    if (pathName !== "/") {
      return routerPathName.startsWith(pathName);
    }
    return routerPathName === "/" && pathName === "/";
  };

  return (
    <div className="bg-surface text-on-surface w-20 h-screen  flex flex-col justify-center">
      <div className="flex flex-col mx-auto w-fit h-fit my-2 gap-4">
        <NavLink href="/" icon="home" selectedIcon="home" isSelected={isSelected} />
        <NavLink href="/projects" icon="explore" selectedIcon="explore" isSelected={isSelected} />
        <NavLink href="/renders" icon="deployed_code" selectedIcon="deployed_code" isSelected={isSelected} />
        <NavLink href="/about" icon="account_circle" selectedIcon="account_circle" isSelected={isSelected} />
      </div>
    </div>
  );
};
