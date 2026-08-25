import { getFeaturedProjects } from "@/lib/projects";
import { Card } from "@/components/core/Card/Card";

export async function FeaturedProjects() {
  const projects = await getFeaturedProjects();

  return (
    <div className="my-8 grid gap-4 md:grid-cols-2">
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
  );
}
