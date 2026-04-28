import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/config/destinations'
import { useUIStore } from '@/store/useUIStore'

const INTERVAL = 5000

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const [dir, setDir] = useState(1)
  const [paused, setPaused] = useState(false)
  const [resetKey, setResetKey] = useState(0)
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)
  const t = testimonials[idx]

  // Auto-advance — resets whenever resetKey or paused changes
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setDir(1)
      setIdx((prev) => (prev + 1) % testimonials.length)
      setResetKey((k) => k + 1)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [paused, resetKey])

  const goTo = (n) => {
    if (n === idx) return
    setDir(n > idx ? 1 : -1)
    setIdx(n)
    setResetKey((k) => k + 1)
  }

  return (
    <section
      className="relative overflow-hidden bg-forest-950 py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-[1100px] px-6 text-center lg:px-12">
        <p className="mb-8 text-xs uppercase tracking-[0.4em] text-ember-400">
          Letters from travellers
        </p>

        <div className="relative min-h-[280px] md:min-h-[260px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={idx}
              custom={dir}
              variants={{
                enter: (d) => ({ x: d * 60, opacity: 0 }),
                center:    { x: 0, opacity: 1 },
                exit:  (d) => ({ x: d * -60, opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl italic leading-snug text-sand-100 md:text-5xl lg:text-6xl"
            >
              <span className="text-ember-400">"</span>
              {t.quote}
              <span className="text-ember-400">"</span>
              <footer className="mt-10 text-sm not-italic uppercase tracking-[0.28em] text-sand-200/70">
                — {t.author}, <span className="text-sand-200/50">{t.role}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Dots with progress bar on active */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {testimonials.map((_, n) => (
            <button
              key={n}
              onClick={() => goTo(n)}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              data-cursor
              aria-label={`Quote ${n + 1}`}
              className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-500 ${
                idx === n ? 'w-10 bg-sand-100/20' : 'w-2.5 bg-sand-100/20'
              }`}
            >
              {idx === n && (
                <motion.span
                  key={resetKey}
                  className="absolute inset-y-0 left-0 rounded-full bg-ember-400"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
