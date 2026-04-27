import { create } from 'zustand'

export const useUIStore = create((set) => ({
  // theme
  theme: 'dark',
  toggleTheme: () =>
    set((s) => {
      const next = s.theme === 'dark' ? 'light' : 'dark'
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('light', next === 'light')
      }
      return { theme: next }
    }),

  // navigation
  navOpen: false,
  setNavOpen: (v) => set({ navOpen: v }),

  // page transition
  transitioning: false,
  setTransitioning: (v) => set({ transitioning: v }),

  // cursor
  cursorVariant: 'default',
  setCursorVariant: (v) => set({ cursorVariant: v }),

  // 3d scene
  sceneProgress: 0,
  setSceneProgress: (v) => set({ sceneProgress: v }),
  activeRegion: null,
  setActiveRegion: (v) => set({ activeRegion: v }),

  // hero loaded
  heroReady: false,
  setHeroReady: (v) => set({ heroReady: v }),
}))
