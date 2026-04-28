import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useUIStore } from '@/store/useUIStore'
import { useViewport } from '@/hooks/useViewport'
import { getLenis } from '@/hooks/useLenis'

export default function PageTransition({ children }) {
  const { pathname } = useLocation()
  const setTransitioning = useUIStore((s) => s.setTransitioning)
  const { isMobile } = useViewport()

  useEffect(() => {
    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  const initial = isMobile ? { opacity: 0 } : { opacity: 0, y: 24 }
  const animate = isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }
  const exit    = isMobile ? { opacity: 0 } : { opacity: 0, y: -12 }
  const duration = isMobile ? 0.28 : 0.7

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => setTransitioning(false)}
    >
      <motion.div
        key={pathname}
        initial={initial}
        animate={animate}
        exit={exit}
        transition={{ duration, ease: isMobile ? 'easeOut' : [0.16, 1, 0.3, 1] }}
        onAnimationStart={() => setTransitioning(true)}
        onAnimationComplete={() => setTransitioning(false)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export function TransitionVeil() {
  const transitioning = useUIStore((s) => s.transitioning)
  const { isMobile } = useViewport()

  return (
    <AnimatePresence>
      {transitioning && (
        <motion.div
          key="veil"
          initial={isMobile ? { opacity: 0 } : { scaleY: 0 }}
          animate={isMobile ? { opacity: 1 } : { scaleY: 1 }}
          exit={isMobile ? { opacity: 0 } : { scaleY: 0 }}
          transition={{
            duration: isMobile ? 0.25 : 0.6,
            ease: isMobile ? 'easeOut' : [0.86, 0, 0.07, 1],
          }}
          className="pointer-events-none fixed inset-0 z-[200] origin-top bg-forest-950"
        />
      )}
    </AnimatePresence>
  )
}
