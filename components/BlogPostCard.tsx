import Image from "next/image";
import Link from "next/link";
import { format, toDate, parseISO } from "date-fns";

export const BlogPostCard = ({
  index,
  id,
  date,
  imageSrc,
  imageWidth,
  imageHeight,
  title,
  excerpt,
  backgroundStyle,
  arrowIconColor,
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
  backgroundStyle: string;
  arrowIconColor: string;
  tags: string[];
  category: string;
}) => {
  return (
    <li
      className={`${index === 0 ? "row-span-2" : "row-span-1"} 
    `}
    >
      <Link
        className={`w-full h-full flex flex-col ${
          index + 1 === 1
            ? "bg-accent"
            : index + 1 === 2
            ? "bg-purple-500"
            : index + 1 === 3
            ? "bg-green-500"
            : index + 1 === 4
            ? "bg-pink-500"
            : index + 1 === 5
            ? "bg-yellow-500"
            : "bg-accent"
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
        <div className="flex flex-col w-1/2">
          <p>{format(parseISO(date), "MM/dd/yyyy")}</p>
          <h3 className="text-2xl text-white font-display font-extrabold z-10">
            {title}
          </h3>

          {index === 0 ? <p>{category}</p> : null}

          {index === 0 ? <p>{excerpt}</p> : null}

          <div
            className={`project-link-icon-wrapper ${arrowIconColor} absolute right-4 bottom-4 group-hover:rotate-[360]`}
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
