import ServiceHero from "../components/service/ServiceHero";
import ServiceAccordion from "../components/service/ServiceAccordion";
import ServiceCTA from "../components/service/ServiceCTA";
import { services } from "../lib/services";
import styles from "./service.module.css";

export default function ServicePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ServiceHero />
        <div className={styles.accordionContainer}>
          <ServiceAccordion services={services} />
        </div>
        <ServiceCTA />
      </main>
    </div>
  );
}
