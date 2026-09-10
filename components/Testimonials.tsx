"use client";

import { useState } from "react";
import styles from "./Testimonials.module.css";
import Image from "next/image";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Name Surname",
    position: "Position, Company name",
  },
  {
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Name Surname",
    position: "Position, Company name",
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    author: "Name Surname",
    position: "Position, Company name",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Testimonials</h2>

        <div className={styles.carousel}>
          <div className={styles.carouselContent}>
            <div className={styles.avatar}>
              <Image
                src="/images/avatar-placeholder.svg"
                alt={current.author}
                width={80}
                height={80}
              />
            </div>

            <blockquote className={styles.quote}>{current.text}</blockquote>

            <div className={styles.attribution}>
              <p className={styles.author}>{current.author}</p>
              <p className={styles.position}>{current.position}</p>
            </div>
          </div>

          <div className={styles.controls}>
            <button
              className={styles.arrowBtn}
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <img src="/images/arrow-left.svg" alt="" />
            </button>

            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${
                    index === currentIndex ? styles.active : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              className={styles.arrowBtn}
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <img src="/images/arrow-right.svg" alt="" />
            </button>
          </div>
        </div>

        <p className={styles.warning}>
          ⚠️ Placeholder content: Testimonials are Lorem ipsum. Real testimonials
          needed before launch.
        </p>
      </div>
    </section>
  );
}
