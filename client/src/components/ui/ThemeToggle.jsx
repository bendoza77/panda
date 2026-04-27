import { motion } from 'framer-motion'
import { useUIStore } from '@/store/useUIStore'

export default function ThemeToggle() {
  const theme = useUIStore((s) => s.theme)
  const toggle = useUIStore((s) => s.toggleTheme)
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)
  const isDark = theme === 'dark'

  return (
    <button
      data-cursor
      onMouseEnter={() => setCursorVariant('hover')}
      onMouseLeave={() => setCursorVariant('default')}
      onClick={toggle}
      aria-label="Toggle colour mode"
      className="relative inline-flex h-9 w-16 items-center rounded-full border border-sand-100/15 bg-forest-900/40 backdrop-blur-md"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={`absolute top-1/2 h-7 w-7 -translate-y-1/2 rounded-full bg-gradient-to-br ${
          isDark ? 'from-forest-700 to-forest-900 left-1' : 'from-ember-300 to-ember-500 right-1'
        }`}
      />
      <span className="relative ml-2 text-[10px] uppercase tracking-[0.18em] text-sand-200/80">
        {isDark ? 'Night' : 'Day'}
      </span>
    </button>
  )
}
