"use client";

import Link from "next/link";
import { BlogPost } from "../../lib/blogData";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const readNowText = "Read now";

  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={post.image}
          alt={post.alt || post.title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.info}>
        <p className={styles.date}>{post.date}</p>
        <h5 className={styles.cardTitle}>{post.title}</h5>
      </div>
      <div className={styles.readNowRow}>
        <span className={styles.readNowLink}>
          <span className={styles.rollingText}>
            {readNowText.split("").map((char, i) => (
              <span key={i} className={styles.rollingChar}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
          <span className={styles.readNowArrow}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z"
                fill="currentColor"
                transform="translate(8.295 6)"
              />
            </svg>
          </span>
        </span>
      </div>
    </Link>
  );
}
