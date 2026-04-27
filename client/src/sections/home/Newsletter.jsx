import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useUIStore } from '@/store/useUIStore'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)

  const onSubmit = (e) => {
    e.preventDefault()
    if (email.includes('@')) {
      setSent(true)
      setEmail('')
    }
  }

  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl border border-sand-100/10 bg-gradient-to-br from-forest-900/60 via-forest-900/40 to-forest-950/60 p-10 backdrop-blur-xl md:p-16">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-ember-500/15 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-forest-500/10 blur-3xl" />

          <div className="relative grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.4em] text-ember-400">
                The letter
              </p>
              <h2 className="font-display text-4xl leading-tight text-sand-100 md:text-5xl">
                A short, slow-paced
                <span className="block italic text-ember-400">postcard, monthly.</span>
              </h2>
              <p className="mt-4 max-w-sm text-sm text-sand-200/70">
                One destination. One guide. One thing worth packing. No marketing fluff,
                no tracking pixels.
              </p>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-3">
              <div className="relative flex items-center rounded-full border border-sand-100/15 bg-forest-950/50 backdrop-blur-md focus-within:border-ember-400">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  data-cursor
                  className="w-full bg-transparent px-6 py-4 text-sm text-sand-100 placeholder:text-sand-200/30 focus:outline-none"
                />
                <button
                  type="submit"
                  data-cursor
                  onMouseEnter={() => setCursorVariant('hover')}
                  onMouseLeave={() => setCursorVariant('default')}
                  className="m-1 rounded-full bg-ember-500 px-6 py-3 text-xs uppercase tracking-[0.24em] text-ink-900 transition-colors hover:bg-ember-400"
                >
                  Subscribe
                </button>
              </div>
              <AnimatePresence>
                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-xs uppercase tracking-[0.24em] text-ember-300"
                  >
                    · Thank you. Look out for the next letter.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
