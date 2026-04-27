import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import SplitText from '@/components/ui/SplitText'
import Reveal from '@/components/ui/Reveal'
import { useUIStore } from '@/store/useUIStore'

const categories = ['All', 'Booking', 'The trip', 'Bespoke', 'Sustainability', 'Payments']

const faqs = [
  {
    cat: 'Booking',
    q: 'How far in advance should I book?',
    a: 'For signature tours, we recommend at least four months ahead — some seasonal departures fill a year in advance. Bespoke journeys need six to eight months for design and logistics, particularly for complex multi-country routes.',
  },
  {
    cat: 'Booking',
    q: 'What is the deposit structure?',
    a: '25% deposit to reserve your place, then 75% due twelve weeks before departure. For bespoke journeys the structure is discussed during the planning process, depending on lead time and supplier commitments.',
  },
  {
    cat: 'Booking',
    q: 'What happens if I need to cancel?',
    a: 'Full refund within 48 hours of booking. After that, our policy scales: up to twelve weeks before departure we refund the deposit minus a 10% administration fee. Inside twelve weeks, deposits are generally non-refundable, but trip credit is available. We strongly recommend travel insurance.',
  },
  {
    cat: 'The trip',
    q: 'What is included in the trip price?',
    a: 'All accommodation, all in-destination transport, guide fees, and the activities listed in the itinerary. International flights are not included — we can advise on routing but do not book them, allowing you to use points or preferred airlines. Meals are a mix: some are included for the experience of eating together, others are intentionally left free so you can wander and discover.',
  },
  {
    cat: 'The trip',
    q: 'How big are the groups?',
    a: 'A maximum of eight travellers on any signature departure. Private and bespoke journeys are just your party — no other guests, ever. This is non-negotiable for us.',
  },
  {
    cat: 'The trip',
    q: 'What fitness level do your tours require?',
    a: 'Each itinerary lists a pace (Slow, Considered, or Active) and a realistic description of physical requirements. Slow means accessible to most healthy adults. Active means some days involve four to eight hours of walking or hiking on uneven terrain. We are honest about this and happy to discuss your specific situation.',
  },
  {
    cat: 'The trip',
    q: 'Can dietary requirements be accommodated?',
    a: 'Yes, reliably. We pass all requirements to every supplier along the route, and your guide is briefed before departure. Remote areas require more notice and creativity, but we have never had a traveller go hungry.',
  },
  {
    cat: 'Bespoke',
    q: 'How long does a bespoke trip take to design?',
    a: 'Usually four to eight weeks from first conversation to a finalised itinerary. Complex multi-country routes or journeys requiring unusual permits take longer. We will tell you honestly at the outset.',
  },
  {
    cat: 'Bespoke',
    q: 'Can I combine two regions in one trip?',
    a: 'Yes — many of our best bespoke journeys cross two or three countries. We design the crossings so they feel intentional, not rushed. The key is giving us enough days to do justice to each place.',
  },
  {
    cat: 'Sustainability',
    q: 'How do you calculate trip carbon?',
    a: 'We use the ICAO methodology for any flights within the journey, and DEFRA coefficients for surface transport. Accommodation is estimated from our suppliers\' reported energy use. The total is shared in your trip documentation.',
  },
  {
    cat: 'Sustainability',
    q: 'Do you offer carbon offsetting?',
    a: 'We do not offer offsetting as standard, and we are cautious about projects that are difficult to verify. We focus instead on reducing emissions at source — overland routing, small groups, local suppliers — and being honest about what remains.',
  },
  {
    cat: 'Payments',
    q: 'What currencies do you accept?',
    a: 'USD, EUR, and GBP. We invoice in whichever is most natural for you. Bank transfer is preferred; we also accept major credit cards with a 2% processing fee.',
  },
  {
    cat: 'Payments',
    q: 'Are gift cards transferable?',
    a: 'Yes, completely. A Panda gift card is redeemable by whoever holds it, against any journey, with no expiry date.',
  },
]

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [open, setOpen] = useState(null)
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)

  const filtered = activeCategory === 'All' ? faqs : faqs.filter((f) => f.cat === activeCategory)

  return (
    <main className="relative overflow-hidden pt-40 pb-32">
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-ember-500/8 blur-[120px]" />

      {/* HERO */}
      <header className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember-400">
            Frequently asked
          </p>
        </Reveal>
        <h1 className="font-display text-[12vw] leading-[0.9] text-sand-100 md:text-[8vw] lg:text-[7.5rem]">
          <SplitText text="Questions," />
          <span className="block italic text-ember-400">
            <SplitText text="plainly answered." delay={0.18} />
          </span>
        </h1>
        <Reveal delay={0.35}>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-sand-200/80">
            If you cannot find what you are looking for, write to us at{' '}
            <a href="mailto:hello@panda.studio" className="text-ember-400 hover:text-ember-300">
              hello@panda.studio
            </a>
            {' '}— we answer every email.
          </p>
        </Reveal>
      </header>

      <div className="my-16 h-px bg-gradient-to-r from-transparent via-sand-100/15 to-transparent" />

      {/* FILTERS */}
      <Reveal className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => { setActiveCategory(c); setOpen(null) }}
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              data-cursor
              className={`rounded-full border px-5 py-2 text-[10px] uppercase tracking-[0.28em] transition-all duration-300 ${
                activeCategory === c
                  ? 'border-ember-400 bg-ember-500 text-ink-900'
                  : 'border-sand-100/15 text-sand-100/70 hover:border-sand-100/40'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      {/* ACCORDION */}
      <section className="mx-auto mt-12 max-w-[1400px] px-6 lg:px-12">
        <AnimatePresence mode="popLayout">
          <motion.ul layout className="flex flex-col gap-3">
            {filtered.map((f, i) => (
              <motion.li
                layout
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className={`overflow-hidden rounded-2xl border transition-all duration-400 ${
                  open === f.q ? 'border-ember-400/40 bg-forest-900/60' : 'border-sand-100/10 bg-forest-900/20'
                } backdrop-blur-md`}
              >
                <button
                  onClick={() => setOpen(open === f.q ? null : f.q)}
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  data-cursor
                  className="flex w-full items-start justify-between gap-6 px-8 py-6 text-left"
                >
                  <div>
                    <span className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-ember-400">
                      {f.cat}
                    </span>
                    <span className="font-display text-2xl text-sand-100 md:text-3xl">{f.q}</span>
                  </div>
                  <motion.span
                    animate={{ rotate: open === f.q ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 shrink-0 text-2xl text-sand-100/40"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {open === f.q && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="border-t border-sand-100/10 px-8 pb-8 pt-5 leading-relaxed text-sand-200/80">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-sand-200/50">
            No questions in this category yet.
          </div>
        )}
      </section>

      {/* BOTTOM CTA */}
      <Reveal className="mx-auto mt-20 max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-sand-100/10 bg-forest-900/20 p-8 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-3xl text-sand-100">Still have a question?</p>
          <a href="mailto:hello@panda.studio" className="inline-flex items-center gap-2 rounded-full border border-sand-100/20 px-6 py-3 text-xs uppercase tracking-[0.24em] text-sand-100 transition-all hover:border-ember-400 hover:text-ember-400">
            Write to us <span aria-hidden>→</span>
          </a>
        </div>
      </Reveal>
    </main>
  )
}
