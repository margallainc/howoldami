import type { Metadata } from 'next';
import Link from 'next/link';
import AgeCalculator from '../components/AgeCalculator';

export const metadata: Metadata = {
  title: 'How Many Hours Old Am I? — Hours Old Calculator',
  description:
    'Find out exactly how many hours old you are. The 10,000-hour rule, how much of your life you spend sleeping, and your live hour count with life stats.',
  alternates: { canonical: '/hours-old-calculator' },
  openGraph: {
    title: 'How Many Hours Old Am I? — Hours Old Calculator',
    description: 'Find out exactly how many hours old you are — live, plus the fascinating science of how we spend our hours.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many hours old am I at 30 years?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At exactly 30 years old, you have lived approximately 262,800 hours (30 × 365.25 × 24). The precise number depends on your exact birthdate and accounts for leap years. Use the calculator above for your exact count to the current hour.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the 10,000-hour rule?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Popularised by Malcolm Gladwell in his book Outliers (2008), the 10,000-hour rule suggests that world-class expertise in any field requires approximately 10,000 hours of deliberate practice. Researchers including K. Anders Ericsson, whose work inspired the concept, noted that the quality and structure of practice matters as much as the quantity. 10,000 hours at 3 hours per day takes approximately 9 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours does the average person sleep in a lifetime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Assuming 8 hours of sleep per night over a 73-year life, the average person sleeps approximately 213,000 hours — roughly one-third of their total hours alive. This means a 30-year-old has already slept for about 87,600 hours (approximately 3,650 full days).',
      },
    },
    {
      '@type': 'Question',
      name: 'How many working hours does the average person log in a career?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical full-time career spans approximately 40 years at around 2,000 hours per year (40 hours/week × 50 working weeks), totalling about 80,000 hours. This is roughly 30% of your waking hours over a working life, and why career satisfaction has such a large effect on overall quality of life.',
      },
    },
  ],
};

const hourMilestones = [
  { hours: '10,000', note: 'Gladwell\'s mastery threshold (~417 days of non-stop practice)' },
  { hours: '87,600', note: '10 years of life' },
  { hours: '175,200', note: '20 years of life' },
  { hours: '262,800', note: '30 years of life' },
  { hours: '350,400', note: '40 years of life' },
  { hours: '438,000', note: '50 years of life' },
  { hours: '525,600', note: '60 years of life' },
  { hours: '639,240', note: '73 years (global average life expectancy)' },
];

export default function HoursOldCalculator() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication',
        name: 'Hours Old Calculator', url: 'https://secondsalive.com/hours-old-calculator',
        applicationCategory: 'UtilityApplication', operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      })}} />

      <section className="mb-12 sm:mb-16 pt-4">
        <p className="text-[var(--muted)] text-xs tracking-[0.35em] uppercase mb-6">Hours old calculator</p>
        <h1 className="font-display text-[var(--text)] leading-[1.05] mb-5" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}>
          How Many Hours Old Am I?
        </h1>
        <p className="text-[var(--muted)] text-base sm:text-lg max-w-2xl leading-relaxed mb-4">
          Hours are the unit where time becomes visible. You plan your day in hours, measure your sleep in hours, count your work in hours. Seeing your entire life measured in them — a number that already exceeds a quarter million by your early thirties — reframes how much time you have actually lived.
        </p>
        <p className="text-[var(--muted)] text-base max-w-2xl leading-relaxed">
          The calculator below shows your exact hours alive, updating every second. Enter your birthdate to begin.
        </p>
      </section>

      <AgeCalculator highlightStat="totalHours" />

      <section className="mt-20">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-6">Hour milestones across a lifetime</p>
        <div className="overflow-x-auto border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)]" style={{ background: 'var(--surface)' }}>
                <th className="text-left px-4 py-3 text-[var(--muted)] font-medium">Hours</th>
                <th className="text-left px-4 py-3 text-[var(--muted)] font-medium">Significance</th>
              </tr>
            </thead>
            <tbody>
              {hourMilestones.map((m, i) => (
                <tr key={m.hours} className="border-b border-[var(--border)]" style={{ background: i % 2 === 0 ? 'var(--bg)' : 'var(--surface)' }}>
                  <td className="px-4 py-3 font-display text-[var(--gold)]">{m.hours}</td>
                  <td className="px-4 py-3 text-[var(--muted)]">{m.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16 max-w-2xl space-y-6 text-[var(--muted)] leading-relaxed">
        <h2 className="font-display text-[var(--text)] text-2xl">The 10,000-Hour Rule</h2>
        <p>
          Malcolm Gladwell popularised the idea in <em>Outliers</em> (2008) that expertise in any field requires approximately 10,000 hours of deliberate practice — roughly equivalent to 417 consecutive days, or 10 years at 3 hours per day. The underlying research by psychologist K. Anders Ericsson studied expert violinists at the Berlin Academy of Music and found that the best students had all accumulated roughly 10,000 hours of practice by age 20.
        </p>
        <p>
          Subsequent research has complicated the rule — practice quality, starting age, coaching, and innate aptitude all play significant roles. But the core insight holds: genuine expertise is measured in hundreds or thousands of hours, not days or months. Knowing your total hours alive puts that investment in perspective.
        </p>

        <h2 className="font-display text-[var(--text)] text-2xl pt-4">How You Spend Your Hours</h2>
        <p>
          The average adult in wealthy countries breaks down their waking hours roughly as follows: sleep consumes about 8 hours per day (~33% of total lifetime hours); work occupies about 8 hours on working days (~17% of total lifetime hours for full-time employees); leisure, household tasks, and social time fill the rest. By the time you retire, you will have spent more hours at work than in any other single waking activity — which is part of why career satisfaction has such an outsized effect on reported happiness.
        </p>
        <p>
          A 30-year-old has lived approximately 262,800 hours. Of those, roughly 87,600 were spent sleeping, around 40,000 in formal education and work, and the remainder in every other form of human experience combined.
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
            { href: '/seconds-old-calculator', label: 'Seconds Old' },
            { href: '/weeks-old-calculator', label: 'Weeks Old' },
            { href: '/heartbeats-since-birth', label: 'Heartbeats' },
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
