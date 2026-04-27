import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { destinations } from '@/config/destinations'

gsap.registerPlugin(ScrollTrigger)

const chapters = [
  {
    eyebrow: 'Chapter I',
    title: 'A planet, slowed down.',
    body:
      'We design journeys at the speed of memory. No rushing through five cities in a week. No 6am minibus to a checklist. Just one place, fully tasted.',
    image: destinations[0].image,
    accent: 'ember',
  },
  {
    eyebrow: 'Chapter II',
    title: 'Guides who actually live there.',
    body:
      'Every Panda guide is born or rooted in the land they take you across — the kind of person who knows which baker opens at 4am and which shoreline is best at golden hour.',
    image: destinations[1].image,
    accent: 'forest',
  },
  {
    eyebrow: 'Chapter III',
    title: 'Stays that feel like a friend’s house.',
    body:
      'Boutique riads, restored haylofts, off-grid cabins above tree-line. We curate places where you can leave your shoes by the door and stop performing your own holiday.',
    image: destinations[2].image,
    accent: 'sand',
  },
]

export default function ScrollStory() {
  const ref = useRef(null)
  const trackRef = useRef(null)

  useLayoutEffect(() => {
    if (!ref.current || !trackRef.current) return
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.story-panel')
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${trackRef.current.offsetWidth * 0.85}`,
          invalidateOnRefresh: true,
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden bg-forest-950"
      data-scene="story"
    >
      <div ref={trackRef} className="flex h-screen w-[300vw]">
        {chapters.map((c, i) => (
          <article
            key={i}
            className="story-panel relative flex h-screen w-screen items-center"
          >
            {/* image side */}
            <div className="absolute inset-0">
              <img
                src={c.image}
                alt=""
                className="h-full w-full object-cover opacity-60"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
            </div>

            <div className="relative mx-auto flex w-full max-w-[1400px] flex-col items-start px-6 lg:px-12">
              <span className="mb-6 text-[10px] uppercase tracking-[0.4em] text-ember-400">
                {c.eyebrow}
              </span>
              <h2 className="font-display text-6xl leading-[0.95] text-sand-100 md:text-7xl lg:text-[8rem]">
                {c.title.split(' ').map((w, j, arr) => (
                  <span key={j} className={j === arr.length - 1 ? 'italic text-ember-400' : ''}>
                    {w}{' '}
                  </span>
                ))}
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-sand-200/80">
                {c.body}
              </p>
              <span className="mt-12 font-mono text-xs uppercase tracking-[0.4em] text-sand-200/40">
                0{i + 1} / 0{chapters.length}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
