import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [p, setP] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const total = h.scrollHeight - h.clientHeight
      setP(total > 0 ? h.scrollTop / total : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 z-[80] h-[2px] w-full bg-transparent">
      <div
        className="h-full origin-left bg-gradient-to-r from-ember-500 via-ember-400 to-sand-200"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  )
}
