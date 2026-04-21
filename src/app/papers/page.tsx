import { papers } from "@/data/papers";

export default function Papers() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">
        Written Works
      </h1>
      <p className="text-zinc-600 mb-12">
        Written pieces from University and more
      </p>
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
    </main>
  );
}