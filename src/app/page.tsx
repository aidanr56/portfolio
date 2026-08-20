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
import ProjectCarousel from "@/components/ProjectCarousel";
import { Playfair_Display, Inter } from 'next/font/google'
import { papers } from "@/data/papers";
import { Mail, Download } from "lucide-react";

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
          Psychology and Computer Science Graduate
        </p>
    </aside>

    <div className="flex-1 flex flex-col">
    <main className="flex-1 px-6 py-6">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-2">
          <p className={`${header_font.className} text-center text-4xl text-zinc-800 leading-relaxed max-w-5xl my-2`}>
            Creativity powered by experience.
          </p>
        </div>

        <div className="flex justify-center items-center gap-6 text-center text-xl text-neutral-500">
          <p>Artificial<br />Intelligence</p>
          <span className="w-px h-8 bg-zinc-300 shrink-0" />
          <p>Applied<br />Psychology</p>
          <span className="w-px h-8 bg-zinc-300 shrink-0" />
          <p>Human Factors<br />Engineering</p>
        </div>

        <div className="flex flex-col items-center justify-center my-8">
          <div className="w-3/4 h-px bg-gray-600" />
        </div>

        <h2 className={`${header_font.className} text-2xl text-zinc-800 tracking-wide text-center mb-6`}>Projects</h2>

        <ProjectCarousel />

        <h2 className={`${header_font.className} text-2xl text-zinc-800 tracking-wide text-center mt-6`}>Papers</h2>

        <div className="flex flex-col divide-y divide-zinc-200">
          {papers.map((paper) => (
            <div key={paper.slug} className="py-8">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="text-zinc-900 font-medium">{paper.title}</h2>
                <span className="text-sm text-zinc-500 shrink-0">{paper.year}</span>
              </div>
              <p className="text-sm text-zinc-500 mb-3">
                {paper.authors.join(", ")}
              </p>
              <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                {paper.abstract}
              </p>
              <div className="flex gap-4">
                {paper.pdfUrl && (
                  <a
                    href={paper.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-900 font-medium underline underline-offset-4"
                  >
                    View PDF
                  </a>
                )}
                {paper.externalUrl && (
                  <a
                    href={paper.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-900 font-medium underline underline-offset-4"
                  >
                    View Paper
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/*
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
        */}

      </div>
    </main>

  <footer className="border-t border-zinc-200 bg-zinc-50 py-6 px-8">
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-zinc-500 font-medium tracking-wide uppercase">Contact</p>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <a
          href="mailto:aidan.james.roche@gmail.com"
          className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-lg text-zinc-700 hover:border-zinc-400 hover:text-zinc-900 transition-colors text-sm font-medium bg-white"
        >
          <Mail size={15} />
          Email
        </a>
        <a
          href="https://linkedin.com/in/aidan-roche-1x"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-lg text-zinc-700 hover:border-zinc-400 hover:text-zinc-900 transition-colors text-sm font-medium bg-white"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn
        </a>
        <a
          href="https://github.com/aidanr56"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-lg text-zinc-700 hover:border-zinc-400 hover:text-zinc-900 transition-colors text-sm font-medium bg-white"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          GitHub
        </a>
        <a
          href="/Aidan Roche Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 rounded-lg text-white hover:bg-zinc-700 transition-colors text-sm font-medium"
        >
          <Download size={15} />
          Download CV
        </a>
      </div>

      <p className="text-sm text-zinc-500">
        <a
          href="mailto:aidan.james.roche@gmail.com"
          className="select-all underline underline-offset-4 decoration-zinc-300 hover:text-zinc-900 transition-colors"
        >
          aidan.james.roche@gmail.com
        </a>
      </p>
    </div>
  </footer>
  </div>

  </div>
  );
}