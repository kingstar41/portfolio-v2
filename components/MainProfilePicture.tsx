import Link from "next/link";
import Image from "next/image";

export default function MainProfilePicture() {
  return (
    <Link href="/" className="flex flex-col items-center gap-y-4">
      <div className="bg-accent rounded-full w-40 h-40 overflow-hidden">
        <Image
          src="/pfp.png"
          width={500}
          height={500}
          alt="Daniel Cranney Headshot"
        />
      </div>
      <h3 className="mb-0 font-extrabold text-3xl">Daniel Cranney</h3>
    </Link>
  );
}
