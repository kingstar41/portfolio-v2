import "../globals.css";
import Image from "next/image";

export default function MdxLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

        <p className="text-base mt-auto hidden lg:flex">
          &copy;{new Date().getFullYear()} Daniel Cranney
        </p>
      </section>

      <section className="flex flex-col w-full lg:w-3/4 lg:ml-[28rem] min-h-screen px-14 py-10 lg:p-16 gap-y-4">
        {children}
      </section>
    </main>
  );
}
