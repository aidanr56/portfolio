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
    slug: "paper-one",
    title: "Paper One Title",
    abstract: "A short summary of the paper's contribution and findings. This should be a few sentences describing the problem addressed, the approach taken, and the key results.",
    authors: ["Aidan Roche", "Co-Author Name"],
    journal: "Journal Name",
    year: 2024,
    pdfUrl: "/papers/paper-one.pdf",
  },
  {
    slug: "paper-two",
    title: "Paper Two Title",
    abstract: "A short summary of the paper's contribution and findings. This should be a few sentences describing the problem addressed, the approach taken, and the key results.",
    authors: ["Aidan Roche", "Co-Author Name"],
    journal: "Journal Name",
    year: 2024,
    pdfUrl: "/papers/paper-two.pdf",
  },
];