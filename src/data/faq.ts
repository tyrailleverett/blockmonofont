export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "What makes Block Mono different from other programming fonts?",
    answer:
      "Block Mono stands out with its uniquely tall character design that provides exceptional legibility. The increased vertical height creates clear distinction between characters and improves readability, especially during long coding sessions. This intentional design choice helps reduce eye strain and makes code easier to scan, setting it apart from traditional programming fonts."
  },
  {
    question: "Which IDEs and text editors are supported?",
    answer:
      "Block Mono works with all major IDEs and text editors including VS Code, JetBrains IDEs, Sublime Text, and any other editor that supports custom fonts. It's also compatible with terminal emulators with the included nerd font."
  },
  {
    question: "Can I use Block Mono in commercial projects?",
    answer:
      "Absolutely! You can use Block Mono in any project, whether it's open source, commercial, or personal."
  },
  {
    question: "What font formats are included?",
    answer:
      "Block Mono comes in TTF format, ensuring compatibility with all modern operating systems and development environments."
  }
];
