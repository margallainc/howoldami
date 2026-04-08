import type { Metadata } from 'next';
import AgeCalculator from '../components/AgeCalculator';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What Day of the Week Was I Born? — Birth Day Finder',
  description:
    'Find out what day of the week you were born on. Enter your birthday and instantly see if you were born on a Monday, Tuesday, or any other day — plus your full life stats.',
  alternates: { canonical: '/what-day-was-i-born' },
  openGraph: {
    title: 'What Day of the Week Was I Born? — Birth Day Finder',
    description:
      'Enter your birthday and instantly find out what day of the week you were born on.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const dayData = [
  { day: 'Monday', nursery: 'Fair of face', share: '14.01%', note: 'Slightly below average' },
  { day: 'Tuesday', nursery: 'Full of grace', share: '14.39%', note: 'Just above average' },
  { day: 'Wednesday', nursery: 'Full of woe', share: '14.03%', note: 'Near average' },
  { day: 'Thursday', nursery: 'Has far to go', share: '14.33%', note: 'Slightly above average' },
  { day: 'Friday', nursery: 'Loving and giving', share: '14.53%', note: 'Most common birth day' },
  { day: 'Saturday', nursery: 'Works hard for a living', share: '12.78%', note: 'Fewest births (elective)' },
  { day: 'Sunday', nursery: 'Bonny and blithe', share: '11.93%', note: 'Fewest (elective procedures)' },
];

