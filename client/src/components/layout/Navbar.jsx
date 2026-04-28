import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useUIStore } from '@/store/useUIStore'
import ThemeToggle from '@/components/ui/ThemeToggle'
import logoMark from '@/assets/Screenshot_2026-04-27_164219-removebg-preview.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/tours', label: 'Tours' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const setCursorVariant = useUIStore((s) => s.setCursorVariant)
  const navOpen = useUIStore((s) => s.navOpen)
  const setNavOpen = useUIStore((s) => s.setNavOpen)
  const theme = useUIStore((s) => s.theme)
  const isDark = theme === 'dark'
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setScrolled(false)
  }, [pathname])

  useEffect(() => {
    setNavOpen(false)
  }, [pathname, setNavOpen])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-forest-950/90 backdrop-blur-xl border-b border-sand-100/10 shadow-[0_1px_24px_rgba(0,0,0,0.4)]'
            : 'py-6'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 lg:px-12">
          <Link
            to="/"
            data-cursor
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
            className="group flex items-center gap-2.5"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-forest-700 to-forest-900 ring-1 ring-sand-100/15">
              <img
                src={logoMark}
                alt="Panda"
                className="h-7 w-7 select-none object-contain"
                draggable={false}
              />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-ember-500 shadow-[0_0_12px_rgba(255,122,0,0.8)]" />
            </span>
            <span className={`font-display text-xl tracking-wide transition-colors duration-300 ${isDark ? 'text-sand-100' : 'text-ink-800'}`}>Panda</span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-sand-100/10 bg-forest-950/40 px-2 py-1.5 backdrop-blur-xl lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-cursor
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.22em] transition-colors duration-300 ${
                    isActive ? 'text-ink-900' : 'text-sand-100/70 hover:text-sand-100'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-sand-100"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative">{l.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Menu"
              data-cursor
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-sand-100/15 bg-forest-950/50 backdrop-blur-md"
            >
              <span className="relative flex h-3 w-5 flex-col justify-between">
                <span className={`h-0.5 w-full bg-sand-100 transition-transform duration-300 ${navOpen ? 'translate-y-[5px] rotate-45' : ''}`} />
                <span className={`h-0.5 w-full bg-sand-100 transition-transform duration-300 ${navOpen ? '-translate-y-[5px] -rotate-45' : ''}`} />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[85] bg-forest-950/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.5 }}
                >
                  <NavLink
                    to={l.to}
                    onClick={() => setNavOpen(false)}
                    className="font-display text-5xl text-sand-100"
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <div className="pt-6">
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
