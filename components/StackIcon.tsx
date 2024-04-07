import Image from "next/image";

export const StackIcon = ({
  href,
  iconSlug,
  hex,
}: {
  href: string;
  iconSlug: string;
  hex: string;
}) => {
  return (
    <a className="tech-stack-wrapper" href={href} target="_blank">
      <img
        height="36"
        width="36"
        src={`https://cdn.simpleicons.org/${iconSlug}/${hex}`}
      />
    </a>
  );
};
