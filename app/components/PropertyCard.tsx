import Link from "next/link";
import type { Property } from "../lib/properties";
import styles from "./PropertyCard.module.css";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={property.image}
          alt={property.name}
          className={styles.image}
          loading="lazy"
          width={600}
          height={400}
        />
        <div className={styles.badge}>
          {property.status === "for sale"
            ? "For Sale"
            : property.status === "for lease"
            ? "For Lease"
            : "Sold"}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.titleRow}>
          <div className={styles.name}>{property.name}</div>
          <div className={styles.price}>{property.priceLabel}</div>
        </div>
        <div className={styles.details}>
          <p className={styles.address}>{property.address}</p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>{property.bedrooms}</span>
              <span className={styles.statLabel}>Bedroom</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>{property.bathrooms}</span>
              <span className={styles.statLabel}>Bathroom</span>
            </div>
            <div className={styles.divider} />
            <span className={styles.statLabel}>
              {property.sqft.toLocaleString("en-US")} SQFT
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
