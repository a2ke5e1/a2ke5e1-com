import { promises as fs } from "node:fs";
import path from "node:path";
import type { MDXContent } from "mdx/types";
import type { StaticImageData } from "next/image";

export interface ProjectMeta {
  title: string;
  subtitle?: string;
  description?: string;
  order?: number;
  tech: string[];
  cover?: string;
  featured?: boolean;
}

export type Project = Omit<ProjectMeta, "cover"> & {
  slug: string;
  cover?: StaticImageData;
};

interface ProjectModule {
  default: MDXContent;
  metadata: ProjectMeta;
}

const projectsDir = path.join(process.cwd(), "src", "docs", "projects");

export async function getAllProjectSlugs(): Promise<string[]> {
  const entries = await fs.readdir(projectsDir, { withFileTypes: true });
  const slugs: string[] = [];
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const mdPath = path.join(projectsDir, entry.name, "index.md");
      try {
        if ((await fs.stat(mdPath)).isFile()) slugs.push(entry.name);
      } catch {
        // no index.md in this folder
      }
    }
  }
  return slugs;
}

export async function getProject(
  slug: string,
): Promise<(ProjectModule & { slug: string; cover?: StaticImageData }) | undefined> {
  try {
    const mod = await import(`@/docs/projects/${slug}/index.md`);
    const project = { slug, ...(mod as ProjectModule) };
    const cover = await getCover(slug);
    return { ...project, cover };
  } catch {
    return undefined;
  }
}

async function getCover(slug: string): Promise<StaticImageData | undefined> {
  try {
    const mod = await import(`@/docs/projects/${slug}/images/cover.webp`);
    return (mod as { default: StaticImageData }).default;
  } catch {
    return undefined;
  }
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getAllProjects();
  return projects.filter((project) => project.featured);
}

export async function getAllProjects(): Promise<Project[]> {
  const slugs = await getAllProjectSlugs();
  const projects = await Promise.all(
    slugs.map(async (slug): Promise<Project | null> => {
      const project = await getProject(slug);
      if (!project) return null;
      return { slug, ...project.metadata, cover: await getCover(slug) };
    }),
  );
  return projects
    .filter((project): project is Project => project !== null)
    .sort((a, b) => (a.order ?? Infinity) - (b.order ?? Infinity));
}