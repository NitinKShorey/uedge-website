import styles from "./AISection.module.css";

export default function AISection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.icon}>
          <img src="/images/rocketship.webp" alt="Rocketship" />
        </div>

        <h2 className={styles.heading}>
          AI Solutions Tailored for Your Success
        </h2>

        <p className={styles.body}>
          We build intelligent systems that understand context, adapt to your
          needs, and deliver measurable results. Whether it's conversational AI
          for customer engagement or smart automation to streamline operations,
          we turn complex challenges into competitive advantages.
        </p>
      </div>
    </section>
  );
}
