import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { tours } from '@/config/destinations'
import { useUIStore } from '@/store/useUIStore'
import SplitText from '@/components/ui/SplitText'

export default function PopularTours() {
  const [active, setActive] = useState(0)
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)
  const tour = tours[active]

  return (
    <section className="relative overflow-hidden bg-forest-950 py-32">
      <div className="grid-radial absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember-400">
              Signature tours
            </p>
            <h2 className="font-display text-5xl leading-[0.95] text-sand-100 md:text-7xl lg:text-[6rem]">
              <SplitText text="Itineraries with" />
              <span className="italic text-ember-400">
                <SplitText text="story." delay={0.2} />
              </span>
            </h2>
          </div>
          <Link
            to="/tours"
            data-cursor
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-sand-100 transition-colors hover:text-ember-400"
          >
            All tours
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          {/* Left: list */}
          <div className="flex flex-col">
            {tours.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                onMouseEnter={() => {
                  setCursorVariant('hover')
                  setActive(i)
                }}
                onMouseLeave={() => setCursorVariant('default')}
                data-cursor
                className={`group flex items-start justify-between gap-4 border-b border-sand-100/10 py-6 text-left transition-colors duration-500 ${
                  i === active ? 'text-sand-100' : 'text-sand-100/40 hover:text-sand-100/80'
                }`}
              >
                <span className="font-mono text-xs">0{i + 1}</span>
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-ember-400">
                    {t.badge}
                  </p>
                  <h3 className="mt-1.5 font-display text-3xl leading-tight md:text-4xl">
                    {t.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-sand-200/60">{t.summary}</p>
                </div>
                <span className="font-mono text-xs whitespace-nowrap">{t.days}d</span>
              </button>
            ))}
          </div>

          {/* Right: preview */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-forest-900 lg:aspect-auto lg:min-h-[640px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* sticky tags */}
            <div className="absolute top-6 left-6 right-6 flex items-start justify-between">
              <span className="rounded-full border border-sand-100/20 bg-forest-950/50 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-sand-100 backdrop-blur-md">
                {tour.pace} pace
              </span>
              <div className="flex items-center gap-1.5 rounded-full border border-sand-100/20 bg-forest-950/50 px-3 py-1 text-xs text-sand-100 backdrop-blur-md">
                <span className="text-ember-400">★</span>
                <span className="font-mono">{tour.rating}</span>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tour.id + '-meta'}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-[10px] uppercase tracking-[0.32em] text-ember-400">
                    From ${tour.fromPrice.toLocaleString()} per traveller
                  </p>
                  <h3 className="mt-2 font-display text-4xl leading-tight text-sand-100">
                    {tour.title}
                  </h3>
                  <Link
                    to="/tours"
                    data-cursor
                    onMouseEnter={() => setCursorVariant('hover')}
                    onMouseLeave={() => setCursorVariant('default')}
                    className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-sand-100 hover:text-ember-400"
                  >
                    Read the itinerary <span aria-hidden>→</span>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
