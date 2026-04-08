import type { Metadata } from 'next';
import AgeCalculator from '../components/AgeCalculator';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Many Days Until My Birthday? — Birthday Countdown',
  description:
    'Count down to your next birthday in days, hours, and minutes. See exactly how long until you turn a year older, plus your current age ticking live.',
  alternates: { canonical: '/next-birthday-countdown' },
  openGraph: {
    title: 'How Many Days Until My Birthday? — Birthday Countdown',
    description:
      'Count down to your next birthday in days, hours, and minutes.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const milestoneAges = [
  { age: 1, label: 'First birthday', note: 'Brain doubles in size from birth' },
  { age: 13, label: 'Teenager', note: 'Prefrontal cortex development begins' },
  { age: 16, label: 'Sixteen', note: 'Legal driving age in many countries' },
  { age: 18, label: 'Adulthood', note: 'Legal majority in most countries' },
  { age: 21, label: 'Twenty-one', note: 'US drinking age; long cultural significance' },
  { age: 25, label: 'Quarter century', note: 'Prefrontal cortex fully mature' },
  { age: 30, label: 'Thirty', note: 'Most cited life-reassessment age' },
  { age: 40, label: 'Forty', note: 'Peak earning years begin for most careers' },
  { age: 50, label: 'Half century', note: 'AARP eligibility; wisdom accumulation peak' },
  { age: 60, label: 'Sixty', note: 'Retirement planning horizon in many countries' },
  { age: 65, label: 'Sixty-five', note: 'Traditional retirement / Medicare age (US)' },
  { age: 100, label: 'Centenarian', note: 'UK receives a birthday card from the monarch' },
];

