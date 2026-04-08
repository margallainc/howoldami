import type { Metadata } from 'next';
import AgeCalculator from '../components/AgeCalculator';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Age in Days — Calculate Your Exact Age in Days',
  description:
    'Find your exact age in days. Enter your birthday and see how many days you have been alive, with live updates every second. Plus heartbeats, breaths, and more.',
  alternates: { canonical: '/age-in-days' },
  openGraph: {
    title: 'Age in Days — Calculate Your Exact Age in Days',
    description:
      'Find your exact age in days with live updates every second.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const dayMilestones = [
  { days: '1,000', years: '~2.7', note: 'First major day milestone in childhood' },
  { days: '2,000', years: '~5.5', note: 'Starting school age in many countries' },
  { days: '3,652', years: '10', note: 'Ten years old exactly (non-leap)' },
  { days: '5,000', years: '~13.7', note: 'Early teenage years' },
  { days: '7,305', years: '20', note: 'Two decades of life' },
  { days: '9,131', years: '~25', note: 'Quarter-century mark' },
  { days: '10,000', years: '~27.4', note: 'Five-figure day milestone' },
  { days: '10,957', years: '30', note: 'Thirty years exactly (non-leap)' },
  { days: '14,610', years: '40', note: 'Four decades' },
  { days: '18,263', years: '50', note: 'Half century' },
  { days: '20,000', years: '~54.8', note: 'Twenty thousand days alive' },
  { days: '29,200', years: '80', note: 'Average life expectancy milestone' },
];

