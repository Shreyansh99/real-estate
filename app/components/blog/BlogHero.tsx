"use client";

import { useEffect, useRef } from "react";
import styles from "./BlogHero.module.css";

interface BlogHeroProps {
  subtitle: string;
}

export default function BlogHero({ subtitle }: BlogHeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const chars = el.querySelectorAll<HTMLSpanElement>("span");
          chars.forEach((ch, i) => {
            setTimeout(() => {
              ch.style.opacity = "1";
              ch.style.transform = "translateY(0)";
            }, i * 40);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const titleText = "Blogs";

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <div className={styles.titleCol}>
            <h1 ref={titleRef} className={styles.title}>
              {titleText.split("").map((char, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-block",
                    opacity: 0,
                    transform: "translateY(100%)",
                    transition:
                      "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {char}
                </span>
              ))}
            </h1>
          </div>
          <div className={styles.subtitleCol}>
            <h4 className={styles.subtitle}>{subtitle}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
