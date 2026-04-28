import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { destinations } from '@/config/destinations'
import { useUIStore } from '@/store/useUIStore'
import SplitText from '@/components/ui/SplitText'

export default function FeaturedDestinations() {
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)
  return (
    <section className="relative py-32" data-scene="destinations">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember-400">
              Featured destinations
            </p>
            <h2 className="font-display text-5xl leading-[0.95] text-sand-100 md:text-7xl lg:text-[6rem]">
              <SplitText text="Six places" />
              <span className="italic text-ember-400">
                <SplitText text="we keep" delay={0.18} /> <SplitText text="returning to." delay={0.32} />
              </span>
            </h2>
          </div>
          <Link
            to="/destinations"
            data-cursor
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-sand-100 transition-colors hover:text-ember-400"
          >
            View all
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to="/destinations"
                data-cursor
                onMouseEnter={() => setCursorVariant('view')}
                onMouseLeave={() => setCursorVariant('default')}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-forest-900"
              >
                <div className="absolute inset-0 transition-transform duration-[1200ms] ease-[var(--ease-cinematic)] group-hover:scale-110">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-sand-100/5 transition-all duration-500 group-hover:ring-ember-400/40" />

                <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                  <span className="rounded-full border border-sand-100/20 bg-forest-950/40 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-sand-100 backdrop-blur-md">
                    {d.region}
                  </span>
                  <span className="font-mono text-xs text-sand-100/80">
                    0{i + 1}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="mb-1 text-[10px] uppercase tracking-[0.28em] text-ember-400">
                    {d.country}
                  </p>
                  <h3 className="font-display text-4xl leading-tight text-sand-100">
                    {d.name}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-sand-200/80">
                    {d.tagline}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-sand-100/10 pt-4">
                    <span className="text-xs uppercase tracking-[0.24em] text-sand-200/60">
                      {d.days} days
                    </span>
                    <span className="font-mono text-sm text-sand-100">
                      from ${d.fromPrice.toLocaleString()}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
