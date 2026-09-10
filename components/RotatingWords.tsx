"use client";

import { useEffect, useState } from "react";
import styles from "./RotatingWords.module.css";
import { smoothScroll } from "@/lib/utils";

const WORDS = ["Breakthrough", "Evolution", "Transformation", "Expansion", "Edge"];

export default function RotatingWords() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % WORDS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleLetsTalk = () => {
    smoothScroll("contact-form");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textGroup}>
            <span className={styles.leadIn}>
              Change isn't coming, It's already here. Ready to unlock your next
            </span>
            <div className={styles.rotatingContainer}>
              {WORDS.map((word, index) => (
                <span
                  key={word}
                  className={`${styles.word} ${
                    index === currentIndex ? styles.active : ""
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          <button className={styles.cta} onClick={handleLetsTalk}>
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
}
