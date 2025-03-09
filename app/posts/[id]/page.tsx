import Date from "@/components/Date";
import Link from "next/link";
import Giscus from "@giscus/react";
import { getPostData } from "@/lib/posts";
import CommentsSection from "@/components/CommentsSection";

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

  return (
    <article className="z-30 mx-auto max-w-3xl">
      {/* Back to blog link */}
      <Link
        href="/blog"
        className="inline-flex items-center mb-8 text-lightest/60 hover:text-lightest transition-colors"
      >
        ← Back to all posts
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
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      ></div>

      {/* Tags */}
      {postData.tags && postData.tags.length > 0 && (
        <div className="mt-12 pt-6 border-t border-lightest/10">
          <div className="flex flex-wrap gap-2">
            {postData.tags.map((tag) => (
              <span
                key={tag}
                className="bg-dark/10 px-2 py-1 rounded text-lightest/60 text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      <CommentsSection />
    </article>
  );
}

/* TIP: dangerouslySetInnerHTML is a React feature that allows you to render HTML that comes from an external source as if it were regular JSX. It replaces innerHTML used by Javascript.
Here we are rendering the HTML that comes from the markdown file thanks to remark (remark converted the markdown into HTML)
*/
