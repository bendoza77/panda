import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useUIStore } from '@/store/useUIStore'

export default function MagneticButton({
  children,
  className = '',
  variant = 'primary',
  as: Tag = 'button',
  strength = 22,
  ...props
}) {
  const ref = useRef(null)
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate3d(${x * 0.25}px, ${y * 0.4}px, 0)`
  }

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate3d(0,0,0)'
    setCursorVariant('default')
  }

  const styles = {
    primary:
      'bg-ember-500 text-ink-900 hover:bg-ember-400 shadow-[0_8px_30px_-8px_rgba(255,122,0,0.6)]',
    ghost:
      'bg-transparent text-sand-100 border border-sand-100/30 hover:border-sand-100/70 hover:bg-sand-100/5',
    pill:
      'bg-sand-100/10 text-sand-100 border border-sand-100/20 backdrop-blur-md hover:bg-sand-100/20',
  }

  return (
    <Tag
      data-cursor
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={() => setCursorVariant('hover')}
      className={`group relative inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium uppercase tracking-[0.18em] transition-[background,border,color] duration-300 will-change-transform ${styles[variant]} ${className}`}
      {...props}
    >
      <motion.span ref={ref} className="inline-flex items-center gap-3 will-change-transform">
        {children}
      </motion.span>
    </Tag>
  )
}
