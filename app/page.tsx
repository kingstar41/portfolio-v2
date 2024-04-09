import { ProjectCard } from "@/components/ProjectCard";
import { SocialIcon } from "@/components/SocialIcon";
import { StackIcon } from "@/components/StackIcon";
import Image from "next/image";
import Link from "next/link";

const stackIconsData = [
  {
    iconSlug: "html5",
    href: "https://en.wikipedia.org/wiki/HTML5",
    hex: "E34F26",
  },
  {
    iconSlug: "css3",
    href: "https://w3schools.com/css",
    hex: "1572B6",
  },
  {
    iconSlug: "react",
    href: "https://react.dev/",
    hex: "61DAFB",
  },
  {
    iconSlug: "nextdotjs",
    href: "http://www.nextjs.org",
    hex: "000000",
  },
  {
    iconSlug: "typescript",
    href: "https://www.typescriptlang.org/",
    hex: "3178C6",
  },
  {
    iconSlug: "nodedotjs",
    href: "https://nodejs.org/en",
    hex: "339933",
  },
  {
    iconSlug: "tailwindcss",
    href: "http://www.tailwindcss.com",
    hex: "06B6D4",
  },
  {
    iconSlug: "supabase",
    href: "http://www.supabase.com",
    hex: "3FCF8E",
  },
  {
    iconSlug: "adobephotoshop",
    href: "http://www.adobe.com",
    hex: "31A8FF",
  },
  {
    iconSlug: "adobeillustrator",
    href: "http://www.adobe.com",
    hex: "FF9A00",
  },
  {
    iconSlug: "adobepremierepro",
    href: "http://www.adobe.com",
    hex: "9999FF",
  },
  {
    iconSlug: "adobeaftereffects",
    href: "http://www.adobe.com",
    hex: "9999FF",
  },
];

const projectsData = [
  {
    href: "http://www.colorhub.app",
    imageWidth: 1366,
    imageHeight: 677,
    imageSrc: "/colorhub.png",
    title: "ColorHub",
    description: "Find the perfect color palette for your next project",
    backgroundStyle: "bg-[#AC58F5]",
    arrowIconColor: "group-hover:text-[#AC58F5]",
  },
  {
    href: "http://www.profileme.dev",
    imageWidth: 1366,
    imageHeight: 655,
    imageSrc: "/profileme.png",
    title: "ProfileMe",
    description: "Create an amazing GitHub profile in two minutes",
    backgroundStyle: "bg-[#139ae1]",
    arrowIconColor: "group-hover:text-[#139ae1]",
  },
  {
    href: "http://www.svghub.app",
    imageWidth: 1366,
    imageHeight: 655,
    imageSrc: "/svghub.png",
    title: "SVGHub",
    description: "Over 100 free SVG scribbles and squiggles",
    backgroundStyle: "bg-[#00B25A]",
    arrowIconColor: "group-hover:text-[#00B25A]",
  },
  {
    href: "http://www.smylo.co",
    imageWidth: 1366,
    imageHeight: 655,
    imageSrc: "/smylo.png",
    title: "Smylo",
    description: "Never miss an important date again",
    backgroundStyle: "bg-[#f5bb00]",
    arrowIconColor: "group-hover:text-[#f5bb00]",
  },
];


export default function Home() {
  return (
    <>
      {" "}
      <article className="flex flex-col border-b-2 border-light gap-y-4 pb-6">
        <h1 className="text-4xl lg:text-5xl mb-0">
          Hey! I&apos;m Daniel, a proud generalist who loves code, design and
          cats.
        </h1>
        <p className="text-lg font-semibold mb-0">
          Check out my work below, and get in touch if you&apos;d like to work
          together. 👇
        </p>

        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-y-3">
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
      <article className="w-full flex-col gap-y-4 py-4">
        <div className="flex items-center mb-3">
          <h4>Projects</h4>
        </div>

        <article className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {projectsData.map((project, index) => {
            return (
              <ProjectCard
                key={"project" + project.title + index}
                href={project.href}
                imageWidth={project.imageWidth}
                imageHeight={project.imageHeight}
                imageSrc={project.imageSrc}
                title={project.title}
                description={project.description}
                backgroundStyle={project.backgroundStyle}
                arrowIconColor={project.arrowIconColor}
              />
            );
          })}
        </article>
      </article>
      <article className="w-full flex-col gap-y-4 py-4">
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
