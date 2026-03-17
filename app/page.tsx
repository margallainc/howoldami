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
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
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

      {/* ── Hero ── */}
      <section className="mb-16 sm:mb-20 pt-4 sm:pt-8">
        <p className="text-[var(--muted)] text-xs tracking-[0.35em] uppercase mb-8 sm:mb-10">
          Age calculator
        </p>
        <h1
          className="font-display text-[var(--text)] leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          How much time<br className="hidden sm:block" /> have you lived?
        </h1>
        <p className="text-[var(--muted)] text-base sm:text-lg max-w-xl leading-relaxed">
          Enter your date of birth. Every second of your existence — counted, measured, and made visible.
        </p>
      </section>

      {/* ── Calculator ── */}
      <AgeCalculator />

      {/* ── More Calculators ── */}
      <section className="mt-24 sm:mt-28">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">
          More calculators
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px border border-[var(--border)]" style={{ background: 'var(--border)' }}>
          {[
            { href: '/days-old-calculator', label: 'Days Old' },
            { href: '/hours-old-calculator', label: 'Hours Old' },
            { href: '/seconds-old-calculator', label: 'Seconds Old' },
            { href: '/weeks-old-calculator', label: 'Weeks Old' },
            { href: '/heartbeats-since-birth', label: 'Heartbeats' },
            { href: '/life-expectancy-calculator', label: 'Life Expectancy' },
            { href: '/next-birthday-countdown', label: 'Birthday Countdown' },
            { href: '/what-day-was-i-born', label: 'What Day Was I Born?' },
            { href: '/age-in-days', label: 'Age in Days' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-[var(--bg)] px-4 py-4 text-sm text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--surface)] transition-all duration-150"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="mt-24 sm:mt-28">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">
          Questions
        </p>
        <div className="divide-y divide-[var(--border)]">
          {[
            {
              q: 'How do I calculate my exact age?',
              a: 'Enter your date of birth in the three fields above. The calculator instantly computes your age in years, months, days, hours, minutes, and seconds — updating every second.',
            },
            {
              q: 'How many days old am I?',
              a: 'Your total days alive are listed in the stats table after you enter your birthdate. A 30-year-old is roughly 10,957 days old; a 25-year-old approximately 9,131 days old.',
            },
            {
              q: 'How accurate is this calculator?',
              a: 'Accurate to the second. It uses the millisecond difference between midnight on your birth date and the current moment, handling leap years and varying month lengths automatically.',
            },
            {
              q: 'Is my birthdate stored anywhere?',
              a: 'No. All calculations run entirely in your browser. Your birthdate never leaves your device and is never sent to any server.',
            },
            {
              q: 'How is the heartbeat count estimated?',
              a: 'Using an average resting heart rate of 70 beats per minute — the commonly cited average for healthy adults. Treat it as a fascinating estimate rather than a medical figure.',
            },
            {
              q: 'What does the life expectancy progress show?',
              a: 'It shows what percentage of the average life expectancy for your selected country you have already lived. Choose your country from the dropdown. Data from WHO life expectancy statistics.',
            },
          ].map((faq) => (
            <details key={faq.q} className="group py-1">
              <summary className="flex items-center justify-between py-4 cursor-pointer text-[var(--text)] text-sm font-medium hover:text-[var(--gold)] transition-colors duration-200 list-none">
                {faq.q}
                <svg
                  className="w-4 h-4 text-[var(--muted)] group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="pb-5 text-sm text-[var(--muted)] leading-relaxed max-w-2xl">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ── From the Blog ── */}
      <section className="mt-24 sm:mt-28">
        <div className="flex items-baseline justify-between mb-8">
          <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase">From the blog</p>
          <Link href="/blog" className="text-xs tracking-widest uppercase text-[var(--muted)] hover:text-[var(--gold)] transition-colors duration-200">
            All articles →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-px border border-[var(--border)]" style={{ background: 'var(--border)' }}>
          {[
            { href: '/blog/zodiac-sign-by-birthday', title: 'Zodiac Sign by Birthday', desc: 'Every sign, every date. The full guide to Western astrology.' },
            { href: '/blog/birth-month-personality', title: 'What Your Birth Month Says About You', desc: 'The science behind birth month effects on personality and health.' },
            { href: '/blog/life-expectancy-by-country', title: 'Life Expectancy by Country', desc: 'Full global rankings and the five factors that drive the differences.' },
            { href: '/blog/milestone-birthdays', title: 'Milestone Birthdays: 30, 40, 50, 60', desc: 'What the science actually says about every major milestone birthday.' },
          ].map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className="group bg-[var(--bg)] px-5 py-5 hover:bg-[var(--surface)] transition-colors duration-150"
            >
              <h3 className="text-sm font-medium text-[var(--text)] mb-1.5 group-hover:text-[var(--gold)] transition-colors duration-200">
                {post.title}
              </h3>
              <p className="text-xs text-[var(--muted)] leading-relaxed">{post.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
