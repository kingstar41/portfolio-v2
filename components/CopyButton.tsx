"use client";

import { useState } from "react";

export default function CopyButton({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="top-2 right-2 absolute bg-dark/30 hover:bg-dark/50 px-2 py-1 rounded text-lightest/60 hover:text-lightest text-xs transition-colors"
      aria-label="Copy code to clipboard"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
