import Link from "next/link";
import type { TeamMember } from "../../lib/about";
import styles from "./TeamMemberCard.module.css";

interface Props {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: Props) {
  return (
    <Link href={`/agent/${member.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={member.image}
          alt={member.name}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.info}>
        <div className={styles.textGroup}>
          <h5 className={styles.name}>{member.name}</h5>
          <p className={styles.role}>{member.role}</p>
        </div>
        <div className={styles.arrow}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6Z"
              fill="currentColor"
              transform="translate(8.295 6)"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
