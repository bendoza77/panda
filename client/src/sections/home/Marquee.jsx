import { motion } from 'framer-motion'

const items = [
  'Crafted itineraries',
  '·',
  'Private guides',
  '·',
  'Slow travel',
  '·',
  'Awwwards journeys',
  '·',
  'Carbon thoughtful',
  '·',
  'Boutique stays',
  '·',
  'Photographer led',
  '·',
]

export default function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-sand-100/10 bg-forest-950/40 py-8">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 36, ease: 'linear', repeat: Infinity }}
      >
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            className="font-display text-3xl italic text-sand-100/80 lg:text-5xl"
          >
            {it}
          </span>
        ))}
      </motion.div>
    </section>
  )
}
