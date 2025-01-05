// lib/getBlogSlugs.ts
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export function getBlogMetadata(basePath: string) {
  const folder = basePath + "/"
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basePath}/${filename}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
    };
  });
  return posts;
}
