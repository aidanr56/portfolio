import Link from "next/link";
import { Mail, Download } from "lucide-react";

const skillGroups = [
  { label: "Languages", skills: ["Python", "JavaScript", "TypeScript"] },
  { label: "Frameworks", skills: ["PyTorch", "TensorFlow", "Git"] },
  { label: "Domains", skills: ["Machine Translation", "Natural Language Processing", "AI Ethics", "Human Factors"] },
];

const experience = [
  {
    title: "Service & Repair Technician",
    org: "Micro Center",
    dates: "Nov 2025 — Present",
    bullets: [
      "Perform advanced system analytics and hardware diagnostics to determine failure points and solutions for a variety of systems.",
      "Own the full diagnostic-to-resolution lifecycle, identifying root causes and implementing effective solutions within tight turnaround windows.",
    ],
  },
  {
    title: "AI/ML Technology Intern",
    org: "Johnson Controls",
    dates: "Oct 2024 — May 2025",
    bullets: [
      "Developed and began deployment for a novel AI system that leveraged advanced NLP vectorization techniques to measure the quality of MT systems and synthesize high-quality data to support MT Engines for low-resource languages.",
      "Led a cross-functional team to build and evaluate the business impact of the system in an internal competition, resulting in top 10% placement of ~1,000 teams.",
    ],
  },
  {
    title: "Lecturer Assistant — Python",
    org: "University College Cork",
    dates: "Feb 2022 — Apr 2024",
    bullets: [
      "Supported undergraduate Computer Science labs, guiding students in Python-based algorithm design and debugging.",
    ],
  },
  {
    title: "Human Factors Engineer Co-Op",
    org: "Veranex, Inc",
    dates: "Summer 2022",
    bullets: [
      "Conducted usability studies for medical device clients, analyzing user interactions to derive actionable insights.",
      "Collaborated directly with the engineering and design team to implement findings into revised designs.",
    ],
  },
];

export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      {/* Hero */}
      <div className="flex items-center gap-6 mb-8">
        <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
          <span className="text-white font-semibold text-lg tracking-tight">AR</span>
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Aidan Roche</h1>
          <p className="text-zinc-500 mt-1">Psychology & Computer Science · AI/ML · Human Factors</p>
        </div>
      </div>

      {/* Bio */}
      <section className="mb-12">
        <p className="text-zinc-600 leading-relaxed">
          I am a young professional with a unique multi-disciplinary background in AI/ML, Computer Engineering, and Human Factors. I am looking to take the next step in my career, excited by the challenge of developing and implementing technology with genuine impact. I have experience in Machine Translation, Human Factors, and AI implementation, and excel at bridging the gap between people and technology.
        </p>
      </section>

      <hr className="border-zinc-100 mb-12" />

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-lg font-medium text-zinc-900 mb-6">Skills & Tools</h2>
        <div className="flex flex-col gap-4">
          {skillGroups.map(({ label, skills }) => (
            <div key={label} className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-zinc-400 uppercase tracking-wide w-24 shrink-0">{label}</span>
              {skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-zinc-100 text-zinc-700 text-sm rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <hr className="border-zinc-100 mb-12" />

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-lg font-medium text-zinc-900 mb-8">Education</h2>
        <div className="flex items-center gap-8">
          <img
            src="/ucc_crest.jpg"
            alt="University College Cork crest"
            className="w-16 h-16 object-contain shrink-0"
          />
          <div className="flex-1 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-zinc-900 font-medium">BA (Hons) Psychology & Computer Science</h3>
              <p className="text-sm text-zinc-500 mt-1">University College Cork</p>
            </div>
            <span className="text-sm text-zinc-400 shrink-0">2021 — 2024</span>
          </div>
        </div>
      </section>

      <hr className="border-zinc-100 mb-12" />

      {/* Work Experience — timeline */}
      <section className="mb-12">
        <h2 className="text-lg font-medium text-zinc-900 mb-8">Work Experience</h2>
        <div className="relative">
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-zinc-200" />
          <div className="flex flex-col gap-10">
            {experience.map((job) => (
              <div key={job.title} className="flex gap-6">
                <div className="relative z-10 mt-1.5 w-[11px] h-[11px] rounded-full border-2 border-zinc-400 bg-white shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="text-zinc-900 font-medium">{job.title}</h3>
                    <span className="text-sm text-zinc-400 shrink-0">{job.dates}</span>
                  </div>
                  <p className="text-sm text-zinc-500 mb-3">{job.org}</p>
                  <ul className="flex flex-col gap-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm text-zinc-600 leading-relaxed">
                        <span className="w-4 h-px bg-zinc-300 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-zinc-100 mb-12" />

      {/* Contact */}
      <section>
        <h2 className="text-lg font-medium text-zinc-900 mb-6">Contact</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="mailto:aidan.james.roche@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-lg text-zinc-700 hover:border-zinc-400 hover:text-zinc-900 transition-colors text-sm font-medium"
          >
            <Mail size={15} />
            Email
          </a>
          <a
            href="https://linkedin.com/in/aidan-roche-1x"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-lg text-zinc-700 hover:border-zinc-400 hover:text-zinc-900 transition-colors text-sm font-medium"
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
            className="inline-flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-lg text-zinc-700 hover:border-zinc-400 hover:text-zinc-900 transition-colors text-sm font-medium"
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
      </section>

    </main>
  );
}
