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
        <h1>Blog Posts</h1>
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

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 w-full">
        {allPostsData.map(({ id, date, title, category, image_url }) => (
          <Link
            key={id}
            href={`/blog/posts/${id}`}
            className="group relative bg-dark/10 hover:bg-dark/20 border hover:border-accent/40 border-lightest/10 rounded-lg overflow-hidden transition-all duration-150 ease-in-out cursor-pointer"
          >
            {/* Background blur effect */}
            <div className="group-hover:bg-accent group-hover:w-60 group-hover:h-60 -right-24 -bottom-24 absolute bg-accent opacity-20 group-hover:opacity-20 blur-3xl rounded-full w-60 h-60 transition-all duration-150 ease-in-out" />

            {/* Content wrapper - now below the image */}
            <div className="px-6 py-6">
              {/* Category */}
              {category && (
                <div className="mb-3">
                  <span className="bg-dark/20 px-1.5 py-0.5 rounded-full font-semibold text-lightest/60 text-xs uppercase tracking-wider">
                    {category}
                  </span>
                </div>
              )}

              {/* Main content */}
              <p className="group-hover:text-white block mb-3 font-bold text-accent text-lg md:text-xl lg:text-xl transition-colors">
                {title}
              </p>

              {/* Date */}
              <div className="text-lightest/60 text-sm">
                <Date dateString={date} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
