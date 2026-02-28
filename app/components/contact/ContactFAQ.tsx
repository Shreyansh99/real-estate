"use client";

import { useState, useEffect, useRef } from "react";
import { FAQ } from "../../lib/contactData";
import styles from "./ContactFAQ.module.css";

interface ContactFAQProps {
  faqs: FAQ[];
}

export default function ContactFAQ({ faqs }: ContactFAQProps) {
  const [openId, setOpenId] = useState<string>(faqs[0]?.id ?? "");
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const span = el.querySelector("span");
          if (span) {
            span.style.opacity = "1";
            span.style.transform = "translateY(0)";
          }
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleToggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleCol}>
          <h2 ref={titleRef} className={styles.title}>
            <span
              style={{
                display: "inline-block",
                opacity: 0,
                transform: "translateY(10px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              FAQs
            </span>
          </h2>
        </div>

        <div className={styles.faqCol}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={styles.faqItem}
                onClick={() => handleToggle(faq.id)}
              >
                <div className={styles.faqHeader}>
                  <h5 className={styles.faqQuestion}>{faq.question}</h5>
                  <button
                    className={styles.toggleBtn}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Collapse" : "Expand"}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggle(faq.id);
                    }}
                  >
                    <span
                      className={`${styles.toggleLine} ${styles.toggleLineH}`}
                    />
                    <span
                      className={`${styles.toggleLine} ${styles.toggleLineV} ${
                        isOpen ? styles.toggleLineVOpen : ""
                      }`}
                    />
                  </button>
                </div>
                <div
                  className={`${styles.faqBody} ${
                    isOpen ? styles.faqBodyExpanded : styles.faqBodyCollapsed
                  }`}
                >
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
