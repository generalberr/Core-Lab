import styles from './Marquee.module.css'

const items = [
  '24/7 Heart Rate', 'HRV Tracking', 'Sleep Stages', 'Blood Oxygen (SpO2)',
  'Stress Score', 'Coach Dashboard', 'AI Recovery Scoring', 'IP68 Waterproof', '30-Day Battery',
]

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.dot} />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
