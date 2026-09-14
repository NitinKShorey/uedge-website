"use client";

import { useState } from "react";
import styles from "./ContactModal.module.css";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Thank you! Your submission has been received!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5000);
      } else {
        setStatus("error");
        setMessage("Oops! Something went wrong while submitting the form.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Oops! Something went wrong while submitting the form.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close">
          ✕
        </button>

        <h2 className={styles.heading}>Get in Touch</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                disabled={status === "loading"}
              />
            </div>

            <div className={styles.field}>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                disabled={status === "loading"}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status === "loading"}
              />
            </div>

            <div className={styles.field}>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your Phone number"
                value={formData.phone}
                onChange={handleChange}
                disabled={status === "loading"}
              />
            </div>
          </div>

          <div className={styles.field}>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              disabled={status === "loading"}
            />
          </div>

          {status === "success" && (
            <div className={`${styles.message} ${styles.success}`}>
              {message}
            </div>
          )}

          {status === "error" && (
            <div className={`${styles.message} ${styles.error}`}>
              {message}
            </div>
          )}

          <button
            type="submit"
            className={styles.submit}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </div>
  );
}
