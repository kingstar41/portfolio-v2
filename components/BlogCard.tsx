import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/app/types/Blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`https://danielcranney.hashnode.dev/${post.slug}`}
      target="_blank"
      className="flex flex-col gap-4 gap-y-px opacity-100 hover:opacity-90 transition-all group"
    >
      {/* {post.coverImage && (
        <Image
          src={post.coverImage}
          alt={post.title}
          width={600}
          height={300}
          className="shadow-lg rounded-2xl object-cover"
        />
      )} */}
      <div className="flex justify-between pb-2 border-b border-light w-full">
        <h3 className="group-hover:text-dark font-sans font-semibold text-lg transition-colors">
          {post.title}
        </h3>
        {/* <p className="mt-2 text-gray-600">{post.brief}</p> */}
        {/* <time className="mt-2 text-mid text-sm">
          {new Date(post.dateAdded).toLocaleDateString()}
        </time> */}

        <div
          className={`project-link-icon-wrapper absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity -rotate-45`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon-tabler-arrow-down-right w-5 h-5 text-mid icon icon-tabler icons-tabler-outline"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 7l10 10" />
            <path d="M17 8l0 9l-9 0" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
