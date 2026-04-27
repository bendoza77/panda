import { motion } from 'framer-motion'
import { tours } from '@/config/destinations'
import { useUIStore } from '@/store/useUIStore'
import SplitText from '@/components/ui/SplitText'
import MagneticButton from '@/components/ui/MagneticButton'

export default function Tours() {
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)

  return (
    <main className="relative pt-40 pb-32">
      <header className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember-400">
          Signature itineraries
        </p>
        <h1 className="font-display text-7xl leading-[0.92] text-sand-100 md:text-9xl lg:text-[12rem]">
          <SplitText text="Tours" />
        </h1>
        <p className="mt-6 max-w-xl text-sand-200/70">
          A short list of journeys we shape ourselves. All can be tailored: pace,
          group size, season, even the soundtrack of the long drives.
        </p>
      </header>

      <section className="mt-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <ul className="flex flex-col gap-6">
            {tours.map((t, i) => (
              <motion.li
                key={t.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setCursorVariant('view')}
                onMouseLeave={() => setCursorVariant('default')}
                data-cursor
                className="group relative grid gap-6 overflow-hidden rounded-2xl border border-sand-100/10 bg-gradient-to-br from-forest-900/50 to-forest-950/50 p-6 backdrop-blur-md transition-all duration-500 hover:border-ember-400/40 md:grid-cols-[1.1fr_2fr] md:items-stretch"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:aspect-auto md:min-h-[280px]">
                  <img
                    src={t.image}
                    alt={t.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-cinematic)] group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-forest-950/60 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-sand-100 backdrop-blur-md">
                    {t.badge}
                  </span>
                </div>

                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-sand-200/50">
                        N° 0{i + 1}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-sand-100/80">
                        <span className="text-ember-400">★</span>
                        <span className="font-mono">{t.rating}</span>
                      </div>
                    </div>
                    <h2 className="mt-3 font-display text-4xl leading-tight text-sand-100 md:text-5xl">
                      {t.title}
                    </h2>
                    <p className="mt-3 max-w-2xl leading-relaxed text-sand-200/70">
                      {t.summary}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-end justify-between gap-4 border-t border-sand-100/10 pt-5">
                    <dl className="flex flex-wrap items-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.24em] text-sand-200/60">
                      <div>
                        <dt>Days</dt>
                        <dd className="font-mono text-base text-sand-100">{t.days}</dd>
                      </div>
                      <div>
                        <dt>Pace</dt>
                        <dd className="font-mono text-base text-sand-100">{t.pace}</dd>
                      </div>
                      <div>
                        <dt>From</dt>
                        <dd className="font-mono text-base text-sand-100">
                          ${t.fromPrice.toLocaleString()}
                        </dd>
                      </div>
                    </dl>
                    <MagneticButton variant="ghost" className="text-xs">
                      Read itinerary <span aria-hidden>→</span>
                    </MagneticButton>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
