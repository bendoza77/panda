import Reveal from '@/components/ui/Reveal'
import SplitText from '@/components/ui/SplitText'

const sections = [
  {
    title: 'The contract',
    body: [
      'A booking is confirmed when we receive your signed booking form and deposit. At that point a contract exists between you and Panda Studio SRL under the laws of Georgia. These terms form part of that contract.',
      'The trip is as described in the itinerary provided at the time of booking. Any changes to the itinerary are communicated in writing and agreed with you before being finalised.',
    ],
  },
  {
    title: 'Deposits and payments',
    body: [
      'A 25% deposit is required to confirm your reservation. The remaining 75% is due no later than twelve weeks before departure. If payment is not received by the due date, Panda reserves the right to release your place.',
      'All prices are quoted in USD and are per person unless stated otherwise. Prices are fixed at the time of booking and will not change after confirmation, except in cases of significant and unavoidable increases in supplier costs (fuel surcharges, taxation) — in which case we will notify you and discuss options.',
    ],
  },
  {
    title: 'Cancellation by you',
    body: [
      'If you cancel more than 84 days before departure: deposit is refunded less a 10% administration fee.',
      'If you cancel 29–84 days before departure: deposit is forfeited; no further charges apply.',
      'If you cancel fewer than 29 days before departure: 100% of the trip cost is forfeited.',
      'We strongly recommend comprehensive travel insurance that includes cancellation cover. We are happy to advise on suitable providers.',
    ],
  },
  {
    title: 'Cancellation or change by us',
    body: [
      'We reserve the right to cancel a departure if minimum group numbers are not met (this applies only to shared departures, not private journeys). In such cases, you will receive a full refund or the option to switch to another departure.',
      'If we make a significant change to your itinerary before departure, we will notify you as soon as possible and offer you the choice of accepting the change, switching to another departure, or receiving a full refund.',
      'Force majeure events — natural disasters, pandemics, civil unrest, government travel advisories — may require itinerary changes or cancellation. In such cases we will endeavour to issue full trip credit, though cash refunds may be delayed pending supplier returns.',
    ],
  },
  {
    title: 'Responsibility and insurance',
    body: [
      'Panda acts as a tour operator and takes responsibility for the services we contract. We do not accept liability for events outside our reasonable control.',
      'All travellers must hold comprehensive travel insurance before departure, including medical evacuation cover. Evidence of insurance may be requested.',
      'You travel at your own risk on any activities you undertake independently outside the organised programme.',
    ],
  },
  {
    title: 'Behaviour and conduct',
    body: [
      'Panda reserves the right to remove any traveller from a trip if their behaviour is considered dangerous, offensive, or incompatible with the wellbeing of the group or the communities visited. In such cases, no refund will be issued.',
      'We expect all travellers to act with respect towards guides, local communities, and fellow travellers.',
    ],
  },
  {
    title: 'Photography and privacy',
    body: [
      'Panda may use photographs taken during trips for marketing purposes. You may opt out of this at any time by writing to hello@panda.studio.',
      'You are responsible for obtaining consent before photographing local people encountered during your journey.',
    ],
  },
  {
    title: 'Governing law',
    body: [
      'These terms are governed by the laws of Georgia. Any disputes will be referred first to mediation, then to the courts of Tbilisi, Georgia.',
    ],
  },
]

export default function Terms() {
  return (
    <main className="relative overflow-hidden pt-40 pb-32">
      <header className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-ember-400">
            Legal & booking
          </p>
        </Reveal>
        <h1 className="font-display text-[12vw] leading-[0.9] text-sand-100 md:text-[8vw] lg:text-[7rem]">
          <SplitText text="Terms of" />
          <span className="block italic text-ember-400">
            <SplitText text="service." delay={0.15} />
          </span>
        </h1>
        <Reveal delay={0.3}>
          <p className="mt-6 max-w-lg text-sand-200/70">
            Last updated 1 March 2026. These terms apply to all bookings with Panda Studio SRL.
          </p>
        </Reveal>
      </header>

      <div className="my-20 h-px bg-gradient-to-r from-transparent via-sand-100/15 to-transparent" />

      <article className="mx-auto max-w-[860px] px-6 lg:px-12">
        <Reveal>
          <p className="mb-16 text-xl leading-relaxed text-sand-200/85">
            We have written these terms to be as clear and direct as possible. If something
            is ambiguous or you have a question, please write to{' '}
            <a href="mailto:hello@panda.studio" className="text-ember-400 hover:text-ember-300">
              hello@panda.studio
            </a>{' '}
            before booking.
          </p>
        </Reveal>

        <div className="space-y-16">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
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
          <div className="rounded-2xl border border-sand-100/10 bg-forest-900/20 p-8">
            <p className="font-display text-2xl text-sand-100">Questions about these terms?</p>
            <p className="mt-2 text-sand-200/70">
              Write to us before booking and we will clarify anything.{' '}
              <a href="mailto:hello@panda.studio" className="text-ember-400 hover:text-ember-300">
                hello@panda.studio
              </a>
            </p>
          </div>
        </Reveal>
      </article>
    </main>
  )
}
