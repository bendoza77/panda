import { useEffect, useRef } from 'react'
import { useUIStore } from '@/store/useUIStore'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const variant = useUIStore((s) => s.cursorVariant)

  useEffect(() => {
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y
    let raf = 0

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }
    }

    const tick = () => {
      rx += (x - rx) * 0.18
      ry += (y - ry) * 0.18
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  // hide on touch
  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch && dot.current && ring.current) {
      dot.current.style.display = 'none'
      ring.current.style.display = 'none'
    }
  }, [])

  const ringScale = variant === 'hover' ? 'scale-[2.6]' : variant === 'view' ? 'scale-[3.2]' : 'scale-100'
  const ringBg = variant === 'hover' ? 'bg-ember-500/20 border-ember-400' : variant === 'view' ? 'bg-sand-100/10 border-sand-100' : 'bg-transparent border-sand-100/40'
  const dotOpacity = variant === 'hover' ? 'opacity-0' : 'opacity-100'

  return (
    <>
      <div
        ref={ring}
        className={`pointer-events-none fixed top-0 left-0 z-[9998] h-10 w-10 rounded-full border backdrop-blur-sm transition-[transform,background,border,scale] duration-300 ease-[var(--ease-cinematic)] mix-blend-difference ${ringScale} ${ringBg}`}
        style={{ transform: 'translate3d(-100px,-100px,0)' }}
      />
      <div
        ref={dot}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] h-1.5 w-1.5 rounded-full bg-ember-500 transition-opacity duration-200 mix-blend-difference ${dotOpacity}`}
        style={{ transform: 'translate3d(-100px,-100px,0)' }}
      />
    </>
  )
}
