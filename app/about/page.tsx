import AboutHero from "../components/about/AboutHero";
import AboutDescription from "../components/about/AboutDescription";
import OurValues from "../components/about/OurValues";
import TeamSection from "../components/about/TeamSection";
import TestimonialsSection from "../components/about/TestimonialsSection";
import ClientLogos from "../components/about/ClientLogos";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <AboutHero />
        <AboutDescription />
        <OurValues />
        <TeamSection />
        <TestimonialsSection />
        <ClientLogos />
      </main>
    </div>
  );
}
