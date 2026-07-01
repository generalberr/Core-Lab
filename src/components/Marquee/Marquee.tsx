import styles from './Marquee.module.css'

const items = [
  'Coach-Led Sessions', 'Open Warehouse Space', 'No Machines, No Clutter', 'Custom Programs',
  'Fat Loss & Conditioning', 'Strength Training', 'Small Group Coaching', 'Real Results', 'Optional Smart Band',
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
