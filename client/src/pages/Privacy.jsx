import { Link } from 'react-router-dom'
import Reveal from '@/components/ui/Reveal'
import SplitText from '@/components/ui/SplitText'

const sections = [
  {
    title: 'Information we collect',
    body: [
      'When you make an enquiry or book a journey we collect your name, email address, phone number, and information about your trip preferences. We collect only what we need to design and deliver your journey.',
      'If you subscribe to our letter we store your email address. Nothing else.',
      'Our website uses minimal analytics (Fathom Analytics, privacy-preserving) to understand which pages are useful. No personal identifiers are captured. No data is sold to third parties.',
    ],
  },
  {
    title: 'How we use it',
    body: [
      'To plan, communicate about, and deliver your journey. To send you the monthly letter if you have subscribed. To comply with financial and legal record-keeping obligations.',
      'We do not use your data for advertising. We do not pass it to third parties for marketing. We do not use it to build profiles or engage in behavioural tracking.',
    ],
  },
  {
    title: 'Third parties',
    body: [
      'We share limited information with the suppliers involved in your journey — guides, accommodation, transport — solely to the extent necessary for your trip to operate.',
      'We use Stripe for payment processing. Stripe\'s privacy policy governs data shared during payment. We do not store card details ourselves.',
      'We use Fathom Analytics (EU-based, GDPR-compliant, cookieless) for aggregate website analytics.',
    ],
  },
  {
    title: 'Cookies',
    body: [
      'We use one strictly necessary session cookie for the website to function. We do not use advertising cookies, tracking pixels, or third-party social media cookies.',
      'You can disable cookies in your browser. Our website will continue to function without them.',
    ],
  },
  {
    title: 'Your rights',
    body: [
      'Under GDPR you have the right to access, correct, or delete the personal data we hold about you. You have the right to object to processing and to request a portable copy of your data.',
      'To exercise any of these rights, email privacy@panda.studio. We will respond within 30 days.',
    ],
  },
  {
    title: 'Data retention',
    body: [
      'Enquiry data is retained for 24 months. Booking and financial records are retained for 7 years as required by law. Email subscribers can unsubscribe at any time and their data is deleted within 48 hours of request.',
    ],
  },
  {
    title: 'Updates to this policy',
    body: [
      'We may update this policy occasionally. If changes are material we will notify subscribers by email. The current version is always at panda.studio/privacy.',
    ],
  },
]

export default function Privacy() {
  return (
    <main className="relative overflow-hidden pt-40 pb-32">
      {/* HERO */}
      <header className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember-400">
            Legal & privacy
          </p>
        </Reveal>
        <h1 className="font-display text-[12vw] leading-[0.9] text-sand-100 md:text-[8vw] lg:text-[7rem]">
          <SplitText text="Privacy policy" />
        </h1>
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-lg text-sand-200/70">
            Last updated 1 March 2026. Written in plain language, not legalese.
          </p>
        </Reveal>
      </header>

      <div className="my-20 h-px bg-gradient-to-r from-transparent via-sand-100/15 to-transparent" />

      {/* CONTENT */}
      <article className="mx-auto max-w-[860px] px-6 lg:px-12">
        {/* INTRO */}
        <Reveal>
          <p className="mb-16 text-xl leading-relaxed text-sand-200/85">
            Panda Studio SRL ("Panda", "we", "us") is committed to handling personal data
            with respect and restraint. This policy explains what we collect, why, and how
            you can control it. If you have a question not answered here, write to us at{' '}
            <a href="mailto:privacy@panda.studio" className="text-ember-400 hover:text-ember-300">
              privacy@panda.studio
            </a>.
          </p>
        </Reveal>

        <div className="space-y-16">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">
                <div>
                  <span className="font-mono text-xs text-sand-200/40">0{i + 1}</span>
                  <h2 className="mt-1 font-display text-2xl leading-tight text-sand-100">
                    {s.title}
                  </h2>
                </div>
                <div className="space-y-4">
                  {s.body.map((para, j) => (
                    <p key={j} className="leading-relaxed text-sand-200/75">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
              {i < sections.length - 1 && (
                <div className="mt-16 h-px bg-sand-100/8" />
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <div className="flex flex-col gap-4 rounded-2xl border border-sand-100/10 bg-forest-900/20 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-2xl text-sand-100">Data controller</p>
              <p className="mt-1 text-sm text-sand-200/70">
                Panda Studio SRL · 14 Aghmashenebeli Ave, Tbilisi 0102, Georgia
              </p>
            </div>
            <a
              href="mailto:privacy@panda.studio"
              className="whitespace-nowrap text-sm text-ember-400 hover:text-ember-300"
            >
              privacy@panda.studio
            </a>
          </div>
        </Reveal>
      </article>
    </main>
  )
}
