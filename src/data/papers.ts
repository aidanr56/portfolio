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
    abstract: "My senior thesis explored the use of Gamification as a pedagogy for AI ethics education, by developing a digital education game that combined Gamification and Conversational Learning. The study found the game was effective in keeping students engaged and fostering critical thinking, with a statistically significant impact on AI literacy scores.",
    authors: ["Aidan Roche"],
    year: 2024,
    pdfUrl: "/papers/Senior Thesis.pdf",
  },
  {
    slug: "Essay for Behavioral Psychology",
    title: "The Potential Role of Contemporary Trait Theory in Understanding Human Behavior",
    abstract: "This paper reviews contemporary trait-based approaches to personality psychology, examining how models such as the Five Factor Model and more recent frameworks like Cognitive-Adaptive Trait Theory can be used to understand and predict human behavior. The paper explores emerging research in this area to better explain the underlying mechanisms connecting personality traits to observed behavior.",
    authors: ["Aidan Roche"],
    year: 2023,
    pdfUrl: "/papers/Trait Theory in Human Behavior.pdf",
  },
];