import styles from "./AISection.module.css";

export default function AISection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          AI Solutions Tailored for Your <span className={styles.accent}>Success</span>
        </h2>

        <p className={styles.body}>
          Our smart bots streamline customer interactions, delivering exceptional experiences while reducing operational overhead. Voice integration solutions elevate your communication capabilities, making interactions smoother and more productive across all channels. Our sophisticated document analyzer simplifies complex data, enabling quicker, smarter business decisions.
        </p>
      </div>
    </section>
  );
}
