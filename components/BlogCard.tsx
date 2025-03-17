import Link from "next/link";
import Date from "@/components/Date";

type BlogCardProps = {
  post: {
    id: string;
    title: string;
    date: string;
    category?: string;
    image_url?: string;
  };
  showImage?: boolean;
  index: number;
};

export function BlogCard({ post, showImage = true, index }: BlogCardProps) {
  return (
    <Link
      href={`/blog/posts/${post.id}`}
      className={`group z-10 relative bg-dark/20 hover:bg-dark/30 border hover:border-accent/40 border-lightest/10 rounded-lg overflow-hidden hover:text-white transition-all duration-150 ease-in-out cursor-pointer
        ${index === 0 ? "" : "blur-sm pointer-events-none"}
        `}
    >
      <div className="-right-24 -bottom-24 absolute bg-accent opacity-20 blur-3xl rounded-full w-60 h-40" />

      {showImage && post.image_url && (
        <div className="w-full">
          <div className="relative pt-[56.25%] w-full">
            <img
              src={post.image_url}
              alt={post.title}
              className="top-0 left-0 absolute w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      <div className="px-6 py-6">
        {post.category && (
          <div className="mb-3">
            <span className="bg-dark/20 px-1.5 py-0.5 rounded-full font-medium text-lightest/60 text-xs uppercase tracking-wider">
              {post.category}
            </span>
          </div>
        )}

        <div className="block mb-3 font-bold text-xl">{post.title}</div>

        <div className="text-lightest/60 text-sm">
          <Date dateString={post.date} />
        </div>
      </div>
    </Link>
  );
}
