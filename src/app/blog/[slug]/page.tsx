import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllBlogSlugs, getBlog } from "@/lib/blog";
import { PageShell } from "@/components/core/PageShell/PageShell";
import { HeroBanner } from "@/components/core/HeroBanner";
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
      <div className="mx-auto w-full p-2">
        <HeroBanner
          title={blog.metadata.title}
          description={blog.metadata.description}
          date={blog.metadata.date}
          image={{
            src: "/images/renders/test4.png",
            alt: blog.metadata.title,
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
