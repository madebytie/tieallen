"use client";

import { useState } from "react";
import styles from "./faq.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services does Tie Allen offer?",
    answer:
      "I offer end-to-end product execution - strategy, brand identity, UI/UX design, full-stack development, and launch support. Whether you need a complete build or a focused sprint, I handle the entire pipeline.",
  },
  {
    question: "How does the design and development process work?",
    answer:
      "Every engagement starts with a discovery call to understand your goals. From there I move through strategy, design, development, and launch in focused phases - keeping you in the loop at every milestone.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope. A focused landing page or brand sprint can be done in 1–2 weeks. Full product builds typically run 4–8 weeks. Retainer clients get continuous, priority execution.",
  },
  {
    question: "Do you work with startups or established companies?",
    answer:
      "Both. I specialize in working with startups and growing companies that have a clear vision and healthy budget. If you are serious about building something exceptional, I am the right fit.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "I offer project-based pricing and monthly retainers. Retainers start at $5,000/month for ongoing design and development. Project pricing is scoped based on complexity and deliverables.",
  },
  {
    question: "How do I get started?",
    answer:
      "Head over to the Get Started page and submit a brief about your project. I will review it and schedule a discovery call if it is a good fit.",
  },
];

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.faqInner}>
        {/* Header */}
        <div className={styles.faqHeader}>
          <h2 className={styles.faqTitle}>
            <span className={styles.faqTitleBold}>Frequently</span>
            <span className={styles.faqTitleBoldWithLine}>
              asked <span className={styles.faqTitleLine} />
            </span>
            <span className={styles.faqTitleAccent}>questions</span>
          </h2>
          <p className={styles.faqSubtitle}>
            Find answers about my services, process, pricing, and everything
            else you might need to know.
          </p>
        </div>

        {/* Content Grid: Socials Left + Accordion Right */}
        <div className={styles.faqContent}>
          <div className={styles.faqSocials}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.faqSocialLink}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.faqSocialLink}
              aria-label="X"
            >
              <XIcon />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.faqSocialLink}
              aria-label="YouTube"
            >
              <YouTubeIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.faqSocialLink}
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>

          {/* Accordion */}
          <div className={styles.accordion}>
            {faqData.map((item, index) => (
              <div key={index} className={styles.accordionItem}>
                <button
                  className={styles.accordionTrigger}
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{item.question}</span>
                  <span
                    className={`${styles.accordionIcon} ${
                      openIndex === index ? styles.accordionIconOpen : ""
                    }`}
                  >
                    <PlusIcon />
                  </span>
                </button>
                <div
                  className={`${styles.accordionPanel} ${
                    openIndex === index ? styles.accordionPanelOpen : ""
                  }`}
                >
                  <p className={styles.accordionAnswer}>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
