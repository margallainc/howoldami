import type { Metadata } from 'next';
import SleepCalculator from './SleepCalculator';

export const metadata: Metadata = {
  title: 'Sleep Cycle Calculator — Seconds Alive',
  description:
    'Find the perfect bedtime or wake-up time based on your natural 90-minute sleep cycles. Built for humans who want to stop waking up groggy.',
  alternates: { canonical: '/sleep' },
  openGraph: {
    title: 'Sleep Cycle Calculator — Seconds Alive',
    description:
      'Find the perfect bedtime or wake-up time based on your natural 90-minute sleep cycles. Built for humans who want to stop waking up groggy.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function SleepPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Sleep Cycle Calculator',
            description:
              'Find the perfect bedtime or wake-up time based on your natural 90-minute sleep cycles.',
            url: 'https://secondsalive.com/sleep',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="mb-16 sm:mb-20 pt-4 sm:pt-8">
        <p className="text-[var(--muted)] text-xs tracking-[0.35em] uppercase mb-8 sm:mb-10">
          Sleep calculator
        </p>
        <h1
          className="font-display text-[var(--text)] leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
        >
          Wake up feeling<br className="hidden sm:block" /> rested, not groggy.
        </h1>
        <p className="text-[var(--muted)] text-base sm:text-lg max-w-xl leading-relaxed">
          Your sleep cycle calculator. Find the perfect bedtime or alarm time based on your
          natural 90&#8209;minute sleep cycles — and stop waking up mid&#8209;cycle.
        </p>
      </section>

      {/* ── Calculator ── */}
      <SleepCalculator />

      {/* ── SEO explanation ── */}
      <section className="mt-20 sm:mt-24 pt-10 border-t border-[var(--border)]">
        <p className="text-[var(--muted)] text-xs tracking-[0.3em] uppercase mb-4">
          How sleep cycles work
        </p>
        <p className="text-[var(--text)] text-sm leading-relaxed max-w-2xl">
          Sleep naturally progresses through 90-minute cycles, each moving from light sleep through
          deep (slow-wave) sleep and into REM. Waking mid-cycle — when an alarm cuts into deep
          sleep — triggers sleep inertia: the heavy, disoriented grogginess that can linger for
          hours. This sleep calculator works backward from your target wake time (or forward from
          your bedtime) to identify times that land at the end of a full cycle, when your body is
          closest to waking naturally. Most adults function best on 5 complete cycles (7.5 hours),
          though individual needs vary between 4 and 6 depending on age, health, and chronotype.
        </p>
      </section>
    </>
  );
}
