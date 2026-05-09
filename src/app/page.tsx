{/* 
Ideas for next time:

-Get rid of the projects and paper on nav bar until I have more of them
-Create a project and papers header and just put them on the home page
-Get rid of the navigation tabs at the bottom (just comment out will ideally use in future, same for nav bar)
-Add underline between home and about that shows which page your on
-Clean up the about tab visually
*/}


import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Playfair_Display, Inter } from 'next/font/google'

const header_font = Playfair_Display({ subsets: ['latin'] })

export default function Home() {
  return (
  <div className="flex min-h-screen">
    <aside className="w-64 shrink-0 border-r border-gray-200 p-6 flex flex-col sticky top-0 h-screen">
        <div className="flex flex-col items-center text-center mb-5">
          <img
            src="/profile_picture.jpg"
            alt="Image of Aidan Roche"
            className="w-45 h-45 rounded-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
          Aidan Roche
        </h1>
        <div className="border-t border-sinz-100 w-16 my-2"/>
        <p className="text-xl text-zinc-600 mb-2">
          Psychology and Computer Science Graudate
        </p>

    </aside>

    <main className="max-w-4xl mx-auto px-6 py-6">
      <div className="flex flex-col items-center mb-2">
        <p className="${header_font.className} font-mono text-center text-4xl text-zinc-800 leading-relaxed max-w-5xl mt-4" >
          Young developer with unique experience.
        </p>
      </div>

      <div className="flex justify-center items-center gap-10 text-center text-xl text-neutral-500">
        <div className="text-center">
          <p>Artficial<br />Intelligence</p>
        </div>
        <div className="w-3 h-3 rounded-full bg-gray-700 shrink-0" />
        <div className="text-center">
          <p>Applied<br />Psychology</p>
        </div>
        <div className="w-3 h-3 rounded-full bg-gray-700 shrink-0" />
        <div className="text-center">
          <p>Human Factors<br />Engineering</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center my-8">
        <div className="w-3/4 h-px bg-gray-600" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-3xl">
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
  </div>
  );
}