export default function WhatDayWasIBorn() {
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
                name: 'What day of the week am I most likely to have been born on?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Statistically, Friday is the most common birth day, accounting for roughly 14.5% of births. Saturday and Sunday are the least common because fewer elective inductions and caesarean sections are scheduled on weekends.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does the calculator know what day of the week I was born?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "JavaScript's Date object converts your birth date into a day-of-week index (0 = Sunday through 6 = Saturday). This uses the Gregorian calendar and correctly handles leap years and century adjustments going back centuries.",
                },
              },
              {
                '@type': 'Question',
                name: 'What is the Monday\'s child nursery rhyme?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "The rhyme first appeared in print in 1838 in A. E. Bray's Traditions of Devonshire. The full version: Monday's child is fair of face / Tuesday's child is full of grace / Wednesday's child is full of woe / Thursday's child has far to go / Friday's child is loving and giving / Saturday's child works hard for a living / And the child that is born on the Sabbath day / Is bonny and blithe, and good and gay.",
                },
              },
              {
                '@type': 'Question',
                name: 'How do I calculate the day of the week for any date manually?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Mathematicians use Zeller's Congruence — a formula that converts a date into a day-of-week number. For a quick mental method: memorize that January 1, 2000 was a Saturday, then add the number of days between that date and your target date, divide by 7, and the remainder gives the day offset.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="mb-16 sm:mb-20 pt-4 sm:pt-8">
        <p className="text-[var(--muted)] text-xs tracking-[0.35em] uppercase mb-8 sm:mb-10">
          Birth day calculator
        </p>
        <h1
          className="font-display text-[var(--text)] leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          What day were<br className="hidden sm:block" /> you born on?
        </h1>
        <p className="text-[var(--muted)] text-base sm:text-lg max-w-xl leading-relaxed">
          Enter your date of birth. The calculator instantly reveals the day of the week you arrived
          in the world — along with your exact age, life stats, and a countdown to your next birthday.
        </p>
      </section>

      {/* Calculator */}
      <AgeCalculator />

      {/* Day distribution table */}
      <section className="mt-24 sm:mt-28">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">
          Birth day distribution
        </p>
        <div className="border border-[var(--border)] divide-y divide-[var(--border)]">
          <div className="grid grid-cols-4 px-5 py-3 bg-[var(--surface)]">
            <span className="text-[var(--muted)] text-xs tracking-widest uppercase">Day</span>
            <span className="text-[var(--muted)] text-xs tracking-widest uppercase">Nursery rhyme</span>
            <span className="text-[var(--muted)] text-xs tracking-widest uppercase text-center">Share of births</span>
            <span className="text-[var(--muted)] text-xs tracking-widest uppercase text-right">Note</span>
          </div>
          {dayData.map((row) => (
            <div key={row.day} className="grid grid-cols-4 px-5 py-3.5 bg-[var(--bg)]">
              <span className="font-display text-[var(--text)] text-sm">{row.day}</span>
              <span className="text-[var(--muted)] text-xs leading-relaxed italic">{row.nursery}</span>
              <span className="font-display text-[var(--gold)] text-sm text-center tabular-nums">{row.share}</span>
              <span className="text-[var(--muted)] text-xs text-right leading-relaxed">{row.note}</span>
            </div>
          ))}
        </div>
        <p className="text-[var(--dim)] text-xs mt-3">Data: US National Center for Health Statistics, aggregated birth records.</p>
      </section>

      {/* Content: Why weekends have fewer births */}
      <section className="mt-24 sm:mt-28 max-w-2xl">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">
          Why weekends have fewer births
        </p>
        <div className="space-y-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            A glance at birth-day statistics reveals a clear weekday bias. In the United States,
            roughly 14–14.5% of births occur on each weekday, but that figure drops to around 13%
            on Saturday and below 12% on Sunday. The pattern is not random — it is the direct
            result of medical scheduling.
          </p>
          <p>
            Elective inductions and planned caesarean sections are overwhelmingly scheduled Monday
            through Friday. Hospitals maintain fuller obstetrics staffing on weekdays, and many
            obstetricians prefer to schedule procedures when their full team is available. This
            means that a significant portion of modern births — roughly one-third in many countries —
            happen at a medically chosen time rather than spontaneously, pulling births away from
            weekends.
          </p>
          <p>
            The effect has grown over decades. In data from the 1970s, birth rates were more evenly
            distributed across all seven days. As caesarean and induction rates have climbed in
            most high-income countries, the weekday surplus has grown proportionally. If you were
            born on a Saturday or Sunday, you are statistically more likely to have arrived
            spontaneously rather than through a scheduled procedure.
          </p>
          <p>
            There is also a seasonal pattern layered on top. September is consistently the most
            common birth month in the United States and United Kingdom, a fact that demographers
            attribute to conceptions around the Christmas and New Year holiday period, when people
            spend more time at home. If you were born in September on a weekday, you are among the
            statistically most common type of birthday.
          </p>
        </div>
      </section>

      {/* Content: Zeller's Congruence */}
      <section className="mt-24 sm:mt-28 max-w-2xl">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">
          The math behind the day
        </p>
        <div className="space-y-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            How does a computer — or a sufficiently determined human — convert a date like
            April 6, 1990 into &quot;Friday&quot;? The answer is a formula called
            <span className="text-[var(--text)]"> Zeller&apos;s Congruence</span>, published in 1887 by
            German mathematician Christian Zeller. The formula reduces a date to a number from 0 to 6
            corresponding to each day of the week, correctly accounting for the irregular lengths of
            months, leap years, and century adjustments.
          </p>
          <p>
            The Gregorian calendar itself is designed so that any given date advances by one weekday
            each year, except in leap years when it advances by two. This creates a 400-year cycle —
            after exactly 400 years, every date falls on the same day of the week again. This 400-year
            cycle contains exactly 97 leap years (not 100, because century years are only leap years
            if divisible by 400), which is why the rule &quot;divide by 4 for a leap year&quot; has exceptions.
          </p>
          <p>
            An interesting consequence of this regularity: the 13th of any month falls on a Friday
            more often than on any other day. Over a complete 400-year Gregorian cycle, the 13th
            lands on Friday 688 times versus 685 for Thursday — making Friday the 13th the most
            statistically common day-date combination in the calendar. The least common is Sunday the 13th.
          </p>
          <p>
            For personal mental arithmetic, a useful anchor point: January 1, 2000 was a Saturday.
            From there, you can count forward or backward by years (each adds one day, leap years add
            two) to anchor any year, then count months and days within that year.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-24 sm:mt-28">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">Questions</p>
        <div className="divide-y divide-[var(--border)]">
          {[
            {
              q: 'What day of the week am I most likely to have been born on?',
              a: 'Statistically, Friday is the most common birth day at roughly 14.5% of all births. Saturday and Sunday are the least common because fewer elective inductions and caesarean sections are scheduled on weekends.',
            },
            {
              q: 'How does the calculator determine the day of the week?',
              a: "JavaScript's Date object converts your birth date into a day-of-week index (0 = Sunday through 6 = Saturday). This uses the Gregorian calendar and correctly handles leap years going back centuries.",
            },
            {
              q: "What is the Monday's child nursery rhyme?",
              a: "The rhyme first appeared in print in 1838 in A. E. Bray's Traditions of Devonshire. Monday: fair of face. Tuesday: full of grace. Wednesday: full of woe. Thursday: has far to go. Friday: loving and giving. Saturday: works hard for a living. Sunday: bonny and blithe.",
            },
            {
              q: 'How do I calculate the day of the week for any date manually?',
              a: "Use Zeller's Congruence — a formula that converts any date into a day-of-week number. A simpler anchor: January 1, 2000 was a Saturday. Add the number of days between that date and your target, divide by 7, and the remainder gives the day offset.",
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
            { href: '/next-birthday-countdown', label: 'Birthday Countdown' },
            { href: '/days-old-calculator', label: 'Days Old Calculator' },
            { href: '/age-in-days', label: 'Age in Days' },
            { href: '/weeks-old-calculator', label: 'Weeks Old Calculator' },
            { href: '/blog/birth-month-personality', label: 'Birth Month Personality' },
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
