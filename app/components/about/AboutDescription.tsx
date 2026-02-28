import { aboutDescription, stats } from "../../lib/about";
import styles from "./AboutDescription.module.css";

export default function AboutDescription() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.labelColumn}>
            <p className={styles.label}>{aboutDescription.label}</p>
          </div>
          <div className={styles.contentColumn}>
            <h4 className={styles.heading}>{aboutDescription.heading}</h4>
            <div className={styles.body}>
              {aboutDescription.paragraphs.map((p, i) => (
                <p key={i} className={styles.paragraph}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.statsRow}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statCard}>
              <div className={styles.statValue}>
                <span className={styles.statNumber}>{stat.value}</span>
                <span className={styles.statSuffix}>{stat.suffix}</span>
              </div>
              <p className={styles.statLabel}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
