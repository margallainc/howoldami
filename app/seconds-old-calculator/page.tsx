import type { Metadata } from 'next';
import Link from 'next/link';
import AgeCalculator from '../components/AgeCalculator';

export const metadata: Metadata = {
  title: 'How Many Seconds Old Am I? — Seconds Old Calculator',
  description:
    'Discover how many seconds old you are right now. The billion-second milestone, the science of time perception, and your live second count — ticking up before your eyes.',
  alternates: { canonical: '/seconds-old-calculator' },
  openGraph: {
    title: 'How Many Seconds Old Am I? — Seconds Old Calculator',
    description: 'Discover how many seconds old you are. The billion-second milestone and your live count.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many seconds old am I at 30 years?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At exactly 30 years old, you have lived approximately 946,080,000 seconds — just under one billion. The billion-second birthday falls at approximately 31 years and 251 days, making it a surprisingly precise and celebratable milestone.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is my one billion second birthday?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One billion seconds equals approximately 31 years, 251 days, 13 hours, 34 minutes, and 54 seconds. To find your 1-billion-second birthday, add 11,574 days (roughly 31 years and 251 days) to your birthdate. Many people celebrate this as a unique milestone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many seconds does the average human live?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Based on the global average life expectancy of approximately 73 years, the average human lives around 2,303,884,800 seconds — roughly 2.3 billion seconds. In countries with higher life expectancy like Japan (84 years), this rises to about 2,650,464,000 seconds.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens in one second?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In one second: your heart beats approximately once, the Earth travels about 30 kilometres in its orbit around the Sun, lightning strikes the Earth\'s surface roughly 100 times globally, and the human eye can distinguish 10–12 separate still images (the basis of film at 24 frames per second). The second is defined scientifically as 9,192,631,770 cycles of radiation from a caesium-133 atom.',
      },
    },
  ],
};

const secondMilestones = [
  { seconds: '1,000,000', equivalent: '11 days, 13 hours', note: 'One million seconds' },
  { seconds: '100,000,000', equivalent: '3 yrs 2 mo', note: 'One hundred million seconds' },
  { seconds: '500,000,000', equivalent: '15 yrs 10 mo', note: 'Half a billion seconds' },
  { seconds: '1,000,000,000', equivalent: '31 yrs 251 days', note: 'The billion-second birthday' },
  { seconds: '1,500,000,000', equivalent: '47 yrs 7 mo', note: '1.5 billion seconds' },
  { seconds: '2,000,000,000', equivalent: '63 yrs 5 mo', note: 'Two billion seconds' },
  { seconds: '2,500,000,000', equivalent: '79 yrs 3 mo', note: 'Full life milestone' },
];

