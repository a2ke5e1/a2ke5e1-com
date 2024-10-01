"use client";

import { IconButton, TextButton } from "@/components/button/button";
import { Icon } from "@/components/icon/icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Ripple } from "@/components/ripple/ripple";

type NavLinkProps = {
  title: string;
  href: string;
  icon: string;
  selectedIcon: string;
  isSelected: (path: string) => boolean;
};

const NavLink: React.FC<NavLinkProps> = ({
  title,
  href,
  icon,
  selectedIcon,
  isSelected,
}) => {
  const active = isSelected(href);

  return (
    <Link href={href} className="flex flex-col items-center">
      <div
        // selected={active}
        className={`${
          active
            ? "bg-secondary-container text-on-secondary-container"
            : " text-on-surface-variant"
        }  rounded-3xl flex flex-col justify-center items-center relative w-[3.5rem] h-8`}
      >
        <Ripple></Ripple>
        <Icon>
          <span
            className={
              active
                ? "material-symbols-rounded-selected"
                : "material-symbols-rounded"
            }
          >
            {icon}
          </span>
        </Icon>
      </div>

      <p
        className={`${
          active
            ? "text-on-secondary-container font-bold"
            : "text-on-surface-variant"
        } text-[0.75rem] leading-4`}
      >
        {title}
      </p>
    </Link>
  );
};

export const NavigationRail = () => {
  const routerPathName = usePathname();

  const isSelected = (pathName: string): boolean => {
    if (pathName !== "/") {
      return routerPathName.startsWith(pathName);
    }
    return routerPathName === "/" && pathName === "/";
  };

  return (
    <div className="bg-surface text-on-surface w-[4.5rem] h-screen  flex flex-col justify-center">
      <div className="flex flex-col mx-auto w-fit h-fit my-2 gap-4">
        <NavLink
          href="/"
          title="Home"
          icon="home"
          selectedIcon="home"
          isSelected={isSelected}
        />
        <NavLink
          href="/projects"
          title="Projects"
          icon="explore"
          selectedIcon="explore"
          isSelected={isSelected}
        />
        <NavLink
          href="/renders"
          title="Renders"
          icon="deployed_code"
          selectedIcon="deployed_code"
          isSelected={isSelected}
        />
        <NavLink
          href="/about"
          title="About Me"
          icon="account_circle"
          selectedIcon="account_circle"
          isSelected={isSelected}
        />
      </div>
    </div>
  );
};
