import { motion } from 'framer-motion'
import { useViewport } from '@/hooks/useViewport'

const variants = {
  up:    { hidden: { y: 40, opacity: 0 }, show: { y: 0, opacity: 1 } },
  down:  { hidden: { y: -40, opacity: 0 }, show: { y: 0, opacity: 1 } },
  left:  { hidden: { x: 40, opacity: 0 }, show: { x: 0, opacity: 1 } },
  right: { hidden: { x: -40, opacity: 0 }, show: { x: 0, opacity: 1 } },
  fade:  { hidden: { opacity: 0 }, show: { opacity: 1 } },
}

const mobileVariants = {
  up:    { hidden: { opacity: 0 }, show: { opacity: 1 } },
  down:  { hidden: { opacity: 0 }, show: { opacity: 1 } },
  left:  { hidden: { opacity: 0 }, show: { opacity: 1 } },
  right: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  fade:  { hidden: { opacity: 0 }, show: { opacity: 1 } },
}

export default function Reveal({
  children,
  as: Tag = 'div',
  direction = 'up',
  delay = 0,
  duration = 0.9,
  className = '',
  amount = 0.3,
  once = true,
}) {
  const { isMobile } = useViewport()
  const MotionTag = motion[Tag] || motion.div
  const activeVariants = isMobile ? mobileVariants[direction] : variants[direction]
  const activeDuration = isMobile ? Math.min(duration * 0.55, 0.45) : duration

  return (
    <MotionTag
      className={className}
      variants={activeVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{
        duration: activeDuration,
        delay,
        ease: isMobile ? 'easeOut' : [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerGroup({ children, className = '', stagger = 0.1, delay = 0, once = true }) {
  const { isMobile } = useViewport()
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: isMobile ? 0.05 : stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', direction = 'up', duration = 0.8 }) {
  const { isMobile } = useViewport()
  const activeVariants = isMobile ? mobileVariants[direction] : variants[direction]
  const activeDuration = isMobile ? Math.min(duration * 0.55, 0.45) : duration

  return (
    <motion.div
      className={className}
      variants={activeVariants}
      transition={{
        duration: activeDuration,
        ease: isMobile ? 'easeOut' : [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
