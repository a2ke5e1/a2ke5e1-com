"use client"; // Make this a client-side component

import { FC } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXProvider } from "@mdx-js/react";

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

const MDXContent: FC<MDXContentProps> = ({ source }) => {
  return (
    <MDXProvider>
      <MDXRemote {...source} />
    </MDXProvider>
  );
};

export default MDXContent;
