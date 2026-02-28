import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import OfficesSection from "../components/contact/OfficesSection";
import ContactFAQ from "../components/contact/ContactFAQ";
import {
  contactInfo,
  contactDescription,
  contactImage,
  offices,
  faqs,
} from "../lib/contactData";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ContactHero
          contactInfo={contactInfo}
          description={contactDescription}
          image={contactImage}
        >
          <ContactForm />
        </ContactHero>
        <OfficesSection offices={offices} />
        <ContactFAQ faqs={faqs} />
      </main>
    </div>
  );
}
