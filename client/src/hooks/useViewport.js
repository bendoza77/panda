import { useEffect, useState } from 'react'

export function useViewport() {
  const [vp, setVp] = useState({
    w: typeof window === 'undefined' ? 1440 : window.innerWidth,
    h: typeof window === 'undefined' ? 900 : window.innerHeight,
    isMobile: typeof window !== 'undefined' && window.innerWidth < 768,
    isTablet: typeof window !== 'undefined' && window.innerWidth < 1024,
  })

  useEffect(() => {
    const onResize = () => {
      setVp({
        w: window.innerWidth,
        h: window.innerHeight,
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth < 1024,
      })
    }
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return vp
}
