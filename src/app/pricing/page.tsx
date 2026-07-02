import Link from 'next/link'
import styles from './page.module.css'

const plans = [
  {
    name: 'Starter', price: '$79', period: 'per month', featured: false,
    features: ['CoreLab H59 Band included','Full app access','Nutrition tracking','Sleep & recovery data','2 coach check-ins / month'],
    cta: 'Get Started', href: '/contact',
  },
  {
    name: 'Pro', price: '$129', period: 'per month', featured: true,
    features: ['CoreLab H59 Band included','Full app access','Custom meal plans','Custom workout programs','Weekly 1-on-1 coach session','Live band data coaching','Priority messaging'],
    cta: 'Join Pro →', href: '/contact',
  },
  {
    name: 'Elite', price: '$199', period: 'per month', featured: false,
    features: ['Everything in Pro','Unlimited gym access','Daily coach contact','In-person sessions (4/mo)','Body composition tracking','Sport-specific programming'],
    cta: 'Go Elite', href: '/contact',
  },
]

const faqs = [
  { q: 'Is the band included in every plan?', a: 'Yes. Every CoreLab plan includes the H59 Max band. You keep it as long as you stay subscribed.' },
  { q: 'Can I switch plans later?', a: 'Absolutely. You can upgrade or downgrade at any time. Changes take effect at the next billing cycle.' },
  { q: 'How does the coach see my data?', a: 'Your band syncs to the CoreLab app via Bluetooth. Your data is then sent to your coach\'s dashboard automatically.' },
  { q: 'Is there a contract?', a: 'No long-term contracts. Month-to-month, cancel anytime.' },
  { q: 'What if my band breaks?', a: 'We replace faulty bands for free within the first 6 months. After that, replacements are available at a discounted price.' },
]

export default function Pricing() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.eyebrow}>Pricing</div>
        <h1 className={styles.h1}>Simple, transparent pricing.<br /><em>Band included.</em></h1>
        <p className={styles.sub}>Every plan comes with the CoreLab H59 Max band. No hidden fees, no surprises.</p>
      </section>

      <section className={styles.plansSection}>
        <div className={styles.inner}>
          <div className={styles.grid}>
            {plans.map((p, i) => (
              <div key={i} className={`${styles.card} ${p.featured ? styles.featured : ''}`}>
                {p.featured && <div className={styles.badge}>Most Popular</div>}
                <div className={styles.planName}>{p.name}</div>
                <div className={styles.price} style={{ color: p.featured ? 'var(--orange)' : 'var(--white)' }}>{p.price}</div>
                <div className={styles.period}>{p.period}</div>
                <ul className={styles.features}>
                  {p.features.map((f, j) => (
                    <li key={j}><span className={styles.check}>✓</span>{f}</li>
                  ))}
                </ul>
                <Link href={p.href} className={p.featured ? styles.btnPrimary : styles.btnGhost}>{p.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.inner}>
          <div className={styles.eyebrow}>FAQ</div>
          <h2 className={styles.sectionH}>Common questions.</h2>
          <div className={styles.faqs}>
            {faqs.map((f, i) => (
              <div key={i} className={styles.faq}>
                <div className={styles.faqQ}>{f.q}</div>
                <div className={styles.faqA}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
