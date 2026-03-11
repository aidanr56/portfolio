export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">

      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-12">
        About
      </h1>

      <section className="mb-12">
        <h2 className="text-lg font-medium text-zinc-900 mb-4">Bio</h2>
        <p className="text-zinc-600 leading-relaxed">
          Placeholder bio. Describe your background, what you work on, and what drives you professionally. A few sentences about your journey into machine learning and software development.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-medium text-zinc-900 mb-4">Skills & Tools</h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "PyTorch", "TensorFlow", "React", "Next.js", "FastAPI", "SQL", "Git"].map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-medium text-zinc-900 mb-6">Work Experience</h2>
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-start justify-between gap-4 mb-1">
              <h3 className="text-zinc-900 font-medium">Job Title</h3>
              <span className="text-sm text-zinc-500 shrink-0">2023 — Present</span>
            </div>
            <p className="text-sm text-zinc-500 mb-2">Company Name</p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Placeholder description of your role and responsibilities. What did you work on and what did you achieve?
            </p>
          </div>
          <div>
            <div className="flex items-start justify-between gap-4 mb-1">
              <h3 className="text-zinc-900 font-medium">Job Title</h3>
              <span className="text-sm text-zinc-500 shrink-0">2021 — 2023</span>
            </div>
            <p className="text-sm text-zinc-500 mb-2">Company Name</p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Placeholder description of your role and responsibilities. What did you work on and what did you achieve?
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-medium text-zinc-900 mb-6">Education</h2>
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-start justify-between gap-4 mb-1">
              <h3 className="text-zinc-900 font-medium">Degree Title</h3>
              <span className="text-sm text-zinc-500 shrink-0">2017 — 2021</span>
            </div>
            <p className="text-sm text-zinc-500">University Name</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-medium text-zinc-900 mb-4">Contact</h2>
        <div className="flex flex-col gap-2">
          <a
            href="mailto:aidan.james.roche@gmail.com"
            className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            aidan.james.roche@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/aidan-roche-1x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/aidanr56"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>

    </main>
  );
}