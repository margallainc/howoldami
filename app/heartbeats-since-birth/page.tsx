import type { Metadata } from 'next';
import AgeCalculator from '../components/AgeCalculator';

export const metadata: Metadata = {
  title: 'How Many Heartbeats Have I Had? — Heartbeat Counter',
  description:
    'Find out how many times your heart has beaten since you were born. See your total heartbeats counting live, plus your age in days, hours, seconds, and more.',
  alternates: { canonical: '/heartbeats-since-birth' },
  openGraph: {
    title: 'How Many Heartbeats Have I Had? — Heartbeat Counter',
    description:
      'Find out how many times your heart has beaten since birth. Watch it count live.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function HeartbeatsSinceBirth() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Heartbeat Counter Since Birth',
            description: 'Calculate how many heartbeats you have had since birth.',
            url: 'https://howoldami.com/heartbeats-since-birth',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          }),
        }}
      />

      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 text-center">
          How Many Heartbeats Have I Had?
        </h1>
        <div className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 space-y-3">
          <p>
            Your heart is the most reliable engine you&apos;ll ever own. Beating an average of 70
            times per minute, it has already pumped billions of times since you were born — and it
            never stops. Our heartbeat counter estimates your total heartbeats since birth based on
            this average resting heart rate and displays the result live, ticking upward with each
            passing second.
          </p>
          <p>
            Seeing your heartbeat count is a powerful reminder of the incredible work your body does
            every moment of every day. You&apos;ll also discover your exact age, total days and hours
            lived, breaths taken, and other fascinating life statistics. Enter your birthday and
            celebrate the billions of beats that have kept you going.
          </p>
        </div>
      </div>

      <AgeCalculator highlightStat="heartbeats" />
    </>
  );
}
