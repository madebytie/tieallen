"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";
import styles from "./faq.module.css";

interface FAQItem {
  question: string;
  answer: ReactNode;
}

const faqData: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: (
      <>
        I offer full-service execution across{" "}
        <Link href="/services/branding" className={styles.faqLink}>Branding</Link>,{" "}
        <Link href="/services/web-design" className={styles.faqLink}>UI/UX Design</Link>, 
        and custom <Link href="/services/development" className={styles.faqLink}>Web Development</Link>.{" "}
        Whether it&apos;s a high-converting <Link href="/services/web-design" className={styles.faqLink}>Landing Page</Link>, 
        a complex eCommerce build, or <Link href="/services/crm-automation" className={styles.faqLink}>CRM + Automation</Link>, 
        I handle the entire pipeline. You can see a full breakdown of what I 
        can do for you on my <Link href="/services" className={styles.faqLink}>services page</Link>.
      </>
    ),
  },
  {
    question: "Do you outsource any work?",
    answer:
      "No, I don't outsource any of my core design or development services. I personally execute every pixel and line of code for your project to ensure the highest quality. For specialized assets like professional photography or videography, I typically work with assets provided by you or can recommend partners to help.",
  },
  {
    question: "How much does a website cost?",
    answer: (
      <>
        Every project is unique, so I don&apos;t have set fixed prices. However, my custom project 
        engagements generally start around $10,000 and increase based on complexity and scope. 
        You can find more information about my general investment levels in the{" "}
        <Link href="/pricing" className={styles.faqLink}>pricing section</Link>.
      </>
    ),
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on the scale of the build. A focused landing page or brand sprint can be done in 1–2 weeks, while full product builds typically run 4–8 weeks. I'll give you a precise timeline once I've reviewed your brief.",
  },
  {
    question: "Do you work with startups or established companies?",
    answer:
      "Both. I specialize in working with ambitious startups and growing companies that value high-end design and seamless user experiences. If you're serious about building something exceptional, we'll be a great fit.",
  },
  {
    question: "How do I get started?",
    answer: (
      <>
        Head over to the <Link href="/start" className={styles.faqLink}>project planner</Link>{" "}
        and submit a project brief. I&apos;ll review your details and we can schedule a discovery 
        call to see if we&apos;re a good match for your next project.
      </>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
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
        {/* Two-column layout */}
        <div className={styles.faqGrid}>
          {/* Left: header */}
          <div className={styles.faqLeft}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              FAQ
            </span>
            <h2 className={styles.faqTitle}>
              The answers to
              <br />
              your questions.
            </h2>
          </div>

          {/* Right: accordion items */}
          <div className={styles.faqRight}>
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${
                  openIndex === index ? styles.faqItemOpen : ""
                }`}
              >
                <button
                  className={styles.faqTrigger}
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{item.question}</span>
                  <span
                    className={`${styles.faqIcon} ${
                      openIndex === index ? styles.faqIconOpen : ""
                    }`}
                  >
                    <ArrowIcon />
                  </span>
                </button>
                <div
                  className={`${styles.faqPanel} ${
                    openIndex === index ? styles.faqPanelOpen : ""
                  }`}
                >
                  <div className={styles.faqAnswer}>{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
