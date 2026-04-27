import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import SplitText from '@/components/ui/SplitText'
import MagneticButton from '@/components/ui/MagneticButton'
import Reveal, { StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import { useUIStore } from '@/store/useUIStore'

const steps = [
  {
    n: '01',
    title: 'A conversation',
    body: 'We begin with a call — no forms, no questionnaires. Just a conversation about where you have been, what moved you, and where you feel the pull.',
  },
  {
    n: '02',
    title: 'The brief',
    body: 'From that conversation we write a two-page brief: the emotional arc of the trip, the pace, the kinds of places you will sleep in, the things we leave out on purpose.',
  },
  {
    n: '03',
    title: 'The itinerary',
    body: 'We design the journey — day by day, often hour by hour for the moments that matter most. You read it, push back, and we iterate until it sounds like you.',
  },
  {
    n: '04',
    title: 'The journey',
    body: 'You travel. Your guide is with you. Our studio is reachable around the clock. Every contingency is already accounted for.',
  },
]

const signals = [
  'You want somewhere entirely off the standard route.',
  'You are travelling as a couple for an anniversary or honeymoon.',
  'You need a private group — family, friends, colleagues.',
  'You want a photographer or filmmaker to join you.',
  'Your schedule requires exact dates and no compromises.',
  'You simply want the best version of a place, arranged quietly.',
]

export default function Bespoke() {
  const [open, setOpen] = useState(null)
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)

  return (
    <main className="relative overflow-hidden pt-40 pb-32">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[700px] w-[700px] rounded-full bg-ember-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-[60%] -left-40 h-[500px] w-[500px] rounded-full bg-forest-500/10 blur-[100px]" />

      {/* HERO */}
      <header className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember-400">
            Private & bespoke
          </p>
        </Reveal>
        <h1 className="font-display text-[13vw] leading-[0.9] text-sand-100 md:text-[9vw] lg:text-[8rem]">
          <SplitText text="A journey" />
          <span className="block italic text-ember-400">
            <SplitText text="built for" delay={0.18} />
          </span>
          <SplitText text="one person." delay={0.34} />
        </h1>
        <Reveal delay={0.5} className="mt-10 grid gap-10 lg:grid-cols-2">
          <p className="text-xl leading-relaxed text-sand-200/80">
            Bespoke is Panda at its most private. A single itinerary, designed entirely around
            one traveller or one group. No catalogue to choose from — just a blank page and
            the right questions.
          </p>
          <div className="flex items-end">
            <div className="w-full rounded-2xl border border-sand-100/10 bg-forest-900/40 p-6 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.32em] text-ember-400">Pricing</p>
              <p className="mt-2 font-display text-4xl text-sand-100">From $8,000</p>
              <p className="mt-1 text-sm text-sand-200/70">per journey, any size group</p>
            </div>
          </div>
        </Reveal>
      </header>

      {/* DIVIDER */}
      <div className="my-24 h-px bg-gradient-to-r from-transparent via-sand-100/15 to-transparent" />

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-16 text-xs uppercase tracking-[0.4em] text-ember-400">
            How it works
          </p>
        </Reveal>
        <StaggerGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <StaggerItem key={s.n}>
              <div className="group relative overflow-hidden rounded-2xl border border-sand-100/10 bg-forest-900/30 p-8 backdrop-blur-md transition-all duration-500 hover:border-ember-400/40">
                <span className="mb-6 block font-mono text-xs uppercase tracking-[0.32em] text-ember-400">
                  {s.n}
                </span>
                <h3 className="font-display text-3xl leading-tight text-sand-100">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand-200/70">{s.body}</p>
                <span className="absolute -bottom-px left-0 h-px w-0 bg-gradient-to-r from-ember-500 to-transparent transition-all duration-700 group-hover:w-full" />
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {/* DIVIDER */}
      <div className="my-24 h-px bg-gradient-to-r from-transparent via-sand-100/15 to-transparent" />

      {/* SIGNALS */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember-400">
              Is bespoke right for you?
            </p>
            <h2 className="font-display text-5xl leading-[0.95] text-sand-100 md:text-6xl">
              Some signals it <span className="italic text-ember-400">might be.</span>
            </h2>
          </Reveal>
          <StaggerGroup className="flex flex-col divide-y divide-sand-100/10">
            {signals.map((sig, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-5 py-5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-ember-400/50 text-[10px] text-ember-400">
                    ✓
                  </span>
                  <p className="text-lg text-sand-100/90">{sig}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-32 max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-sand-100/10 bg-gradient-to-br from-forest-900/60 to-forest-950/60 p-12 backdrop-blur-xl md:p-20">
            <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-ember-500/15 blur-3xl" />
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-ember-400">
              Start the conversation
            </p>
            <h2 className="mb-8 font-display text-5xl leading-tight text-sand-100 md:text-6xl lg:text-7xl">
              No itinerary yet.
              <span className="block italic text-ember-400">Just a blank page.</span>
            </h2>
            <div className="flex flex-wrap gap-4">
              <MagneticButton as={Link} to="/contact">
                Begin with a call <span aria-hidden>→</span>
              </MagneticButton>
              <MagneticButton as={Link} to="/tours" variant="ghost">
                Browse signature tours
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
