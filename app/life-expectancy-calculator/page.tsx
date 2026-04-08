import type { Metadata } from 'next';
import AgeCalculator from '../components/AgeCalculator';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Life Expectancy Calculator — See Your Life Progress by Country',
  description:
    'See how much of the average life expectancy you have lived, based on your country. Visual life progress bar with WHO data for 30+ countries.',
  alternates: { canonical: '/life-expectancy-calculator' },
  openGraph: {
    title: 'Life Expectancy Calculator — See Your Life Progress by Country',
    description:
      'See how much of the average life expectancy you have lived based on your country.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const countryData = [
  { country: 'Japan', expectancy: 84.3, note: 'Longest-lived major nation' },
  { country: 'Switzerland', expectancy: 83.8, note: 'Ranked #2 globally' },
  { country: 'South Korea', expectancy: 83.5, note: 'Fastest rise in 50 years' },
  { country: 'Australia', expectancy: 83.2, note: 'High quality healthcare' },
  { country: 'Spain', expectancy: 83.2, note: 'Mediterranean diet effect' },
  { country: 'Italy', expectancy: 83.1, note: 'Home of the Cilento Zone' },
  { country: 'United Kingdom', expectancy: 81.3, note: 'NHS universal coverage' },
  { country: 'United States', expectancy: 78.5, note: 'Below peer nations' },
  { country: 'China', expectancy: 77.4, note: 'Rose 44 years since 1950' },
  { country: 'Brazil', expectancy: 75.5, note: 'Regional middle ground' },
  { country: 'India', expectancy: 70.8, note: 'Rapid improvement ongoing' },
  { country: 'World average', expectancy: 73.3, note: 'WHO 2023 estimate' },
];

