import type { NextConfig } from "next";
import path from "node:path";
import createMDX from "@next/mdx";

const cwd = process.cwd();
const remarkExperienceCards = path.join(cwd,"src/lib/remark-experience-cards.mts");
const remarkMediaSplit = path.join(cwd, "src/lib/remark-media-split.mts");
const remarkIframe = path.join(cwd, "src/lib/remark-iframe.mts");

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactCompiler: true,
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      "remark-gfm",
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "metadata" }],
      "remark-directive",
      remarkIframe,
      remarkExperienceCards,
      remarkMediaSplit,
    ],
    rehypePlugins: ["rehype-slug", "rehype-mdx-import-media"],
  },
});

export default withMDX(nextConfig);
