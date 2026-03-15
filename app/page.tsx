import AgeCalculator from './components/AgeCalculator';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'How Old Am I? — Exact Age Calculator',
            description:
              'Find out exactly how old you are in years, months, days, hours, minutes and seconds. See your life stats counting live.',
            url: 'https://secondsalive.com',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Any',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
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
                  text: 'Enter your birthdate in the calculator above. It will instantly show your exact age in years, months, days, hours, minutes, and seconds — updating live. No math required.',
                },
              },
              {
                '@type': 'Question',
                name: 'How many days old am I?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Use the calculator above and your total days alive will be displayed in the stats grid. A 30-year-old is approximately 10,957 days old; a 25-year-old approximately 9,131 days old.',
                },
              },
              {
                '@type': 'Question',
                name: 'How accurate is the age calculator?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The calculator is accurate to the second. It uses the millisecond difference between your birthdate (at midnight) and the current moment, properly handling leap years and varying month lengths.',
                },
              },
              {
                '@type': 'Question',
                name: 'How many heartbeats have I had since birth?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The calculator estimates your total heartbeats using an average resting rate of 70 beats per minute. A 30-year-old has had approximately 1.1 billion heartbeats.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is my birthdate stored or saved?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. All calculations happen entirely in your browser. Your birthdate never leaves your device and is never sent to any server.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the life expectancy progress bar?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The life progress bar shows what percentage of the average life expectancy for your country you have lived. Select your country from the dropdown to see it. It uses WHO life expectancy data for 30+ countries.',
                },
              },
            ],
          }),
        }}
      />

      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          How Old Am I
          <span className="text-indigo-500">?</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Discover your exact age down to the second — plus heartbeats,
          breaths, and life milestones, all counting live.
        </p>
      </div>

      <AgeCalculator />

      {/* More Calculators */}
      <section className="mt-16 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
          More Age Calculators
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            { href: '/days-old-calculator', label: 'Days Old Calculator', icon: '📅' },
            { href: '/hours-old-calculator', label: 'Hours Old Calculator', icon: '⏰' },
            { href: '/seconds-old-calculator', label: 'Seconds Old Calculator', icon: '⚡' },
            { href: '/weeks-old-calculator', label: 'Weeks Old Calculator', icon: '📆' },
            { href: '/heartbeats-since-birth', label: 'Heartbeats Since Birth', icon: '❤️' },
            { href: '/life-expectancy-calculator', label: 'Life Expectancy', icon: '🌍' },
            { href: '/next-birthday-countdown', label: 'Birthday Countdown', icon: '🎂' },
            { href: '/what-day-was-i-born', label: 'What Day Was I Born?', icon: '🗓️' },
            { href: '/age-in-days', label: 'Age in Days', icon: '🔢' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all text-sm text-slate-700 dark:text-slate-300 font-medium"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: 'How do I calculate my exact age?',
              a: 'Enter your birthdate above. The calculator instantly shows your exact age in years, months, days, hours, minutes, and seconds — updating live every second.',
            },
            {
              q: 'How many days old am I?',
              a: 'Your total days alive are displayed in the stats grid after you enter your birthdate. A 30-year-old is roughly 10,957 days old; a 25-year-old approximately 9,131 days old.',
            },
            {
              q: 'How accurate is this calculator?',
              a: 'Accurate to the second. It uses the millisecond difference between midnight on your birth date and the current moment, handling leap years and varying month lengths automatically.',
            },
            {
              q: 'Is my birthdate stored or saved anywhere?',
              a: 'No. All calculations happen entirely in your browser. Your birthdate never leaves your device and is never sent to any server.',
            },
            {
              q: 'How is the heartbeat count estimated?',
              a: 'It uses an average resting heart rate of 70 beats per minute — the commonly cited average for healthy adults. Treat it as a fascinating estimate rather than a precise medical figure.',
            },
            {
              q: 'What does the life expectancy progress bar show?',
              a: 'It shows what percentage of the average life expectancy for your selected country you have already lived. Select your country from the dropdown to activate it. Data from WHO statistics.',
            },
          ].map((faq) => (
            <details key={faq.q} className="group border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors list-none">
                {faq.q}
                <svg className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* From the Blog */}
      <section className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">From the Blog</h2>
          <Link href="/blog" className="text-sm font-medium text-indigo-500 hover:text-indigo-600 transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { href: '/blog/what-generation-am-i', title: 'What Generation Am I?', desc: 'Gen Z, Millennial, Gen X, Boomer — find your generation with exact year ranges.' },
            { href: '/blog/milestone-birthdays', title: 'Milestone Birthdays: 30, 40, 50, 60 & 70', desc: 'What the science actually says about every major milestone birthday.' },
            { href: '/blog/life-expectancy-by-country', title: 'Life Expectancy by Country 2025', desc: 'Full global rankings and the five factors that drive the differences.' },
            { href: '/blog/heartbeats-in-a-lifetime', title: 'Heartbeats in a Lifetime', desc: 'The average human heart beats 2.5 billion times. Here is what drives that number.' },
          ].map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group p-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-sm transition-all"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-sm">
                {post.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{post.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
