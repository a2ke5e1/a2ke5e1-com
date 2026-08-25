import type { Plugin } from "unified";
import type { Root } from "mdast";
import type { ContainerDirective } from "mdast-util-directive";
import type { MdxJsxAttribute, MdxJsxFlowElement } from "mdast-util-mdx-jsx";
import { visit } from "unist-util-visit";

function findUrlText(node: unknown): string | null {
  if (typeof node !== "object" || node === null) return null;
  const n = node as Record<string, unknown>;
  if (n.type === "text" && typeof n.value === "string") {
    const v = n.value.trim();
    if (v.startsWith("http")) return v;
  }
  if (Array.isArray(n.children)) {
    for (const child of n.children) {
      const found = findUrlText(child);
      if (found) return found;
    }
  }
  return null;
}

export const remarkIframe: Plugin<[], Root> = () => (tree) => {
  visit(tree, (node, index, parent) => {
    if (!parent || index === undefined) return undefined;
    if (node.type !== "containerDirective") return undefined;

    const directive = node as ContainerDirective & { children: unknown[] };
    if (directive.name !== "iframe") return undefined;

    const src = findUrlText(directive);
    if (!src) return undefined;

    const replacement: MdxJsxFlowElement = {
      type: "mdxJsxFlowElement",
      name: "MdxIframe",
      attributes: [
        {
          type: "mdxJsxAttribute",
          name: "src",
          value: src,
        } satisfies MdxJsxAttribute,
      ],
      children: [],
    };

    parent.children[index] = replacement;
    return undefined;
  });
};

export default remarkIframe;