export default function LifeExpectancyCalculator() {
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
                name: 'How is the life expectancy progress bar calculated?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The bar divides your age in years by the average life expectancy for your selected country, expressed as a percentage. A 40-year-old in Japan (84.3-year expectancy) would show roughly 47%. The percentage updates live as each second passes.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which country has the highest life expectancy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Japan consistently ranks #1 globally at approximately 84.3 years, driven by diet (low saturated fat, high fish and vegetables), strong social bonds, universal healthcare, and active lifestyles. Monaco, a micro-state, sometimes ranks higher in aggregated data.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why does the United States rank below other wealthy nations?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The US life expectancy of around 78.5 years lags peer nations due to higher rates of obesity, opioid mortality, homicide, lack of universal healthcare coverage, and car-dependent infrastructure that reduces daily movement. Income inequality also plays a measurable role.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are the Blue Zones and why do people live longer there?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Blue Zones are five regions identified by researcher Dan Buettner where people regularly live past 100: Sardinia (Italy), Okinawa (Japan), Nicoya Peninsula (Costa Rica), Ikaria (Greece), and Loma Linda (California). Common factors include plant-heavy diets, daily natural movement, strong community ties, a sense of purpose, and moderate alcohol consumption (except Loma Linda).',
                },
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="mb-16 sm:mb-20 pt-4 sm:pt-8">
        <p className="text-[var(--muted)] text-xs tracking-[0.35em] uppercase mb-8 sm:mb-10">
          Life expectancy calculator
        </p>
        <h1
          className="font-display text-[var(--text)] leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          Where are you<br className="hidden sm:block" /> on life&apos;s arc?
        </h1>
        <p className="text-[var(--muted)] text-base sm:text-lg max-w-xl leading-relaxed">
          Enter your date of birth and select your country. A live progress bar shows how much of the
          average life expectancy for your nation you have already lived — updated every second.
        </p>
      </section>

      {/* Calculator */}
      <AgeCalculator focusCountry />

      {/* Life Expectancy by Country Table */}
      <section className="mt-24 sm:mt-28">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">
          Life expectancy by country
        </p>
        <div className="border border-[var(--border)] divide-y divide-[var(--border)]">
          <div className="grid grid-cols-3 px-5 py-3 bg-[var(--surface)]">
            <span className="text-[var(--muted)] text-xs tracking-widest uppercase">Country</span>
            <span className="text-[var(--muted)] text-xs tracking-widest uppercase text-center">Avg. years</span>
            <span className="text-[var(--muted)] text-xs tracking-widest uppercase text-right">Note</span>
          </div>
          {countryData.map((row) => (
            <div key={row.country} className="grid grid-cols-3 px-5 py-3.5 bg-[var(--bg)]">
              <span className="text-[var(--text)] text-sm">{row.country}</span>
              <span className="font-display text-[var(--gold)] text-sm text-center tabular-nums">{row.expectancy}</span>
              <span className="text-[var(--muted)] text-xs text-right leading-relaxed">{row.note}</span>
            </div>
          ))}
        </div>
        <p className="text-[var(--dim)] text-xs mt-3">Source: WHO Global Health Observatory, 2023 estimates.</p>
      </section>

      {/* Content: Blue Zones */}
      <section className="mt-24 sm:mt-28 max-w-2xl">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">
          The blue zones
        </p>
        <div className="space-y-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            In 2004, National Geographic explorer Dan Buettner partnered with demographers and
            longevity researchers to identify places where people routinely live past 100 at
            remarkable rates. They called these regions <em className="text-[var(--text)]">Blue Zones</em> — five
            geographic pockets where the normal rules of aging seem to bend.
          </p>
          <p>
            <span className="text-[var(--text)]">Sardinia, Italy</span> — Specifically the Nuoro province, home to
            the world&apos;s highest concentration of male centenarians. Researchers attribute this partly
            to genetics (a founder effect in isolated mountain villages) and partly to a diet of
            whole-grain flatbread, goat&apos;s milk, and Cannonau wine, plus daily hill walking that
            provides low-intensity lifelong exercise.
          </p>
          <p>
            <span className="text-[var(--text)]">Okinawa, Japan</span> — Once home to the world&apos;s longest-lived
            women. Okinawans practice <em>hara hachi bu</em> — a Confucian principle of eating until 80%
            full. They also maintain <em>moai</em>, tight social groups of five friends who commit to each
            other for life, providing financial, emotional, and social support across decades.
          </p>
          <p>
            <span className="text-[var(--text)]">Nicoya Peninsula, Costa Rica</span> — Men here have the world&apos;s
            lowest rate of middle-age mortality. Researchers found a strong sense of <em>plan de vida</em>
            (reason to live), hard water rich in calcium and magnesium, and tight multigenerational
            family structures as key factors.
          </p>
          <p>
            <span className="text-[var(--text)]">Ikaria, Greece</span> — An Aegean island where one in three people
            lives into their 90s, almost no one shows signs of dementia, and people routinely nap in
            the afternoon. The Ikarian diet is a strict version of the Mediterranean diet, and the
            relaxed pace of island life keeps chronic stress — a documented accelerant of cellular
            aging — measurably low.
          </p>
          <p>
            <span className="text-[var(--text)]">Loma Linda, California</span> — A community of Seventh-day
            Adventists who outlive the average American by roughly a decade. They observe a weekly
            24-hour sabbath (mandatory rest), follow plant-based diets, avoid alcohol and tobacco,
            and exercise regularly as a religious practice. Loma Linda proves that longevity is
            achievable even within a modern Western environment given the right lifestyle structure.
          </p>
        </div>
      </section>

      {/* Content: What actually drives longevity */}
      <section className="mt-24 sm:mt-28 max-w-2xl">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">
          What the research actually shows
        </p>
        <div className="space-y-5 text-sm text-[var(--muted)] leading-relaxed">
          <p>
            The Stanford Center on Longevity and Harvard&apos;s Study of Adult Development — the longest
            running study of adult life ever conducted, tracking men since 1938 — have converged on
            several factors that consistently predict a longer, healthier life.
          </p>
          <p>
            <span className="text-[var(--text)]">Relationships are the strongest predictor.</span> The Harvard study
            found that the quality of close relationships at age 50 was a better predictor of health
            at 80 than cholesterol levels. Loneliness is now considered by some researchers to be
            as damaging as smoking 15 cigarettes per day.
          </p>
          <p>
            <span className="text-[var(--text)]">Daily natural movement matters more than gym sessions.</span> Blue
            Zone residents don&apos;t exercise in the modern sense — they live in environments that
            require constant low-intensity movement: walking to stores, gardening, kneading bread,
            climbing stairs. This &quot;passive exercise&quot; proves more sustainable than deliberate workouts
            that people stop after a few weeks.
          </p>
          <p>
            <span className="text-[var(--text)]">Purpose adds years.</span> Okinawans have a word,
            <em> ikigai</em> — roughly &quot;reason for being.&quot; Nicoyans call it <em>plan de vida</em>.
            Studies show that people with a strong sense of purpose live on average seven years
            longer than those without one, with lower rates of Alzheimer&apos;s, arthritis, and stroke.
          </p>
          <p>
            <span className="text-[var(--text)]">Genetics sets the ceiling, lifestyle fills the room.</span> Research
            on identical twins separated at birth suggests that genes account for roughly 20–30% of
            longevity variance. The remaining 70–80% comes from environment, behavior, and chance —
            which means that for most people, how long they live is substantially within their
            influence.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-24 sm:mt-28">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-8">Questions</p>
        <div className="divide-y divide-[var(--border)]">
          {[
            {
              q: 'How is the life expectancy progress bar calculated?',
              a: 'The bar divides your age in years by the average life expectancy for your selected country, shown as a percentage. A 40-year-old in Japan (84.3-year expectancy) shows roughly 47%. The percentage updates live as each second passes.',
            },
            {
              q: 'Which country has the highest life expectancy?',
              a: "Japan consistently ranks #1 globally at approximately 84.3 years, driven by diet (low saturated fat, high fish and vegetables), strong social bonds, universal healthcare, and active lifestyles.",
            },
            {
              q: 'Why does the United States rank below other wealthy nations?',
              a: 'The US life expectancy of around 78.5 years lags peer nations due to higher rates of obesity, opioid mortality, and car-dependent infrastructure that reduces daily movement. Income inequality and gaps in healthcare access also play measurable roles.',
            },
            {
              q: 'What are the Blue Zones?',
              a: 'Blue Zones are five regions where people regularly live past 100: Sardinia (Italy), Okinawa (Japan), Nicoya Peninsula (Costa Rica), Ikaria (Greece), and Loma Linda (California). Shared factors include plant-heavy diets, daily natural movement, strong community ties, and a clear sense of purpose.',
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
            { href: '/heartbeats-since-birth', label: 'Heartbeats Since Birth' },
            { href: '/days-old-calculator', label: 'Days Old Calculator' },
            { href: '/seconds-old-calculator', label: 'Seconds Old Calculator' },
            { href: '/next-birthday-countdown', label: 'Birthday Countdown' },
            { href: '/blog/life-expectancy-by-country', label: 'Life Expectancy Guide' },
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
