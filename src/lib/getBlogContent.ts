// lib/getBlogContent.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getBlogContent(slug: string) {
  const folder = "src/blogs/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}
