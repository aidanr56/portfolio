import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-2">
          Aidan Roche
        </h1>
        <p className="text-xl text-zinc-600 mb-2">
          Psychology and Computer Science Graudate
        </p>

        <div className="border-t border-sinz-100 my-2 w-16"/>

        <p className="text-lg text-zinc-800 leading-relaxed max-w-3xl mt-4">
          I am a young professional, with a unique multi-disciplinary background in AI/ML, Computer Engineering, and Human Factors. I am looking to take the next step in my career, and am excited by the challenge of developing and implementing technology with a genuine impact. I have experience in Machine Translation, Human Factors, and AI implementation, and excel at bridging the gap between people and technology.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
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

      <div className="flex flex-wrap gap-4 items-center justify-center">
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

    </main>
  );
}