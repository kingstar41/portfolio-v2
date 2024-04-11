import Link from "next/link";
import Image from "next/image";
import Date from "@/components/Date";

import { getSortedPostsData } from "@/lib/posts";
import { BlogPostCard } from "@/components/BlogPostCard";

type AllPostsData = {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  cover: string;
  alt: string;
  tags: string[];
  category: string;
}[];

export const metadata = {
  title: "Blog",
};

export default function Blog() {
  const allPostsData: AllPostsData = getSortedPostsData();

  return (
    <>
      <section className="flex flex-col border-b-2 border-light gap-y-4 pb-6">
        <h1 className="text-4xl lg:text-5xl mb-0">Blog</h1>
        <p className="text-lg font-semibold mb-0">
          I write about coding, technology, society and culture.
        </p>

        <ul className="grid grid-cols-3 gap-8 mt-4">
          {allPostsData.map(
            (
              { id, date, title, excerpt, cover, alt, tags, category },
              index
            ) => (
              <BlogPostCard
                index={index}
                key={title + index}
                id={id}
                date={date}
                imageWidth={1920}
                imageHeight={1080}
                imageSrc={"/" + cover}
                title={title}
                excerpt={excerpt}
                category={category}
                tags={tags}
              />
            )
          )}
        </ul>

        {/* <ul className="grid grid-cols-2 gap-8">
          {allPostsData.map(({ id, date, title, cover, alt }, index) => (
            <li
              className={`${
                index == 0 ? "col-span-2 bg-accent" : "col-span-1 bg-green-500"
              }`}
              key={id}
            >
              <div className="font-medium mb-1 mt-5">
                <Link href={`/posts/${id}`}>{title}</Link>
              </div>
              <Image src={"/" + cover} alt={alt} width={1920} height={1080} />
              {/* <br /> */}
        {/* <small className="text-gray-500 font-medium">
                <Date dateString={date} />
              </small> */}
        {/* </li> */}
        {/* ))} */}
        {/* </ul> */}
      </section>
    </>
  );
}
