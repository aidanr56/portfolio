import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="border border-zinc-200 rounded-lg overflow-hidden hover:border-zinc-400 transition-colors group"
    >
      <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 h-48" />
      <div className="p-6">
        <h2 className="text-zinc-900 font-medium mb-2 group-hover:underline underline-offset-4">
          {project.title}
        </h2>
        <p className="text-sm text-zinc-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-zinc-100 text-zinc-600 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}