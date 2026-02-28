import { Service } from "../../lib/services";
import styles from "./ServiceAccordionItem.module.css";

interface ServiceAccordionItemProps {
  service: Service;
  isOpen: boolean;
  onToggle: () => void;
}

export default function ServiceAccordionItem({
  service,
  isOpen,
  onToggle,
}: ServiceAccordionItemProps) {
  return (
    <div className={styles.item} id={`service-${service.id}`}>
      {/* Header */}
      <div className={styles.header} onClick={onToggle}>
        <p className={styles.number}>{service.number}</p>
        <div className={styles.titleRow}>
          <h5 className={styles.title}>{service.title}</h5>
          <button
            className={styles.toggleBtn}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse" : "Expand"}
          >
            <span
              className={`${styles.toggleIcon} ${
                isOpen ? styles.toggleIconOpen : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Body */}
      <div
        className={`${styles.body} ${
          isOpen ? styles.bodyExpanded : styles.bodyCollapsed
        }`}
      >
        <div className={styles.bodySpacer} />
        <div className={styles.bodyContent}>
          <div className={styles.imageWrapper}>
            <img
              src={service.image}
              alt={service.imageAlt}
              className={styles.image}
              loading="lazy"
            />
          </div>
          <div className={styles.textContent}>
            <p className={styles.description}>{service.description}</p>
            <div className={styles.tags}>
              {service.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
