"use client";

import { Icon } from "@/components/site/Icon";
import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex cursor-pointer items-center gap-1.5 rounded bg-surface-container px-3 py-1.5 text-xs font-semibold text-on-surface hover:bg-surface-dim"
    >
      <Icon name={copied ? "check" : "content_copy"} className="text-[16px]" />
      {copied ? "Copied" : "Copy Email"}
    </button>
  );
}
