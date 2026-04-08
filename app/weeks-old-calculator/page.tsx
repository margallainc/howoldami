import type { Metadata } from 'next';
import Link from 'next/link';
import AgeCalculator from '../components/AgeCalculator';

export const metadata: Metadata = {
  title: 'How Many Weeks Old Am I? — Weeks Old Calculator',
  description:
    'Calculate your exact age in weeks. The 4,000-week lifespan, weekly milestones, and your live week count — a new way to see the scale of your life.',
  alternates: { canonical: '/weeks-old-calculator' },
  openGraph: {
    title: 'How Many Weeks Old Am I? — Weeks Old Calculator',
    description: 'The 4,000-week human lifespan and your exact age in weeks — live.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many weeks old am I at 30?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At exactly 30 years old, you have lived approximately 1,565 weeks. The precise count depends on your birthdate and accounts for leap years. Use the calculator above for your exact number.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many weeks is the average human lifespan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Based on the global average life expectancy of approximately 73 years, the average human lifespan is around 3,800 weeks. This is the concept at the heart of Oliver Burkeman\'s book Four Thousand Weeks (2021), which uses 4,000 weeks as a rounded figure for a long life. In countries like Japan with higher life expectancy (~84 years), the average reaches about 4,370 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is 4,000 weeks significant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oliver Burkeman\'s book Four Thousand Weeks (2021) argues that understanding your life as approximately 4,000 weeks — a surprisingly small number — is a more honest and useful frame for thinking about time management than traditional productivity approaches. The number is finite enough to be tangible, which changes how you think about how to spend each week.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many weeks pregnant is full term?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Full term pregnancy is defined as 39 weeks 0 days to 40 weeks 6 days from the last menstrual period (LMP). The standard due date is calculated at 40 weeks (280 days) from LMP. Babies born between 37 and 38 weeks are considered early term, while those born before 37 weeks are preterm.',
      },
    },
  ],
};

const weekMilestones = [
  { weeks: '520', years: '10 years', note: 'A decade' },
  { weeks: '1,040', years: '20 years', note: 'Two decades' },
  { weeks: '1,565', years: '30 years', note: 'Three decades' },
  { weeks: '2,087', years: '40 years', note: 'Four decades' },
  { weeks: '2,609', years: '50 years', note: 'Half century' },
  { weeks: '3,000', years: '57 yrs 7 mo', note: 'Three thousand weeks' },
  { weeks: '3,130', years: '60 years', note: 'Six decades' },
  { weeks: '4,000', years: '76 yrs 10 mo', note: 'Burkeman\'s "Four Thousand Weeks"' },
  { weeks: '4,370', years: '84 years', note: 'Japan average life expectancy' },
];

export default function WeeksOldCalculator() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication',
        name: 'Weeks Old Calculator', url: 'https://secondsalive.com/weeks-old-calculator',
        applicationCategory: 'UtilityApplication', operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      })}} />

      <section className="mb-12 sm:mb-16 pt-4">
        <p className="text-[var(--muted)] text-xs tracking-[0.35em] uppercase mb-6">Weeks old calculator</p>
        <h1 className="font-display text-[var(--text)] leading-[1.05] mb-5" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}>
          How Many Weeks Old Am I?
        </h1>
        <p className="text-[var(--muted)] text-base sm:text-lg max-w-2xl leading-relaxed mb-4">
          Measuring your life in weeks produces a number that is large enough to feel real but small enough to be comprehensible. The average human life contains roughly 4,000 weeks — a figure that author Oliver Burkeman argues is the most useful frame for thinking about time, precisely because it is not overwhelming.
        </p>
        <p className="text-[var(--muted)] text-base max-w-2xl leading-relaxed">
          Enter your birthdate below to see exactly how many weeks you have lived, counting live in real time.
        </p>
      </section>

      <AgeCalculator />

      <section className="mt-20">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-6">Week milestones across a lifetime</p>
        <div className="overflow-x-auto border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)]" style={{ background: 'var(--surface)' }}>
                <th className="text-left px-4 py-3 text-[var(--muted)] font-medium">Weeks</th>
                <th className="text-left px-4 py-3 text-[var(--muted)] font-medium">Age equivalent</th>
                <th className="text-left px-4 py-3 text-[var(--muted)] font-medium">Note</th>
              </tr>
            </thead>
            <tbody>
              {weekMilestones.map((m, i) => (
                <tr key={m.weeks} className="border-b border-[var(--border)]" style={{ background: i % 2 === 0 ? 'var(--bg)' : 'var(--surface)' }}>
                  <td className="px-4 py-3 font-display text-[var(--gold)]">{m.weeks}</td>
                  <td className="px-4 py-3 text-[var(--text)]">{m.years}</td>
                  <td className="px-4 py-3 text-[var(--muted)]">{m.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16 max-w-2xl space-y-6 text-[var(--muted)] leading-relaxed">
        <h2 className="font-display text-[var(--text)] text-2xl">The 4,000-Week Lifespan</h2>
        <p>
          Oliver Burkeman&apos;s 2021 book <em>Four Thousand Weeks: Time Management for Mortals</em> opens with a striking calculation: assuming you live to 80, you have roughly 4,000 weeks on Earth. Written as a number, 4,000 is modest — far smaller than most people&apos;s intuition suggests. That is the point. The book argues that the standard approach to productivity — trying to squeeze more into every week — misunderstands the problem. There is never enough time. The more honest response is to choose carefully what to do with the finite number of weeks you have.
        </p>
        <p>
          Burkeman&apos;s framework works because weeks are neither too granular (seconds feel overwhelming) nor too abstract (years blur together). A week is long enough to matter and short enough to picture clearly. When you know you have already used 1,500 of your 4,000 weeks, the remaining 2,500 feel different than they did before.
        </p>

        <h2 className="font-display text-[var(--text)] text-2xl pt-4">The Weekly Rhythm of Human Biology</h2>
        <p>
          The seven-day week is one of the oldest human time structures, appearing independently in ancient Babylonia, India, and China. Its persistence is partly cultural and partly biological: several physiological cycles in humans roughly align with weekly patterns. Studies of circadian biology have found weekly variations in blood pressure, cortisol levels, and immune function that cannot be explained purely by the social rhythm of workweek and weekend.
        </p>
        <p>
          The seven-day period also appears in disease progression research — many viral infections follow roughly weekly cycles of symptom severity. Whether this reflects the week&apos;s social structure or an underlying biological cycle remains an active area of research.
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
            { href: '/seconds-old-calculator', label: 'Seconds Old' },
            { href: '/heartbeats-since-birth', label: 'Heartbeats' },
            { href: '/blog/how-many-weeks-pregnant-am-i', label: 'Pregnancy Weeks Guide' },
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
