import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/app/types/Blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`https://danielcranney.hashnode.dev/${post.slug}`}
      target="_blank"
      className="relative flex flex-col border-dark/10 hover:border-accent hover:bg-dark/10 p-4 border-l-4 rounded-r-lg transition-all group"
    >
      <div className="flex justify-between items-center w-full">
        <p className="group-hover:text-lightest mb-0 font-semibold text-lg text-light transition-colors">
          {post.title}
        </p>

        <div className="flex items-center gap-4">
          <time className="text-mid text-sm">
            {new Date(post.dateAdded)
              .toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
              .replace(",", "")}
          </time>

          <div className="opacity-0 group-hover:opacity-100 transform transition-all translate-x-4 group-hover:translate-x-0 duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-400 dark:text-gray-500"
            >
              <path d="M7 7l10 10M17 7v10H7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
