import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-24">

      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">
        {project.title}
      </h1>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-zinc-100 text-zinc-600 text-xs rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-lg h-64 mb-12" />

      <section className="mb-12">
        <h2 className="text-lg font-medium text-zinc-900 mb-4">About</h2>
        <p className="text-zinc-600 leading-relaxed">{project.description}</p>
      </section>

      {project.reflection && (
        <section className="mb-12">
          <h2 className="text-lg font-medium text-zinc-900 mb-4">Later Reflection</h2>
          <p className="text-zinc-600 leading-relaxed">{project.reflection}</p>
        </section>
      )}

      <div className="flex gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-zinc-900 rounded-lg text-white hover:bg-zinc-700 transition-colors text-sm font-medium"
          >
            View on GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-zinc-200 rounded-lg text-zinc-700 hover:border-zinc-400 transition-colors text-sm font-medium"
          >
            Live Site
          </a>
        )}
      </div>

    </main>
  );
}