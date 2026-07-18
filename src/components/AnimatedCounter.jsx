import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, PenLine, Smartphone, Gamepad2 } from 'lucide-react'

const iconMap = { Play, PenLine, Smartphone, Gamepad2 }

export default function AnimatedCounter({ value, suffix = '', label, icon, color }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true
          let start = 0
          const step = Math.ceil(value / 40)
          const interval = setInterval(() => {
            start += step
            if (start >= value) {
              start = value
              clearInterval(interval)
            }
            setCount(start)
          }, 30)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  const displayValue = count >= 1000 ? (count / 1000).toFixed(1) + 'K' : count

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05, rotate: -1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
      <div className={`relative z-10 ${color || 'bg-yellow-400'} border-4 border-black p-5 shadow-neo-mini`}>
        <p className="text-black dark:text-white">{(() => { const Ic = iconMap[icon]; return Ic ? <Ic className="w-8 h-8 md:w-9 md:h-9" strokeWidth={2.5} /> : null })()}</p>
        <p className="font-space text-3xl md:text-4xl font-black text-black dark:text-white mt-2">
          {displayValue}{suffix}
        </p>
        <p className="font-mono text-xs font-bold text-black/90 dark:text-white/90 mt-1 uppercase tracking-wider">{label}</p>
      </div>
    </motion.div>
  )
}
