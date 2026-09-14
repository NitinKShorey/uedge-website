"use client";

import { useState } from "react";
import styles from "./Hero.module.css";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.logoBlock}>
              <div className={styles.logo}>
                <img src="/images/logo-icon.avif" alt="Uedge" />
                <span className={styles.logoText}>
                  <span className={styles.logoU}>U</span>EDGE
                </span>
              </div>
              <p className={styles.tagline}>AI transformation partner</p>
            </div>
            <button
              className={styles.navButton}
              onClick={() => setIsModalOpen(true)}
            >
              GET IN TOUCH
            </button>
          </div>

          <div className={styles.content}>
            <h1 className={styles.headline}>
              Propel growth using fast, smart, and scalable solutions to
              simplify, automate, and thrive—alongside your{" "}
              <span className={styles.accent}>AI Transformation</span> partner
            </h1>

            <div className={styles.body}>
              <p>
                Imagine your business operating effortlessly, your team freed
                from endless cycles of repetitive tasks, empowered instead to
                innovate and drive meaningful growth. At our AI agency, we
                specialize in turning this vision into reality. Our advanced
                automation solutions take on mundane processes, dramatically
                cutting costs, reducing bottlenecks, and enabling you to scale
                efficiently and profitably.
              </p>
              <p>
                Automation isn't just technology—it's a story of reclaimed time,
                increased profits, and empowered employees. By partnering with
                us, you transform routine processes into powerful opportunities
                for growth.
              </p>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img src="/images/hero-rocket.webp" alt="Hand holding rocket" />
          </div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
