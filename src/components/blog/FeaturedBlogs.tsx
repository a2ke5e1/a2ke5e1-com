import { getFeaturedBlogs } from "@/lib/blog";
import { Card } from "@/components/core/Card/Card";

export async function FeaturedBlogs() {
  const blogs = await getFeaturedBlogs();

  return (
    <div className="my-8 grid gap-4 md:grid-cols-2">
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
  );
}
