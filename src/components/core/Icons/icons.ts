const glyphs = {
  Search: "search",
  Menu: "menu",
  MenuOpen: "menu_open",
  ChevronLeft: "chevron_left",
  Explore: "explore",
  Home: "home",
  Notifications: "notifications",
  Settings: "settings",
  AccountCircle: "account_circle",
  Article: "article",
  ArrowForward: "arrow_forward",
  DarkMode: "dark_mode",
  LightMode: "light_mode",
  Email: "email", 
  DeployedCode: "deployed_code"
} as const;

export type IconName = (typeof glyphs)[keyof typeof glyphs];
export type IconFill = "outlined" | "filled";

export type MaterialIcon = {
  name: IconName;
  fill: IconFill;
};

const createIconSet = (fill: IconFill) =>
  Object.fromEntries(
    Object.entries(glyphs).map(([key, name]) => [key, { name, fill }]),
  ) as {
    [K in keyof typeof glyphs]: MaterialIcon;
  };

export const Icons = {
  Outlined: createIconSet("outlined"),
  Filled: createIconSet("filled"),
} as const;

export const materialIconsHref = `https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=${Object.values(glyphs).sort().join(",")}`;
