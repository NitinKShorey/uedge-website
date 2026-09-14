import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/images/logo-icon.avif" alt="Uedge" />
        </div>

        <div className={styles.copyright}>
          <p>© uedge AI transformation partner 2025</p>
        </div>

        <div className={styles.social}>
          <a
            href="https://www.linkedin.com/company/uedge-ai"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <span>in</span>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Instagram"
          >
            <span>📷</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
