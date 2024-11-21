// lib/getBlogContent.ts
import fs from 'fs';
import path from 'path';

export function getBlogContent(slug: string) {
  const blogsDirectory = path.join(process.cwd(), 'src/blogs');
  const fullPath = path.join(blogsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return fileContents;
}