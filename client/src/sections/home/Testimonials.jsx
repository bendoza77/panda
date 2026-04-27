import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '@/config/destinations'
import { useUIStore } from '@/store/useUIStore'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)
  const t = testimonials[i]

  return (
    <section className="relative overflow-hidden bg-forest-950 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,122,0,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1100px] px-6 text-center lg:px-12">
        <p className="mb-8 text-xs uppercase tracking-[0.4em] text-ember-400">
          Letters from travellers
        </p>

        <div className="relative min-h-[280px] md:min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl italic leading-snug text-sand-100 md:text-5xl lg:text-6xl"
            >
              <span className="text-ember-400">“</span>
              {t.quote}
              <span className="text-ember-400">”</span>
              <footer className="mt-10 text-sm not-italic uppercase tracking-[0.28em] text-sand-200/70">
                — {t.author}, <span className="text-sand-200/50">{t.role}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              data-cursor
              aria-label={`Quote ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === idx ? 'w-10 bg-ember-400' : 'w-2.5 bg-sand-100/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
