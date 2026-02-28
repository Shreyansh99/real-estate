"use client";

import { useEffect, useRef } from "react";
import { Office } from "../../lib/contactData";
import OfficeCard from "./OfficeCard";
import styles from "./OfficesSection.module.css";

interface OfficesSectionProps {
  offices: Office[];
}

export default function OfficesSection({ offices }: OfficesSectionProps) {
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

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 ref={titleRef} className={styles.title}>
            <span
              style={{
                display: "inline-block",
                opacity: 0,
                transform: "translateY(10px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              Our offices
            </span>
          </h2>
        </div>
        <div className={styles.grid}>
          {offices.map((office) => (
            <OfficeCard key={office.id} office={office} />
          ))}
        </div>
      </div>
    </section>
  );
}
