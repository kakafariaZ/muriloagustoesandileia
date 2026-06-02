import { motion } from 'framer-motion'
import { useCountdown } from '../hooks/useCountdown'
import { Divider } from './Divider'
import styles from './Countdown.module.css'

const WEDDING = new Date('2026-07-02T10:00:00')

const up = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

interface UnitProps { value: string; label: string; delay?: number }

function Unit({ value, label, delay = 0 }: UnitProps) {
  return (
    <motion.div className={styles.item}
      variants={up} initial="hidden" whileInView="visible"
      viewport={{ once: true }} transition={{ duration: 0.85, delay }}>
      <div className={styles.num}>{value}</div>
      <div className={styles.unit}>{label}</div>
    </motion.div>
  )
}

export function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING)

  return (
    <section className={styles.section}>
      <motion.p className={styles.title}
        variants={up} initial="hidden" whileInView="visible"
        viewport={{ once: true }} transition={{ duration: 0.8 }}>
        FALTAM APENAS
      </motion.p>

      <div className={styles.grid}>
        <Unit value={days}    label="DIAS"    delay={0.1} />
        <span className={styles.sep}>·</span>
        <Unit value={hours}   label="HORAS"   delay={0.2} />
        <span className={styles.sep}>·</span>
        <Unit value={minutes} label="MINUTOS" delay={0.3} />
        <span className={styles.sep}>·</span>
        <Unit value={seconds} label="SEGUNDOS" delay={0.4} />
      </div>

      <motion.div variants={up} initial="hidden" whileInView="visible"
        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}>
        <Divider />
      </motion.div>

      <motion.p className={styles.location}
        variants={up} initial="hidden" whileInView="visible"
        viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.6 }}>
        BOA VISTA DO TUPIM · BAHIA<br />02 DE JULHO DE 2026
      </motion.p>
    </section>
  )
}
