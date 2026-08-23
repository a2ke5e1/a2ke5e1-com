import type { ComponentProps } from "react";
import Image from "next/image";
import Link from "next/link";
import type { MDXComponents } from "mdx/types";
import { cn } from "@/lib/utils";
import { PageShell } from "@/components/core/PageShell/PageShell";
import { MediaSplit } from "@/components/mdx/MediaSplit";
import { MediaGallery } from "@/components/mdx/MediaGallery";
import { MdxIframe } from "@/components/mdx/MdxIframe";
import { Footer } from "./components/core/Footer/Footer";

type HeadingProps = ComponentProps<"h1"> & { level?: 1 | 2 | 3 | 4 | 5 | 6 };

const headingBase = cn(
  "scroll-mt-16 font-semibold text-on-surface md:scroll-mt-0",
);

const headingStyles: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
  1: "text-display-large mb-6 font-bold",
  2: "text-headline-large mb-4 font-bold tracking-tight",
  3: "text-headline-medium mb-3 font-semibold",
  4: "text-headline-small mb-2 font-semibold",
  5: "text-title-medium mb-1 font-semibold",
  6: "text-title-small mb-1 font-semibold",
};

function Heading({ level = 1, className, children, ...props }: HeadingProps) {
  const Tag = `h${level}` as const;
  return (
    <Tag
      className={cn(headingBase, headingStyles[level], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}

function MDXImage({
  className,
  alt = "",
  src,
  width,
  height,
  ...props
}: ComponentProps<"img">) {
  const staticImage =
    typeof src !== "string"
      ? (src as { src: string; width: number; height: number } | undefined)
      : undefined;

  const resolvedSrc =
    typeof src === "string" ? src : (staticImage?.src ?? undefined);
  const resolvedWidth = typeof width === "number" ? width : staticImage?.width;
  const resolvedHeight =
    typeof height === "number" ? height : staticImage?.height;

  if (resolvedSrc && resolvedWidth && resolvedHeight) {
    return (
      <Image
        className={cn("h-auto max-w-full rounded-2xl", className)}
        alt={alt}
        src={resolvedSrc}
        width={resolvedWidth}
        height={resolvedHeight}
        sizes="100vw"
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={cn("h-auto max-w-full rounded-2xl", className)}
      alt={alt}
      src={resolvedSrc}
      {...props}
    />
  );
}

function MDXLink({ href, className, children, ...props }: ComponentProps<"a">) {
  const classes = cn(
    "font-medium text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:decoration-primary",
    className,
  );

  if (href && (href.startsWith("/") || href.startsWith("#"))) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}

const components: MDXComponents = {
  wrapper: ({ children }) => (
    <PageShell>
      <div className="mx-auto w-full max-w-4xl px-4 py-8 md:px-6 md:py-12">
        {children}
      </div>
      <Footer />
    </PageShell>
  ),
  h1: (props) => <Heading level={1} {...props} />,
  h2: (props) => <Heading level={2} {...props} />,
  h3: (props) => <Heading level={3} {...props} />,
  h4: (props) => <Heading level={4} {...props} />,
  h5: (props) => <Heading level={5} {...props} />,
  h6: (props) => <Heading level={6} {...props} />,
  p: ({ className, children, ...props }) => (
    <p
      className={cn("mb-6 text-body-large text-on-surface", className)}
      {...props}
    >
      {children}
    </p>
  ),
  a: (props) => <MDXLink {...props} />,
  strong: ({ className, children, ...props }) => (
    <strong
      className={cn("font-semibold text-on-surface", className)}
      {...props}
    >
      {children}
    </strong>
  ),
  em: ({ className, children, ...props }) => (
    <em className={cn("italic", className)} {...props}>
      {children}
    </em>
  ),
  del: ({ className, children, ...props }) => (
    <del
      className={cn("text-body-medium text-on-surface-variant", className)}
      {...props}
    >
      {children}
    </del>
  ),
  ul: ({ className, children, ...props }) => (
    <ul
      className={cn(
        "mb-4 list-disc space-y-1.5 pl-6 marker:text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ className, children, ...props }) => (
    <ol
      className={cn(
        "mb-4 list-decimal space-y-1.5 pl-6 marker:text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ className, children, ...props }) => (
    <li className={cn("text-body-large text-on-surface", className)} {...props}>
      {children}
    </li>
  ),
  input: ({ className, ...props }) => (
    <input className={cn("mr-2", className)} {...props} />
  ),
  table: ({ className, children, ...props }) => (
    <div className="my-8 w-full overflow-x-auto rounded-3xl border border-outline-variant/30 bg-surface-container-lowest shadow-xs">
      <table
        className={cn(
          "w-full border-collapse text-left text-body-medium",
          className,
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ className, children, ...props }) => (
    <thead
      className={cn(
        "border-b border-outline-variant/30 bg-surface-container-low/70",
        className,
      )}
      {...props}
    >
      {children}
    </thead>
  ),
  tbody: (props) => (
    <tbody className="divide-y divide-outline-variant/20" {...props} />
  ),
  tr: ({ className, children, ...props }) => (
    <tr
      className={cn(
        "transition-colors duration-150 hover:bg-surface-container-low/40",
        className,
      )}
      {...props}
    >
      {children}
    </tr>
  ),
  th: ({ className, children, ...props }) => (
    <th
      className={cn(
        "px-6 py-4 text-left font-semibold text-label-large tracking-wider text-on-surface uppercase",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ className, children, ...props }) => (
    <td
      className={cn(
        "px-6 py-5 align-top text-body-medium text-on-surface [&_strong]:text-title-medium [&_strong]:font-semibold [&_strong]:text-on-surface",
        className,
      )}
      {...props}
    >
      {children}
    </td>
  ),
  code: ({ className, children, ...props }) => (
    <code
      className={cn(
        "inline-flex items-center rounded-lg bg-surface-container-high px-2.5 py-1 font-mono text-body-small font-medium text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ className, children, ...props }) => (
    <pre
      className={cn(
        "mb-4 overflow-x-auto rounded-lg bg-surface-container p-4 font-mono text-body-medium text-on-surface [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-on-surface",
        className,
      )}
      {...props}
    >
      {children}
    </pre>
  ),
  blockquote: ({ className, children, ...props }) => (
    <blockquote
      className={cn(
        "mb-4 border-l-4 border-primary pl-4 italic text-body-medium text-on-surface-variant",
        className,
      )}
      {...props}
    >
      {children}
    </blockquote>
  ),
  hr: ({ className, ...props }) => (
    <hr className={cn("my-8 border-outline-variant", className)} {...props} />
  ),
  MediaSplit,
  MediaGallery,
  MdxIframe,
  img: (props) => <MDXImage {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
