import Image from "next/image";

export const SocialIcon = ({
  href,
  iconSlug,
  hex,
  imageWidth,
  imageHeight,
  alt,
}: {
  href: string;
  iconSlug: string;
  hex: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
}) => {
  return (
    <a
      className="social-icon-wrapper"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        height={imageHeight}
        width={imageWidth}
        src={`https://cdn.simpleicons.org/${iconSlug}/${hex}`}
        alt={alt}
      />
    </a>
  );
};
