"use client";

import styles from "./Hero.module.css";
import { smoothScroll } from "@/lib/utils";

export default function Hero() {
  const handleGetInTouch = () => {
    smoothScroll("contact-form");
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src="/images/logo.webp" alt="Uedge" />
            <span>Uedge</span>
          </div>

          <h1 className={styles.headline}>
            Propel growth using fast, smart, and scalable solutions to simplify,
            automate, and thrive—alongside your AI Transformation partner
          </h1>

          <div className={styles.body}>
            <p>
              Artificial intelligence is transforming how businesses operate.
              But implementation is complex. We provide intelligent automation
              that reduces operational costs, eliminates workflow bottlenecks,
              and empowers your team to focus on what matters most.
            </p>
            <p>
              From custom AI agents to intelligent chatbots and workflow
              automation, we combine cutting-edge technology with deep industry
              expertise to unlock new opportunities for growth and efficiency.
            </p>
          </div>

          <button className={styles.cta} onClick={handleGetInTouch}>
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}
