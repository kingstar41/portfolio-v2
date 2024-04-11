import Image from "next/image";
import Link from "next/link";
import { format, toDate, parseISO } from "date-fns";
import Date from "./Date";

export const BlogPostCard = ({
  index,
  id,
  date,
  imageSrc,
  imageWidth,
  imageHeight,
  title,
  excerpt,
  tags,
  category,
}: {
  index: number;
  id: string;
  date: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  excerpt: string;
  tags: string[];
  category: string;
}) => {
  return (
    <li
      className={`${
        index === 0
          ? "row-span-2"
          : index === 1 || index === 2
          ? "row-span-1 col-span-2"
          : index === 3
          ? "col-span-2"
          : index === 4
          ? "col-span-1 row-span-2"
          : index === 5
          ? "col-span-1"
          : index === 6
          ? "col-span-1"
          : "col-span-3"
      }`}
    >
      <Link
        className={`w-full h-full flex flex-col ${
          index % 5 === 0
            ? "bg-accent"
            : index % 5 === 1
            ? "bg-purple-500"
            : index % 5 === 2
            ? "bg-green-500"
            : index % 5 === 3
            ? "bg-pink-500"
            : "bg-yellow-500"
        } rounded-2xl shadow-lg overflow-hidden group relative items-start justify-center p-8 lg:px-6 lg:py-8 cursor-pointer`}
        href={`/posts/${id}`}
      >
        {/* <Image
          src={imageSrc}
          width={imageWidth}
          height={imageHeight}
          alt={title}
          className="absolute scale-[200%] blur-sm lg:blur-none group-hover:scale-[205%] lg:translate-x-1/2 rounded-tl-2xl shadow-lg shadow-darkest/20 opacity-30 group-hover:opacity-50 lg:scale-100 lg:group-hover:scale-[103%] transition-all duration-300 ease-in-out z-0 lg:-bottom-1"
        /> */}
        <div className="flex flex-col w-full gap-y-2">
          <p className="text-white font-bold bg-darkest bg-opacity-20 px-2 py-1 rounded-full self-start text-sm">
            <Date dateString={date} />
          </p>
          <h3 className="text-2xl text-white font-display font-extrabold z-10">
            {title}
          </h3>

          <div
            className={`project-link-icon-wrapper ${
              index % 5 === 0
                ? "text-accent"
                : index % 5 === 1
                ? "text-purple-500"
                : index % 5 === 2
                ? "text-green-500"
                : index % 5 === 3
                ? "text-pink-500"
                : "text-yellow-500"
            } absolute right-4 bottom-4 group-hover:rotate-[360]`}
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
              className="w-5 h-5 icon icon-tabler icons-tabler-outline icon-tabler-arrow-down-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 7l10 10" />
              <path d="M17 8l0 9l-9 0" />
            </svg>
          </div>
        </div>
      </Link>
    </li>
  );
};
