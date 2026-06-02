import { useEffect, useState } from 'react'

interface TimeLeft {
  days: string
  hours: string
  minutes: string
  seconds: string
}

const pad = (n: number) => String(n).padStart(2, '0')

export function useCountdown(target: Date): TimeLeft {
  const calc = (): TimeLeft => {
    const diff = target.getTime() - Date.now()
    if (diff <= 0) return { days: '00', hours: '00', minutes: '00', seconds: '00' }
    return {
      days:    pad(Math.floor(diff / 86400000)),
      hours:   pad(Math.floor((diff % 86400000) / 3600000)),
      minutes: pad(Math.floor((diff % 3600000) / 60000)),
      seconds: pad(Math.floor((diff % 60000) / 1000)),
    }
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calc)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calc()), 1000)
    return () => clearInterval(id)
  }, [])

  return timeLeft
}
