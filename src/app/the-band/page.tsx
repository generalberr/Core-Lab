import Link from 'next/link'
import styles from './page.module.css'

const specs = [
  { icon: '❤️', name: 'Heart Rate', val: '24/7 Continuous', color: '#EF4444' },
  { icon: '💜', name: 'HRV & Stress', val: 'Real-time AI', color: '#A78BFA' },
  { icon: '🩸', name: 'Blood Oxygen', val: 'SpO2 Monitoring', color: '#3B82F6' },
  { icon: '😴', name: 'Sleep Tracking', val: 'Deep · REM · Light · Awake', color: '#A78BFA' },
  { icon: '👣', name: 'Step Count', val: 'All-day tracking', color: '#14B8A6' },
  { icon: '🔋', name: 'Battery Life', val: '30–35 Days', color: '#22C55E' },
  { icon: '💧', name: 'Waterproof', val: 'IP68 Rated', color: '#3B82F6' },
  { icon: '✅', name: 'Certified', val: 'CE · FCC · RoHS', color: '#22C55E' },
  { icon: '📡', name: 'Connectivity', val: 'Bluetooth BLE 5.0', color: '#8B5CF6' },
  { icon: '📱', name: 'Compatibility', val: 'iOS & Android', color: '#F59E0B' },
]

export default function TheBand() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>The Band</div>
          <h1 className={styles.h1}>CoachCore<br /><em>H59 Max</em></h1>
          <p className={styles.sub}>Your body produces data 24/7. Now your coach can read it. Engineered for serious athletes, built to be worn all day and all night.</p>
        </div>
        <div className={styles.deviceWrap}>
          <div className={styles.deviceGlow} />
          <div className={styles.deviceOuter}>
            <div className={styles.deviceBandTop} />
            <div className={styles.deviceBody}>
              <div className={styles.deviceLogo}>H59 MAX</div>
              <div className={styles.deviceSensor} />
              <div className={styles.deviceDots}>
                <div className={styles.dot} style={{ background: '#22C55E' }} />
                <div className={styles.dot} style={{ background: '#EF4444' }} />
                <div className={styles.dot} style={{ background: '#3B82F6' }} />
              </div>
            </div>
            <div className={styles.deviceBandBot} />
          </div>
        </div>
      </section>

      <section className={styles.specs}>
        <div className={styles.inner}>
          <div className={styles.eyebrow2}>Full Specifications</div>
          <h2 className={styles.sectionH}>Everything the H59 Max tracks.</h2>
          <div className={styles.specGrid}>
            {specs.map((s, i) => (
              <div key={i} className={styles.specCard}>
                <div className={styles.specIcon}>{s.icon}</div>
                <div>
                  <div className={styles.specVal} style={{ color: s.color }}>{s.val}</div>
                  <div className={styles.specName}>{s.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.how}>
        <div className={styles.inner}>
          <div className={styles.eyebrow2}>How It Connects</div>
          <h2 className={styles.sectionH}>From wrist to coach dashboard.</h2>
          <div className={styles.flow}>
            {[
              { icon: '⌚', label: 'H59 Max Band', desc: 'Tracks your vitals 24/7' },
              { icon: '📡', label: 'Bluetooth BLE', desc: 'Syncs to your phone' },
              { icon: '📱', label: 'CoachCore App', desc: 'Displays your data' },
              { icon: '☁️', label: 'Cloud Sync', desc: 'Sent to your coach' },
              { icon: '📊', label: 'Coach Dashboard', desc: 'Coach acts on data' },
            ].map((f, i) => (
              <div key={i} className={styles.flowWrap}>
                <div className={styles.flowCard}>
                  <div className={styles.flowIcon}>{f.icon}</div>
                  <div className={styles.flowLabel}>{f.label}</div>
                  <div className={styles.flowDesc}>{f.desc}</div>
                </div>
                {i < 4 && <div className={styles.arrow}>→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>Ready to wear it?</h2>
        <p>Every CoachCore plan includes the H59 Max band.</p>
        <Link href="/pricing" className={styles.btn}>See Pricing →</Link>
      </section>
    </>
  )
}
