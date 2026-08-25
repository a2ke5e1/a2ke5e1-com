"use client";

import { useState, useRef, type ComponentProps } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/core/Icons/icons";
import { IconButton } from "@/components/core/Button/IconButton";

export interface PreProps extends ComponentProps<"pre"> {
  "data-language"?: string;
  "data-theme"?: string;
}

export function Pre({ className, children, ...props }: PreProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    if (!preRef.current) return;
    const text = preRef.current.innerText ?? preRef.current.textContent ?? "";
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="group relative my-6 overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-low transition-colors duration-standard-default-effects ease-standard-default-effects">
      <IconButton
        label={copied ? "Copied code" : "Copy code"}
        icon={copied ? Icons.Outlined.Check : Icons.Outlined.ContentCopy}
        onClick={handleCopy}
        className={cn(
          "absolute top-2.5 right-2.5 z-10 h-10 w-8 rounded-2xl bg-surface-container-high/70 text-on-surface-variant backdrop-blur-xs transition-all duration-expressive-fast-spatial ease-expressive-fast-spatial hover:bg-surface-container-high hover:text-on-surface active:scale-90 [&_span]:text-[16px]!",
          copied &&
          "scale-105 bg-primary-container/90 text-primary hover:bg-primary-container",
        )}
      />

      {/* Code viewport */}
      <pre
        ref={preRef}
        className={cn(
          "overflow-x-auto p-4 pr-12 font-mono text-body-small leading-relaxed text-on-surface [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-on-surface",
          className,
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
