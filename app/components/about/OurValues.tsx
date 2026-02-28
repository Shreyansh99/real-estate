import { values, valuesIntro } from "../../lib/about";
import styles from "./OurValues.module.css";

export default function OurValues() {
  return (
    <section className={styles.section}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage:
            'url("https://framerusercontent.com/images/KDIWHrlvnlDhN2vkGqArvSgy2A.png?width=685&height=1033")',
        }}
      />
      <div className={styles.overlay} />
      <div className={styles.container}>
        <h1 className={styles.title}>Our values</h1>

        <div className={styles.introRow}>
          <div className={styles.spacer} />
          <div className={styles.introContent}>
            <h4 className={styles.introText}>{valuesIntro}</h4>
          </div>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value, i) => (
            <div key={i} className={styles.valueItem}>
              <div className={styles.valueRow}>
                {i % 2 === 0 && <div className={styles.valueSpacer} />}
                <div className={styles.valueCard}>
                  <p className={styles.valueNumber}>{value.number}</p>
                  <h4 className={styles.valueTitle}>{value.title}</h4>
                  <p className={styles.valueDescription}>
                    {value.description}
                  </p>
                </div>
                {i % 2 !== 0 && <div className={styles.valueSpacer} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
