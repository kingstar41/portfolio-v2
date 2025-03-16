"use client";

import { useEffect, useCallback } from "react";

export default function CodeBlockCopy() {
  const addCopyButtons = useCallback(() => {
    const codeBlocks = document.querySelectorAll("pre");

    codeBlocks.forEach((pre) => {
      // Skip if button already exists
      if (pre.querySelector(".copy-button")) return;

      // Create button
      const copyButton = document.createElement("button");
      copyButton.className =
        "copy-button absolute top-4 right-4 px-2 py-1 text-sm text-lightest/60 bg-dark/20 rounded opacity-60 hover:opacity-100 transition-opacity uppercase font-bold";
      copyButton.textContent = "Copy";

      // Add click handler
      copyButton.addEventListener("click", async () => {
        const code = pre.querySelector("code");
        if (!code) return;

        try {
          await navigator.clipboard.writeText(code.textContent || "");
          copyButton.textContent = "Copied!";
          setTimeout(() => {
            copyButton.textContent = "Copy";
          }, 2000);
        } catch (err) {
          console.error("Failed to copy:", err);
        }
      });

      // Make pre tag relative for absolute positioning of button
      pre.style.position = "relative";

      // Add button to pre tag
      pre.appendChild(copyButton);
    });
  }, []);

  useEffect(() => {
    // Add buttons on mount
    addCopyButtons();

    // Watch for content changes
    const observer = new MutationObserver(() => {
      addCopyButtons();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [addCopyButtons]);

  return null;
}
