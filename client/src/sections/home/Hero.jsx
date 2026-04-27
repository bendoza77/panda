import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CanvasWrapper from '@/components/3d/CanvasWrapper'
import MagneticButton from '@/components/ui/MagneticButton'
import SplitText from '@/components/ui/SplitText'
import { useUIStore } from '@/store/useUIStore'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const setSceneProgress = useUIStore((s) => s.setSceneProgress)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.8,
      onUpdate: (self) => setSceneProgress(self.progress),
    })
    return () => trigger.kill()
  }, [setSceneProgress])

  return (
    <section
      ref={sectionRef}
      className="relative h-[120vh] w-full overflow-hidden"
      data-scene="hero"
    >
      <div className="sticky top-0 h-screen w-full">
        <CanvasWrapper />

        {/* gradient overlays */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-forest-950/40 via-transparent to-forest-950" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(6,29,21,0.7)_100%)]" />

        {/* TOP META BAR */}
        <div className="absolute top-32 left-0 right-0 z-10 px-6 lg:px-12">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between text-[10px] uppercase tracking-[0.4em] text-sand-200/60">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="hidden md:block"
            >
              · Bespoke travel · est. 2006
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="hidden md:block"
            >
              N° 01 — The Earth, slowly
            </motion.span>
          </div>
        </div>

        {/* CENTER COPY */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-sand-100/15 bg-forest-900/40 px-4 py-2 text-[10px] uppercase tracking-[0.32em] text-sand-200 backdrop-blur-md"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember-500" />
              </span>
              Now booking 2026 · 12 spots remain
            </motion.p>

            <h1 className="font-display text-[14vw] leading-[0.92] tracking-tight text-sand-100 md:text-[10vw] lg:text-[8.4rem]">
              <span className="block">
                <SplitText text="Explore the" />
              </span>
              <span className="block italic text-ember-400">
                <SplitText text="world" delay={0.2} /> <SplitText text="with Panda." delay={0.35} />
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
            >
              <p className="max-w-md text-base leading-relaxed text-sand-200/80">
                A studio of guides and storytellers crafting cinematic, slow-paced
                journeys to the parts of the planet still worth getting lost in.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <MagneticButton as={Link} to="/destinations" variant="primary">
                  Begin the journey
                  <span aria-hidden>→</span>
                </MagneticButton>
                <MagneticButton as={Link} to="/tours" variant="ghost">
                  See the tours
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SCROLL HINT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-center"
        >
          <p className="mb-2 text-[10px] uppercase tracking-[0.32em] text-sand-200/60">
            Scroll to begin
          </p>
          <span className="mx-auto block h-10 w-px bg-gradient-to-b from-sand-100/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
