import Link from 'next/link'
import Marquee from '@/components/Marquee/Marquee'
import Reveal from '@/components/Reveal/Reveal'
import styles from './page.module.css'

const gallery = [
  { src: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=800&q=80&fit=crop', alt: 'Warehouse gym interior', label: 'Our Warehouse', tall: true },
  { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80&fit=crop', alt: 'Battle ropes', label: 'Battle Ropes', tall: false },
  { src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=80&fit=crop', alt: 'Kettlebell training', label: 'Kettlebell HIIT', tall: false },
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80&fit=crop', alt: 'Open floor training', label: 'Open Floor Space', tall: false },
  { src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80&fit=crop', alt: 'Functional training', label: 'Functional Training', tall: false },
]

const programs = [
  { icon: '🔥', name: 'Fat Loss & Conditioning', desc: 'HIIT circuits, battle ropes, and metabolic training built to burn fat and build endurance fast.' },
  { icon: '🏋️', name: 'Strength & Muscle', desc: 'Kettlebells, functional rigs, and progressive programming to build real, usable strength.' },
  { icon: '🤸', name: 'Mobility & Recovery', desc: 'Stretching, foam rolling, and movement work so you train hard without breaking down.' },
  { icon: '🥊', name: 'Sport-Specific Training', desc: 'Custom programs built around your sport — from combat athletes to weekend runners.' },
]

const dbClients = [
  { initials: 'SM', color: '#8B5CF6', bg: '#8B5CF622', name: 'Sarah M.', sub: '4 sessions this week · On track', rec: 82, recColor: 'var(--green)' },
  { initials: 'JK', color: '#3B82F6', bg: '#3B82F622', name: 'James K.', sub: '2 sessions this week · Needs check-in', rec: 41, recColor: '#EF4444' },
  { initials: 'LR', color: '#22C55E', bg: '#22C55E22', name: 'Lena R.', sub: '5 sessions this week · On track', rec: 91, recColor: 'var(--green)' },
  { initials: 'OT', color: '#F59E0B', bg: '#F59E0B22', name: 'Omar T.', sub: '3 sessions this week · On track', rec: 67, recColor: 'var(--yellow)' },
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
              Warehouse Gym · Jiyeh, Lebanon
            </div>
            <h1 className={styles.h1}>
              Train<br />Smarter.<br /><em>Burn</em><br />Harder.
            </h1>
            <p className={styles.heroSub}>
              No fancy lobby, no machines lined up for show — just an open warehouse, a coach who knows your name, and a program built around you. This is fitness stripped down to what actually works.
            </p>
            <div className={styles.heroActions}>
              <Link href="/pricing" className={styles.btnPrimary}>Join CoreLab →</Link>
              <Link href="#how" className={styles.btnGhost}>See How It Works</Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}><strong>Jiyeh</strong><span>Lebanon</span></div>
              <div className={styles.heroStatDiv} />
              <div className={styles.heroStat}><strong>300 m²</strong><span>training space</span></div>
              <div className={styles.heroStatDiv} />
              <div className={styles.heroStat}><strong>100%</strong><span>coach-led</span></div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroPhotoCard}>
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&q=80&fit=crop" alt="Coach training a client" />
              <div className={styles.heroPhotoBadge}>
                <span className={styles.heroPhotoDot} />
                Live coaching, every session
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className={styles.stats}>
        <div className={styles.statsInner}>
          {[
            { val: '308', unit: 'm²', label: 'Open training floor' },
            { val: '5', unit: 'm', label: 'Ceiling height' },
            { val: '15', unit: 'm', label: 'Outdoor sprint lane' },
            { val: '1:8', unit: '', label: 'Max coach-to-client ratio' },
          ].map((s, i) => (
            <div key={i} className={styles.stat}>
              <div className={styles.statVal}>{s.val}<span>{s.unit}</span></div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
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
        <Reveal><div className={styles.spaceInner}>
          <div className={styles.eyebrow}>The Space</div>
          <h2 className={styles.sectionH}>A real warehouse.<br />Not a showroom.</h2>
          <p className={styles.spaceText}>
            CoreLab isn&apos;t built inside a glass tower with rows of machines nobody uses. We train out of an open warehouse on the Jiyeh coastal road — high ceilings, concrete floor, and a full glass front on the training floor. Drive past and you&apos;ll see the sessions happening. Train inside and you get the view. No queues for equipment, no distractions — just space to move and a coach who&apos;s watching every rep.
          </p>
          <div className={styles.spaceTags}>
            {['Glass-front training floor', 'View of the coastal road', 'Outdoor sprint & sled lane', 'Coach-led sessions', 'No machines, no clutter'].map((t, i) => (
              <div key={i} className={styles.spaceTag}>{t}</div>
            ))}
          </div>
        </div></Reveal>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={styles.how} id="how">
        <div className={styles.inner}>
          <div className={styles.eyebrow}>How It Works</div>
          <h2 className={styles.sectionH}>Three steps to your<br />best body ever.</h2>
          <p className={styles.sectionSub}>No generic plans. Every step is built around you and led by a real coach.</p>
          <div className={styles.steps}>
            {[
              { num: '01', icon: '📝', title: 'Tell Us Your Goal', desc: 'Lose weight, build strength, or train for a sport — your coach builds a program around what you actually want.' },
              { num: '02', icon: '🏋️', title: 'Train at the Warehouse', desc: 'Show up to real, coach-led sessions in our open warehouse space. No machines, no guesswork — just focused training.' },
              { num: '03', icon: '📈', title: 'Track Your Progress', desc: 'Your coach follows your sessions, nutrition, and progress week over week, adjusting your program as you improve.' },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 0.12}>
                <div className={styles.step}>
                  <div className={styles.stepNum}>{s.num}</div>
                  <div className={styles.stepIcon}>{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className={styles.stepLine} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section className={styles.programs}>
        <div className={styles.inner}>
          <div className={styles.eyebrow}>Programs</div>
          <h2 className={styles.sectionH}>Training built<br />around your goal.</h2>
          <p className={styles.sectionSub}>Every program is coach-led and adjusted week to week based on how you&apos;re progressing.</p>
          <div className={styles.programsGrid}>
            {programs.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={styles.programCard}>
                  <div className={styles.programIcon}>{p.icon}</div>
                  <h3 className={styles.programName}>{p.name}</h3>
                  <p className={styles.programDesc}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DASHBOARD PREVIEW ── */}
      <section className={styles.dashSection}>
        <div className={styles.inner}>
          <div className={styles.eyebrow}>Coach Dashboard</div>
          <h2 className={styles.sectionH}>Your coach tracks<br />every client, every week.</h2>
          <p className={styles.sectionSub}>One screen. Every client&apos;s sessions, progress, and nutrition — organized in one place.</p>
          <Reveal><div className={styles.dbPreview}>
            <div className={styles.dbTopbar}>
              <div className={styles.dbDots}>
                <div style={{ background: '#EF4444' }} className={styles.dbDot} />
                <div style={{ background: '#F59E0B' }} className={styles.dbDot} />
                <div style={{ background: '#22C55E' }} className={styles.dbDot} />
              </div>
              <div className={styles.dbTitle}>CoreLab — Coach Dashboard</div>
              <div className={styles.dbLive}>● 4 clients active</div>
            </div>
            <div className={styles.dbBody}>
              <div className={styles.dbSidebar}>
                {['📊 Dashboard', '👥 Clients', '💪 Programs', '🥗 Nutrition', '📈 Analytics'].map((item, i) => (
                  <div key={i} className={`${styles.dbSideItem} ${i === 0 ? styles.active : ''}`}>{item}</div>
                ))}
              </div>
              <div className={styles.dbMain}>
                <div className={styles.dbHeading}>Client Overview</div>
                {dbClients.map((c, i) => (
                  <div key={i} className={styles.dbClient}>
                    <div className={styles.dbAvatar} style={{ background: c.bg, color: c.color }}>{c.initials}</div>
                    <div className={styles.dbInfo}>
                      <div className={styles.dbName}>{c.name}</div>
                      <div className={styles.dbSub}>{c.sub}</div>
                    </div>
                    <div className={styles.dbRecov}>
                      <div className={styles.dbRecovPct} style={{ color: c.recColor }}>{c.rec}%</div>
                      <div className={styles.dbRecovLbl}>ON TRACK</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div></Reveal>
        </div>
      </section>

      {/* ── BAND TEASER (secondary) ── */}
      <section className={styles.bandTeaser}>
        <div className={styles.bandTeaserInner}>
          <div className={styles.bandTeaserIcon}>⌚</div>
          <div className={styles.bandTeaserText}>
            <div className={styles.eyebrow}>Optional Add-On</div>
            <h3 className={styles.bandTeaserH}>Want to track your body too?</h3>
            <p className={styles.bandTeaserP}>Every CoreLab member can add our smart band — tracks heart rate, sleep, and recovery, synced straight to your coach.</p>
          </div>
          <Link href="/the-band" className={styles.btnGhost}>See the Band →</Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaBgPhoto} />
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaH}>Stop guessing.<br /><em>Start training.</em></h2>
          <p className={styles.ctaSub}>Join CoreLab. Train in the warehouse. Let a real coach guide you.</p>
          <div className={styles.ctaActions}>
            <Link href="/pricing" className={styles.btnPrimary} style={{ fontSize: 18, padding: '18px 40px' }}>Start Today →</Link>
            <Link href="#how" className={styles.btnGhost} style={{ fontSize: 18, padding: '17px 40px' }}>Learn More</Link>
          </div>
        </div>
      </section>
    </>
  )
}
