"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./PropertyFilters.module.css";

export interface Filters {
  search: string;
  type: string;
  status: string;
  price: string;
  bedrooms: string;
  bathrooms: string;
}

interface FilterDropdownProps {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

function FilterDropdown({ label, options, value, onChange, className }: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = value !== options[0];
  const displayLabel = isActive ? value : label;

  return (
    <div ref={ref} style={{ position: "relative" }} className={className}>
      <button
        className={`${styles.filterButton} ${isActive ? styles.active : ""}`}
        onClick={() => setOpen(!open)}
        type="button"
      >
        <span>{displayLabel}</span>
        <span className={`${styles.chevron} ${open ? styles.open : ""}`}>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      {open && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <button
              key={option}
              className={`${styles.dropdownItem} ${value === option ? styles.selected : ""}`}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

interface PropertyFiltersProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
  typeOptions: readonly string[];
  statusOptions: readonly string[];
  priceOptions: readonly string[];
  bedroomOptions: readonly string[];
  bathroomOptions: readonly string[];
}

export default function PropertyFilters({
  filters,
  onFiltersChange,
  typeOptions,
  statusOptions,
  priceOptions,
  bedroomOptions,
  bathroomOptions,
}: PropertyFiltersProps) {
  const updateFilter = (key: keyof Filters, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Name, City, ZIP code..."
            className={styles.searchInput}
            value={filters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
          />
        </div>
        <FilterDropdown
          label="Type"
          options={typeOptions}
          value={filters.type}
          onChange={(v) => updateFilter("type", v)}
        />
        <FilterDropdown
          label="Status"
          options={statusOptions}
          value={filters.status}
          onChange={(v) => updateFilter("status", v)}
        />
        <FilterDropdown
          label="Price"
          options={priceOptions}
          value={filters.price}
          onChange={(v) => updateFilter("price", v)}
        />
        <FilterDropdown
          label="Bedroom"
          options={bedroomOptions}
          value={filters.bedrooms}
          onChange={(v) => updateFilter("bedrooms", v)}
        />
        <FilterDropdown
          label="Bathroom"
          options={bathroomOptions}
          value={filters.bathrooms}
          onChange={(v) => updateFilter("bathrooms", v)}
        />
        <FilterDropdown
          label="All filter"
          options={["All filter"]}
          value="All filter"
          onChange={() => {}}
          className={styles.allFilterButton}
        />
      </div>
    </div>
  );
}
