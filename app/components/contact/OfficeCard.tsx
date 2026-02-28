import { Office } from "../../lib/contactData";
import styles from "./OfficeCard.module.css";

interface OfficeCardProps {
  office: Office;
}

export default function OfficeCard({ office }: OfficeCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={office.image}
          alt={office.city}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <div className={styles.cityRow}>
          <h4 className={styles.city}>{office.city}</h4>
        </div>
        <div className={styles.details}>
          <p className={styles.detailText}>{office.email}</p>
          <p className={styles.detailText}>{office.phone}</p>
          <p className={styles.detailText}>{office.address}</p>
        </div>
        <a href="#" className={styles.directionLink}>
          Get directions
          <span className={styles.directionArrow}>
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}
