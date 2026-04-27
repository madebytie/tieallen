"use client";

import { useState } from "react";
import styles from "./faq.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What services does made by tie offer?",
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

        {/* Content Grid: Accordion */}
        <div className={styles.faqContent}>

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
