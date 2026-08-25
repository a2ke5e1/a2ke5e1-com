import type { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import { PageShell } from "@/components/core/PageShell/PageShell";
import { Card } from "@/components/core/Card/Card";
import { HeroBanner } from "@/components/core/HeroBanner";
import { Footer } from "@/components/core/Footer/Footer";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of things I&apos;ve built.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <PageShell>
      <div className="mx-auto w-full p-2">
        <HeroBanner
          title="Projects"
          description="A collection of things I&apos;ve built."
          image={{ src: "/images/renders/test4.png", alt: "Projects cover" }}
        />
      </div>
      <div className="mx-auto w-full max-w-4xl px-4 pb-8 md:px-6 md:pb-12">
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