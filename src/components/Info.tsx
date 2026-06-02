import { motion } from 'framer-motion'
import { Divider } from './Divider'
import styles from './Info.module.css'

const up = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }
const transition = (delay = 0) => ({ duration: 0.9, delay })

interface CardProps {
  href: string
  icon: React.ReactNode
  label: string
  delay?: number
}

function Card({ href, icon, label, delay = 0 }: CardProps) {
  return (
    <motion.a
      href={href} target="_blank" rel="noopener noreferrer"
      className={styles.card}
      variants={up} initial="hidden" whileInView="visible"
      viewport={{ once: true }}
      transition={transition(delay)}
      whileHover={{ y: -6 }}
    >
      <div className={styles.cardIcon}>{icon}</div>
      <span className={styles.cardLabel}>{label}</span>
    </motion.a>
  )
}

export function Info() {
  return (
    <section className={styles.info}>
      <div className={styles.floralTl}>🌹</div>
      <div className={styles.floralBr}>🌹</div>

      <div className={styles.inner}>
        <motion.p className={styles.verse}
          variants={up} initial="hidden" whileInView="visible"
          viewport={{ once: true }} transition={transition(0)}>
          "Acima de tudo se cubram de amor,<br />que é o vínculo perfeito."
        </motion.p>

        <motion.p className={styles.verseRef}
          variants={up} initial="hidden" whileInView="visible"
          viewport={{ once: true }} transition={transition(0.1)}>
          COLOSSENSES 3:14
        </motion.p>

        <motion.div variants={up} initial="hidden" whileInView="visible"
          viewport={{ once: true }} transition={transition(0.15)}>
          <Divider />
        </motion.div>

        <motion.p className={styles.inviteText}
          variants={up} initial="hidden" whileInView="visible"
          viewport={{ once: true }} transition={transition(0.2)}>
          JUNTAMENTE COM SEUS PAIS<br />CONVIDAM PARA SEU MATRIMÔNIO
        </motion.p>

        <motion.div className={styles.dateDisplay}
          variants={up} initial="hidden" whileInView="visible"
          viewport={{ once: true }} transition={transition(0.25)}>
          <span className={styles.dateMonth}>JULHO</span>
          <span className={styles.dateDay}>02</span>
          <span className={styles.dateTime}>10:00<br />AM</span>
        </motion.div>

        <motion.p className={styles.cardsLabel}
          variants={up} initial="hidden" whileInView="visible"
          viewport={{ once: true }} transition={transition(0.3)}>
          CLIQUE NOS ÍCONES PARA ACESSAR
        </motion.p>

        <div className={styles.cards}>
          <Card
            href="https://maps.app.goo.gl/9G9SYZAwsEE7xfBG9"
            delay={0.3}
            label="IGREJA"
            icon={
              <svg viewBox="0 0 64 64" fill="var(--gold-light)">
                <path d="M32 4 L32 14 M28 10 L36 10 M20 22 L44 22 L44 54 L20 54 Z M24 54 L24 38 L32 38 L32 54 M40 38 L44 38 L44 50 L40 50 Z M20 54 L44 54 M26 28 L30 28 L30 34 L26 34 Z M34 28 L38 28 L38 34 L34 34 Z M20 22 L14 30 L20 30 L20 22 Z M44 22 L50 30 L44 30 L44 22 Z"/>
              </svg>
            }
          />
          <Card
            href="https://maps.app.goo.gl/HkaQhaEbYAdC1q8c6"
            delay={0.4}
            label={"LOCAL DE\nRECEPÇÃO"}
            icon={
              <svg viewBox="0 0 64 64" fill="var(--gold-light)">
                <path d="M32 8 C20 8 12 18 12 28 C12 44 32 56 32 56 C32 56 52 44 52 28 C52 18 44 8 32 8 Z M32 36 C27.6 36 24 32.4 24 28 C24 23.6 27.6 20 32 20 C36.4 20 40 23.6 40 28 C40 32.4 36.4 36 32 36 Z"/>
              </svg>
            }
          />
          <Card
            href="https://wa.me/5575988973362?text=Olá!+Confirmo+minha+presença+no+casamento+de+Murilo+Augusto+e+Sandiléia+em+02/07/2026!"
            delay={0.5}
            label={"CONFIRMAR\nPRESENÇA"}
            icon={
              <svg viewBox="0 0 64 64" fill="var(--gold-light)">
                <path d="M32 6 C17.6 6 6 17.6 6 32 C6 37.2 7.6 42 10.4 46 L6 58 L18.4 53.6 C22.2 56 26.4 57.6 32 57.6 C46.4 57.6 58 46 58 31.6 C58 17.2 46.4 6 32 6 Z M42.4 40.4 C41.6 42.4 38.4 44.4 36 44.8 C34 45.2 31.4 45.2 26 43.2 C20.6 41.2 16.4 36.4 16 35.6 C15.6 34.8 12 30.4 12 25.8 C12 21.2 14.4 19.2 15.4 18 C16.4 16.8 17.6 16.8 18.4 16.8 C19.2 16.8 20 16.8 20.8 16.8 C21.6 16.8 22.8 16.4 24 19.2 C25.2 22 26.8 26.4 27.2 26.8 C27.6 27.2 27.8 27.8 27.4 28.6 C27 29.4 26.8 29.8 26.4 30.4 C26 31 25.4 31.6 26 32.6 C26.6 33.6 28.8 37 32 40 C35.6 43.2 38.6 44 39.6 44.4 C40.6 44.8 41.2 44.6 41.8 43.8 C42.4 43 44 41 44.6 40 C45.2 39 45.2 38.2 44.8 37.6 C44.4 37 43.2 36.6 41.6 35.8 C40 35 35.6 32.8 35.2 32.4 C34.8 32 34.4 31.8 35.2 30.4 C36 29 38.4 25.8 39.2 25 C40 24.2 40.6 24.4 41.4 24.6 C42.2 24.8 46.4 26.8 47.2 27.2 C48 27.6 48.6 27.8 48.8 28.2 C49 28.6 49 30.4 48.2 32.4 C47.4 34.4 43.2 38.4 42.4 40.4 Z"/>
              </svg>
            }
          />
        </div>
      </div>
    </section>
  )
}
