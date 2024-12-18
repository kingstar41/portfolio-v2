import "../globals.css";
import Image from "next/image";

export default function MdxLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex lg:flex-row flex-col justify-between items-center border-accent bg-darkest border-t-8 lg:border-t-0 w-full min-h-screen">
      <section className="relative top-0 left-0 lg:fixed flex flex-col items-center gap-y-4 lg:py-16 pt-12 pb-8 w-full lg:w-[28rem] lg:h-screen">
        <div className="bg-accent rounded-full w-40 h-40 overflow-hidden">
          <Image
            src="/headshot.png"
            width={500}
            height={500}
            alt="Daniel Cranney Headshot"
          />
        </div>
        <h3 className="mb-0 font-extrabold text-3xl">Daniel Cranney</h3>

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

        <p className="lg:flex hidden mt-auto text-base">
          &copy;{new Date().getFullYear()} Daniel Cranney
        </p>
      </section>

      <section className="flex flex-col gap-y-6 lg:ml-[28rem] px-14 py-10 lg:p-16 w-full lg:w-3/4 min-h-screen">
        {children}
      </section>
    </main>
  );
}
