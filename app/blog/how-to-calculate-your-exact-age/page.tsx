import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Calculate Your Exact Age in Years, Days, Hours & Seconds',
  description:
    'A step-by-step guide to calculating your precise age in every unit of time. Why simple subtraction gets it wrong, how leap years affect the math, and what your age in days reveals.',
  alternates: { canonical: '/blog/how-to-calculate-your-exact-age' },
  openGraph: {
    title: 'How to Calculate Your Exact Age in Years, Days, Hours & Seconds',
    description:
      'Step-by-step guide to precise age calculation — years, months, days, hours, and seconds. Why simple subtraction gets it wrong and how to do it right.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function HowToCalculateExactAge() {
  return (
    <div className="max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How to Calculate Your Exact Age in Years, Days, Hours & Seconds',
            description:
              'Step-by-step guide to calculating your precise age across every unit of time, including handling for leap years and calendar arithmetic.',
            url: 'https://secondsalive.com/blog/how-to-calculate-your-exact-age',
            publisher: {
              '@type': 'Organization',
              name: 'How Old Am I?',
              url: 'https://secondsalive.com',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do I calculate my exact age?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'To calculate your exact age in years, months, and days: subtract your birth year from the current year, then adjust for whether your birthday has occurred yet this year. For days, calculate the total milliseconds between your birthdate and now, then convert (divide by 1000 × 60 × 60 × 24). Our free calculator does all of this instantly.',
                },
              },
              {
                '@type': 'Question',
                name: 'How many days old am I?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'To find how many days old you are, calculate the number of days between your birthdate and today. This accounts for leap years automatically. For a 30-year-old, the answer is typically around 10,950 to 10,960 days. Use our days old calculator for an instant, precise answer.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do leap years affect age calculation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Leap years add one extra day to the year (February 29). For day-based calculations, you simply count the actual calendar days — leap years are automatically included. For year-based calculations, leap years mean that the exact number of days per year varies (365 or 366), which is why accurate calculators use the actual date difference rather than multiplying years by 365.',
                },
              },
              {
                '@type': 'Question',
                name: 'How many hours old am I?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Multiply your total days alive by 24. A 30-year-old is approximately 262,800 hours old. Our hours old calculator provides this instantly with your exact birthdate.',
                },
              },
            ],
          }),
        }}
      />

      <nav className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 mb-8">
        <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-indigo-500 transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-slate-600 dark:text-slate-400">How to Calculate Your Exact Age</span>
      </nav>

      <div className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 mb-4">
          Calculators
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          How to Calculate Your Exact Age in Years, Days, Hours & Seconds
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">6 min read</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-400">

        <p className="text-lg leading-relaxed">
          Most people know their age in years. Fewer know it in months. Almost no one knows it in days — and yet that number is often the most striking. A 30-year-old has lived approximately 10,950 days. A 50-year-old, around 18,250. These numbers carry a different kind of weight than "30" or "50," and calculating them precisely is more interesting than it first appears.
        </p>

        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5 my-8">
          <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Skip the math — get your exact age instantly</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Our free calculator shows your age in years, months, days, hours, minutes, and seconds — live, updating every second.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg transition-colors"
          >
            Calculate my exact age →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          Why Simple Subtraction Gets It Wrong
        </h2>
        <p>
          The most common mistake in age calculation is subtracting birth year from current year and stopping there. If today is March 15, 2025, and you were born on December 10, 1994, you might calculate: 2025 − 1994 = 31. But you have not yet had your birthday this year. Your correct age is 30 years, 3 months, and 5 days.
        </p>
        <p>
          The rule is simple: if your birthday has not yet occurred this calendar year, your age in years is (current year − birth year − 1). If it has occurred, it is (current year − birth year). Almost every calculator error in age arithmetic traces back to missing this adjustment.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          Calculating Age in Years, Months, and Days — Step by Step
        </h2>

        <div className="space-y-4 not-prose my-6">
          {[
            {
              step: '1',
              title: 'Start with the year difference',
              body: 'Subtract your birth year from the current year. This gives a rough year count — but requires adjustment for whether your birthday has passed this year.',
            },
            {
              step: '2',
              title: 'Check if your birthday has passed this year',
              body: 'Compare today\'s month and day to your birth month and day. If today is before your birthday this year, subtract 1 from your year count. If today is after or on your birthday, the year count stands.',
            },
            {
              step: '3',
              title: 'Calculate the remaining months',
              body: 'Count the months from your last birthday to today. If your birthday was in September and today is March, that is 6 months (October, November, December, January, February, March).',
            },
            {
              step: '4',
              title: 'Calculate the remaining days',
              body: 'Count the days from the start of your current birthday month to today, minus any days from the month of your last birthday that haven\'t been counted. This is where varying month lengths (28, 29, 30, or 31 days) require careful handling.',
            },
          ].map((s) => (
            <div key={s.step} className="flex gap-4 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="w-8 h-8 rounded-full bg-indigo-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                {s.step}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{s.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          How to Calculate Your Age in Total Days
        </h2>
        <p>
          This is actually simpler than calculating years, months, and days — and more precise. The process:
        </p>
        <div className="not-prose bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5 my-4 font-mono text-sm">
          <div className="space-y-2 text-slate-600 dark:text-slate-400">
            <div><span className="text-slate-400 dark:text-slate-500">// Step 1: Convert both dates to milliseconds since Unix epoch</span></div>
            <div className="text-slate-900 dark:text-white">today_ms = Date.now()</div>
            <div className="text-slate-900 dark:text-white">birthdate_ms = new Date(birthdate).getTime()</div>
            <div className="mt-3"><span className="text-slate-400 dark:text-slate-500">// Step 2: Get the difference in milliseconds</span></div>
            <div className="text-slate-900 dark:text-white">diff_ms = today_ms - birthdate_ms</div>
            <div className="mt-3"><span className="text-slate-400 dark:text-slate-500">// Step 3: Convert to days</span></div>
            <div className="text-slate-900 dark:text-white">days_old = Math.floor(diff_ms / (1000 × 60 × 60 × 24))</div>
            <div className="mt-3 text-xs text-slate-400 dark:text-slate-500">// Leap years are automatically handled since we use actual calendar milliseconds</div>
          </div>
        </div>
        <p>
          The millisecond approach is elegant because it sidesteps all the calendar arithmetic. Leap years, varying month lengths, and timezone considerations are handled automatically by using the actual elapsed time. This is exactly how our calculator works.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          The Leap Year Problem
        </h2>
        <p>
          Leap years affect age calculation in two ways. For total-days calculation, they are automatically included when you use the millisecond method. For year-based calculation, the question of whether 2025 is a leap year (it is not) or 2024 was (it was) affects the exact number of days in "one year" — which is why "multiply years by 365" gives slightly wrong answers over long periods.
        </p>
        <p>
          The deeper quirk: people born on February 29th technically only have a matching calendar date in leap years. Software handling this edge case usually assigns March 1st as their birthday in non-leap years, which means in practice they age "normally" — but some systems get this wrong.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          Age Reference Table: Days, Hours, and Seconds by Age
        </h2>

        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="text-left px-4 py-3 font-semibold text-slate-900 dark:text-white rounded-tl-lg">Age (Years)</th>
                <th className="text-right px-4 py-3 font-semibold text-slate-900 dark:text-white">Days</th>
                <th className="text-right px-4 py-3 font-semibold text-slate-900 dark:text-white">Hours</th>
                <th className="text-right px-4 py-3 font-semibold text-slate-900 dark:text-white rounded-tr-lg">Seconds</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {[
                { age: 1, days: '365', hours: '8,760', seconds: '31,536,000' },
                { age: 5, days: '1,827', hours: '43,848', seconds: '157,852,800' },
                { age: 10, days: '3,653', hours: '87,672', seconds: '315,619,200' },
                { age: 18, days: '6,575', hours: '157,800', seconds: '568,080,000' },
                { age: 21, days: '7,670', hours: '184,080', seconds: '662,688,000' },
                { age: 25, days: '9,132', hours: '219,168', seconds: '789,004,800' },
                { age: 30, days: '10,957', hours: '262,968', seconds: '946,684,800' },
                { age: 40, days: '14,610', hours: '350,640', seconds: '1,262,304,000' },
                { age: 50, days: '18,263', hours: '438,312', seconds: '1,577,923,200' },
                { age: 60, days: '21,915', hours: '525,960', seconds: '1,893,456,000' },
                { age: 70, days: '25,568', hours: '613,632', seconds: '2,209,075,200' },
                { age: 80, days: '29,220', hours: '701,280', seconds: '2,524,608,000' },
                { age: 100, days: '36,525', hours: '876,600', seconds: '3,155,760,000' },
              ].map((row, i) => (
                <tr key={row.age} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-800/50'}>
                  <td className="px-4 py-2.5 font-semibold text-slate-900 dark:text-white">{row.age} years</td>
                  <td className="px-4 py-2.5 text-right text-slate-600 dark:text-slate-400 font-mono">{row.days}</td>
                  <td className="px-4 py-2.5 text-right text-slate-600 dark:text-slate-400 font-mono">{row.hours}</td>
                  <td className="px-4 py-2.5 text-right text-slate-600 dark:text-slate-400 font-mono">{row.seconds}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">Figures use average year length of 365.25 days. Exact values vary by birthdate due to leap year distribution.</p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          What Different Age Units Reveal
        </h2>
        <p>
          Each unit of age reveals something different about how you relate to time:
        </p>
        <ul className="space-y-3 my-4">
          <li className="flex gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"></span>
            <div><strong className="text-slate-900 dark:text-white">Years</strong> give you social and legal context — they determine milestones, rights, and how others categorize you. They are the default because they map most cleanly to the cycle of seasons and memory.</div>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"></span>
            <div><strong className="text-slate-900 dark:text-white">Days</strong> are grounding. 10,000 days is a milestone many people hit around age 27. The number makes abstract years feel concrete — 10,000 individual days you have navigated.</div>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"></span>
            <div><strong className="text-slate-900 dark:text-white">Hours</strong> reveal the staggering volume of lived experience. A 40-year-old has had over 350,000 hours of consciousness to fill.</div>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"></span>
            <div><strong className="text-slate-900 dark:text-white">Seconds</strong> are the most visceral unit. Watching your second count tick upward in real time — crossing a billion seconds at around age 31 — makes time feel both fast and precious in a way that "turning 31" does not.</div>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5 not-prose">
          {[
            { q: 'How do I calculate my exact age?', a: 'Subtract your birth year from the current year, then adjust: if your birthday hasn\'t occurred this year yet, subtract 1. For days, count the actual calendar days between your birthdate and today (our calculator does this instantly).' },
            { q: 'How many days old am I?', a: 'Use our days old calculator for an exact answer. As a reference: a 25-year-old is approximately 9,131 days old; a 30-year-old approximately 10,957; a 40-year-old approximately 14,610.' },
            { q: 'How do leap years affect age calculation?', a: 'For day-based calculations, leap years are automatically included when you count actual calendar days. For year-based calculations, note that one year is not always exactly 365 days — it averages 365.25, which is why precise calculators use date subtraction rather than multiplying years by 365.' },
            { q: 'How many hours old am I?', a: 'Multiply your days alive by 24. At 30 years old, you are approximately 262,968 hours old. Use our hours old calculator for your exact number.' },
            { q: 'How many seconds old am I?', a: 'Multiply your hours by 3,600. You cross the billion-second mark at approximately 31 years, 8 months old (1,000,000,000 seconds = 11,574 days). Our age calculator shows your live second count.' },
            { q: 'What is the most accurate way to calculate age?', a: 'The most accurate method is to compute the difference in milliseconds between your exact birth timestamp and the current moment, then convert to whichever unit you want. This handles leap years, month variations, and daylight saving time automatically.' },
          ].map((faq) => (
            <div key={faq.q} className="border border-slate-200 dark:border-slate-700 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mt-10">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Calculate Your Age Right Now</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Get your exact age in every unit — years, months, days, hours, minutes, and seconds — updating live.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg transition-colors">
              Age Calculator
            </Link>
            <Link href="/days-old-calculator" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-4 py-2 rounded-lg transition-colors">
              Days Old Calculator
            </Link>
            <Link href="/hours-old-calculator" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-4 py-2 rounded-lg transition-colors">
              Hours Old Calculator
            </Link>
            <Link href="/seconds-old-calculator" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-4 py-2 rounded-lg transition-colors">
              Seconds Old Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
