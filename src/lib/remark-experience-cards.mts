import type { Plugin } from "unified";
import type { Root, Table, TableCell } from "mdast";
import type { ContainerDirective } from "mdast-util-directive";
import type { MdxJsxAttribute, MdxJsxFlowElement } from "mdast-util-mdx-jsx";
import { visit } from "unist-util-visit";
import type { ExperienceItem } from "@/types/experience";

const expectedHeader = ["company", "position", "duration"];

function cellText(cell?: TableCell): string {
  if (!cell) return "";
  return cell.children
    .map((child) => ("value" in child ? child.value : ""))
    .join("")
    .trim();
}

function parseItems(table: Table): ExperienceItem[] | null {
  const [header, ...rows] = table.children;
  if (
    !header ||
    header.children.length !== expectedHeader.length ||
    rows.length === 0
  ) {
    return null;
  }

  const columns = header.children.map((cell) => cellText(cell).toLowerCase());
  const matchesSchema = columns.every(
    (column, index) => column === expectedHeader[index],
  );
  if (!matchesSchema) return null;

  return rows.map((row) => ({
    company: cellText(row.children[0]),
    position: cellText(row.children[1]),
    duration: cellText(row.children[2]),
  }));
}

export const remarkExperienceCards: Plugin<[], Root> = () => (tree) => {
  visit(tree, (node, index, parent) => {
    if (!parent || index === undefined) return undefined;
    if (node.type !== "containerDirective") return undefined;

    const container = node as ContainerDirective;
    if (container.name !== "experience") return undefined;

    const table = container.children.find(
      (child): child is Table => child.type === "table",
    );
    if (!table) return undefined;

    const items = parseItems(table);
    if (!items) return undefined;

    const replacement: MdxJsxFlowElement = {
      type: "mdxJsxFlowElement",
      name: "ExperienceCards",
      attributes: [
        {
          type: "mdxJsxAttribute",
          name: "items",
          value: JSON.stringify(items),
        } satisfies MdxJsxAttribute,
      ],
      children: [],
    };

    parent.children[index] = replacement;
    return undefined;
  });
};

export default remarkExperienceCards;
