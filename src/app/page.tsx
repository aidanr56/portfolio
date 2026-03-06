import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
          Aidan Roche
        </h1>
        <p className="text-xl text-zinc-600 mb-6">
          Machine Learning Engineer
        </p>
        <p className="text-zinc-600 leading-relaxed max-w-xl">
          Welcome to my personal portfolio. Here you'll find my projects, research papers, and more about my work in machine learning and software development.
        </p>
      </div>
    </main>
  );
}