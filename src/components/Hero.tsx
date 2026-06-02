import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import { useEffect, useRef } from 'react'

const BG_IMAGE = `${import.meta.env.BASE_URL}gutosandi.jpg`

export function Hero() {
  const petalsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = petalsRef.current
    if (!container) return
    const colors = ['#c9a96e', '#e8c990', '#d4b07a', '#b8955c']
    for (let i = 0; i < 22; i++) {
      const p = document.createElement('div')
      p.className = styles.petal
      const size = 5 + Math.random() * 8
      Object.assign(p.style, {
        left:              `${Math.random() * 100}%`,
        width:             `${size}px`,
        height:            `${size * 1.6}px`,
        background:        colors[Math.floor(Math.random() * colors.length)],
        animationDuration: `${6 + Math.random() * 8}s`,
        animationDelay:    `${Math.random() * 10}s`,
        borderRadius:      Math.random() > 0.5 ? '50% 0 50% 0' : '0 50% 0 50%',
      })
      container.appendChild(p)
    }
    return () => { container.innerHTML = '' }
  }, [])

  const fade = { hidden: { opacity: 0 }, visible: { opacity: 1 } }
  const up   = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
  const down = { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }

  return (
    <section className={styles.hero}>
      <div
        className={styles.heroBg}
        style={BG_IMAGE ? {
          backgroundImage: `url(${BG_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } : undefined}
      />
      {BG_IMAGE && <div className={styles.heroBgOverlay} />}

      <div ref={petalsRef} className={styles.petals} />

      <motion.p
        className={styles.verse}
        variants={down} initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.3 }}
      >
        "ACIMA DE TUDO SE CUBRAM DE<br />
        AMOR, QUE É O VÍNCULO PERFEITO."<br />
        COLOSSENSES 3:14
      </motion.p>

      <motion.h1
        className={styles.names}
        variants={up} initial="hidden"
        animate="visible"
        transition={{ duration: 1.1, delay: 0.7 }}
      >
        Murilo <span>&amp;</span><br />Sandiléia
      </motion.h1>

      <motion.p
        className={styles.sub}
        variants={up} initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 1.2 }}
      >
        JUNTAMENTE COM SEUS PAIS<br />
        CONVIDAM PARA SEU MATRIMÔNIO
      </motion.p>

      <motion.div
        className={styles.meta}
        variants={fade} initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 1.6 }}
      >
        <span>JULHO 26, 2026 · 10:00 AM</span>
        <span>BOA VISTA DO TUPIM</span>
      </motion.div>

      <motion.div
        className={styles.scrollHint}
        variants={fade} initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 2 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="#c9a96e" strokeWidth="1.5">
          <polyline points="6 9 12 15 18 9"/>
          <polyline points="6 14 12 20 18 14"/>
        </svg>
      </motion.div>
    </section>
  )
}
