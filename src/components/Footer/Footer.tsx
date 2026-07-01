import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.logo}>Coach<span>Core</span></div>
          <p className={styles.desc}>Lebanon&apos;s premier fitness coaching ecosystem. Smart band + intelligent app + elite coaching, all in one place.</p>
        </div>
        <div className={styles.col}>
          <h4>Product</h4>
          <Link href="/the-band">The Band</Link>
          <Link href="/#how">How It Works</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
        <div className={styles.col}>
          <h4>Company</h4>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Blog</Link>
        </div>
        <div className={styles.col}>
          <h4>Legal</h4>
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} CoachCore. All rights reserved.</span>
        <span>Made in Lebanon 🇱🇧</span>
      </div>
    </footer>
  )
}
