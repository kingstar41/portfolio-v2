import { ProjectCard } from "@/components/ProjectCard";
import { StackIcon } from "@/components/StackIcon";
import { BlogCard } from "@/components/BlogCard";
import { getHashnodeArticles } from "@/app/lib/getHashnodeArticles";
import { BlogPost } from "./types/Blog";
import { stackIconsData } from "@/app/data/stack";
import { projectsData } from "@/app/data/projects";

export default async function Home() {
  const allPosts = await getHashnodeArticles();
  const recentPosts = allPosts.slice(0, 5);

  return (
    <>
      <article className="flex flex-col gap-y-6 border-dark/40 pb-6 border-b-2">
        <h1 className="mb-0 text-4xl lg:text-5xl">
          Hey! I&apos;m Daniel, a proud generalist who builds things with
          computers.
        </h1>
        <p className="mb-0 font-semibold text-xl">
          Check out my work below, and get in touch if you&apos;d like to work
          together. 👇
        </p>

        <div className="gap-y-3 grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12">
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
        <div className="flex items-center mb-3">
          <h4>Projects</h4>
        </div>

        <article className="gap-6 grid grid-cols-1 lg:grid-cols-2 w-full">
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
              />
            );
          })}
        </article>
      </article>
      <article className="flex-col gap-y-4 py-4 w-full">
        <div className="flex items-center mb-3">
          <h4>Blog Posts</h4>
        </div>

        <article className="gap-0 grid grid-cols-1 w-full">
          {recentPosts.map((post: BlogPost) => (
            <div className="relative" key={post.slug}>
              <BlogCard post={post} />
            </div>
          ))}
        </article>
      </article>
      <article className="flex-col gap-y-4 py-4 w-full">
        <div className="flex items-center mb-3">
          <h4>Contact</h4>
        </div>

        <p>
          If you&apos;d like to collaborate on a project, I&apos;d love to hear
          from you. <a href="mailto:hello@danielcranney.com">Email me</a> or get
          in touch on socials.
        </p>
      </article>
    </>
  );
}
