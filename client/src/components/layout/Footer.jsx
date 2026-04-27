import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useUIStore } from '@/store/useUIStore'
import MagneticButton from '@/components/ui/MagneticButton'

export default function Footer() {
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)

  const cols = [
    {
      title: 'Travel',
      links: [
        { label: 'Destinations', to: '/destinations' },
        { label: 'Tours', to: '/tours' },
        { label: 'Bespoke', to: '/contact' },
        { label: 'Gift cards', to: '/contact' },
      ],
    },
    {
      title: 'Studio',
      links: [
        { label: 'About Panda', to: '/about' },
        { label: 'Press kit', to: '/about' },
        { label: 'Careers', to: '/about' },
        { label: 'Sustainability', to: '/about' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', to: '/contact' },
        { label: 'FAQ', to: '/contact' },
        { label: 'Privacy', to: '/about' },
        { label: 'Terms', to: '/about' },
      ],
    },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-sand-100/10 bg-forest-950/60 pt-24 pb-10">
      <div className="grid-radial absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember-400">Begin a journey</p>
            <h2 className="font-display text-5xl leading-[1.05] text-sand-100 lg:text-7xl">
              Somewhere new is already <span className="italic text-ember-400">waiting</span> for you.
            </h2>
          </div>
          <MagneticButton as={Link} to="/contact" className="shrink-0">
            Plan with us
            <span aria-hidden>→</span>
          </MagneticButton>
        </motion.div>

        <div className="grid gap-12 border-t border-sand-100/10 pt-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-forest-700 to-forest-900 ring-1 ring-sand-100/15">
                <span className="font-display text-base text-sand-100">P</span>
              </span>
              <span className="font-display text-xl text-sand-100">Panda</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-sand-200/70">
              A small studio of guides, designers and storytellers crafting cinematic journeys
              for travellers who want their trips to mean something.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Instagram', 'Are.na', 'YouTube'].map((s) => (
                <a
                  key={s}
                  href="#"
                  data-cursor
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="rounded-full border border-sand-100/15 px-4 py-1.5 text-[10px] uppercase tracking-[0.24em] text-sand-200/70 transition-colors hover:border-ember-400 hover:text-ember-400"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-ember-400">{c.title}</p>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      data-cursor
                      onMouseEnter={() => setCursorVariant('hover')}
                      onMouseLeave={() => setCursorVariant('default')}
                      className="text-sm text-sand-100/80 transition-colors hover:text-ember-400"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-sand-100/10 pt-6 text-xs text-sand-200/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Panda Studio — Crafted journeys, made carefully.</p>
          <p className="font-mono uppercase tracking-[0.28em]">
            41.7151° N · 44.8271° E
          </p>
        </div>
      </div>
    </footer>
  )
}
