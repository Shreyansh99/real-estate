"use client";

import { useState } from "react";
import { testimonials } from "../../lib/about";
import styles from "./TestimonialsSection.module.css";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () =>
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  const handleNext = () =>
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  const current = testimonials[activeIndex];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.quoteArea}>
          <p className={styles.quote}>{current.quote}</p>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.avatarRow}>
            {testimonials.map((t, i) => (
              <button
                key={i}
                className={`${styles.avatarButton} ${
                  i === activeIndex ? styles.avatarActive : ""
                }`}
                onClick={() => setActiveIndex(i)}
                aria-label={`View testimonial from ${t.authorName}`}
              >
                <img
                  src={t.authorImage}
                  alt={t.authorName}
                  className={styles.avatarImage}
                />
              </button>
            ))}
          </div>

          <div className={styles.authorInfo}>
            <h5 className={styles.authorName}>{current.authorName}</h5>
            <p className={styles.authorRole}>{current.authorRole}</p>
          </div>

          <div className={styles.navArrows}>
            <button
              className={styles.arrowButton}
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M10.59 0L12 1.41L7.42 6L12 10.59L10.59 12L4.59 6Z"
                  fill="currentColor"
                  transform="translate(3.705 6)"
                />
              </svg>
            </button>
            <button
              className={styles.arrowButton}
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6Z"
                  fill="currentColor"
                  transform="translate(8.295 6)"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
