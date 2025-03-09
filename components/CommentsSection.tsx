"use client";
import Giscus from "@giscus/react";

export default function CommentsSection() {
  return (
    <>
      <h3 className="mt-8">Comments</h3>
      <Giscus
        id="comments"
        repo="danielcranney/portfolio-v2"
        repoId="R_kgDOLrHhBg="
        category="Announcements"
        categoryId="DIC_kwDOLrHhBs4CnvOY"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="transparent_dark"
        lang="en"
        loading="lazy"
      />
    </>
  );
}
