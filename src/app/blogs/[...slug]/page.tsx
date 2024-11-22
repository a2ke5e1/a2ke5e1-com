import { getBlogSlugs } from "@/lib/getBlogSlugs";
import { getBlogContent } from "@/lib/getBlogContent";
import MDXContent from "@/components/mdx-content";
import { serialize } from "next-mdx-remote/serialize";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();

  return slugs.map(({ slug }) => ({
    slug: [slug], // Ensure slug is an array
  }));
}

const BlogPage = async (props: { params: Params }) => {
  const params = await props.params;
  const slug = params.slug;
  const content = await getBlogContent(slug);
  const mdxSource = await serialize(content); // Ensure this is async

  return <MDXContent source={mdxSource} />;
};

export default BlogPage;
