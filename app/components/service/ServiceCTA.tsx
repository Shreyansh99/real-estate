"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./ServiceCTA.module.css";

export default function ServiceCTA() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLSpanElement>("span[data-word]");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          words.forEach((word, i) => {
            setTimeout(() => {
              word.style.opacity = "1";
              word.style.transform = "translateY(0)";
            }, i * 60);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const headingWords = [
    "Thinking",
    "of",
    "buying",
    "or",
    "selling",
    "a",
    "property?",
  ];

  return (
    <section className={styles.ctaSection}>
      <img
        src="https://framerusercontent.com/images/P9TQ2rfpcwvIkCoxUBrG4mwAaeA.jpg?scale-down-to=1024&width=3000&height=2000"
        alt="a white house with a tree in front of it"
        className={styles.bgImage}
        loading="lazy"
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h2 ref={headingRef} className={styles.heading}>
          {headingWords.map((word, i) => (
            <span
              key={i}
              data-word
              style={{
                display: "inline-block",
                opacity: 0,
                transform: "translateY(10px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              {word}
              {i < headingWords.length - 1 ? "\u00A0" : ""}
            </span>
          ))}
        </h2>
        <Link href="/contact" className={styles.ctaButton}>
          Get in touch
          <span className={styles.arrow} />
        </Link>
      </div>
    </section>
  );
}
