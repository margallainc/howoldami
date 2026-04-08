import type { Metadata } from 'next';
import Link from 'next/link';
import AgeCalculator from '../components/AgeCalculator';

export const metadata: Metadata = {
  title: 'How Many Heartbeats Have I Had? — Heartbeat Counter',
  description:
    'Find out how many times your heart has beaten since birth. Heart rate data by age, resting vs. athletic rates, animal comparisons, and your live heartbeat count.',
  alternates: { canonical: '/heartbeats-since-birth' },
  openGraph: {
    title: 'How Many Heartbeats Have I Had? — Heartbeat Counter',
    description: 'Your live heartbeat count since birth, heart rate by age, and the science of cardiac longevity.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How many times does the heart beat in a lifetime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The average human heart beats approximately 2.5 billion times over a lifetime, based on 70 beats per minute over 73 years. Resting heart rate varies significantly — athletes with resting rates of 40 bpm accumulate fewer beats in the same time, while individuals with chronically elevated resting rates of 90+ bpm accumulate more. Research suggests a lower resting heart rate is generally associated with better cardiovascular health.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a normal resting heart rate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For adults, a normal resting heart rate is between 60 and 100 beats per minute (bpm). Athletes and highly fit individuals often have resting rates between 40 and 60 bpm. Rates consistently above 100 bpm at rest (tachycardia) or below 40 bpm (bradycardia, in non-athletes) warrant medical evaluation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a lower resting heart rate mean a longer life?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Research published in the European Heart Journal found that a resting heart rate above 80 bpm was associated with significantly higher cardiovascular mortality, independent of other risk factors. A low resting heart rate achieved through regular aerobic exercise is strongly associated with reduced cardiovascular risk and longer lifespan. A naturally low rate without fitness (known as sick sinus syndrome) can be a medical concern.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which animal has the most heartbeats per minute?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Etruscan pygmy shrew, the world\'s smallest mammal by mass, has the highest recorded heart rate at approximately 1,200–1,500 beats per minute. Hummingbirds reach around 1,260 bpm in flight. At the other extreme, the blue whale\'s heart beats as slowly as 2 beats per minute when diving deeply, and produces a sound audible from two miles away.',
      },
    },
  ],
};

const heartRateByAge = [
  { age: 'Newborn (0–1 mo)', bpm: '120–160', note: 'Highest resting rate of any life stage' },
  { age: 'Infant (1–12 mo)', bpm: '80–140', note: 'Gradual slowing begins' },
  { age: 'Child (1–10 yrs)', bpm: '70–120', note: 'Active play keeps rates elevated' },
  { age: 'Adolescent (10–17)', bpm: '60–100', note: 'Approaching adult baseline' },
  { age: 'Adult (18–64)', bpm: '60–100', note: 'Normal adult range' },
  { age: 'Trained athlete', bpm: '40–60', note: 'Cardiac efficiency from endurance training' },
  { age: 'Older adult (65+)', bpm: '60–100', note: 'Range unchanged; fitness more important' },
];

