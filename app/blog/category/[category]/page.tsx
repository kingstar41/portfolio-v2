import Link from "next/link";
import Date from "@/components/Date";
import { getSortedPostsData } from "@/lib/posts";

type Props = {
  params: {
    category: string;
  };
};

export default function CategoryPage({ params }: Props) {
  const allPostsData = getSortedPostsData();
  const category = decodeURIComponent(params.category);

  // Filter posts by category
  const categoryPosts = allPostsData.filter(
    (post) => post.category?.toLowerCase() === category.toLowerCase()
  );

  return (
    <article className="flex-col gap-y-4 pb-4 w-full">
      <div className="flex flex-col items-start gap-y-4 mb-8">
        <Link
          href="/blog"
          className="mr-4 text-lightest/60 hover:text-lightest no-underline hover:no-underline transition-colors"
        >
          ← Back to all posts
        </Link>
        <h1 className="font-bold text-5xl capitalize">{category}</h1>
      </div>

      <div className="gap-8 grid grid-cols-2 w-full">
        {categoryPosts.map(({ id, date, title, category, image_url }) => (
          <div
            key={id}
            className="group relative bg-dark/10 hover:bg-dark/20 border border-lightest/10 rounded-lg overflow-hidden transition-all duration-150 ease-in-out cursor-pointer"
          >
            {/* Background blur effect */}
            <div className="-right-24 -bottom-24 absolute bg-accent opacity-20 blur-3xl rounded-full w-60 h-40" />

            {/* Article image */}
            {image_url && (
              <div className="w-full">
                <div className="relative pt-[56.25%] w-full">
                  <img
                    src={image_url}
                    alt={title}
                    className="top-0 left-0 absolute w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Content wrapper */}
            <div className="px-6 py-6">
              <Link
                href={`/posts/${id}`}
                className="block mb-3 font-bold text-xl transition-colors"
              >
                {title}
              </Link>

              <div className="text-lightest/60 text-sm">
                <Date dateString={date} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
