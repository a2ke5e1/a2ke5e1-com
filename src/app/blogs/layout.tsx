import { getBlogMetadata } from "@/lib/getBlogSlugs";
import Link from "next/link";

function getBlogLinks() {
  const blogs = getBlogMetadata("src/blogs").sort((a, b) =>
    a.date > b.date ? -1 : 1
  );
  return blogs.map((blog) => (
    <Link
      href={`/blogs/${blog.slug}`}
      className="hover:underline line-clamp-1"
      key={blog.slug}
    >
      {blog.title}
    </Link>
  ));
}

const blogLinks = getBlogLinks();

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="my-8 mx-auto max-w-screen-lg relative min-h-[80vh] content-center">
      <h1 className="text-label-large text-primary my-4">Blogs</h1>
      <div className="flex flex-row gap-16">
        <div className="flex flex-col ">{blogLinks}</div>
        <div className="flex flex-col flex-1 gap-2">{children}</div>
      </div>
    </div>
  );
}
