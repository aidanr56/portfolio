export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "Senior Dissertation Project",
    title: "Digital Education Game - AI Concepts",
    description: "I developed this Digital Education Game (DEG) during my Senior Dissertation. It is a web-based game designed to teach core AI concepts, such as Ethics and Explainability, through a gamified pedagogy.",
    tags: ["JavaScript", "AI Ethics", "Gamification", "Conversational Learning"],
    githubUrl: "https://github.com/aidanr56",
    imageUrl: "/images/project-one.jpg",
  },
  {
    slug: "Project for Johnson Controls",
    title: "Machine Translation Evaluator and Training Tool",
    description: "I created this tool during my time at Johnson Controls. It is a novel, AI-based, approach to evaluating the quality of translations and aids in selecting training data for Machine Translation Engines.",
    tags: ["TensorFlow", "NLP", "Python", "Machine Translation", "Neural Networks"],
    githubUrl: "https://github.com/aidanr56",
    imageUrl: "/images/project-two.jpg",
  },
];