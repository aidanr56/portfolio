export type Paper = {
  slug: string;
  title: string;
  abstract: string;
  authors: string[];
  journal?: string;
  year: number;
  pdfUrl?: string;
  externalUrl?: string;
};

export const papers: Paper[] = [
  {
    slug: "Senior Thesis",
    title: "An Exploration Into the Potential Use of Gamification and Conversational Learning in AI Ethics Education",
    abstract: "A short summary of the paper's contribution and findings. This should be a few sentences describing the problem addressed, the approach taken, and the key results.",
    authors: ["Aidan Roche"],
    year: 2024,
    pdfUrl: "/papers/Senior Thesis.pdf",
  },
  {
    slug: "Essay for Behavioral Psychology",
    title: "The Potential Role of Contemporary Trait Theory in Understanding Human Behavior",
    abstract: "A short summary of the paper's contribution and findings. This should be a few sentences describing the problem addressed, the approach taken, and the key results.",
    authors: ["Aidan Roche"],
    year: 2023,
    pdfUrl: "/papers/Trait Theory in Human Behavior.pdf",
  },
];