import Link from "next/link";
import Date from "@/components/Date";
import { getSortedPostsData } from "@/lib/posts";

type AllPostsData = {
  date: string;
  title: string;
  id: string;
  canonical_url?: string;
  image_url?: string;
  category?: string;
  tags?: string[];
}[];

export const metadata = {
  title: "Blog",
};

export default function Blog() {
  const allPostsData: AllPostsData = getSortedPostsData();

  // Calculate category counts
  const categoryCount = allPostsData.reduce((acc, post) => {
    if (post.category) {
      acc[post.category] = (acc[post.category] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);

  return (
    <article className="flex-col gap-y-4 pb-4 w-full">
      <div className="flex items-center mb-8">
        <h1 className="font-bold text-5xl">Blog Posts</h1>
      </div>

      {/* Categories summary */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(categoryCount).map(([category, count]) => (
          <Link
            key={category}
            href={`/blog/category/${category.toLowerCase()}`}
            className="bg-dark/20 hover:bg-dark/30 px-3 py-1.5 rounded-full font-medium text-lightest/60 text-sm transition-colors"
          >
            {category} ({count})
          </Link>
        ))}
      </div>

      <div className="gap-8 grid grid-cols-2 w-full">
        {allPostsData.map(({ id, date, title, category, image_url }) => (
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
                  {" "}
                  {/* 16:9 aspect ratio */}
                  <img
                    src={image_url}
                    alt={title}
                    className="top-0 left-0 absolute w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Content wrapper - now below the image */}
            <div className="px-6 py-6">
              {/* Category */}
              {category && (
                <div className="mb-3">
                  <span className="bg-dark/20 px-1.5 py-0.5 rounded-full font-medium text-lightest/60 text-xs uppercase tracking-wider">
                    {category}
                  </span>
                </div>
              )}

              {/* Main content */}
              <Link
                href={`/posts/${id}`}
                className="block mb-3 font-bold text-xl transition-colors"
              >
                {title}
              </Link>

              {/* Date */}
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
