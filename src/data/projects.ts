export type Project = {
  slug: string;
  title: string;
  description: string;
  reflection?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "senior-dissertation-project",
    title: "Digital Education Game - AI Concepts",
    description: "I developed this Digital Education Game (DEG) during my Senior Dissertation. It is a web-based game designed to teach core AI concepts, such as Ethics and Explainability, through a gamified pedagogy.",
    reflection: "A later reflection on the project — what you learned, what you would do differently, and how it shaped your thinking.",
    tags: ["JavaScript", "AI Ethics", "Gamification", "Conversational Learning"],
    githubUrl: "https://github.com/aidanr56",
    imageUrl: "/images/project-one.jpg",
  },
  {
    slug: "machine-translation-tool",
    title: "Machine Translation Evaluator and Training Tool",
    description: "I created this tool during my time at Johnson Controls. It is a novel, AI-based, approach to evaluating the quality of translations and aids in selecting training data for Machine Translation Engines.",
    reflection: "A later reflection on the project — what you learned, what you would do differently, and how it shaped your thinking.",
    tags: ["TensorFlow", "NLP", "Python", "Machine Translation", "Neural Networks"],
    githubUrl: "https://github.com/aidanr56",
    imageUrl: "/images/project-two.jpg",
  },
  {
    slug: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "I built this portfolio site from scratch to have a living space that reflects both my technical and creative sensibilities. The experience of building it — the design decisions, the tradeoffs, and the iteration — was itself a project worth documenting.",
    reflection: "Designing for yourself is harder than designing for a client. Every choice is a statement about who you are, which makes every choice feel high-stakes. I learned to treat the site as a product: ship something coherent, then iterate. The constraint of a sidebar layout pushed me toward a structure that feels more like a document than a dashboard — and I think that suits the content.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "UI/UX Design"],
    githubUrl: "https://github.com/aidanr56",
  },
];