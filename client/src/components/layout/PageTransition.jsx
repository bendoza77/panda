import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { useUIStore } from '@/store/useUIStore'
import { getLenis } from '@/hooks/useLenis'

export default function PageTransition({ children }) {
  const { pathname } = useLocation()
  const setTransitioning = useUIStore((s) => s.setTransitioning)

  useEffect(() => {
    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => setTransitioning(false)}
    >
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
  return (
    <AnimatePresence>
      {transitioning && (
        <motion.div
          key="veil"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.6, ease: [0.86, 0, 0.07, 1] }}
          className="pointer-events-none fixed inset-0 z-[200] origin-top bg-forest-950"
        />
      )}
    </AnimatePresence>
  )
}
