import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { destinations } from '@/config/destinations'
import { useUIStore } from '@/store/useUIStore'
import { useParallax } from '@/hooks/useParallax'
import SplitText from '@/components/ui/SplitText'

const regions = ['All', 'Asia', 'Europe', 'Africa', 'South America', 'North America']

export default function Destinations() {
  const [filter, setFilter] = useState('All')
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)
  const parallaxRef = useParallax(15)

  const list = useMemo(
    () => (filter === 'All' ? destinations : destinations.filter((d) => d.region === filter)),
    [filter]
  )

  return (
    <main className="relative pt-40 pb-32">
      {/* HEADER */}
      <header className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember-400">Atlas of Panda</p>
        <h1 className="font-display text-7xl leading-[0.92] text-sand-100 md:text-9xl lg:text-[12rem]">
          <SplitText text="Destinations" />
        </h1>
        <div ref={parallaxRef} className="pointer-events-none absolute -top-12 right-12 h-40 w-40 rounded-full bg-ember-500/20 blur-3xl" />

        <div className="mt-12 flex flex-wrap items-center gap-3">
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setFilter(r)}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              data-cursor
              className={`rounded-full border px-5 py-2 text-[10px] uppercase tracking-[0.28em] transition-all duration-300 ${
                filter === r
                  ? 'border-ember-400 bg-ember-500 text-ink-900'
                  : 'border-sand-100/15 text-sand-100/70 hover:border-sand-100/40 hover:text-sand-100'
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </header>

      {/* GRID */}
      <section className="mt-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {list.map((d, i) => (
                <motion.article
                  layout
                  key={d.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => setCursorVariant('view')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-forest-900"
                  data-cursor
                >
                  <img
                    src={d.image}
                    alt={d.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-cinematic)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-sand-100/5 transition-all duration-500 group-hover:ring-ember-400/40" />

                  <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-[10px] uppercase tracking-[0.28em]">
                    <span className="rounded-full border border-sand-100/20 bg-forest-950/40 px-3 py-1 text-sand-100 backdrop-blur-md">
                      {d.region}
                    </span>
                    <span className="font-mono text-sand-100/70">
                      {d.coords.lat.toFixed(2)}° · {d.coords.lon.toFixed(2)}°
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-ember-400">
                      {d.country}
                    </p>
                    <h3 className="mt-1 font-display text-4xl leading-tight text-sand-100">
                      {d.name}
                    </h3>
                    <p className="mt-2 text-sm text-sand-200/80">{d.tagline}</p>
                    <div className="mt-4 flex items-center justify-between border-t border-sand-100/10 pt-4 text-xs">
                      <span className="uppercase tracking-[0.24em] text-sand-200/60">
                        {d.days} day journey
                      </span>
                      <span className="font-mono text-sand-100">
                        from ${d.fromPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  )
}
