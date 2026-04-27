import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import SplitText from '@/components/ui/SplitText'
import MagneticButton from '@/components/ui/MagneticButton'
import Reveal, { StaggerGroup, StaggerItem } from '@/components/ui/Reveal'
import { useUIStore } from '@/store/useUIStore'

const amounts = [500, 1000, 2500, 5000, 10000]
const occasions = ['Anniversary', 'Birthday', 'Wedding', 'Graduation', 'Just because']

export default function GiftCards() {
  const [selected, setSelected] = useState(1000)
  const [custom, setCustom] = useState('')
  const [occasion, setOccasion] = useState('Anniversary')
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ from: '', to: '', message: '', email: '' })
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)
  const finalAmount = custom ? Number(custom) : selected

  return (
    <main className="relative overflow-hidden pt-40 pb-32">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-ember-500/10 blur-[120px]" />

      {/* HERO */}
      <header className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember-400">Gift cards</p>
        </Reveal>
        <h1 className="font-display text-[12vw] leading-[0.9] text-sand-100 md:text-[8vw] lg:text-[7.5rem]">
          <SplitText text="Give the gift" />
          <span className="block italic text-ember-400">
            <SplitText text="of going." delay={0.2} />
          </span>
        </h1>
        <Reveal delay={0.4}>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-sand-200/80">
            A Panda gift card lets someone you love choose their own journey — a destination,
            a private tour, or a bespoke trip designed just for them.
          </p>
        </Reveal>
      </header>

      <div className="my-24 h-px bg-gradient-to-r from-transparent via-sand-100/15 to-transparent" />

      {/* CARD BUILDER */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.div
              key="builder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-12 lg:grid-cols-[1fr_1.1fr]"
            >
              {/* LEFT: FORM */}
              <div className="space-y-10">
                {/* AMOUNT */}
                <div>
                  <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-ember-400">
                    Choose amount
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {amounts.map((a) => (
                      <button
                        key={a}
                        onClick={() => { setSelected(a); setCustom('') }}
                        onMouseEnter={() => setCursorVariant('hover')}
                        onMouseLeave={() => setCursorVariant('default')}
                        data-cursor
                        className={`rounded-full border px-5 py-2.5 font-mono text-sm transition-all duration-300 ${
                          selected === a && !custom
                            ? 'border-ember-400 bg-ember-500 text-ink-900'
                            : 'border-sand-100/15 text-sand-100/80 hover:border-sand-100/40'
                        }`}
                      >
                        ${a.toLocaleString()}
                      </button>
                    ))}
                    <input
                      type="number"
                      placeholder="Custom"
                      value={custom}
                      onChange={(e) => { setCustom(e.target.value); setSelected(null) }}
                      className="w-28 rounded-full border border-sand-100/15 bg-transparent px-5 py-2.5 font-mono text-sm text-sand-100 placeholder:text-sand-200/30 focus:border-ember-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* OCCASION */}
                <div>
                  <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-ember-400">
                    Occasion
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {occasions.map((o) => (
                      <button
                        key={o}
                        onClick={() => setOccasion(o)}
                        onMouseEnter={() => setCursorVariant('hover')}
                        onMouseLeave={() => setCursorVariant('default')}
                        data-cursor
                        className={`rounded-full border px-5 py-2.5 text-xs uppercase tracking-[0.22em] transition-all duration-300 ${
                          occasion === o
                            ? 'border-ember-400 bg-ember-500 text-ink-900'
                            : 'border-sand-100/15 text-sand-100/80 hover:border-sand-100/40'
                        }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>

                {/* PERSONAL DETAILS */}
                <div className="grid gap-5">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-ember-400">
                    Details
                  </p>
                  {[
                    { label: 'From (your name)', key: 'from' },
                    { label: 'To (recipient name)', key: 'to' },
                    { label: "Recipient's email", key: 'email' },
                  ].map((f) => (
                    <label key={f.key} className="relative block">
                      <input
                        type={f.key === 'email' ? 'email' : 'text'}
                        placeholder=" "
                        value={form[f.key]}
                        onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                        className="peer w-full border-b border-sand-100/15 bg-transparent py-3 text-lg text-sand-100 outline-none transition-colors placeholder-shown:placeholder:text-transparent focus:border-ember-400"
                      />
                      <span className="pointer-events-none absolute left-0 top-3 text-sm text-sand-200/50 transition-all duration-300 peer-placeholder-shown:top-3 peer-focus:-top-1 peer-focus:text-[10px] peer-focus:tracking-[0.32em] peer-focus:text-ember-400 peer-[&:not(:placeholder-shown)]:-top-1 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:tracking-[0.32em] uppercase tracking-[0.22em]">
                        {f.label}
                      </span>
                    </label>
                  ))}
                  <label className="relative block">
                    <textarea
                      rows={3}
                      placeholder=" "
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="peer w-full resize-none border-b border-sand-100/15 bg-transparent py-3 text-lg text-sand-100 outline-none transition-colors placeholder-shown:placeholder:text-transparent focus:border-ember-400"
                    />
                    <span className="pointer-events-none absolute left-0 top-3 text-sm uppercase tracking-[0.22em] text-sand-200/50 transition-all duration-300 peer-placeholder-shown:top-3 peer-focus:-top-1 peer-focus:text-[10px] peer-focus:tracking-[0.32em] peer-focus:text-ember-400 peer-[&:not(:placeholder-shown)]:-top-1 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:tracking-[0.32em]">
                      A personal message (optional)
                    </span>
                  </label>
                </div>

                <MagneticButton
                  onClick={() => form.from && form.to && form.email && setSent(true)}
                  className="w-full justify-center"
                >
                  Send the gift card — ${finalAmount ? finalAmount.toLocaleString() : '—'}
                  <span aria-hidden>→</span>
                </MagneticButton>
              </div>

              {/* RIGHT: LIVE CARD PREVIEW */}
              <Reveal direction="left">
                <div className="sticky top-32">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-sand-200/60">
                    Preview
                  </p>
                  <div className="relative aspect-[1.586/1] overflow-hidden rounded-2xl bg-gradient-to-br from-forest-800 to-forest-950 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.6)]">
                    {/* background texture */}
                    <div className="absolute inset-0 grid-radial opacity-30" />
                    <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-ember-500/25 blur-3xl" />
                    <div className="pointer-events-none absolute -top-10 -left-10 h-48 w-48 rounded-full bg-forest-500/20 blur-3xl" />

                    <div className="relative flex h-full flex-col justify-between p-10">
                      {/* TOP ROW */}
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-display text-xl text-sand-100 ring-1 ring-white/15">
                            P
                          </span>
                          <p className="mt-2 font-display text-2xl text-sand-100">Panda</p>
                        </div>
                        <span className="rounded-full bg-ember-500/20 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-ember-300">
                          {occasion}
                        </span>
                      </div>

                      {/* AMOUNT */}
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-sand-200/60">
                          Gift value
                        </p>
                        <p className="font-display text-6xl text-sand-100">
                          ${finalAmount ? finalAmount.toLocaleString() : '—'}
                        </p>
                        {form.message && (
                          <p className="mt-3 max-w-sm text-sm italic text-sand-200/80">
                            "{form.message}"
                          </p>
                        )}
                      </div>

                      {/* BOTTOM ROW */}
                      <div className="flex items-end justify-between border-t border-white/10 pt-4">
                        <p className="text-xs text-sand-200/60">
                          {form.from ? `From ${form.from}` : 'From —'}
                          {form.to && ` · To ${form.to}`}
                        </p>
                        <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-sand-200/40">
                          No expiry
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-2xl rounded-3xl border border-sand-100/10 bg-forest-900/40 p-16 text-center backdrop-blur-md"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-ember-500/20 text-2xl text-ember-400">
                ✓
              </div>
              <p className="text-xs uppercase tracking-[0.4em] text-ember-400">Gift sent</p>
              <h2 className="mt-3 font-display text-5xl text-sand-100">
                It is on its way to {form.to}.
              </h2>
              <p className="mt-4 text-sand-200/70">
                A beautifully designed email with the gift card is being sent to{' '}
                <span className="text-sand-100">{form.email}</span>. No expiry, redeemable
                against any Panda journey.
              </p>
              <button
                onClick={() => { setSent(false); setForm({ from: '', to: '', message: '', email: '' }) }}
                className="mt-8 text-sm uppercase tracking-[0.24em] text-ember-400 hover:text-ember-300"
              >
                Send another →
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  )
}
