// lib/getBlogSlugs.ts
import fs from "fs";
import path from "path";

export function getBlogSlugs() {
  const blogsDirectory = path.join(process.cwd(), "src/blogs");
  const filenames = fs.readdirSync(blogsDirectory);

  return filenames
    .sort((a, b) => {
      return -a.localeCompare(b);
    })
    .map((filename) => {
      return {
        slug: filename.replace(/\.md$/, ""),
      };
    });
}
