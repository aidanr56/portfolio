export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">

      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-12">
        About
      </h1>

      <section className="mb-12">
        <p className="text-zinc-600 leading-relaxed">
          I am a young professional, with a unique multi-disciplinary background in AI/ML, Computer Engineering, and Human Factors. I am looking to take the next step in my career, and am excited by the challenge of developing and implementing technology with a genuine impact. I have experience in Machine Translation, Human Factors, and AI implementation, and excel at bridging the gap between people and technology.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-medium text-zinc-900 mb-4">Skills & Tools</h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "PyTorch", "TensorFlow", "Git", "Machine Translation", "Natural Language Processing"].map((skill) => (
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
        <h2 className="text-lg font-medium text-zinc-900 mb-6">Education</h2>
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-start justify-between gap-4 mb-1">
              <h3 className="text-zinc-900 font-medium">BA (Hons) Psychology & Computer Science</h3>
              <span className="text-sm text-zinc-500 shrink-0">2021 - 2024</span>
            </div>
            <p className="text-sm text-zinc-500">University College Cork</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-lg font-medium text-zinc-900 mb-6">Work Experience</h2>
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-start justify-between gap-4 mb-1">
              <h3 className="text-zinc-900 font-medium">Service & Repair Technician</h3>
              <span className="text-sm text-zinc-500 shrink-0">Nov, 2025 — Present</span>
            </div>
            <p className="text-sm text-zinc-500 mb-2">Micro Center</p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              - Perform advanced system analytics and hardware diagnostics to determine failure points and solutions for a variety of systems
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              - Own the full diagnostic-to-resolution lifecycle, identifying root causes and implementing effective solutions within tight turnaround windows.
            </p>
          </div>
          <div>
            <div className="flex items-start justify-between gap-4 mb-1">
              <h3 className="text-zinc-900 font-medium">AI/ML Technology Intern</h3>
              <span className="text-sm text-zinc-500 shrink-0">Oct, 2024 - May, 2025</span>
            </div>
            <p className="text-sm text-zinc-500 mb-2">Johnson Controls</p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              - Developed and began deployment for my own novel AI system that leveraged advanced NLP vectorization techniques to measure the quality of MT systems and synthesize high-quality data to support MT Engines for low resource languages.
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              - Led a cross-functional team to build and evaluate the business impact of my system in an internal competition, resulting in top 10% placement of ~1,000 teams.
            </p>
          </div>
          <div>
            <div className="flex items-start justify-between gap-4 mb-1">
              <h3 className="text-zinc-900 font-medium">Lecturer Assistant - Python</h3>
              <span className="text-sm text-zinc-500 shrink-0">Feb, 2022 - Apr, 2024</span>
            </div>
            <p className="text-sm text-zinc-500 mb-2">Johnson Controls</p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              - Supported undergraduate Computer Science labs, guiding students in Python-based algorithm design and debugging.
            </p>
          </div>
          <div>
            <div className="flex items-start justify-between gap-4 mb-1">
              <h3 className="text-zinc-900 font-medium">Human Factors Engineer Co-Op</h3>
              <span className="text-sm text-zinc-500 shrink-0">Summer 2022</span>
            </div>
            <p className="text-sm text-zinc-500 mb-2">Veranex, Inc</p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              - Conducted usability studies for medical device clients, analyzing user interactions to derive actionable insights
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              - Collaborated directly with the engineering and design team to implement findings into revised designs
            </p>
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