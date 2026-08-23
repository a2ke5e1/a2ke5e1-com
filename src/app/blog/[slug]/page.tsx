import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatBlogDate, getAllBlogSlugs, getBlog } from "@/lib/blog";
import { PageShell } from "@/components/core/PageShell/PageShell";
import { Footer } from "@/components/core/Footer/Footer";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) return {};
  return {
    title: blog.metadata.title,
    description: blog.metadata.description,
  };
}

export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const blog = await getBlog(slug);
  if (!blog) notFound();

  const Content = blog.default;

  return (
    <PageShell>
      <div className="mx-auto w-full max-w-4xl px-4 py-8 md:px-6 md:py-12">
        <header className="mb-10">
          {blog.metadata.date && (
            <time
              dateTime={
                typeof blog.metadata.date === "string"
                  ? blog.metadata.date
                  : blog.metadata.date.toISOString().split("T")[0]
              }
              className="text-label-large text-on-surface-variant"
            >
              {formatBlogDate(blog.metadata.date)}
            </time>
          )}
          <h1 className="text-display-large font-semibold text-on-surface">
            {blog.metadata.title}
          </h1>
          {blog.metadata.description && (
            <p className="mt-2 text-title-large text-on-surface-variant">
              {blog.metadata.description}
            </p>
          )}
        </header>
        <Content
          components={{
            wrapper: ({ children }: { children: React.ReactNode }) => (
              <>{children}</>
            ),
          }}
        />
        {blog.metadata.tags && blog.metadata.tags.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-2">
            {blog.metadata.tags.map((tag) => (
              <li key={tag}>
                <Link
                  href="/blog"
                  className="inline-flex items-center rounded-full bg-tertiary-container px-3 py-1 text-label-small text-on-tertiary-container"
                >
                  #{tag}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </PageShell>
  );
}
