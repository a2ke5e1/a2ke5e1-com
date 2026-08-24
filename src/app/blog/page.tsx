import type { Metadata } from "next";
import { getAllBlogs } from "@/lib/blog";
import { PageShell } from "@/components/core/PageShell/PageShell";
import { Card } from "@/components/core/Card/Card";
import { HeroBanner } from "@/components/core/HeroBanner";
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
      <div className="mx-auto w-full p-2">
        <HeroBanner
          title="Blog"
          description="I like documenting the reasoning behind the systems I build, not just the final result."
          image={{ src: "/images/renders/test4.png", alt: "Blog cover" }}
        />
      </div>
      <div className="mx-auto w-full max-w-4xl px-4 pb-8 md:px-6 md:pb-12">
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
