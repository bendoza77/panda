import { motion } from 'framer-motion'
import SplitText from '@/components/ui/SplitText'

const values = [
  {
    n: '01',
    title: 'Cinematic by design',
    body: 'Every itinerary is staged like a film — pacing, light, intermissions. We sweat the small frames.',
  },
  {
    n: '02',
    title: 'Born-there guides',
    body: 'No outsourced guides. Each Panda guide is rooted in the land and the people you meet.',
  },
  {
    n: '03',
    title: 'Intentionally small',
    body: 'A maximum of eight travellers per group, and around forty itineraries shipped each year.',
  },
  {
    n: '04',
    title: 'Carbon thoughtful',
    body: 'Overland where it makes sense. Slow trains over short flights. Local hosts over chains.',
  },
]

export default function WhyUs() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember-400">Why Panda</p>
            <h2 className="font-display text-5xl leading-[0.95] text-sand-100 md:text-6xl">
              <SplitText text="A studio," />
              <span className="italic text-ember-400">
                <SplitText text="not a" delay={0.18} /> <SplitText text="catalogue." delay={0.3} />
              </span>
            </h2>
            <p className="mt-8 max-w-md leading-relaxed text-sand-200/70">
              We are not OTA. We will not sell you 47 hotels in a single search.
              We make a small number of journeys, very carefully, for travellers who would
              rather feel a place than tick it.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.n}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-sand-100/10 bg-gradient-to-br from-forest-900/40 to-forest-950/40 p-8 backdrop-blur-md transition-all duration-500 hover:border-ember-400/40 hover:bg-forest-900/60"
              >
                <span className="absolute right-6 top-6 font-mono text-xs text-sand-200/40">
                  {v.n}
                </span>
                <h3 className="font-display text-3xl text-sand-100">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-sand-200/70">{v.body}</p>
                <span className="absolute -bottom-px left-0 h-px w-0 bg-gradient-to-r from-ember-500 to-transparent transition-all duration-700 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
