import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-200 bg-white">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-zinc-900 font-semibold tracking-tight">
          Home
        </Link>
        <div className="flex gap-6">
          <Link href="/projects" className="text-zinc-600 hover:text-zinc-900 transition-colors">
            Projects
          </Link>
          <Link href="/papers" className="text-zinc-600 hover:text-zinc-900 transition-colors">
            Papers
          </Link>
          <Link href="/about" className="text-zinc-600 hover:text-zinc-900 transition-colors">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}