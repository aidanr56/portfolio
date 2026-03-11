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
    slug: "project-one",
    title: "Project One",
    description: "A short description of what this project does and the problem it solves.",
    tags: ["Python", "PyTorch"],
    githubUrl: "https://github.com/aidanr56",
    imageUrl: "/images/project-one.jpg",
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "A short description of what this project does and the problem it solves.",
    tags: ["React", "Next.js"],
    githubUrl: "https://github.com/aidanr56",
    imageUrl: "/images/project-two.jpg",
  },
];