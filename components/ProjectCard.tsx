import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
  href: string;
  githubUrl?: string;
  logoSrc: string;
  title: string;
  description: string;
  accentColor: string;
}

export const ProjectCard = ({
  href,
  githubUrl,
  logoSrc,
  title,
  description,
  accentColor,
}: ProjectCardProps) => {
  return (
    <div className="flex items-center gap-6 p-4 border border-light/10 hover:border-light/20 rounded-lg transition-all group">
      <div className="flex-shrink-0">
        <Image
          src={logoSrc}
          alt={`${title} logo`}
          width={40}
          height={40}
          className="rounded-md"
        />
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-mid text-sm">{description}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-light/10 p-2 rounded-md transition-colors"
            style={{ color: accentColor }}
          >
            <Github size={20} />
          </a>
        )}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-dark/20 p-2 rounded-md transition-colors"
          style={{ color: accentColor }}
        >
          <ArrowUpRight size={20} />
        </a>
      </div>
    </div>
  );
};
