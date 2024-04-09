import Image from "next/image";

export const ProjectCard = ({
  href,
  imageSrc,
  imageWidth,
  imageHeight,
  title,
  description,
  backgroundStyle,
  arrowIconColor,
}: {
  href: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  title: string;
  description: string;
  backgroundStyle: string;
  arrowIconColor: string;
}) => {
  return (
    <a
      className={`w-full flex flex-col ${backgroundStyle} rounded-2xl shadow-lg overflow-hidden group relative items-start justify-center p-8 lg:p-4 lg:aspect-video cursor-pointer`}
      href={href}
      target="_blank"
    >
      <Image
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        alt={title}
        className="absolute scale-[200%] blur-sm lg:blur-none group-hover:scale-[205%] lg:translate-x-1/2 rounded-tl-2xl shadow-lg shadow-darkest/20 opacity-30 group-hover:opacity-50 lg:scale-100 lg:group-hover:scale-[103%] transition-all duration-300 ease-in-out z-0 lg:-bottom-1"
      />
      <div className="flex flex-col w-1/2">
        <h3 className="text-3xl text-white font-display font-extrabold z-10">
          {title}
        </h3>
        <p className="text-white z-10 font-semibold">{description}</p>

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
    </a>
  );
};
