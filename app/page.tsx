import { ProjectCard } from "@/components/ProjectCard";
import { StackIcon } from "@/components/StackIcon";
import { BlogCard } from "@/components/BlogCard";
import { stackIconsData } from "@/app/data/stack";
import { projectsData } from "@/app/data/projects";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

type BlogPost = {
  id: string;
  date: string;
  title: string;
  category?: string;
  image_url?: string;
};

export default function Home() {
  // Get the latest 5 blog posts
  const latestPosts = getSortedPostsData().slice(0, 5);

  return (
    <>
      <article className="flex flex-col gap-y-6 pb-6 border-dark/40 border-b-2">
        <h1 className="mb-0 text-4xl lg:text-5xl">
          Hey! I&apos;m Zef Lako, a proud generalist who builds things with
          computers.
        </h1>
        <p className="mb-0 font-semibold text-xl">
          Check out my work below, and get in touch if you&apos;d like to work
          together. 👇
        </p>

        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {stackIconsData.map((stackIcon, index) => {
            return (
              <StackIcon
                key={"stackIcon" + stackIcon.iconSlug + index}
                href={stackIcon.href}
                iconSlug={stackIcon.iconSlug}
                hex={stackIcon.hex}
              />
            );
          })}
        </div>
      </article>
      <article className="flex-col gap-y-4 py-4 w-full">
        <div className="flex items-center mb-3" id="projects">
          <h4>Projects</h4>
        </div>

        <article className="gap-6 grid grid-cols-1 lg:grid-cols-6 w-full">
          {projectsData.map((project, index) => {
            return (
              <ProjectCard
                key={"project" + project.title + index}
                href={project.href}
                githubUrl={project.githubUrl}
                logoSrc={project.logoSrc}
                title={project.title}
                description={project.description}
                accentColor={project.accentColor}
                index={index}
              />
            );
          })}
        </article>
      </article>
      <article className="flex-col gap-y-4 py-4 w-full">
        <div className="flex justify-between items-center mb-8">
          <h4>Latest Blog Posts</h4>
          <Link
            href="/blog"
            className="text-lightest/60 hover:text-lightest transition-colors"
          >
            View all posts →
          </Link>
        </div>

        <div className="z-50 relative w-full">
          <div className="relative gap-8 grid grid-cols-1 w-full mask-fade">
            {latestPosts.slice(0, 2).map((post: BlogPost, index) => (
              <BlogCard
                post={post}
                showImage={false}
                index={index}
                key={post.id}
              />
            ))}
          </div>
          <div className="bottom-20 left-1/2 z-40 absolute -translate-x-1/2">
            <Link
              href="/blog"
              className="bg-dark/10 hover:bg-dark/20 px-4 py-2 border hover:border-accent/40 border-lightest/10 rounded-md text-lightest/80 hover:text-lightest transition-colors"
            >
              Read all posts →
            </Link>
          </div>
        </div>
      </article>
      <article className="flex-col gap-y-4 py-4 w-full">
        <div className="flex items-center mb-3" id="contact">
          <h4>Contact</h4>
        </div>

        <p>
          If you&apos;d like to collaborate on a project, I&apos;d love to hear
          from you. <a href="mailto:kingstar9941@proton.me">Email me</a> or get
          in touch on socials.
        </p>
      </article>
    </>
  );
}
