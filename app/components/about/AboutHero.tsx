import { heroImages } from "../../lib/about";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.labelColumn}>
          <p className={styles.label}>Our mission</p>
        </div>
        <div className={styles.headingColumn}>
          <h2 className={styles.heading}>
            To help everyone{" "}
            <br />
            find their place in the world.
          </h2>
        </div>
      </div>
      <div className={styles.imageRow}>
        {heroImages.map((img, i) => (
          <div
            key={i}
            className={styles.imageWrapper}
            style={{
              width: img.width,
              aspectRatio: img.aspectRatio,
            }}
          >
            <img
              src={img.src}
              alt=""
              className={styles.image}
              loading={i < 2 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
