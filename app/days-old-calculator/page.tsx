import type { Metadata } from 'next';
import Link from 'next/link';
import AgeCalculator from '../components/AgeCalculator';

export const metadata: Metadata = {
  title: 'How Many Days Old Am I? — Days Old Calculator',
  description:
    'Calculate exactly how many days old you are right now. See milestone days, interesting age facts, and your live day count — plus heartbeats, breaths, and more.',
  alternates: { canonical: '/days-old-calculator' },
  openGraph: {
    title: 'How Many Days Old Am I? — Days Old Calculator',
    description: 'Calculate exactly how many days old you are right now. Milestones, facts, and your live day count.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many days old am I if I was born in 1990?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Someone born on January 1, 1990 would be approximately 12,871 days old as of January 1, 2025. The exact number depends on your precise birthdate and includes all leap years between your birth and today. Use the calculator above for your exact count.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is 10,000 days in years?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '10,000 days is approximately 27 years and 4 months. Many people celebrate their 10,000-day birthday as a fun alternative milestone. You can calculate exactly when your 10,000th day was (or will be) by adding 10,000 days to your birthdate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many days does the average person live?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Based on the global average life expectancy of approximately 73 years, the average person lives around 26,645 days. In countries with higher life expectancy like Japan (84 years), the average reaches about 30,660 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the calculator account for leap years?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The calculator computes the exact millisecond difference between your birthdate and the current moment, which automatically accounts for all leap years (years with 366 days instead of 365) in your lifetime.',
      },
    },
  ],
};

const milestones = [
  { days: '1,000', years: '2 yrs 8 mo', note: 'First major day milestone' },
  { days: '3,650', years: '10 years', note: 'A decade of life' },
  { days: '5,000', years: '13 yrs 8 mo', note: 'Start of teenage years for most' },
  { days: '7,300', years: '20 years', note: 'Two decades' },
  { days: '10,000', years: '27 yrs 4 mo', note: 'The celebrated 10K day milestone' },
  { days: '13,000', years: '35 yrs 7 mo', note: 'Mid-thirties' },
  { days: '14,600', years: '40 years', note: 'Four decades' },
  { days: '18,250', years: '50 years', note: 'Half century' },
  { days: '21,900', years: '60 years', note: 'Six decades' },
  { days: '25,000', years: '68 yrs 5 mo', note: 'Retirement era for many' },
  { days: '29,200', years: '80 years', note: 'Eight decades' },
];

export default function DaysOldCalculator() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication',
        name: 'Days Old Calculator', url: 'https://secondsalive.com/days-old-calculator',
        applicationCategory: 'UtilityApplication', operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      })}} />

      {/* Hero */}
      <section className="mb-12 sm:mb-16 pt-4">
        <p className="text-[var(--muted)] text-xs tracking-[0.35em] uppercase mb-6">Days old calculator</p>
        <h1 className="font-display text-[var(--text)] leading-[1.05] mb-5" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}>
          How Many Days Old Am I?
        </h1>
        <p className="text-[var(--muted)] text-base sm:text-lg max-w-2xl leading-relaxed mb-4">
          Your age in days is a number most people never stop to calculate — and it is much larger than you might expect. A 30-year-old has already lived through more than 10,900 days. Each one was a rotation of the Earth, a day of experience added to who you are.
        </p>
        <p className="text-[var(--muted)] text-base max-w-2xl leading-relaxed">
          The calculator below gives you your exact day count — updated live, every second, accounting for leap years and the precise length of each month. Enter your date of birth to begin.
        </p>
      </section>

      <AgeCalculator highlightStat="totalDays" />

      {/* Milestone table */}
      <section className="mt-20">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-6">Age milestones in days</p>
        <div className="overflow-x-auto border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)]" style={{ background: 'var(--surface)' }}>
                <th className="text-left px-4 py-3 text-[var(--muted)] font-medium tracking-wide">Days</th>
                <th className="text-left px-4 py-3 text-[var(--muted)] font-medium tracking-wide">Equivalent age</th>
                <th className="text-left px-4 py-3 text-[var(--muted)] font-medium tracking-wide">Note</th>
              </tr>
            </thead>
            <tbody>
              {milestones.map((m, i) => (
                <tr key={m.days} className="border-b border-[var(--border)]" style={{ background: i % 2 === 0 ? 'var(--bg)' : 'var(--surface)' }}>
                  <td className="px-4 py-3 font-display text-[var(--gold)]">{m.days}</td>
                  <td className="px-4 py-3 text-[var(--text)]">{m.years}</td>
                  <td className="px-4 py-3 text-[var(--muted)]">{m.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Content section */}
      <section className="mt-16 max-w-2xl space-y-6 text-[var(--muted)] leading-relaxed">
        <h2 className="font-display text-[var(--text)] text-2xl">Why Count Your Age in Days?</h2>
        <p>
          Years are a useful shorthand, but they flatten the texture of time. A year feels abstract. Days are concrete — each one is a unit of waking, experiencing, and existing. Measuring your age in days makes the passage of time vivid in a way that counting birthdays does not.
        </p>
        <p>
          The 10,000-day milestone has become a popular informal celebration, equivalent to approximately 27 years and 4 months. It is a number large enough to feel significant and specific enough to calculate precisely. Many people find it a more meaningful marker than rounding to the nearest decade.
        </p>
        <p>
          Philosopher Oliver Burkeman, in his book <em>Four Thousand Weeks</em>, argues that the average human life spans only about 4,000 weeks — a figure that is both humbling and clarifying. In days, that same life is roughly 28,000 days. Knowing your current day count against that total is a way of understanding where you are on that arc.
        </p>

        <h2 className="font-display text-[var(--text)] text-2xl pt-4">Leap Years and Day Count Accuracy</h2>
        <p>
          Leap years add one extra day every four years (with exceptions for century years not divisible by 400). Over a 30-year life, this adds approximately 7–8 extra days to your total. The calculator accounts for all leap years automatically, giving you a count accurate to the current second rather than an approximation based on 365-day years.
        </p>
        <p>
          One interesting quirk: people born on February 29 (leap day) technically only have a calendar birthday every four years. In legal terms, most jurisdictions treat March 1 as the non-leap-year equivalent. In day count terms, however, they accumulate days at exactly the same rate as everyone else.
        </p>
      </section>

      {/* FAQ */}
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

      {/* Related */}
      <section className="mt-16">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-6">Related calculators</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px border border-[var(--border)]" style={{ background: 'var(--border)' }}>
          {[
            { href: '/hours-old-calculator', label: 'Hours Old' },
            { href: '/seconds-old-calculator', label: 'Seconds Old' },
            { href: '/weeks-old-calculator', label: 'Weeks Old' },
            { href: '/heartbeats-since-birth', label: 'Heartbeats' },
            { href: '/next-birthday-countdown', label: 'Birthday Countdown' },
            { href: '/life-expectancy-calculator', label: 'Life Expectancy' },
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
