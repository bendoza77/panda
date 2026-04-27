import { useLayoutEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/ui/SplitText'
import Reveal, { StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import MagneticButton from '@/components/ui/MagneticButton'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const commitments = [
  {
    n: '01',
    title: 'Overland first',
    body: 'We re-route every trip to replace short-haul flights with trains, ferries, and road journeys where travel time becomes part of the experience.',
    stat: '64%',
    statLabel: 'domestic flights cut since 2021',
  },
  {
    n: '02',
    title: 'Local by default',
    body: 'Every supplier — guide, driver, stay, restaurant — is locally owned and within the community visited. Money stays where it is spent.',
    stat: '100%',
    statLabel: 'locally owned suppliers',
  },
  {
    n: '03',
    title: 'Carbon transparent',
    body: 'We cost the carbon of every itinerary and share it plainly with the traveller before they book. No offsets hidden in a footnote.',
    stat: '4.2 t',
    statLabel: 'average CO₂ per two-week trip',
  },
  {
    n: '04',
    title: 'Small groups always',
    body: 'Smaller groups mean lower impact, deeper access, and a better relationship with the communities we pass through. We cap at eight.',
    stat: '8',
    statLabel: 'maximum group size — ever',
  },
]

const reports = [
  { year: '2025', label: 'Annual impact report', size: '2.1 MB' },
  { year: '2024', label: 'Annual impact report', size: '1.9 MB' },
  { year: '2023', label: 'B-Corp certification review', size: '0.8 MB' },
]

export default function Sustainability() {
  const lineRef = useRef(null)
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    if (!sectionRef.current || !lineRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current, { width: '0%' }, {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 60%',
          scrub: 0.8,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <main className="relative overflow-hidden pt-40 pb-32">
      <div className="pointer-events-none absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-forest-500/12 blur-[120px]" />

      {/* HERO */}
      <header className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember-400">
            Sustainability & B-Corp
          </p>
        </Reveal>
        <h1 className="font-display text-[11vw] leading-[0.9] text-sand-100 md:text-[8vw] lg:text-[7.5rem]">
          <SplitText text="Travel that" />
          <span className="block italic text-ember-400">
            <SplitText text="leaves less." delay={0.2} />
          </span>
        </h1>
        <Reveal delay={0.4}>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-sand-200/80">
            We are a certified B-Corp. That is not a badge we put on our website and forget about.
            It is a legal commitment embedded in our articles of incorporation. Here is exactly
            what it means in practice.
          </p>
        </Reveal>
      </header>

      {/* PROGRESS BAR */}
      <div ref={sectionRef} className="mx-auto mt-20 max-w-[1400px] px-6 lg:px-12">
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.32em] text-sand-200/50 mb-3">
          <span>B-Corp score progress</span>
          <span>Current: 92.4 / 200</span>
        </div>
        <div className="h-px bg-sand-100/10 w-full relative">
          <div ref={lineRef} className="absolute inset-y-0 left-0 bg-gradient-to-r from-ember-500 to-forest-400" style={{ width: 0 }} />
        </div>
      </div>

      <div className="my-24 h-px bg-gradient-to-r from-transparent via-sand-100/15 to-transparent" />

      {/* COMMITMENTS */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-12 text-xs uppercase tracking-[0.4em] text-ember-400">
            Our four commitments
          </p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {commitments.map((c) => (
            <motion.div
              key={c.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-sand-100/10 bg-forest-900/30 p-10 backdrop-blur-md transition-all hover:border-forest-400/40"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-sand-200/40">{c.n}</span>
                <div className="text-right">
                  <p className="font-display text-4xl text-ember-400">{c.stat}</p>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-sand-200/60">{c.statLabel}</p>
                </div>
              </div>
              <h3 className="mt-6 font-display text-3xl leading-tight text-sand-100">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-sand-200/70">{c.body}</p>
              <span className="absolute -bottom-px left-0 h-px w-0 bg-gradient-to-r from-forest-400 to-transparent transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </section>

      <div className="my-24 h-px bg-gradient-to-r from-transparent via-sand-100/15 to-transparent" />

      {/* REPORTS */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-10 text-xs uppercase tracking-[0.4em] text-ember-400">
            Impact reports
          </p>
        </Reveal>
        <ul className="divide-y divide-sand-100/10">
          {reports.map((r, i) => (
            <motion.li
              key={r.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group flex items-center justify-between gap-6 py-7"
            >
              <div className="flex items-center gap-6">
                <span className="font-mono text-xs text-ember-400">{r.year}</span>
                <span className="text-xl text-sand-100">{r.label}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="hidden font-mono text-xs text-sand-200/50 sm:block">{r.size}</span>
                <button className="rounded-full border border-sand-100/15 px-5 py-2 text-[10px] uppercase tracking-[0.24em] text-sand-100 transition-all hover:border-ember-400 hover:text-ember-400">
                  Download
                </button>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-forest-400/20 bg-gradient-to-br from-forest-900/60 to-forest-950/60 p-12 backdrop-blur-xl md:p-16">
            <div className="pointer-events-none absolute -top-20 -left-20 h-60 w-60 rounded-full bg-forest-400/15 blur-3xl" />
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-ember-400">
              Questions about our practices
            </p>
            <h2 className="mb-6 font-display text-5xl text-sand-100">
              We are happy to show our working.
            </h2>
            <MagneticButton as={Link} to="/contact">
              Get in touch <span aria-hidden>→</span>
            </MagneticButton>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
