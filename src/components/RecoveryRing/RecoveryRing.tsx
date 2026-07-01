import styles from './RecoveryRing.module.css'

interface Props { pct: number; size?: number }

export default function RecoveryRing({ pct, size = 110 }: Props) {
  const r = 36
  const circ = 2 * Math.PI * r
  const color = pct >= 67 ? 'var(--green)' : pct >= 34 ? 'var(--yellow)' : 'var(--red, #EF4444)'
  const label = pct >= 67 ? 'Ready' : pct >= 34 ? 'Moderate' : 'Rest'
  const offset = circ * (1 - pct / 100)
  return (
    <div className={styles.wrap} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <circle className={styles.track} cx="50" cy="50" r={r} />
        <circle className={styles.fill} cx="50" cy="50" r={r}
          stroke={color}
          strokeDasharray={circ}
          strokeDashoffset={offset}
          style={{ animationName: 'ring-grow, ring-pulse' }}
        />
      </svg>
      <div className={styles.center}>
        <span className={styles.pct} style={{ color, fontSize: size > 100 ? 22 : 16 }}>{pct}%</span>
        <span className={styles.lbl}>{label.toUpperCase()}</span>
      </div>
    </div>
  )
}
