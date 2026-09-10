import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <img src="/images/logo.webp" alt="Uedge" />
              <span>Uedge</span>
            </Link>
          </div>

          <div className={styles.social}>
            <a
              href="https://www.linkedin.com/company/uedge-ai"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              Instagram
            </a>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© uedge AI transformation partner 2025</p>
          <p className={styles.warning}>
            ⚠️ Instagram link is generic. Update to actual company profile.
          </p>
        </div>
      </div>
    </footer>
  );
}