export default function HeartbeatsSinceBirth() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebApplication',
        name: 'Heartbeat Counter Since Birth', url: 'https://secondsalive.com/heartbeats-since-birth',
        applicationCategory: 'UtilityApplication', operatingSystem: 'Any',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      })}} />

      <section className="mb-12 sm:mb-16 pt-4">
        <p className="text-[var(--muted)] text-xs tracking-[0.35em] uppercase mb-6">Heartbeat counter</p>
        <h1 className="font-display text-[var(--text)] leading-[1.05] mb-5" style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)' }}>
          How Many Heartbeats Have I Had?
        </h1>
        <p className="text-[var(--muted)] text-base sm:text-lg max-w-2xl leading-relaxed mb-4">
          Your heart has been beating since before you were born — approximately 22 days after conception, the primitive cardiovascular system begins its first contractions. By birth, it has already beaten millions of times. By the time you reach your third decade, it has pumped over a billion times. It has never paused, never rested, never asked permission.
        </p>
        <p className="text-[var(--muted)] text-base max-w-2xl leading-relaxed">
          The counter below estimates your total heartbeats at an average resting rate of 70 beats per minute — the commonly cited midpoint for healthy adults. Enter your birthdate to see the number counting live.
        </p>
      </section>

      <AgeCalculator highlightStat="heartbeats" />

      <section className="mt-20">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-6">Normal resting heart rate by age</p>
        <div className="overflow-x-auto border border-[var(--border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)]" style={{ background: 'var(--surface)' }}>
                <th className="text-left px-4 py-3 text-[var(--muted)] font-medium">Age group</th>
                <th className="text-left px-4 py-3 text-[var(--muted)] font-medium">Beats per minute</th>
                <th className="text-left px-4 py-3 text-[var(--muted)] font-medium">Note</th>
              </tr>
            </thead>
            <tbody>
              {heartRateByAge.map((row, i) => (
                <tr key={row.age} className="border-b border-[var(--border)]" style={{ background: i % 2 === 0 ? 'var(--bg)' : 'var(--surface)' }}>
                  <td className="px-4 py-3 text-[var(--text)] font-medium">{row.age}</td>
                  <td className="px-4 py-3 font-display text-[var(--gold)]">{row.bpm}</td>
                  <td className="px-4 py-3 text-[var(--muted)]">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16 max-w-2xl space-y-6 text-[var(--muted)] leading-relaxed">
        <h2 className="font-display text-[var(--text)] text-2xl">The Heart Rate–Longevity Connection</h2>
        <p>
          A compelling body of research links resting heart rate to lifespan. A landmark study of over 3,000 participants published in the <em>European Heart Journal</em> found that those with resting heart rates above 70 bpm had measurably higher cardiovascular mortality over a 16-year period. Those with resting rates between 71 and 80 bpm had a 51% higher risk of death from heart disease compared to those with rates of 60–70 bpm.
        </p>
        <p>
          Endurance athletes demonstrate the most striking examples of cardiac adaptation. Lance Armstrong&apos;s resting heart rate was reported at 32 bpm; marathon runners commonly measure 45–55 bpm. This lower rate reflects a larger, more efficient heart that pushes more blood with each stroke — a physiological condition called cardiac hypertrophy (the athletic variety). Each beat does more work, and the heart needs fewer of them.
        </p>

        <h2 className="font-display text-[var(--text)] text-2xl pt-4">The Heart Rate Budget — Animal Comparisons</h2>
        <p>
          There is a long-standing biological observation that mammals appear to have a roughly fixed &ldquo;heartbeat budget&rdquo; — approximately 1–1.5 billion heartbeats over a lifetime, regardless of species. A mouse&apos;s heart beats 500–600 times per minute; it lives 2–3 years. An elephant&apos;s heart beats 25–30 times per minute; it lives 60–70 years. The product of heart rate × lifespan comes out to roughly the same number across species.
        </p>
        <p>
          Humans are one of the notable exceptions to this pattern. Our heart rate is moderate (60–100 bpm) but our lifespan vastly exceeds what the simple formula would predict — the result of medicine, diet, shelter, and the other advantages of civilisation. We get far more heartbeats than our evolutionary heritage would suggest we were built for.
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
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-6">Related</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px border border-[var(--border)]" style={{ background: 'var(--border)' }}>
          {[
            { href: '/seconds-old-calculator', label: 'Seconds Old' },
            { href: '/days-old-calculator', label: 'Days Old' },
            { href: '/life-expectancy-calculator', label: 'Life Expectancy' },
            { href: '/blog/heartbeats-in-a-lifetime', label: 'Heartbeats in a Lifetime' },
            { href: '/blog/life-expectancy-by-country', label: 'Life Expectancy by Country' },
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
