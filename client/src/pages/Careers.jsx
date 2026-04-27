import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SplitText from '@/components/ui/SplitText'
import MagneticButton from '@/components/ui/MagneticButton'
import Reveal, { StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import { useUIStore } from '@/store/useUIStore'

const values = [
  { title: 'Curious by default', body: 'We hire people who read the menus on the walls. Who walk the extra ten minutes to see what is around the corner. Curiosity is not a bonus here.' },
  { title: 'Honest about pace', body: 'We work hard in bursts and rest intentionally. No performative hustle. No badge of honour for being the last to leave.' },
  { title: 'Small on purpose', body: 'We have turned down growth that would make us worse. Every person here knows how they connect to the travellers we serve.' },
  { title: 'Rooted somewhere', body: 'Most of us live in the cities and regions we work with. That rootedness is what makes the work real.' },
]

const roles = [
  {
    title: 'Senior Journey Designer',
    location: 'Tbilisi, Georgia (hybrid)',
    type: 'Full-time',
    dept: 'Travel',
    description:
      'You design journeys in close collaboration with clients and our in-house guides. You have deep personal knowledge of at least two regions — ideally Central Asia and the Caucasus — and a writer\'s eye for narrative pacing.',
  },
  {
    title: 'Guide — Patagonia & Southern Andes',
    location: 'Puerto Natales, Chile',
    type: 'Seasonal contract',
    dept: 'Field',
    description:
      'Lead private groups through some of the planet\'s most dramatic terrain. You should know Torres del Paine and the Carretera Austral well enough to take people off the published path.',
  },
  {
    title: 'Creative Producer',
    location: 'Remote (Europe / Americas)',
    type: 'Full-time',
    dept: 'Studio',
    description:
      'Build and manage the editorial, photo, and video output of the studio. You understand how storytelling translates across long-form writing, social, and documentary film.',
  },
  {
    title: 'Operations Coordinator',
    location: 'Tbilisi, Georgia',
    type: 'Full-time',
    dept: 'Operations',
    description:
      'The backbone of every trip that moves. You coordinate logistics, supplier relationships, and contingency planning across all active itineraries. Detail-obsessed, calm under pressure.',
  },
]

export default function Careers() {
  const [expanded, setExpanded] = useState(null)
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)

  return (
    <main className="relative overflow-hidden pt-40 pb-32">
      <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-ember-500/8 blur-[140px]" />

      {/* HERO */}
      <header className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember-400">Work with us</p>
        </Reveal>
        <h1 className="font-display text-[12vw] leading-[0.9] text-sand-100 md:text-[8vw] lg:text-[7.5rem]">
          <SplitText text="Build something" />
          <span className="block italic text-ember-400">
            <SplitText text="worth going to." delay={0.2} />
          </span>
        </h1>
        <Reveal delay={0.4}>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-sand-200/80">
            Twenty-three people. Six cities. One shared obsession with making travel matter more.
            We are not always hiring — but we are always worth talking to.
          </p>
        </Reveal>
      </header>

      <div className="my-24 h-px bg-gradient-to-r from-transparent via-sand-100/15 to-transparent" />

      {/* VALUES */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-12 text-xs uppercase tracking-[0.4em] text-ember-400">What we believe</p>
        </Reveal>
        <StaggerGroup className="grid gap-6 md:grid-cols-2">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="group relative overflow-hidden rounded-2xl border border-sand-100/10 bg-forest-900/30 p-8 backdrop-blur-md transition-all hover:border-ember-400/40">
                <h3 className="font-display text-3xl text-sand-100">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-sand-200/70">{v.body}</p>
                <span className="absolute -bottom-px left-0 h-px w-0 bg-gradient-to-r from-ember-500 to-transparent transition-all duration-700 group-hover:w-full" />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <div className="my-24 h-px bg-gradient-to-r from-transparent via-sand-100/15 to-transparent" />

      {/* OPEN ROLES */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="mb-12 flex items-baseline justify-between">
            <p className="text-xs uppercase tracking-[0.4em] text-ember-400">Open roles</p>
            <span className="font-mono text-sm text-sand-200/50">{roles.length} positions</span>
          </div>
        </Reveal>
        <ul className="flex flex-col gap-3">
          {roles.map((r, i) => (
            <motion.li
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
                expanded === i ? 'border-ember-400/50 bg-forest-900/60' : 'border-sand-100/10 bg-forest-900/20'
              } backdrop-blur-md`}
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                data-cursor
                className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-ember-400/30 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-ember-400">
                      {r.dept}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-sand-200/50">
                      {r.type}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-3xl text-sand-100">{r.title}</h3>
                  <p className="mt-1 text-sm text-sand-200/60">{r.location}</p>
                </div>
                <motion.span
                  animate={{ rotate: expanded === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 text-2xl text-sand-100/50"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="border-t border-sand-100/10 px-8 pb-8 pt-6">
                      <p className="mb-6 max-w-2xl leading-relaxed text-sand-200/80">
                        {r.description}
                      </p>
                      <MagneticButton variant="ghost" as="a" href="mailto:careers@panda.studio">
                        Apply for this role <span aria-hidden>→</span>
                      </MagneticButton>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* SPECULATIVE */}
      <section className="mx-auto mt-16 max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="rounded-2xl border border-sand-100/10 bg-forest-900/20 p-10 backdrop-blur-md">
            <p className="text-xs uppercase tracking-[0.4em] text-ember-400">
              Nothing that fits?
            </p>
            <h3 className="mt-3 font-display text-4xl text-sand-100">Send us a speculative brief.</h3>
            <p className="mt-3 max-w-xl text-sand-200/70">
              If you have something unusual to offer — a particular skill, region, or perspective — we are
              genuinely interested in hearing it. Write to{' '}
              <a href="mailto:careers@panda.studio" className="text-ember-400 hover:text-ember-300">
                careers@panda.studio
              </a>.
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
