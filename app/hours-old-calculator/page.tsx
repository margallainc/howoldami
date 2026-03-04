import type { Metadata } from 'next';
import AgeCalculator from '../components/AgeCalculator';

export const metadata: Metadata = {
  title: 'How Many Hours Old Am I? — Hours Old Calculator',
  description:
    'Find out exactly how many hours old you are. Enter your birthday and see your total hours alive counting in real time, plus days, heartbeats, and more.',
  alternates: { canonical: '/hours-old-calculator' },
  openGraph: {
    title: 'How Many Hours Old Am I? — Hours Old Calculator',
    description:
      'Find out exactly how many hours old you are with our live hours calculator.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function HoursOldCalculator() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Hours Old Calculator',
            description: 'Calculate how many hours old you are.',
            url: 'https://howoldami.com/hours-old-calculator',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          }),
        }}
      />

      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 text-center">
          How Many Hours Old Am I?
        </h1>
        <div className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 space-y-3">
          <p>
            Have you ever thought about your life in terms of hours? It&apos;s a staggering number. By
            the time you&apos;re 30, you&apos;ve already lived over 260,000 hours. Our hours old calculator
            computes your exact age in hours from the moment you were born, and it keeps counting
            live so you can watch each new hour accumulate in real time.
          </p>
          <p>
            Along with your total hours, you&apos;ll discover other mind-blowing life statistics — from
            the total number of heartbeats your heart has pumped to the millions of breaths
            you&apos;ve drawn. Enter your birthday above and see the incredible scale of your life
            measured hour by hour.
          </p>
        </div>
      </div>

      <AgeCalculator highlightStat="totalHours" />
    </>
  );
}
