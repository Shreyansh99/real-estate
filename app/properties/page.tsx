"use client";

import { useState, useMemo } from "react";
import PropertyFilters, { type Filters } from "../components/PropertyFilters";
import PropertyGrid from "../components/PropertyGrid";
import {
  properties as allProperties,
  propertyTypes,
  propertyStatuses,
  priceRanges,
  bedroomOptions,
  bathroomOptions,
} from "../lib/properties";
import styles from "./properties.module.css";

function filterProperties(
  properties: typeof allProperties,
  filters: Filters
) {
  return properties.filter((p) => {
    // Search filter
    if (filters.search) {
      const search = filters.search.toLowerCase();
      const matchesSearch =
        p.name.toLowerCase().includes(search) ||
        p.address.toLowerCase().includes(search) ||
        p.slug.toLowerCase().includes(search);
      if (!matchesSearch) return false;
    }

    // Type filter
    if (filters.type !== "All") {
      if (p.type !== filters.type.toLowerCase()) return false;
    }

    // Status filter
    if (filters.status !== "All") {
      const statusMap: Record<string, string> = {
        "For Sale": "for sale",
        "For Lease": "for lease",
        Sold: "sold",
      };
      if (p.status !== statusMap[filters.status]) return false;
    }

    // Price filter
    if (filters.price !== "Any") {
      const price = p.price;
      switch (filters.price) {
        case "Under $500K":
          if (price >= 500000) return false;
          break;
        case "$500K - $1M":
          if (price < 500000 || price >= 1000000) return false;
          break;
        case "$1M - $5M":
          if (price < 1000000 || price >= 5000000) return false;
          break;
        case "$5M - $10M":
          if (price < 5000000 || price >= 10000000) return false;
          break;
        case "Over $10M":
          if (price < 10000000) return false;
          break;
      }
    }

    // Bedrooms filter
    if (filters.bedrooms !== "Any") {
      const val = filters.bedrooms;
      if (val === "6+") {
        if (p.bedrooms < 6) return false;
      } else {
        if (p.bedrooms !== parseInt(val)) return false;
      }
    }

    // Bathrooms filter
    if (filters.bathrooms !== "Any") {
      const val = filters.bathrooms;
      if (val === "5+") {
        if (p.bathrooms < 5) return false;
      } else {
        if (p.bathrooms !== parseInt(val)) return false;
      }
    }

    return true;
  });
}

export default function PropertiesPage() {
  const [filters, setFilters] = useState<Filters>({
    search: "",
    type: "All",
    status: "All",
    price: "Any",
    bedrooms: "Any",
    bathrooms: "Any",
  });

  const filteredProperties = useMemo(
    () => filterProperties(allProperties, filters),
    [filters]
  );

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Header */}
        <div className={styles.headerSection}>
          <div className={styles.headerContainer}>
            <h2 className={styles.title}>Properties Listings</h2>
            <div className={styles.filtersRow}>
              <PropertyFilters
                filters={filters}
                onFiltersChange={setFilters}
                typeOptions={propertyTypes}
                statusOptions={propertyStatuses}
                priceOptions={priceRanges}
                bedroomOptions={bedroomOptions}
                bathroomOptions={bathroomOptions}
              />
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className={styles.propertySection}>
          <div className={styles.propertyContainer}>
            <PropertyGrid properties={filteredProperties} />
          </div>
        </div>
      </main>
    </div>
  );
}