export default function SecondsOldCalculator() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication',
        name: 'Seconds Old Calculator', url: 'https://secondsalive.com/seconds-old-calculator',
        applicationCategory: 'UtilityApplication', operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      })}} />

      <section className="mb-12 sm:mb-16 pt-4">
        <p className="text-[var(--muted)] text-xs tracking-[0.35em] uppercase mb-6">Seconds old calculator</p>
        <h1 className="font-display text-[var(--text)] leading-[1.05] mb-5" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}>
          How Many Seconds Old Am I?
        </h1>
        <p className="text-[var(--muted)] text-base sm:text-lg max-w-2xl leading-relaxed mb-4">
          Of all the ways to measure your age, seconds is the most dramatic. The number is so large it almost stops meaning anything — and then it starts meaning everything. A 30-year-old has lived nearly one billion seconds. A 65-year-old is approaching two billion. These are numbers that belong to astronomy, yet they describe the length of a human life.
        </p>
        <p className="text-[var(--muted)] text-base max-w-2xl leading-relaxed">
          Enter your birthdate below. Watch the number count upward, one second at a time — which is also, roughly, one heartbeat at a time.
        </p>
      </section>

      <AgeCalculator highlightStat="totalSeconds" />

      <section className="mt-20">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-6">Second milestones across a lifetime</p>
        <div className="overflow-x-auto border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)]" style={{ background: 'var(--surface)' }}>
                <th className="text-left px-4 py-3 text-[var(--muted)] font-medium">Seconds</th>
                <th className="text-left px-4 py-3 text-[var(--muted)] font-medium">Age equivalent</th>
                <th className="text-left px-4 py-3 text-[var(--muted)] font-medium">Note</th>
              </tr>
            </thead>
            <tbody>
              {secondMilestones.map((m, i) => (
                <tr key={m.seconds} className="border-b border-[var(--border)]" style={{ background: i % 2 === 0 ? 'var(--bg)' : 'var(--surface)' }}>
                  <td className="px-4 py-3 font-display text-[var(--gold)]">{m.seconds}</td>
                  <td className="px-4 py-3 text-[var(--text)]">{m.equivalent}</td>
                  <td className="px-4 py-3 text-[var(--muted)]">{m.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16 max-w-2xl space-y-6 text-[var(--muted)] leading-relaxed">
        <h2 className="font-display text-[var(--text)] text-2xl">The Billion-Second Birthday</h2>
        <p>
          The most celebrated second-based milestone is the one-billion-second birthday, which falls at approximately 31 years, 251 days, 13 hours, 34 minutes, and 54 seconds of age. It is a precise, uncommon, and oddly personal milestone — the kind that only exists because we decided to count this way, and is more interesting for it.
        </p>
        <p>
          One billion seconds is 1,000,000,000 seconds. Written out, it is a number that looks astronomical. Yet it describes a perfectly ordinary human lifespan milestone. The number one trillion seconds, by contrast, equals approximately 31,709 years — predating the existence of writing by more than 26,000 years. A trillion seconds of human life has never been lived.
        </p>

        <h2 className="font-display text-[var(--text)] text-2xl pt-4">What Is a Second, Exactly?</h2>
        <p>
          The second was originally defined as 1/86,400 of a mean solar day (one day has 24 hours × 60 minutes × 60 seconds = 86,400 seconds). Since 1967, the International System of Units has defined one second as exactly 9,192,631,770 oscillations of the radiation emitted by a caesium-133 atom. This atomic definition is stable to within one second per 300 million years — far more precise than any astronomical measurement.
        </p>
        <p>
          In everyday perception, a second is roughly the duration of a heartbeat, the time it takes to say &ldquo;one elephant,&rdquo; and the shortest interval most people can estimate with accuracy using only their sense of time. Experiments in time perception show that emotional states dramatically affect our subjective experience of the second: fear slows it, boredom stretches it, and flow states compress it to near-nothing.
        </p>
      </section>

      <section className="mt-16 max-w-2xl">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-6">Questions</p>
        <div className="divide-y divide-[var(--border)]">
          {faqSchema.mainEntity.map((faq) => (
            <details key={faq.name} className="group py-1">
              <summary className="flex items-center justify-between py-4 cursor-pointer text-[var(--text)] text-sm font-medium hover:text-[var(--gold)] transition-colors list-none">
                {faq.name}
                <svg className="w-4 h-4 text-[var(--muted)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="pb-5 text-sm text-[var(--muted)] leading-relaxed">{faq.acceptedAnswer.text}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-6">Related calculators</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px border border-[var(--border)]" style={{ background: 'var(--border)' }}>
          {[
            { href: '/days-old-calculator', label: 'Days Old' },
            { href: '/hours-old-calculator', label: 'Hours Old' },
            { href: '/heartbeats-since-birth', label: 'Heartbeats' },
            { href: '/weeks-old-calculator', label: 'Weeks Old' },
            { href: '/life-expectancy-calculator', label: 'Life Expectancy' },
            { href: '/', label: 'Full Age Calculator' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="bg-[var(--bg)] px-4 py-4 text-sm text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface)] transition-all">
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
