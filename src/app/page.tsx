import Link from 'next/link'
import RecoveryRing from '@/components/RecoveryRing/RecoveryRing'
import Marquee from '@/components/Marquee/Marquee'
import styles from './page.module.css'

const metrics = [
  { icon: '↺', val: '78%', name: 'Recovery Score', desc: 'Computed from HRV, resting heart rate, and sleep quality. Tells your coach exactly how hard to push you today.', bar: 78, color: 'var(--green)' },
  { icon: '💜', val: '68ms', name: 'HRV', desc: 'Heart rate variability — the gold standard for measuring nervous system readiness and long-term fitness.', bar: 68, color: 'var(--purple)' },
  { icon: '⚡', val: '14.2', name: 'Strain Score', desc: 'Calculated from heart rate exertion. Shows how hard your body worked and whether you have earned your rest day.', bar: 68, color: 'var(--yellow)' },
  { icon: '😴', val: '84', name: 'Sleep Score', desc: 'Deep, REM, light and awake time measured nightly. Poor sleep tonight means modified training tomorrow.', bar: 84, color: 'var(--purple)' },
]

const gallery = [
  { src: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&q=80&fit=crop', alt: 'Warehouse gym interior', label: 'Our Warehouse', tall: true },
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80&fit=crop', alt: 'Battle ropes', label: 'Battle Ropes', tall: false },
  { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80&fit=crop', alt: 'Kettlebell training', label: 'Kettlebell HIIT', tall: false },
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&fit=crop', alt: 'Open floor training', label: 'Open Floor Space', tall: false },
  { src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80&fit=crop', alt: 'Functional training', label: 'Functional Training', tall: false },
]

const dbClients = [
  { initials: 'SM', color: '#8B5CF6', bg: '#8B5CF622', name: 'Sarah M.', sub: '❤️ 65 bpm · 😴 7.8h · 👣 8,200', rec: 82, recColor: 'var(--green)' },
  { initials: 'JK', color: '#3B82F6', bg: '#3B82F622', name: 'James K.', sub: '❤️ 88 bpm · 😴 5.2h · 👣 3,100', rec: 41, recColor: '#EF4444' },
  { initials: 'LR', color: '#22C55E', bg: '#22C55E22', name: 'Lena R.', sub: '❤️ 58 bpm · 😴 8.1h · 👣 11,400', rec: 91, recColor: 'var(--green)' },
  { initials: 'OT', color: '#F59E0B', bg: '#F59E0B22', name: 'Omar T.', sub: '❤️ 74 bpm · 😴 6.9h · 👣 6,800', rec: 67, recColor: 'var(--yellow)' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroPhoto} />
        <div className={styles.heroGrid} />
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.eyebrowBadge}>
              <span className={styles.eyebrowDot} />
              A Warehouse Gym in Lebanon
            </div>
            <h1 className={styles.h1}>
              Train<br />Smarter.<br /><em>Burn</em><br />Harder.
            </h1>
            <p className={styles.heroSub}>
              No fancy lobby, no machines lined up for show — just an open warehouse, a coach who knows your name, and a band that reads your body. CoachCore strips fitness down to what actually works.
            </p>
            <div className={styles.heroActions}>
              <Link href="/pricing" className={styles.btnPrimary}>Join CoachCore →</Link>
              <Link href="#how" className={styles.btnGhost}>See How It Works</Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.bandMockup}>
              <div className={styles.ringOuter} />
              <RecoveryRing pct={78} size={300} />
              <div className={styles.statsLeft}>
                {[
                  { val: '68 ms', lbl: 'HRV', color: 'var(--purple)' },
                  { val: '97%', lbl: 'SPO2', color: 'var(--blue)' },
                  { val: '32/100', lbl: 'STRESS', color: 'var(--yellow)' },
                ].map((s, i) => (
                  <div key={i} className={styles.bubble} style={{ animationDelay: `${0.8 + i * 0.3}s` }}>
                    <div className={styles.bubbleVal} style={{ color: s.color }}>{s.val}</div>
                    <div className={styles.bubbleLbl}>{s.lbl}</div>
                  </div>
                ))}
              </div>
              <div className={styles.statsRight}>
                {[
                  { val: '72 bpm', lbl: 'HEART RATE', color: '#EF4444' },
                  { val: '14.2', lbl: 'STRAIN', color: 'var(--yellow)' },
                  { val: '84', lbl: 'SLEEP SCORE', color: 'var(--green)' },
                ].map((s, i) => (
                  <div key={i} className={styles.bubble} style={{ animationDelay: `${1.1 + i * 0.3}s` }}>
                    <div className={styles.bubbleVal} style={{ color: s.color }}>{s.val}</div>
                    <div className={styles.bubbleLbl}>{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── GALLERY ── */}
      <div className={styles.gallery}>
        {gallery.map((img, i) => (
          <div key={i} className={`${styles.galleryItem} ${img.tall ? styles.tall : ''}`}>
            <img src={img.src} alt={img.alt} />
            <span className={styles.galleryLabel}>{img.label}</span>
          </div>
        ))}
      </div>

      {/* ── THE SPACE ── */}
      <section className={styles.space}>
        <div className={styles.spaceInner}>
          <div className={styles.eyebrow}>The Space</div>
          <h2 className={styles.sectionH}>A real warehouse.<br />Not a showroom.</h2>
          <p className={styles.spaceText}>
            CoachCore isn&apos;t built inside a glass tower with rows of machines nobody uses. We train out of an open warehouse — high ceilings, concrete floor, real space to move. No queues for equipment, no distractions. Just enough room for battle ropes, kettlebells, and a coach who&apos;s watching every rep.
          </p>
          <div className={styles.spaceTags}>
            {['Open floor plan', 'No machines, no clutter', 'Coach-led sessions', 'Built for function, not for show'].map((t, i) => (
              <div key={i} className={styles.spaceTag}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={styles.how} id="how">
        <div className={styles.inner}>
          <div className={styles.eyebrow}>How It Works</div>
          <h2 className={styles.sectionH}>Three steps to your<br />best body ever.</h2>
          <p className={styles.sectionSub}>Everything works together from day one — no guesswork, no generic plans.</p>
          <div className={styles.steps}>
            {[
              { num: '01', icon: '⌚', title: 'Wear the Band', desc: 'Your CoachCore H59 band tracks your body 24/7 — heart rate, HRV, sleep, stress, recovery — and syncs live to your app. 30-day battery, IP68 waterproof.' },
              { num: '02', icon: '📱', title: 'Open Your App', desc: 'The CoachCore app shows your complete health picture — recovery score, nutrition, sleep quality, and your coach-assigned workout program for today.' },
              { num: '03', icon: '📊', title: 'Coach Tracks Everything', desc: 'Your coach sees every client\'s live data on one dashboard — who\'s recovered, who needs rest, who\'s off nutrition. Personalized guidance, not guesswork.' },
            ].map((s, i) => (
              <div key={i} className={styles.step}>
                <div className={styles.stepNum}>{s.num}</div>
                <div className={styles.stepIcon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className={styles.stepLine} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className={styles.metrics} id="metrics">
        <div className={styles.inner}>
          <div className={styles.eyebrow}>What We Track</div>
          <h2 className={styles.sectionH}>Every metric<br />your coach needs.</h2>
          <p className={styles.sectionSub}>The H59 Max captures the full picture of your health — CoachCore turns that data into daily coaching decisions.</p>
          <div className={styles.metricsGrid}>
            {metrics.map((m, i) => (
              <div key={i} className={styles.metricCard}>
                <div className={styles.metricIcon}>{m.icon}</div>
                <div className={styles.metricVal} style={{ color: m.color }}>{m.val}</div>
                <div className={styles.metricName}>{m.name}</div>
                <div className={styles.metricDesc}>{m.desc}</div>
                <div className={styles.metricBar}>
                  <div className={styles.metricBarFill} style={{ width: `${m.bar}%`, background: m.color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD PREVIEW ── */}
      <section className={styles.dashSection}>
        <div className={styles.inner}>
          <div className={styles.eyebrow}>Coach Dashboard</div>
          <h2 className={styles.sectionH}>Your coach sees<br />every client, live.</h2>
          <p className={styles.sectionSub}>One screen. Every client&apos;s recovery, heart rate, sleep, and nutrition — in real time.</p>
          <div className={styles.dbPreview}>
            <div className={styles.dbTopbar}>
              <div className={styles.dbDots}>
                <div style={{ background: '#EF4444' }} className={styles.dbDot} />
                <div style={{ background: '#F59E0B' }} className={styles.dbDot} />
                <div style={{ background: '#22C55E' }} className={styles.dbDot} />
              </div>
              <div className={styles.dbTitle}>CoachCore — Coach Dashboard</div>
              <div className={styles.dbLive}>● 4 clients live</div>
            </div>
            <div className={styles.dbBody}>
              <div className={styles.dbSidebar}>
                {['📊 Dashboard', '👥 Clients', '💪 Programs', '🥗 Nutrition', '📈 Analytics'].map((item, i) => (
                  <div key={i} className={`${styles.dbSideItem} ${i === 0 ? styles.active : ''}`}>{item}</div>
                ))}
              </div>
              <div className={styles.dbMain}>
                <div className={styles.dbHeading}>Live Client Overview</div>
                {dbClients.map((c, i) => (
                  <div key={i} className={styles.dbClient}>
                    <div className={styles.dbAvatar} style={{ background: c.bg, color: c.color }}>{c.initials}</div>
                    <div className={styles.dbInfo}>
                      <div className={styles.dbName}>{c.name}</div>
                      <div className={styles.dbSub}>{c.sub}</div>
                    </div>
                    <div className={styles.dbRecov}>
                      <div className={styles.dbRecovPct} style={{ color: c.recColor }}>{c.rec}%</div>
                      <div className={styles.dbRecovLbl}>RECOVERY</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaBgPhoto} />
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaH}>Stop guessing.<br /><em>Start knowing.</em></h2>
          <p className={styles.ctaSub}>Join CoachCore. Get the band. Let your coach read your body.</p>
          <div className={styles.ctaActions}>
            <Link href="/pricing" className={styles.btnPrimary} style={{ fontSize: 18, padding: '18px 40px' }}>Start Today →</Link>
            <Link href="#how" className={styles.btnGhost} style={{ fontSize: 18, padding: '17px 40px' }}>Learn More</Link>
          </div>
        </div>
      </section>
    </>
  )
}
