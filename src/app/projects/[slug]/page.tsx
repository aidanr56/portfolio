import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown, { Components } from "react-markdown";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const components: Components = {
  h2: ({ children }) => (
    <h2 className="text-xl font-semibold text-zinc-900 mt-14 mb-4 pb-3 border-b border-zinc-200">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-base font-semibold text-zinc-800 mt-8 mb-3">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-zinc-600 leading-relaxed mb-4">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-zinc-800">{children}</strong>
  ),
  ul: ({ children }) => (
    <ul className="space-y-2 mb-6 ml-4">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="space-y-2 mb-6 ml-4 list-decimal">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-zinc-600 leading-relaxed flex gap-2">
      <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-zinc-400" />
      <span>{children}</span>
    </li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-8 mb-10 ml-2 mr-6 sm:mr-12 pl-5 border-l-2 border-zinc-300 text-zinc-500 italic text-sm [&>p]:text-zinc-500 [&>p:last-child]:mb-0">
      {children}
    </blockquote>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-900 underline underline-offset-4 hover:text-zinc-500 transition-colors"
    >
      {children}
    </a>
  ),
  code: ({ children }) => (
    <code className="px-1.5 py-0.5 bg-zinc-100 text-zinc-700 text-sm rounded font-mono">
      {children}
    </code>
  ),
};

type Skill = {
  name: string;
  blurb?: string;
  summary: string;
};

function SkillsGained({ skills }: { skills: Skill[] }) {
  return (
    <section className="mt-14">
      <h2 className="text-xl font-semibold text-zinc-900 mb-4 pb-3 border-b border-zinc-200">
        Skills Gained
      </h2>

      <div className="grid gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="rounded-lg border border-zinc-200 bg-zinc-50/60 p-5"
          >
            <h3 className="text-base font-semibold text-zinc-800 mb-2">
              {skill.name}
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              {skill.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillsRail({ skills }: { skills: Skill[] }) {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-16 xl:max-w-[15rem] 2xl:max-w-[19rem]">
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-5">
          Skills Gained
        </p>
        <ul className="space-y-6 border-l border-zinc-200 pl-5">
          {skills.map((skill) => (
            <li key={skill.name}>
              <p className="text-base font-semibold leading-snug text-zinc-800">
                {skill.name}
              </p>
              {skill.blurb && (
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                  {skill.blurb}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content/projects", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  const skills = (data.skills as Skill[] | undefined) ?? [];


  const overviewIndex = content.search(/^## Overview/m);
  const beforeOverview = overviewIndex === -1 ? "" : content.slice(0, overviewIndex);
  const fromOverview = overviewIndex === -1 ? content : content.slice(overviewIndex);

  // The empty third grid column mirrors the rail so the article stays centred in
  // the viewport, matching the max-w-3xl column used on every other page.
  return (
    <main className="mx-auto grid max-w-3xl px-15 py-16 xl:max-w-[120rem] xl:grid-cols-[minmax(0,1fr)_minmax(0,48rem)_minmax(0,1fr)] xl:gap-x-12 2xl:gap-x-20">

      {skills.length > 0 && <SkillsRail skills={skills} />}

      <article>

        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">
          {data.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-8">
          {(data.tags as string[]).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-zinc-100 text-zinc-600 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {data.imageUrl ? (
          <div className="relative w-full h-72 rounded-lg overflow-hidden mb-12">
            <Image
              src={data.imageUrl}
              alt={data.title}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-lg h-72 mb-12" />
        )}

        {beforeOverview.trim() && (
          <ReactMarkdown components={components}>{beforeOverview}</ReactMarkdown>
        )}

        {skills.length > 0 && <SkillsGained skills={skills} />}

        <ReactMarkdown components={components}>{fromOverview}</ReactMarkdown>

        <div className="flex gap-4 mt-12">
          {data.githubUrl && (
            <a
              href={data.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-zinc-900 rounded-lg text-white hover:bg-zinc-700 transition-colors text-sm font-medium"
            >
              View on GitHub
            </a>
          )}

          {data.liveUrl && (
            <a
              href={data.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-zinc-200 rounded-lg text-zinc-700 hover:border-zinc-400 transition-colors text-sm font-medium"
            >
              Live Site
            </a>
          )}
        </div>

      </article>

    </main>
  );
}
