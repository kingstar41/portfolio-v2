"use client";

import Image from "next/image";

export const SocialIcon = ({
  href,
  iconSlug,
  imageWidth,
  imageHeight,
  alt,
  hex,
}: {
  href: string;
  iconSlug: string;
  imageWidth: number;
  imageHeight: number;
  alt: string;
  hex: string;
}) => {
  const fallbackImageUrl =
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"; // Replace with your default icon path

  const isMissingIcon = iconSlug === "linkedin"; // Add more conditions if needed

  const imageUrl = isMissingIcon
    ? fallbackImageUrl
    : `https://cdn.simpleicons.org/${iconSlug}/${hex}`;

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
        src={imageUrl}
        alt={alt}
        onError={(e) => {
          e.currentTarget.src = fallbackImageUrl;
        }}
        style={{ filter: isMissingIcon ? "invert(100%)" : "none" }}
      />
    </a>
  );
};
