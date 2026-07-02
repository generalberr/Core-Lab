'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'sending'|'done'|'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('done'); form.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.eyebrow}>Join CoreLab</div>
          <h1 className={styles.h1}>Start your<br /><em>transformation.</em></h1>
          <p className={styles.sub}>Fill in your details and we will reach out within 24 hours to get you started with the right plan.</p>
          <div className={styles.perks}>
            {['Band shipped to you on day one','Coach assigned within 48 hours','App set up with your goals','First session within a week'].map((p,i) => (
              <div key={i} className={styles.perk}><span className={styles.perkCheck}>✓</span>{p}</div>
            ))}
          </div>
        </div>
        <div className={styles.right}>
          {status === 'done' ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✓</div>
              <h2>We got your message!</h2>
              <p>Our team will reach out within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label>First Name</label>
                  <input name="firstName" type="text" placeholder="Ibrahim" required />
                </div>
                <div className={styles.field}>
                  <label>Last Name</label>
                  <input name="lastName" type="text" placeholder="Doe" required />
                </div>
              </div>
              <div className={styles.field}>
                <label>Email</label>
                <input name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className={styles.field}>
                <label>Phone (WhatsApp)</label>
                <input name="phone" type="tel" placeholder="+961 XX XXX XXX" />
              </div>
              <div className={styles.field}>
                <label>Goal</label>
                <select name="goal" required>
                  <option value="">Select your goal</option>
                  <option>Lose Weight</option>
                  <option>Build Muscle</option>
                  <option>Improve Endurance</option>
                  <option>General Fitness</option>
                </select>
              </div>
              <div className={styles.field}>
                <label>Plan</label>
                <select name="plan" required>
                  <option value="">Select a plan</option>
                  <option>Starter — $79/mo</option>
                  <option>Pro — $129/mo</option>
                  <option>Elite — $199/mo</option>
                </select>
              </div>
              <div className={styles.field}>
                <label>Message (optional)</label>
                <textarea name="message" rows={3} placeholder="Tell us anything about your fitness background..." />
              </div>
              <button type="submit" className={styles.btn} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Apply Now →'}
              </button>
              {status === 'error' && <p className={styles.error}>Something went wrong. Please try again.</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
