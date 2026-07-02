import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.logo}>Core<span>Lab</span></div>
          <p className={styles.desc}>CoreLab is a coach-led warehouse gym in Jiyeh, Lebanon. Open training floor, custom programs, real results.</p>
        </div>
        <div className={styles.col}>
          <h4>Product</h4>
          <Link href="/the-band">The Band</Link>
          <Link href="/#how">How It Works</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
        <div className={styles.col}>
          <h4>Join</h4>
          <Link href="/contact">Apply Now</Link>
          <Link href="/pricing">Plans</Link>
          <a href="https://wa.me/961XXXXXXXX" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
        </div>
        <div className={styles.col}>
          <h4>Visit</h4>
          <span className={styles.addr}>Jiyeh, Mount Lebanon</span>
          <span className={styles.addr}>Coastal road — glass-front warehouse</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} CoreLab. All rights reserved.</span>
        <span>Made in Lebanon 🇱🇧</span>
      </div>
    </footer>
  )
}
