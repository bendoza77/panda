import { useLayoutEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '@/components/ui/SplitText'

gsap.registerPlugin(ScrollTrigger)

const timeline = [
  {
    year: '2006',
    title: 'A small shop in Tbilisi',
    body: 'Founded by two guides above a bakery on Aghmashenebeli. Three trips that first year.',
  },
  {
    year: '2011',
    title: 'First slow journey',
    body: 'A 21-day Silk Road traverse — overland, no flights — that quietly defined the Panda voice.',
  },
  {
    year: '2017',
    title: 'Studio of guides',
    body: 'Twenty in-house guides across four continents. We start saying no more often than yes.',
  },
  {
    year: '2021',
    title: 'A B-Corp commitment',
    body: 'Routed every itinerary through carbon costing. Cut domestic flights by 64% in two years.',
  },
  {
    year: '2026',
    title: 'You, somewhere new',
    body: 'Forty journeys this year, eighty last. We grow slowly so we can grow well.',
  },
]

export default function About() {
  const ref = useRef(null)
  const lineRef = useRef(null)

  useLayoutEffect(() => {
    if (!ref.current || !lineRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 60%',
            end: 'bottom 70%',
            scrub: 0.8,
          },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <main className="relative pt-40 pb-32">
      <header className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember-400">
          The studio
        </p>
        <h1 className="font-display text-6xl leading-[0.92] text-sand-100 md:text-8xl lg:text-[10rem]">
          <SplitText text="A studio of" />
          <span className="block italic text-ember-400">
            <SplitText text="patient" delay={0.16} /> <SplitText text="travellers." delay={0.3} />
          </span>
        </h1>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <p className="text-xl leading-relaxed text-sand-200/85 md:text-2xl">
            Panda is twenty-three people, six offices, and one belief: travel is at its best
            when it slows you down enough to notice the thing you came for. We are not the
            biggest. We are not trying to be.
          </p>
          <div className="grid grid-cols-2 gap-6 self-end">
            {[
              { k: 'Team', v: '23' },
              { k: 'Cities', v: '6' },
              { k: 'Languages', v: '17' },
              { k: 'Years', v: '19' },
            ].map((s) => (
              <div key={s.k} className="rounded-xl border border-sand-100/10 bg-forest-900/30 p-5">
                <p className="font-display text-4xl text-sand-100">{s.v}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-sand-200/60">
                  {s.k}
                </p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* TIMELINE */}
      <section ref={ref} className="relative mt-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <p className="mb-12 text-xs uppercase tracking-[0.4em] text-ember-400">
            Twenty years, briefly
          </p>

          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-sand-100/10" />
            <div
              ref={lineRef}
              className="absolute left-3 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-ember-400 to-ember-700"
            />

            <ul className="space-y-20">
              {timeline.map((t, i) => (
                <motion.li
                  key={t.year}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-16"
                >
                  <span className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-sand-100/20 bg-forest-950">
                    <span className="h-2 w-2 rounded-full bg-ember-400" />
                  </span>
                  <p className="font-mono text-xs uppercase tracking-[0.32em] text-ember-400">
                    {t.year}
                  </p>
                  <h3 className="mt-2 font-display text-4xl leading-tight text-sand-100 md:text-5xl">
                    {t.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-lg text-sand-200/75">{t.body}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
