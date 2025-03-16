import Date from "@/components/Date";
import Link from "next/link";
import Giscus from "@giscus/react";
import { getPostData } from "@/lib/posts";
import CommentsSection from "@/components/CommentsSection";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaB, FaBluesky } from "react-icons/fa6";
import CodeBlockCopy from "@/components/CodeBlockCopy";
import Script from "next/script";

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

type PostData = {
  title: string;
  date: string;
  contentHtml: string;
  category?: string;
  image_url?: string;
  tags?: string[];
};

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id);
  return {
    title: postData.title,
  };
}

// -< Post >-
export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.id);

  // Add copy button HTML to each code block
  const contentWithCopyButton = postData.contentHtml.replace(
    /<pre><code/g,
    `<pre><div class="top-4 right-4 z-20 absolute bg-dark/20 opacity-60 hover:opacity-100 px-2 copy-button py-1 rounded font-bold text-lightest/60 text-sm uppercase transition-opacity cursor-pointer" onclick="navigator.clipboard.writeText(this.parentElement.querySelector('code').textContent).then(() => {this.textContent='Copied!';setTimeout(() => {this.textContent='Copy'}, 2000)})">Copy</div><code`
  );

  return (
    <article className="z-30 mx-auto max-w-3xl" id="blog">
      {/* Back to blog link */}
      <Link
        href="/blog"
        className="inline-flex items-center mb-8 text-lightest/60 hover:text-lightest no-underline hover:no-underline transition-colors"
      >
        <span className="no-underline hover:no-underline">
          ← Back to all posts
        </span>
      </Link>

      {/* Hero Image */}
      {postData.image_url && (
        <div className="relative mb-8 rounded-xl w-full h-[400px] overflow-hidden">
          <img
            src={postData.image_url}
            alt={postData.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Post Header */}
      <header className="mb-4">
        {/* Category */}
        {postData.category && (
          <Link
            href={`/blog/category/${postData.category.toLowerCase()}`}
            className="inline-block bg-dark/20 hover:bg-dark/30 mb-4 px-3 py-1.5 rounded-full font-medium text-lightest/60 text-sm transition-colors"
          >
            {postData.category}
          </Link>
        )}

        {/* Title */}
        <h1 className="mb-4 font-extrabold text-4xl lg:text-5xl">
          {postData.title}
        </h1>

        {/* Date */}
        <div className="text-lightest/60">
          <Date dateString={postData.date} />
        </div>
      </header>

      {/* Post Content */}
      <div
        className="flex flex-col gap-y-6 prose-invert max-w-none prose"
        dangerouslySetInnerHTML={{ __html: contentWithCopyButton }}
      />

      {/* Tags and Social Section */}
      <div className="mt-12 pt-6 border-t border-lightest/10">
        <div className="flex justify-between items-center">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {postData.tags &&
              postData.tags.length > 0 &&
              postData.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-dark/10 px-2 py-1 rounded text-lightest/60 text-sm"
                >
                  #{tag}
                </span>
              ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-4">
              <span className="text-lightest/60 text-sm">
                Follow me on socials
              </span>
              <a
                href="https://github.com/danielcranney"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightest/60 hover:text-lightest transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://x.com/danielcranney"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightest/60 hover:text-lightest transition-colors"
                aria-label="X (formerly Twitter) Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.99 0h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L3.736 19.5H.426l7.73-8.835L0 0h6.826l4.713 6.231L16.99 0zm-1.161 17.52h1.833L5.83 1.876H3.83L15.829 17.52z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/daniel-cranney"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightest/60 hover:text-lightest transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://bsky.app/profile/danielcranney.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightest/60 hover:text-lightest transition-colors"
                aria-label="Bluesky Profile"
              >
                <FaBluesky size={20} />
              </a>
              <a
                href="https://www.youtube.com/@danielcranney"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightest/60 hover:text-lightest transition-colors"
                aria-label="YouTube Channel"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <CommentsSection />
    </article>
  );
}

/* TIP: dangerouslySetInnerHTML is a React feature that allows you to render HTML that comes from an external source as if it were regular JSX. It replaces innerHTML used by Javascript.
Here we are rendering the HTML that comes from the markdown file thanks to remark (remark converted the markdown into HTML)
*/
