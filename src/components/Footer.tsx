import { motion } from 'framer-motion'
import styles from './Footer.module.css'

const up = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export function Footer() {
  return (
    <footer className={styles.footer}>
      <motion.div className={styles.names}
        variants={up} initial="hidden" whileInView="visible"
        viewport={{ once: true }} transition={{ duration: 0.9 }}>
        Murilo <span>&amp;</span> Sandiléia
      </motion.div>

      <motion.p className={styles.date}
        variants={up} initial="hidden" whileInView="visible"
        viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}>
        02 · JULHO · 2026
      </motion.p>

      <motion.p className={styles.verse}
        variants={up} initial="hidden" whileInView="visible"
        viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2 }}>
        "Acima de tudo se cubram de amor,<br />que é o vínculo perfeito."<br />
        <em>Colossenses 3:14</em>
      </motion.p>
    </footer>
  )
}
