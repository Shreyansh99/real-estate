"use client";

import { useEffect, useRef } from "react";
import styles from "./ServiceHero.module.css";

export default function ServiceHero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <h1
          ref={titleRef}
          className={styles.title}
          style={{
            opacity: 0,
            transform: "translateY(10px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          Services
        </h1>
        <div className={styles.grid}>
          <div className={styles.spacer} />
          <h4 className={styles.subtitle}>
            To build sustainably, we must design holistically, guided by our
            integrated approach.
          </h4>
        </div>
      </div>
    </section>
  );
}
