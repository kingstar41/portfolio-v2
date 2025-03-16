import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "highlight.js/styles/atom-one-dark.css";
import Image from "next/image";
import { SocialIcon } from "@/components/SocialIcon";
import { socialIconsData } from "@/app/data/socials";
import MainProfilePicture from "@/components/MainProfilePicture";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniel Cranney | Developer Advocate and Web Developer",
  description:
    "I am a Developer Advocate, web developer and former teacher from the UK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative bg-darkest">
        <div className="-right-[28rem] -bottom-[28rem] fixed bg-accent/20 blur-[100px] rounded-full w-[48rem] h-[48rem]"></div>
        <div className="-top-[28rem] -left-[28rem] fixed bg-accent/20 blur-[100px] rounded-full w-[48rem] h-[48rem]"></div>
        <main className="flex lg:flex-row flex-col justify-between items-center bg-darkest border-accent border-t-8 lg:border-t-0 w-full min-h-screen">
          <section className="top-0 left-0 lg:fixed relative flex flex-col items-center gap-y-4 lg:py-16 pt-12 pb-8 w-full lg:w-[28rem] lg:h-screen">
            <MainProfilePicture />

            <div className="flex flex-col items-center gap-y-0.5">
              <p className="flex text-base">
                Developer Advocate at&nbsp;
                <a href="http://www.wearedevelopers.com" target="_blank">
                  WeAreDevelopers
                </a>
              </p>

              <p className="flex text-base">
                Co-Founder at&nbsp;
                <a href="http://www.wearespotlight.co.uk" target="_blank">
                  Spotlight Media
                </a>
              </p>

              <p className="flex text-base">Freelance Developer & Designer</p>
            </div>

            <Navigation />

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

            <p className="hidden lg:flex mt-auto text-base">
              &copy;{new Date().getFullYear()} Daniel Cranney
            </p>
          </section>

          <section className="flex flex-col gap-y-6 lg:ml-[28rem] px-8 lg:px-16 py-8 lg:py-16 w-full lg:w-3/4 min-h-screen">
            {children}

            <p className="lg:hidden mt-auto text-base">
              &copy;{new Date().getFullYear()} Daniel Cranney
            </p>
          </section>
        </main>
      </body>
    </html>
  );
}
