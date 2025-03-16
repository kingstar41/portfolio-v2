"use client";

import { useEffect } from "react";
import CopyButton from "./CopyButton";
import { createRoot } from "react-dom/client";

export default function CodeBlockHydration() {
  useEffect(() => {
    // Find all code blocks
    const preElements = document.querySelectorAll("pre");

    preElements.forEach((preElement) => {
      // Get the code element
      const codeElement = preElement.querySelector("code");
      if (!codeElement) return;

      // Get the actual code content
      const codeContent = codeElement.textContent || "";

      // Add relative positioning to pre element
      preElement.style.position = "relative";

      // Create container for copy button
      const container = document.createElement("div");
      const root = createRoot(container);
      root.render(<CopyButton content={codeContent} />);

      // Add the copy button to the pre element
      preElement.appendChild(container);
    });
  }, []);

  return null;
}
