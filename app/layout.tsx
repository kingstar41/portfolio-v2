import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "@/components/SocialIcon";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Cranney | Developer Advocate and Web Developer",
  description:
    "I am a Developer Advocate, web developer and former teacher from the UK.",
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-lightest">
        <main className="w-full flex flex-col lg:flex-row min-h-screen items-center justify-between bg-light/30 border-t-8 lg:border-t-0 border-accent">
          <section className="relative lg:fixed top-0 left-0 w-full lg:w-[28rem] pt-12 pb-8 lg:py-16 flex items-center flex-col gap-y-4 lg:h-screen">
            <Link
              href={"/"}
              className="w-40 h-40 rounded-full bg-accent overflow-hidden"
            >
              <Image
                src="/headshot.png"
                width={500}
                height={500}
                alt="Daniel Cranney Headshot"
              />
            </Link>
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
            {children}

            <p className="text-base mt-auto lg:hidden">
              &copy;{new Date().getFullYear()} Daniel Cranney
            </p>
          </section>
        </main>
      </body>
    </html>
  );
}
