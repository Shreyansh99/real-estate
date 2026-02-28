import styles from "./ClientLogos.module.css";

const logoPlaceholders = [
  "Bloomberg", "Financial Times", "Forbes", "Reuters",
  "The Wall Street Journal", "Business Insider", "CNBC", "The Economist",
];

export default function ClientLogos() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.labelColumn}>
            <p className={styles.label}>Our Clients</p>
          </div>
          <div className={styles.headingColumn}>
            <h4 className={styles.heading}>
              Trusted by businesses and homeowners across the country.
            </h4>
          </div>
        </div>
        <div className={styles.logoGrid}>
          {logoPlaceholders.map((name, i) => (
            <div key={i} className={styles.logoItem}>
              <span className={styles.logoText}>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
