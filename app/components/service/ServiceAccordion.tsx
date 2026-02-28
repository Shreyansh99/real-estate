"use client";

import { useState } from "react";
import { Service } from "../../lib/services";
import ServiceAccordionItem from "./ServiceAccordionItem";
import styles from "./ServiceAccordion.module.css";

interface ServiceAccordionProps {
  services: Service[];
}

export default function ServiceAccordion({ services }: ServiceAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className={styles.accordion}>
      {services.map((service, index) => (
        <ServiceAccordionItem
          key={service.id}
          service={service}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
