import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
          Aidan Roche
        </h1>
        <p className="text-xl text-zinc-600 mb-6">
          Psychology and Computer Science Graudate
        </p>
        <p className="text-zinc-600 leading-relaxed max-w-xl">
          Welcome to my personal portfolio. Here you'll find my projects, research papers, and more about my work in machine learning and software development.
        </p>
      </div>
      
      <div className="flex flex-wrap gap-4 mb-16">
        <a
          href = "https://github.com/aidanr56"
          target="_blank"
          rel="noopener noreferrer"
          className = "px-4 py-2 border border-zinc-200 rounded-lg text-zinc-700 hover:border-zinc-400 hover:text-zinc-900 transition-colors text-sm font-medium"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/aidan-roche-1x"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-zinc-200 rounded-lg text-zinc-700 hover:border-zinc-400 hover:text-zinc-900 transition-colors text-sm font-medium"
        >
          LinkedIn
        </a>
        <a
          href="mailto:aidan.james.roche@gmail.com"
          className="px-4 py-2 border border-zinc-200 rounded-lg text-zinc-700 hover:border-zinc-400 hover:text-zinc-900 transition-colors text-sm font-medium"
        >
          Email
        </a>
        <a
          href="/Aidan Roche Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-zinc-900 rounded-lg text-white hover:bg-zinc-700 transition-colors text-sm font-medium"
        >
          Download CV
        </a>
      </div>

      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium text-zinc-900">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((project) => (
            <div
              key={project.slug}
              className="border border-zinc-200 rounded-lg overflow-hidden hover:border-zinc-400 transition-colors"
            >
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 h-32" />
              <div className="p-4">
                <h3 className="text-zinc-900 font-medium mb-1">{project.title}</h3>
                <p className="text-sm text-zinc-600 mb-3">{project.description}</p>
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
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          href="/projects"
          className="p-6 border border-zinc-200 rounded-lg hover:border-zinc-400 transition-colors group"
        >
          <h2 className="text-zinc-900 font-medium mb-1 group-hover:underline">Projects &rarr;</h2>
          <p className="text-sm text-zinc-500">Work and personal projects</p>
        </Link>
        <Link
          href="/papers"
          className="p-6 border border-zinc-200 rounded-lg hover:border-zinc-400 transition-colors group"
        >
          <h2 className="text-zinc-900 font-medium mb-1 group-hover:underline">Papers &rarr;</h2>
          <p className="text-sm text-zinc-500">Written Works</p>
        </Link>
        <Link
          href="/about"
          className="p-6 border border-zinc-200 rounded-lg hover:border-zinc-400 transition-colors group"
        >
          <h2 className="text-zinc-900 font-medium mb-1 group-hover:underline">About &rarr;</h2>
          <p className="text-sm text-zinc-500">Background and experience</p>
        </Link>
      </div>

    </main>
  );
}