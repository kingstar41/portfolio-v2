"use client";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  href: string;
  githubUrl?: string;
  logoSrc: string;
  title: string;
  description: string;
  accentColor: string;
  index: number;
}

export const ProjectCard = ({
  href,
  githubUrl,
  logoSrc,
  title,
  description,
  accentColor,
  index,
}: ProjectCardProps) => {
  return (
    <div
      className={`flex items-center gap-x-4 p-4 border border-light/10 hover:border-light/20 rounded-lg transition-all group cursor-pointer hover:bg-lightest/[2%]
    ${index === 0 || index === 1 ? "col-span-3" : "col-span-2"}`}
      onClick={() => window.open(href, "_blank")}
    >
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
          <div
            onClick={(e) => {
              e.stopPropagation();
              window.open(githubUrl, "_blank");
            }}
            className="hover:bg-light/10 p-2 rounded-md transition-colors"
            style={{ color: accentColor }}
          >
            <Github size={20} />
          </div>
        )}
        <div
          className="group-hover:bg-dark/20 p-2 rounded-md transition-colors"
          style={{ color: accentColor }}
        >
          <ArrowUpRight size={20} />
        </div>
      </div>
    </div>
  );
};
