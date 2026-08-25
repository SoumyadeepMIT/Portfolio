import ProjectCard from "@/components/ProjectCard";
import { ProjectType } from "@/types/project_type";

export default function Project({ projects }: { projects: ProjectType[] }) {
  return (
    <div className="mt-5 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-zinc-100 mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}