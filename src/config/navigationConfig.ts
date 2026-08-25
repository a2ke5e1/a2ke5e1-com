import { Icons, type MaterialIcon } from "@/components/core/Icons/icons";

export const AppUrls = {
  HOME: "/",
  PROJECTS: "/projects",
  ABOUT: "/about",
  BLOG: "/blog",
  RENDERS: "/renders"
};

export type AppNavigationItem = {
  label: string;
  href: string;
  icon: MaterialIcon;
  selectedIcon?: MaterialIcon;
};

export const AppNavigationItems: AppNavigationItem[] = [
  {
    label: "Home",
    href: AppUrls.HOME,
    icon: Icons.Outlined.Home,
    selectedIcon: Icons.Filled.Home,
  },
  {
    label: "Projects",
    href: AppUrls.PROJECTS,
    icon: Icons.Outlined.Explore,
    selectedIcon: Icons.Filled.Explore,
  },
  {
    label: "About",
    href: AppUrls.ABOUT,
    icon: Icons.Outlined.AccountCircle,
    selectedIcon: Icons.Filled.AccountCircle,
  },
  {
    label: "Blog",
    href: AppUrls.BLOG,
    icon: Icons.Outlined.Article,
    selectedIcon: Icons.Filled.Article,
  },
  {
    label: "Renders",
    href: AppUrls.RENDERS,
    icon: Icons.Outlined.DeployedCode,
    selectedIcon: Icons.Filled.DeployedCode,
  },
] as const;
