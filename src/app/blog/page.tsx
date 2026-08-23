import type { Metadata } from "next";
import { getAllBlogs } from "@/lib/blog";
import { PageShell } from "@/components/core/PageShell/PageShell";
import { Card } from "@/components/core/Card/Card";
import { Footer } from "@/components/core/Footer/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes on systems, architecture, and the reasoning behind the things I build.",
};

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-4xl px-4 py-8 md:px-6 md:py-12">
        <h1 className="text-display-large font-semibold text-on-surface">
          Blog
        </h1>
        <p className="mt-3 text-body-large text-on-surface-variant">
          I like documenting the reasoning behind the systems I build, not just
          the final result.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {blogs.map((blog) => (
            <Card
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              date={blog.date}
              title={blog.title}
              description={blog.description}
              tags={blog.tags}
            />
          ))}
        </div>
      </div>
      <Footer />
    </PageShell>
  );
}
