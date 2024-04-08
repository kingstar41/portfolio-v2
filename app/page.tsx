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

const socialIconsData = [
  {
    href: "http://www.x.com/danielcranney",
    imageHeight: 36,
    imageWidth: 36,
    iconSlug: "x",
    hex: "000",
    alt: "X Icon",
  },
  {
    href: "https://www.linkedin.com/in/daniel-cranney/",
    imageHeight: 36,
    imageWidth: 36,
    iconSlug: "linkedin",
    hex: "0968c6",
    alt: "LinkedIn Icon",
  },
  {
    href: "http://www.github.com/danielcranney",
    imageHeight: 36,
    imageWidth: 36,
    iconSlug: "github",
    hex: "000",
    alt: "GitHub Icon",
  },
  {
    href: "https://www.threads.net/@daniel.cranney",
    imageHeight: 36,
    imageWidth: 36,
    iconSlug: "threads",
    hex: "000",
    alt: "Threads Icon",
  },
  {
    href: "https://www.youtube.com/@danielcranney",
    imageHeight: 36,
    imageWidth: 36,
    iconSlug: "youtube",
    hex: "FF0000",
    alt: "YouTube Icon",
  },
  {
    href: "https://blog.danielcranney.com/",
    imageHeight: 36,
    imageWidth: 36,
    iconSlug: "hashnode",
    hex: "2962FF",
    alt: "Hashnode Icon",
  },
];

export default function Home() {
  return (
    <main className="w-full flex flex-col lg:flex-row min-h-screen items-center justify-between bg-light/30 border-t-8 lg:border-t-0 border-accent">
      <section className="relative lg:fixed top-0 left-0 w-full lg:w-[28rem] pt-12 pb-8 lg:py-16 flex items-center flex-col gap-y-4 lg:h-screen">
        <div className="w-40 h-40 rounded-full bg-accent overflow-hidden">
          <Image
            src="/headshot.png"
            width={500}
            height={500}
            alt="Daniel Cranney Headshot"
          />
        </div>
        <h3 className="text-3xl mb-0 font-extrabold">Daniel Cranney</h3>

        <div className="flex flex-col items-center gap-y-0.5">
          <p className="text-base flex">
            Developer Advocate at&nbsp;
            <a href="http://www.wearedevelopers.com" target="_blank">
              WeAreDevelopers
            </a>
          </p>

          <p className="text-base flex">
            Co-Founder at&nbsp;
            <a href="http://www.wearespotlight.co.uk" target="_blank">
              Spotlight Media
            </a>
          </p>

          <p className="text-base flex">Freelance Developer & Designer</p>
        </div>

        <article className="flex items-center gap-x-2 mt-4">
          {socialIconsData.map((socialIcon, index) => (
            <SocialIcon
              key={"socialIcon" + socialIcon.iconSlug + index}
              href={socialIcon.href}
              imageHeight={socialIcon.imageHeight}
              imageWidth={socialIcon.imageWidth}
              iconSlug={socialIcon.iconSlug}
              hex={socialIcon.hex}
              alt={socialIcon.alt}
            />
          ))}
        </article>

        <p className="text-base mt-auto hidden lg:flex">
          &copy;{new Date().getFullYear()} Daniel Cranney
        </p>
      </section>

      <section className="flex flex-col w-full lg:w-3/4 lg:ml-[28rem] min-h-screen px-14 py-10 lg:p-16 gap-y-4">
        <article className="flex flex-col border-b-2 border-light gap-y-4 pb-6">
          <h1 className="text-4xl lg:text-5xl mb-0">
            Hey! I&apos;m Daniel, a proud generalist who loves code, design and
            cats.
          </h1>
          <p className="text-lg font-semibold mb-0">
            Check out my products below, and get in touch if you&apos;d like to
            work together. 👇
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
            If you&apos;d like to collaborate on a project, I'd love to hear
            from you. <a href="mailto:hello@danielcranney.com">Email me</a> or
            get in touch on socials.
          </p>
        </article>

        <p className="text-base mt-auto lg:hidden">
          &copy;{new Date().getFullYear()} Daniel Cranney
        </p>
      </section>
    </main>
  );
}
