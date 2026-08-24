import { promises as fs } from "node:fs";
import path from "node:path";
import type { MDXContent } from "mdx/types";
import type { StaticImageData } from "next/image";

export interface BlogMeta {
  title: string;
  description?: string;
  date?: Date | string;
  tags?: string[];
  featured?: boolean;
  cover?: string;
}

export type Blog = Omit<BlogMeta, "cover"> & { slug: string; cover?: StaticImageData };

interface BlogModule {
  default: MDXContent;
  metadata: BlogMeta;
}

const blogDir = path.join(process.cwd(), "src", "docs", "blog");

export async function getAllBlogSlugs(): Promise<string[]> {
  const entries = await fs.readdir(blogDir, { withFileTypes: true });
  const slugs: string[] = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const mdPath = path.join(blogDir, entry.name, "index.md");
      try {
        if ((await fs.stat(mdPath)).isFile()) slugs.push(entry.name);
      } catch {
        // no index.md in this folder
      }
    }
  }
  return slugs;
}

export async function getBlog(
  slug: string,
): Promise<(BlogModule & { slug: string; cover?: StaticImageData }) | undefined> {
  try {
    const mod = await import(`@/docs/blog/${slug}/index.md`);
    const blog = { slug, ...(mod as BlogModule) };
    const cover = await getCover(slug);
    return { ...blog, cover };
  } catch {
    return undefined;
  }
}

async function getCover(slug: string): Promise<StaticImageData | undefined> {
  try {
    const mod = await import(`@/docs/blog/${slug}/images/cover.webp`);
    return (mod as { default: StaticImageData }).default;
  } catch {
    return undefined;
  }
}

function toDate(date: BlogMeta["date"]): number {
  if (!date) return 0;
  return typeof date === "string" ? new Date(date).getTime() : date.getTime();
}

export async function getAllBlogs(): Promise<Blog[]> {
  const slugs = await getAllBlogSlugs();
  const blogs = await Promise.all(
    slugs.map(async (slug): Promise<Blog | null> => {
      const blog = await getBlog(slug);
      if (!blog) return null;
      return { slug, ...blog.metadata, cover: blog.cover };
    }),
  );
  return blogs
    .filter((blog): blog is Blog => blog !== null)
    .sort((a, b) => toDate(b.date) - toDate(a.date));
}

export async function getFeaturedBlogs(): Promise<Blog[]> {
  const blogs = await getAllBlogs();
  return blogs.filter((blog) => blog.featured);
}

export function formatBlogDate(date: BlogMeta["date"]): string {
  if (!date) return "";
  const value = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(value);
}
