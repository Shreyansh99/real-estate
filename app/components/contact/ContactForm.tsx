"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import styles from "./ContactForm.module.css";

const SUBJECT_OPTIONS = [
  { value: "I want buy", label: "I want buy" },
  { value: "I want to sell", label: "I want to sell" },
  { value: "I want to join", label: "I want to join" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Backend integration placeholder
    console.log("Form submitted:", formData);
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <div className={styles.fieldRow}>
        <label className={styles.fieldCol}>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
        <label className={styles.fieldCol}>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className={styles.input}
          />
        </label>
      </div>

      <div className={styles.fieldFull}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.fieldFull}>
        <input
          type="tel"
          name="phone"
          placeholder="Phone no."
          value={formData.phone}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.fieldFull}>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`${styles.select} ${
            formData.subject ? styles.selectFilled : ""
          }`}
        >
          <option value="" disabled>
            Subject
          </option>
          {SUBJECT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.fieldFull}>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className={styles.textarea}
        />
      </div>

      <div className={styles.submitArea}>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
        <p className={styles.privacyText}>
          By clicking send you accept our{" "}
          <Link href="/privacy-policy" className={styles.privacyLink}>
            Privacy Policy
          </Link>
        </p>
      </div>
    </form>
  );
}
