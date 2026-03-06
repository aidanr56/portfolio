export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
        Hi, I'm Aidan
      </h1>
      <p className="text-lg text-zinc-600 mb-8">
        I'm a developer and researcher. Here you'll find my projects and published papers.
      </p>
      <div className="flex gap-4">
        <a href="/projects" className="text-zinc-900 font-medium underline underline-offset-4">
          Projects
        </a>
        <a href="/papers" className="text-zinc-900 font-medium underline underline-offset-4">
          Papers
        </a>
        <a href="/about" className="text-zinc-900 font-medium underline underline-offset-4">
          About
        </a>
      </div>
    </main>
  );
}