import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.root}>
      <div className={`${styles.inner} ${styles.muted}`}>
        <p>© {new Date().getFullYear()} Normi. All rights reserved.</p>
        <div className={styles.links}>
          <a href="#" className={`${styles.link} ${styles.muted}`}>Terms</a>
          <a href="#" className={`${styles.link} ${styles.muted}`}>Privacy</a>
          <a href="#" className={`${styles.link} ${styles.muted}`}>Contact</a>
        </div>
      </div>
    </footer>
  );
}
