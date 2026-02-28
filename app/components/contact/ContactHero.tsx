"use client";

import { useEffect, useRef, ReactNode } from "react";
import { ContactInfo } from "../../lib/contactData";
import styles from "./ContactHero.module.css";

interface ContactHeroProps {
  contactInfo: ContactInfo;
  description: string;
  image: string;
  children?: ReactNode;
}

export default function ContactHero({
  contactInfo,
  description,
  image,
  children,
}: ContactHeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const words = el.querySelectorAll("span");
          words.forEach((word, i) => {
            setTimeout(() => {
              word.style.opacity = "1";
              word.style.transform = "translateY(0)";
            }, i * 100);
          });
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
        <div className={styles.headerArea}>
          <h1 ref={titleRef} className={styles.title}>
            <span
              style={{
                display: "inline-block",
                opacity: 0,
                transform: "translateY(10px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            >
              Contact
            </span>{" "}
            <span
              style={{
                display: "inline-block",
                opacity: 0,
                transform: "translateY(10px)",
                transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
              }}
            >
              us
            </span>
          </h1>

          <div className={styles.contentGrid}>
            {/* Contact Information Row */}
            <div className={styles.infoRow}>
              <div className={styles.infoLabel}>
                <p className={styles.infoLabelText}>Contact Information</p>
              </div>
              <div className={styles.infoDetails}>
                <div className={styles.infoDetailRow}>
                  <p className={styles.infoDetailLabel}>Email:</p>
                  <p className={styles.infoDetailValue}>{contactInfo.email}</p>
                </div>
                <div className={styles.infoDetailRow}>
                  <p className={styles.infoDetailLabel}>Phone No:</p>
                  <p className={styles.infoDetailValue}>{contactInfo.phone}</p>
                </div>
              </div>
            </div>

            {/* Description + Image Row */}
            <div className={styles.descriptionRow}>
              <div className={styles.descriptionCol}>
                <p className={styles.descriptionText}>{description}</p>
              </div>
              <div className={styles.imageCol}>
                <img
                  src={image}
                  alt="Contact"
                  className={styles.heroImage}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
