import { motion } from 'framer-motion'

const variants = {
  up: { hidden: { y: 40, opacity: 0 }, show: { y: 0, opacity: 1 } },
  down: { hidden: { y: -40, opacity: 0 }, show: { y: 0, opacity: 1 } },
  left: { hidden: { x: 40, opacity: 0 }, show: { x: 0, opacity: 1 } },
  right: { hidden: { x: -40, opacity: 0 }, show: { x: 0, opacity: 1 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
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
  const MotionTag = motion[Tag] || motion.div
  return (
    <MotionTag
      className={className}
      variants={variants[direction]}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerGroup({ children, className = '', stagger = 0.1, delay = 0, once = true }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', direction = 'up', duration = 0.8 }) {
  return (
    <motion.div
      className={className}
      variants={variants[direction]}
      transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
