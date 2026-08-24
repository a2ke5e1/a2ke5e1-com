import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProject } from "@/lib/projects";
import { PageShell } from "@/components/core/PageShell/PageShell";
import { TechBadge } from "@/components/projects/TechBadge";
import { HeroBanner } from "@/components/core/HeroBanner";
import { Footer } from "@/components/core/Footer/Footer";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return {
    title: project.metadata.title,
    description: project.metadata.description,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const Content = project.default;

  return (
    <PageShell>
      <div className="mx-auto w-full p-2">
        <HeroBanner
          title={project.metadata.title}
          description={project.metadata.subtitle}
          image={{
            src: project.metadata.cover ?? "/images/renders/test4.png",
            alt: project.metadata.title,
          }}
        />
      </div>
      <div className="mx-auto w-full max-w-4xl px-4 py-8 md:px-6 md:py-12">
        <Content
          components={{
            wrapper: ({ children }: { children: React.ReactNode }) => (
              <>{children}</>
            ),
          }}
        />
        {project.metadata.tech.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-2">
            {project.metadata.tech.map((tech) => (
              <li key={tech}>
                <TechBadge>{tech}</TechBadge>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </PageShell>
  );
}
