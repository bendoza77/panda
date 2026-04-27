import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useUIStore } from '@/store/useUIStore'
import MagneticButton from '@/components/ui/MagneticButton'
import SplitText from '@/components/ui/SplitText'

function FloatField({ label, type = 'text', value, onChange, name, as = 'input' }) {
  const Tag = as
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)
  return (
    <label className="relative block">
      <Tag
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        rows={as === 'textarea' ? 4 : undefined}
        placeholder=" "
        data-cursor
        onMouseEnter={() => setCursorVariant('hover')}
        onMouseLeave={() => setCursorVariant('default')}
        className="peer w-full resize-none border-b border-sand-100/15 bg-transparent px-0 py-4 text-lg text-sand-100 outline-none transition-colors placeholder-shown:placeholder:text-transparent focus:border-ember-400"
      />
      <span className="pointer-events-none absolute left-0 top-4 text-sm uppercase tracking-[0.24em] text-sand-200/50 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:tracking-[0.18em] peer-focus:-top-1 peer-focus:text-[10px] peer-focus:tracking-[0.32em] peer-focus:text-ember-400 peer-[&:not(:placeholder-shown)]:-top-1 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:tracking-[0.32em]">
        {label}
      </span>
    </label>
  )
}

export default function Contact() {
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)
  const [form, setForm] = useState({
    name: '',
    email: '',
    destination: '',
    travellers: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="relative pt-40 pb-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <header className="mb-20">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember-400">
            Begin a conversation
          </p>
          <h1 className="font-display text-6xl leading-[0.92] text-sand-100 md:text-8xl lg:text-[10rem]">
            <SplitText text="Tell us where" />
            <span className="block italic text-ember-400">
              <SplitText text="you're dreaming." delay={0.2} />
            </span>
          </h1>
        </header>

        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          {/* FORM */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={submit}
                  className="grid gap-8 md:grid-cols-2"
                >
                  <FloatField label="Your name" name="name" value={form.name} onChange={update} />
                  <FloatField
                    label="Email address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                  />
                  <FloatField
                    label="Where to?"
                    name="destination"
                    value={form.destination}
                    onChange={update}
                  />
                  <FloatField
                    label="How many travellers"
                    name="travellers"
                    value={form.travellers}
                    onChange={update}
                  />
                  <div className="md:col-span-2">
                    <FloatField
                      label="Tell us about the trip"
                      name="message"
                      value={form.message}
                      onChange={update}
                      as="textarea"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <MagneticButton type="submit">
                      Send the brief <span aria-hidden>→</span>
                    </MagneticButton>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl border border-sand-100/10 bg-forest-900/40 p-12 backdrop-blur-md"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-ember-400">
                    · Received
                  </p>
                  <h2 className="mt-3 font-display text-5xl text-sand-100">
                    Thank you, {form.name || 'traveller'}.
                  </h2>
                  <p className="mt-3 max-w-md text-sand-200/70">
                    A guide will be in touch within 24 hours, usually faster. In the
                    meantime, perhaps a postcard from our journal.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* META */}
          <aside className="space-y-10 lg:border-l lg:border-sand-100/10 lg:pl-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-ember-400">Studio</p>
              <p className="mt-3 font-display text-2xl text-sand-100">
                14 Aghmashenebeli Ave, Tbilisi 0102
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-ember-400">Reach</p>
              <a
                href="mailto:hello@panda.studio"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                data-cursor
                className="mt-3 block font-display text-2xl text-sand-100 hover:text-ember-400"
              >
                hello@panda.studio
              </a>
              <p className="mt-1 font-mono text-sm text-sand-200/60">+995 32 219 0008</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-ember-400">Hours</p>
              <p className="mt-3 font-display text-2xl text-sand-100">
                Mon — Fri, 09:00 — 19:00 GET
              </p>
            </div>

            {/* Map placeholder */}
            <div className="relative h-72 overflow-hidden rounded-2xl border border-sand-100/10">
              <div className="absolute inset-0 bg-gradient-to-br from-forest-700/40 to-forest-950" />
              <div className="absolute inset-0 grid-radial opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <span className="absolute inset-0 animate-ping rounded-full bg-ember-500/40" />
                  <span className="relative block h-3 w-3 rounded-full bg-ember-500 ring-4 ring-ember-500/30" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.32em] text-sand-100/70">
                41.7151° N · 44.8271° E
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
