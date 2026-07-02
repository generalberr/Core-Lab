'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>Core<span>Lab</span></Link>
      <div className={styles.links}>
        <Link href="/#how">How It Works</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/the-band">The Band</Link>
        <Link href="/contact">Join</Link>
      </div>
      <Link href="/pricing" className={styles.cta}>Start Today</Link>
    </nav>
  )
}