export default function NextBirthdayCountdown() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How many days until my next birthday?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Enter your date of birth above and the calculator will show the exact number of days remaining until your next birthday, along with the age you will be turning. The result updates daily.',
                },
              },
              {
                '@type': 'Question',
                name: 'What if my birthday is today?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "If today is your birthday, the calculator will show 0 days remaining and display your new age. Happy birthday! The countdown will immediately begin tracking the 365 (or 366) days until your next one.",
                },
              },
              {
                '@type': 'Question',
                name: 'What happens to my birthday countdown if I was born on February 29?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'If you were born on February 29 (a leap day), your birthday only occurs on the calendar every four years. In non-leap years, most people celebrate on February 28 or March 1. The calculator handles this by finding the next available February 29, or uses the closest date in non-leap years.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why do milestone birthdays like 30 and 40 feel so significant?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Psychologists attribute the emotional weight of round-number birthdays to a phenomenon called 'decade reasoning' — humans use multiples of 10 as natural checkpoints to evaluate progress against life goals. Research by Adam Alter and Hal Hershfield found that people are more likely to make major life changes (marriage, affairs, marathon running, life re-evaluation) in the year before a round-number birthday.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="mb-16 sm:mb-20 pt-4 sm:pt-8">
        <p className="text-[var(--muted)] text-xs tracking-[0.35em] uppercase mb-8 sm:mb-10">
          Birthday countdown
        </p>
        <h1
          className="font-display text-[var(--text)] leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          How many days<br className="hidden sm:block" /> until your birthday?
        </h1>
        <p className="text-[var(--muted)] text-base sm:text-lg max-w-xl leading-relaxed">
          Enter your date of birth. The calculator shows the exact number of days remaining until
          your next birthday, the age you will be turning, and every second of your life so far —
          counted live.
        </p>
      </section>

      {/* Calculator */}
      <AgeCalculator />

      {/* Milestone ages table */}
      <section className="mt-24 sm:mt-28">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">
          Milestone birthdays
        </p>
        <div className="border border-[var(--border)] divide-y divide-[var(--border)]">
          <div className="grid grid-cols-3 px-5 py-3 bg-[var(--surface)]">
            <span className="text-[var(--muted)] text-xs tracking-widest uppercase">Age</span>
            <span className="text-[var(--muted)] text-xs tracking-widest uppercase">Name</span>
            <span className="text-[var(--muted)] text-xs tracking-widest uppercase text-right">Significance</span>
          </div>
          {milestoneAges.map((row) => (
            <div key={row.age} className="grid grid-cols-3 px-5 py-3.5 bg-[var(--bg)]">
              <span className="font-display text-[var(--gold)] text-sm tabular-nums">{row.age}</span>
              <span className="text-[var(--text)] text-sm">{row.label}</span>
              <span className="text-[var(--muted)] text-xs text-right leading-relaxed">{row.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Content: The psychology of birthdays */}
      <section className="mt-24 sm:mt-28 max-w-2xl">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">
          The psychology of milestone birthdays
        </p>
        <div className="space-y-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            In 2014, behavioral scientists Adam Alter and Hal Hershfield published a study in the
            <em className="text-[var(--text)]"> Proceedings of the National Academy of Sciences</em> that
            examined why people make unusually large life decisions in the year before a round-number
            birthday. They coined the term <span className="text-[var(--text)]">&quot;9-enders&quot;</span> —
            people who are 29, 39, 49, 59, and so on — and found that this group disproportionately
            ran first marathons, had extramarital affairs, made major career changes, and rated their
            lives as either meaningfully more or less satisfying than they had previously.
          </p>
          <p>
            The mechanism is what psychologists call <span className="text-[var(--text)]">decade reasoning</span>.
            Humans use 10 as a natural checkpoint — a round number that triggers a stock-take of where
            we are versus where we thought we would be. The year before 30 is experienced as the last
            chance to accomplish the things a 20-something &quot;should&quot; have done. The year before 40
            carries the accumulated weight of decisions made in the 30s.
          </p>
          <p>
            Interestingly, the same research found that 9-enders were also more likely to seek
            meaning — to sign up for therapy, to call estranged family members, to travel to places
            they had always said they would visit. The approaching decade marker acts as a
            motivational trigger that can push people toward both positive and negative extremes.
          </p>
          <p>
            Knowing this about yourself is genuinely useful. If you are approaching a round-number
            birthday, the existential restlessness you may be feeling is a documented psychological
            phenomenon, not a sign that something is wrong. Many people use that energy deliberately —
            treating the year before the milestone as a window for intentional change rather than
            anxious reaction.
          </p>
        </div>
      </section>

      {/* Content: Leap day birthdays and cultural traditions */}
      <section className="mt-24 sm:mt-28 max-w-2xl">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">
          Birthday traditions around the world
        </p>
        <div className="space-y-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            The birthday as a personal celebration is a surprisingly recent and culturally specific
            concept. In ancient times, only kings and gods had birthdays worth marking — the average
            person&apos;s birth date went unrecorded and uncelebrated. The shift toward individual
            birthday celebrations in Western culture accelerated in the 19th century alongside the
            spread of civil birth registration, which gave ordinary people an official date to point to.
          </p>
          <p>
            <span className="text-[var(--text)]">Germany</span> is considered the origin of many modern birthday
            customs. The <em>Kinderfeste</em> (children&apos;s festival) tradition, dating to the late
            18th century, combined cake, candles, and gifts into a recognizable template. The specific
            practice of putting candles on a cake — one for each year of life, plus one &quot;to grow on&quot; —
            is documented in Germany from at least the 1700s.
          </p>
          <p>
            <span className="text-[var(--text)]">The United Kingdom</span> has a tradition of sending a
            birthday card from the monarch to anyone who reaches 100 years old, and again for every
            year thereafter. The practice began with King George V in 1917 and has been maintained
            by every subsequent monarch. The Centenarian team at Buckingham Palace currently sends
            around 12,000 cards per year — a number that has grown steadily as life expectancy rises.
          </p>
          <p>
            <span className="text-[var(--text)]">Leap day birthdays</span> — February 29 — are among the rarest
            possible birthdays, shared by approximately one in 1,461 people (roughly 0.07% of the
            population). People born on this date are called &quot;leaplings&quot; or &quot;leapers.&quot; In non-leap
            years, the question of when to celebrate divides countries: in the UK, the legal birthday
            is March 1; in New Zealand and parts of Europe, it is February 28.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-24 sm:mt-28">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">Questions</p>
        <div className="divide-y divide-[var(--border)]">
          {[
            {
              q: 'How many days until my next birthday?',
              a: 'Enter your date of birth above and the calculator will show the exact number of days remaining until your next birthday, along with the age you will be turning.',
            },
            {
              q: 'What if my birthday is today?',
              a: "If today is your birthday, the calculator will show 0 days remaining and display your new age. Happy birthday! The countdown will immediately begin tracking the days until your next one.",
            },
            {
              q: 'What happens to the countdown if I was born on February 29?',
              a: "If you were born on a leap day, your birthday only occurs on the calendar every four years. In non-leap years, most people celebrate on February 28 or March 1. The calculator finds the next available February 29 in leap years, or the nearest equivalent date otherwise.",
            },
            {
              q: 'Why do milestone birthdays feel so significant?',
              a: "Psychologists attribute it to 'decade reasoning' — humans use multiples of 10 as natural checkpoints to evaluate life progress. Research found that people are more likely to make major life changes in the year before a round-number birthday (the '9-ender effect').",
            },
          ].map((faq) => (
            <details key={faq.q} className="group py-1">
              <summary className="flex items-center justify-between py-4 cursor-pointer text-[var(--text)] text-sm font-medium hover:text-[var(--gold)] transition-colors duration-200 list-none">
                {faq.q}
                <svg className="w-4 h-4 text-[var(--muted)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="pb-5 text-sm text-[var(--muted)] leading-relaxed max-w-2xl">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="mt-24 sm:mt-28">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">Related calculators</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px border border-[var(--border)]" style={{ background: 'var(--border)' }}>
          {[
            { href: '/', label: 'Age Calculator' },
            { href: '/what-day-was-i-born', label: 'What Day Was I Born?' },
            { href: '/days-old-calculator', label: 'Days Old Calculator' },
            { href: '/age-in-days', label: 'Age in Days' },
            { href: '/life-expectancy-calculator', label: 'Life Expectancy' },
            { href: '/blog/milestone-birthdays', label: 'Milestone Birthdays Guide' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="bg-[var(--bg)] px-4 py-4 text-sm text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface)] transition-all duration-150">
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
