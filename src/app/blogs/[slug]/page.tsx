import { getBlogMetadata } from "@/lib/getBlogSlugs";
import { getBlogContent } from "@/lib/getBlogContent";
import MDXContent from "@/components/mdx-content";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const posts = await getBlogMetadata("src/blogs");
  return posts.map((post) => ({ slug: post.slug }));
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const BlogPage = async (props: { params: Params }) => {
  const params = await props.params;
  const slug = params.slug;
  const { data, content } = await getBlogContent(slug);
  const mdxSource = await serialize(content);

  return (
    <div className="flex flex-col gap-4">
      <a className="text-label-small text-tertiary">{formatDate(data.date)}</a>
      <MDXContent source={mdxSource} />
    </div>
  );
};

export default BlogPage;
