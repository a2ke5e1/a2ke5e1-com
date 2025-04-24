import BlogLinks from "@/components/blog-links";
import { getBlogMetadata } from "@/lib/getBlogSlugs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | a2ke5e1.com",
};

export default async function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const blogs = await getBlogMetadata("src/blogs");

  return (
    <div className="my-8 mx-auto max-w-(--breakpoint-lg) min-h-[80vh]">
      <div className="flex md:flex-row gap-16 flex-col">
        <div className="flex flex-col bg-surface-container p-4 rounded-lg">
          <h1 className="text-label-large text-primary mb-2">Blogs</h1>
          <BlogLinks blogs={blogs} />
        </div>
        <div className="flex flex-col flex-1 gap-2">{children}</div>
      </div>
    </div>
  );
}
