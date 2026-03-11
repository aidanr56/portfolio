import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">
        Projects
      </h1>
      <p className="text-zinc-600 mb-12">
        A selection of my work in machine learning and software development.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="border border-zinc-200 rounded-lg overflow-hidden hover:border-zinc-400 transition-colors"
          >
            <div className="bg-zinc-100 h-48 flex items-center justify-center">
              <span className="text-zinc-400 text-sm">Project Image</span>
            </div>
            <div className="p-6">
              <h2 className="text-zinc-900 font-medium mb-2">{project.title}</h2>
              <p className="text-sm text-zinc-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-zinc-100 text-zinc-600 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-900 font-medium underline underline-offset-4"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}