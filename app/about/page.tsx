import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — How Our Age Calculator Works',
  description:
    'Learn how the How Old Am I calculator works. Understand the math behind exact age calculations, heartbeat estimates, breath counts, and life expectancy statistics.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8">
        About How Old Am I?
      </h1>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-400">
        <p className="text-lg">
          How Old Am I? is a free, real-time age calculator that shows your exact age down to the
          second, along with fascinating life statistics like heartbeats, breaths, and days alive.
          Everything is calculated instantly in your browser — no data is ever sent to a server or
          stored anywhere.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8">
          How the Calculations Work
        </h2>

        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Exact Age
        </h3>
        <p>
          Your exact age in years, months, and days is calculated using calendar arithmetic. We
          compute the difference between your birthdate and the current moment, properly handling
          varying month lengths and leap years. The hours, minutes, and seconds portion updates
          every second using a timer.
        </p>

        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Total Time Units
        </h3>
        <p>
          Total days, hours, minutes, and seconds are calculated from the millisecond difference
          between your birth timestamp and the current time. We use midnight on your birth date as
          the starting point since exact birth times are rarely known.
        </p>

        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Heartbeats
        </h3>
        <p>
          Heartbeat count is estimated using an average resting heart rate of 70 beats per minute
          (approximately 1.167 beats per second). This is the commonly cited average for healthy
          adults. Actual heart rates vary by age, fitness level, and activity, so this number is an
          estimate — but a remarkably close one for most people.
        </p>

        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Breaths
        </h3>
        <p>
          Breath count uses an average respiratory rate of 16 breaths per minute. Adults typically
          breathe between 12 and 20 times per minute at rest, so 16 is a reasonable midpoint for
          estimation purposes.
        </p>

        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Sleep Estimates
        </h3>
        <p>
          Sleep statistics assume an average of 8 hours of sleep per night. The number of nights
          slept equals the number of full days you have lived. While actual sleep patterns vary
          significantly, 8 hours is the standard recommendation for adults.
        </p>

        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Life Expectancy
        </h3>
        <p>
          The life progress bar uses World Health Organization (WHO) data on average life expectancy
          by country. We include over 30 countries with their respective averages. The global
          default is 73 years. This feature is intended to be celebratory — highlighting how much
          life you have experienced — rather than predictive.
        </p>

        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8">
          Privacy
        </h2>
        <p>
          All calculations happen entirely in your browser using JavaScript. Your birthdate never
          leaves your device. There are no accounts, no cookies for tracking, and no analytics that
          record personal information. The site works completely offline once loaded.
        </p>

        {/* <h2 className="text-xl font-semibold text-slate-900 dark:text-white mt-8">
          Technical Details
        </h2>
        <p>
          This site is built with Next.js 14, TypeScript, and Tailwind CSS. The live counters use
          efficient interval timers with proper cleanup to prevent memory leaks. All numbers use
          tabular figures (monospace digits) so the layout remains stable as digits change.
        </p> */}
      </div>
    </div>
  );
}
