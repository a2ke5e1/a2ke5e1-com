import type { Plugin } from "unified";
import type { Root, Paragraph } from "mdast";
import type { ContainerDirective } from "mdast-util-directive";
import type { MdxJsxAttribute, MdxJsxFlowElement } from "mdast-util-mdx-jsx";
import { visit } from "unist-util-visit";

export type MediaPosition = "left" | "right";

function isMediaParagraph(node: Root["children"][number]): node is Paragraph {
  return (
    node.type === "paragraph" &&
    node.children.length > 0 &&
    node.children.every((child) => child.type === "image")
  );
}

function slot(
  dataSlot: string,
  children: MdxJsxFlowElement["children"],
): MdxJsxFlowElement {
  return {
    type: "mdxJsxFlowElement",
    name: "div",
    attributes: [
      { type: "mdxJsxAttribute", name: "data-slot", value: dataSlot },
    ],
    children,
  };
}

export const remarkMediaSplit: Plugin<[], Root> = () => (tree) => {
  visit(tree, (node, index, parent) => {
    if (!parent || index === undefined) return undefined;
    if (node.type !== "containerDirective") return undefined;

    const container = node as ContainerDirective;
    if (container.name !== "media") return undefined;

    const children = container.children;
    const hasMedia = children.some(isMediaParagraph);
    const hasText = children.some((child) => !isMediaParagraph(child));
    if (!hasMedia) return undefined;

    if (!hasText) {
      const gallery: MdxJsxFlowElement = {
        type: "mdxJsxFlowElement",
        name: "MediaGallery",
        attributes: [
          {
            type: "mdxJsxAttribute",
            name: "cols",
            value: String(children.length),
          } satisfies MdxJsxAttribute,
        ],
        children: children as MdxJsxFlowElement["children"],
      };
      parent.children[index] = gallery;
      return undefined;
    }

    const firstMediaIndex = children.findIndex(isMediaParagraph);
    const firstTextIndex = children.findIndex(
      (child) => !isMediaParagraph(child),
    );
    if (firstMediaIndex === -1 || firstTextIndex === -1) return undefined;

    const mediaPosition: MediaPosition =
      firstMediaIndex < firstTextIndex ? "left" : "right";

    const textNodes = children.filter(
      (child) => !isMediaParagraph(child),
    ) as MdxJsxFlowElement["children"];
    const mediaNodes = children.filter(isMediaParagraph) as MdxJsxFlowElement["children"];
    const textSlot = slot("text", textNodes);
    const mediaSlot = slot("media", mediaNodes);

    const replacement: MdxJsxFlowElement = {
      type: "mdxJsxFlowElement",
      name: "MediaSplit",
      attributes: [
        {
          type: "mdxJsxAttribute",
          name: "mediaPosition",
          value: mediaPosition,
        } satisfies MdxJsxAttribute,
      ],
      children:
        mediaPosition === "left"
          ? [mediaSlot, textSlot]
          : [textSlot, mediaSlot],
    };

    parent.children[index] = replacement;
    return undefined;
  });
};

export default remarkMediaSplit;
