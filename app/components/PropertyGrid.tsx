import type { Property } from "../lib/properties";
import PropertyCard from "./PropertyCard";
import styles from "./PropertyGrid.module.css";

interface PropertyGridProps {
  properties: Property[];
}

export default function PropertyGrid({ properties }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className={styles.grid}>
        <div className={styles.empty}>
          No properties match your filters. Try adjusting your search criteria.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {properties.map((property) => (
        <PropertyCard key={property.slug} property={property} />
      ))}
    </div>
  );
}
