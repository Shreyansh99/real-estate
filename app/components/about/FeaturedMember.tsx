import Link from "next/link";
import type { TeamMember } from "../../lib/about";
import styles from "./FeaturedMember.module.css";

interface Props {
  member: TeamMember;
}

export default function FeaturedMember({ member }: Props) {
  return (
    <Link href={`/agent/${member.slug}`} className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.header}>
            <div className={styles.nameGroup}>
              <h3 className={styles.name}>{member.name}</h3>
              <h5 className={styles.role}>{member.role}</h5>
            </div>
            <div className={styles.bioSection}>
              {member.bio?.map((paragraph, i) => (
                <p
                  key={i}
                  className={i === 0 ? styles.bioLead : styles.bioParagraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className={styles.learnMore}>
            <span className={styles.learnMoreText}>Learn more</span>
            <svg
              className={styles.learnMoreArrow}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6Z"
                fill="currentColor"
                transform="translate(8.295 6)"
              />
            </svg>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={member.image}
            alt={member.name}
            className={styles.image}
            loading="lazy"
          />
        </div>
      </div>
    </Link>
  );
}