export default function AgeInDays() {
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
                name: 'How many days old am I?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Enter your date of birth above and the calculator will instantly show your exact age in days. A 30-year-old is approximately 10,957 days old; a 25-year-old is approximately 9,131 days old. The count updates live every second.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do leap years affect my age in days?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Each leap year adds an extra day to your total. A person who has lived through 8 leap years has 8 more days than the simple years × 365 formula would suggest. The calculator handles this automatically using your exact birth date and the current date.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is a day palindrome birthday?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "A 'day palindrome' is when your total days alive forms a palindrome number — a number that reads the same forwards and backwards, like 10001 or 9999. Some people celebrate these as mathematical milestones, much like round-number anniversaries.",
                },
              },
              {
                '@type': 'Question',
                name: 'How is age in days different from age in years?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Age in years rounds down to the last complete year. Age in days counts every single day since birth, including the current partial day. This makes days a more granular measure — useful in medical and developmental contexts where a child's age in days or weeks matters more than their age in years.",
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="mb-16 sm:mb-20 pt-4 sm:pt-8">
        <p className="text-[var(--muted)] text-xs tracking-[0.35em] uppercase mb-8 sm:mb-10">
          Age in days calculator
        </p>
        <h1
          className="font-display text-[var(--text)] leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          How many days<br className="hidden sm:block" /> have you been alive?
        </h1>
        <p className="text-[var(--muted)] text-base sm:text-lg max-w-xl leading-relaxed">
          Enter your date of birth. Your exact age in days is counted live — every midnight, the
          number climbs by one. Below, the full breakdown of your existence in every unit of time.
        </p>
      </section>

      {/* Calculator */}
      <AgeCalculator highlightStat="totalDays" />

      {/* Milestone table */}
      <section className="mt-24 sm:mt-28">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">
          Day milestones
        </p>
        <div className="border border-[var(--border)] divide-y divide-[var(--border)]">
          <div className="grid grid-cols-3 px-5 py-3 bg-[var(--surface)]">
            <span className="text-[var(--muted)] text-xs tracking-widest uppercase">Days</span>
            <span className="text-[var(--muted)] text-xs tracking-widest uppercase text-center">Approx. age</span>
            <span className="text-[var(--muted)] text-xs tracking-widest uppercase text-right">Note</span>
          </div>
          {dayMilestones.map((row) => (
            <div key={row.days} className="grid grid-cols-3 px-5 py-3.5 bg-[var(--bg)]">
              <span className="font-display text-[var(--gold)] text-sm tabular-nums">{row.days}</span>
              <span className="text-[var(--text)] text-sm text-center">{row.years} yrs</span>
              <span className="text-[var(--muted)] text-xs text-right leading-relaxed">{row.note}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Content: Why days matter */}
      <section className="mt-24 sm:mt-28 max-w-2xl">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">
          Why count in days?
        </p>
        <div className="space-y-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            The year is an astronomical unit — one orbit of the Earth around the Sun. It is useful
            for marking long spans of time, but it obscures the texture of lived experience. Days
            are more tangible. Each one is a complete cycle: a sleep, a waking, a sequence of hours
            that contained specific choices, conversations, and experiences. Counting them forces a
            different appreciation of scale.
          </p>
          <p>
            In medicine, age in days matters enormously for newborns and infants. A 10-day-old baby
            and a 25-day-old baby are at entirely different developmental stages, yet both are
            described as &quot;newborns&quot; in everyday language. Neonatologists, pediatricians, and
            developmental researchers routinely express age in days or weeks for the first two years
            of life, switching to months and years only as growth rates slow enough for those units
            to remain meaningful.
          </p>
          <p>
            The 10,000-day threshold — reached at approximately age 27 — is a quiet milestone that
            most people pass without noticing. At that point you have been alive for five digits
            of days. The next five-digit milestone, 20,000 days, arrives around age 54.8. Between
            those two points lies the bulk of what most people consider their &quot;adult life&quot; — careers,
            relationships, parenthood, and the accumulated decisions that shape identity.
          </p>
          <p>
            Leap years add a subtle complication. Every four years (with exceptions for century
            years not divisible by 400), one extra day is inserted into the calendar to keep the
            calendar synchronized with Earth&apos;s orbit. By age 30, you have lived through approximately
            7 or 8 leap years depending on your birth date, meaning the simple calculation of
            30 × 365 = 10,950 is slightly off. The true count is around 10,957 — those extra seven
            or eight days were Februaries that lasted one day longer than usual.
          </p>
        </div>
      </section>

      {/* Content: Historical context */}
      <section className="mt-24 sm:mt-28 max-w-2xl">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">
          The calendar and its imperfections
        </p>
        <div className="space-y-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            The Gregorian calendar we use today was introduced by Pope Gregory XIII in 1582,
            replacing the Julian calendar which had accumulated roughly 10 days of drift over the
            preceding 1,300 years. The correction was abrupt and disorienting: in Catholic countries,
            October 4, 1582 was followed immediately by October 15, 1582. Ten days were simply
            removed from the historical record.
          </p>
          <p>
            Different countries adopted the Gregorian calendar at different times, which creates a
            curious historical problem. When George Washington was born on February 11, 1731
            (Julian calendar), that date corresponds to February 22, 1732 in the Gregorian calendar
            — which is why the US celebrates Washington&apos;s birthday on February 22. Russia did not
            adopt the Gregorian calendar until 1918, which is why the October Revolution of 1917
            is commemorated on November 7 in the modern calendar.
          </p>
          <p>
            This means that calculating your exact age in days across the Gregorian/Julian calendar
            boundary becomes philosophically complex. A person born in 1580 and calculating their
            age in days in 1590 would get a different answer depending on which calendar system
            they used — a 10-day discrepancy baked into history. Modern age calculators, including
            this one, assume the Gregorian calendar consistently, which is the most practical
            approach for contemporary use.
          </p>
          <p>
            The concept of a <span className="text-[var(--text)]">day palindrome</span> — a day count that
            reads the same forwards and backwards — has become a minor tradition in mathematical
            communities. Numbers like 9,999, 10,001, 10,101, and 11,011 are palindromes worth
            celebrating if you happen to notice them passing. They have no physical significance,
            but they are the kind of arbitrary anchor that makes time feel more textured and
            noticed, which may itself be worth something.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-24 sm:mt-28">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">Questions</p>
        <div className="divide-y divide-[var(--border)]">
          {[
            {
              q: 'How many days old am I?',
              a: 'Enter your date of birth above and the calculator instantly shows your exact age in days. A 30-year-old is approximately 10,957 days old; a 25-year-old is approximately 9,131 days old.',
            },
            {
              q: 'How do leap years affect my age in days?',
              a: 'Each leap year adds an extra day to your total. A person who has lived through 8 leap years has 8 more days than the simple years × 365 formula would suggest. The calculator handles this automatically.',
            },
            {
              q: 'What is a day palindrome birthday?',
              a: "A 'day palindrome' is when your total days alive forms a palindrome number — one that reads the same forwards and backwards, like 10,001 or 9,999. Some people celebrate these as mathematical milestones.",
            },
            {
              q: 'How is age in days different from age in years?',
              a: "Age in years rounds down to the last complete year. Age in days counts every single day since birth. This makes days more granular — which is why doctors use days and weeks for newborns and infants, where each day represents significant developmental change.",
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
            { href: '/days-old-calculator', label: 'Days Old Calculator' },
            { href: '/hours-old-calculator', label: 'Hours Old Calculator' },
            { href: '/weeks-old-calculator', label: 'Weeks Old Calculator' },
            { href: '/seconds-old-calculator', label: 'Seconds Old Calculator' },
            { href: '/next-birthday-countdown', label: 'Birthday Countdown' },
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
