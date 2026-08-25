import Image from "next/image";
import { ProjectType } from "../types/project_type";

function ProjectCard({ project, index }: { project: ProjectType; index: number }) {
  const { title, stack, description, image, link } = project;

  return (
    <>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full border border-zinc-800 rounded-lg overflow-hidden hover:border-zinc-500 transition-colors duration-300"
    >
      <div className="relative w-full aspect-video bg-zinc-900 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index === 0}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-zinc-100">
          {title}
        </h3>

        <p className="text-sm text-zinc-400 leading-relaxed mt-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs text-zinc-300 border border-zinc-700 px-2 py-0.5 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
    </>
  );
}

export default ProjectCard;