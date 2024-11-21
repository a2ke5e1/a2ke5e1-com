import fs from "fs";
import path from "path";
import Link from "next/link";

const blogsDirectory = path.join(process.cwd(), "src/blogs");

function getBlogLinks() {
  const fileNames = fs.readdirSync(blogsDirectory);
  return fileNames.map((fileName) => {
    const blogName = fileName.replace(/\.mdx?$/, "");
    return (
      <li key={blogName}>
        <Link href={`/blogs/${blogName}`}>{blogName}</Link>
      </li>
    );
  });
}

const blogLinks = getBlogLinks();

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row gap-4">
      <div className="">{blogLinks}</div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
