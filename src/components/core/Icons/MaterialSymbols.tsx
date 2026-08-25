import { materialIconsHref } from "./icons";
import "./icon.css";

export const MaterialSymbols = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="stylesheet" href={materialIconsHref} />
    </>
  );
};
