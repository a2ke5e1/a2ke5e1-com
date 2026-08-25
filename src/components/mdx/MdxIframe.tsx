import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function MdxIframe({ src, ...props }: ComponentProps<"iframe">) {
  return (
    <div className="my-8">
      <iframe
        src={src}
        title="Embedded content"
        className={cn("w-full h-120 rounded-2xl ring-0!", props.className)}
        allowFullScreen
        loading="lazy"
        {...props}
      />
    </div>
  );
}