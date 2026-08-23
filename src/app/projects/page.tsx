import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import { PageShell } from "@/components/core/PageShell/PageShell";
import { Card } from "@/components/core/Card/Card";
import { Footer } from "@/components/core/Footer/Footer";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of things I&apos;ve built.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-4xl px-4 py-8 md:px-6 md:py-12">
        <h1 className="text-display-large font-semibold text-on-surface">
          Projects
        </h1>
        <p className="mt-3 text-body-large text-on-surface-variant">
          A collection of things I&apos;ve built.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.slug}
              href={`/projects/${project.slug}`}
              cover={project.cover}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
            />
          ))}
        </div>
      </div>
      <Footer />
    </PageShell>
  );
}