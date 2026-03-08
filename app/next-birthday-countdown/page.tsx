import type { Metadata } from 'next';
import AgeCalculator from '../components/AgeCalculator';

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

export default function NextBirthdayCountdown() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Birthday Countdown Timer',
            description: 'Count down the days until your next birthday.',
            url: 'https://secondsalive.com/next-birthday-countdown',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          }),
        }}
      />

      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 text-center">
          How Many Days Until My Birthday?
        </h1>
        <div className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 space-y-3">
          <p>
            Whether your birthday is just around the corner or months away, our birthday countdown
            calculator tells you exactly how many days, hours, and minutes remain until your next
            celebration. Enter your birthdate and instantly see how much longer you have to wait —
            and what age you&apos;ll be turning.
          </p>
          <p>
            As a bonus, you&apos;ll also see your current exact age counting live in real time,
            along with a full suite of life statistics. From total heartbeats to breaths taken,
            these numbers give you an appreciation for every moment leading up to your next big day.
            Share the countdown with friends and start the celebration early.
          </p>
        </div>
      </div>

      <AgeCalculator />
    </>
  );
}
