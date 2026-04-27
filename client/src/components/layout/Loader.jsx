import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Loader() {
  const [done, setDone] = useState(false)
  const [n, setN] = useState(0)

  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const dur = 1600
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur)
      setN(Math.round(p * 100))
      if (p < 1) raf = requestAnimationFrame(tick)
      else setTimeout(() => setDone(true), 400)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 1, ease: [0.86, 0, 0.07, 1] }}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-forest-950"
        >
          <div className="text-center">
            <p className="mb-8 font-display text-[10vw] leading-none text-sand-100 md:text-[6vw]">
              Panda
            </p>
            <div className="relative mx-auto h-px w-64 overflow-hidden bg-sand-100/10">
              <motion.div
                className="absolute inset-y-0 left-0 bg-ember-500"
                style={{ width: `${n}%` }}
              />
            </div>
            <p className="mt-4 font-mono text-xs uppercase tracking-[0.4em] text-sand-200/60">
              {n}% — gathering passports
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
