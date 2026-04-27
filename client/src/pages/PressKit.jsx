import { motion } from 'framer-motion'
import SplitText from '@/components/ui/SplitText'
import MagneticButton from '@/components/ui/MagneticButton'
import Reveal, { StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import { useUIStore } from '@/store/useUIStore'

const releases = [
  {
    date: 'March 2026',
    title: 'Panda named one of the 50 most innovative travel studios globally',
    publication: 'Condé Nast Traveller',
  },
  {
    date: 'January 2026',
    title: 'Why slow travel is reshaping how people spend their holidays',
    publication: 'The Guardian',
  },
  {
    date: 'October 2025',
    title: 'Inside the Georgian studio rewriting the grammar of luxury travel',
    publication: 'Monocle Magazine',
  },
  {
    date: 'June 2025',
    title: 'Panda awarded B-Corp certification for carbon-transparent operations',
    publication: 'Business of Fashion',
  },
]

const assets = [
  { label: 'Brand guidelines', size: '4.2 MB', ext: 'PDF' },
  { label: 'Logo suite (SVG + PNG)', size: '1.8 MB', ext: 'ZIP' },
  { label: 'Photography library — 200 images', size: '820 MB', ext: 'ZIP' },
  { label: 'Founder portraits', size: '94 MB', ext: 'ZIP' },
  { label: 'Brand video — 90 second', size: '210 MB', ext: 'MP4' },
  { label: 'Fact sheet 2026', size: '0.6 MB', ext: 'PDF' },
]

const stats = [
  { v: '12,000+', l: 'Travellers guided' },
  { v: '$86M', l: 'Total trip value booked' },
  { v: '4.96', l: 'Average satisfaction score' },
  { v: '86', l: 'Countries shaped' },
]

export default function PressKit() {
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)

  return (
    <main className="relative overflow-hidden pt-40 pb-32">
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-forest-500/10 blur-[120px]" />

      {/* HERO */}
      <header className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember-400">Press & media</p>
        </Reveal>
        <h1 className="font-display text-[12vw] leading-[0.9] text-sand-100 md:text-[8vw] lg:text-[7.5rem]">
          <SplitText text="Press kit" />
        </h1>
        <Reveal delay={0.3}>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-sand-200/80">
            Everything you need to write about Panda, in one place.
            For interviews, editorial partnerships, or speaking requests — write to us directly.
          </p>
          <a
            href="mailto:press@panda.studio"
            className="mt-4 inline-block text-lg font-display text-ember-400 hover:text-ember-300 transition-colors"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
            data-cursor
          >
            press@panda.studio
          </a>
        </Reveal>
      </header>

      <div className="my-24 h-px bg-gradient-to-r from-transparent via-sand-100/15 to-transparent" />

      {/* STATS */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.l}>
              <div className="rounded-2xl border border-sand-100/10 bg-forest-900/30 p-8 backdrop-blur-md">
                <p className="font-display text-5xl text-sand-100">{s.v}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-sand-200/60">{s.l}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <div className="my-24 h-px bg-gradient-to-r from-transparent via-sand-100/15 to-transparent" />

      {/* DOWNLOADS */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-10 text-xs uppercase tracking-[0.4em] text-ember-400">
            Downloadable assets
          </p>
        </Reveal>
        <ul className="divide-y divide-sand-100/10">
          {assets.map((a, i) => (
            <motion.li
              key={a.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center justify-between gap-6 py-6 transition-colors hover:text-ember-400"
            >
              <div className="flex items-center gap-5">
                <span className="flex h-10 w-14 items-center justify-center rounded-lg border border-sand-100/10 bg-forest-900/40 font-mono text-[10px] uppercase tracking-[0.2em] text-ember-400">
                  {a.ext}
                </span>
                <span className="text-lg text-sand-100 group-hover:text-ember-400 transition-colors">{a.label}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="hidden font-mono text-xs text-sand-200/50 sm:block">{a.size}</span>
                <button
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  data-cursor
                  className="rounded-full border border-sand-100/15 px-5 py-2 text-[10px] uppercase tracking-[0.24em] text-sand-100 transition-all hover:border-ember-400 hover:text-ember-400"
                >
                  Download
                </button>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      <div className="my-24 h-px bg-gradient-to-r from-transparent via-sand-100/15 to-transparent" />

      {/* PRESS */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-10 text-xs uppercase tracking-[0.4em] text-ember-400">
            Recent coverage
          </p>
        </Reveal>
        <StaggerGroup className="flex flex-col gap-6">
          {releases.map((r) => (
            <StaggerItem key={r.title}>
              <div className="group flex flex-col gap-2 rounded-2xl border border-sand-100/10 bg-forest-900/20 p-8 backdrop-blur-md transition-all hover:border-ember-400/40 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex-1">
                  <p className="mb-2 text-[10px] uppercase tracking-[0.28em] text-ember-400">
                    {r.publication} · {r.date}
                  </p>
                  <h3 className="font-display text-2xl leading-snug text-sand-100 md:text-3xl">
                    {r.title}
                  </h3>
                </div>
                <span className="mt-3 shrink-0 text-sand-100/30 transition-colors group-hover:text-ember-400 sm:mt-1">
                  ↗
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </main>
  )
}
