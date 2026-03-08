import type { Metadata } from 'next';
import AgeCalculator from '../components/AgeCalculator';

export const metadata: Metadata = {
  title: 'How Many Seconds Old Am I? — Seconds Old Calculator',
  description:
    'Discover how many seconds old you are right now. Watch your total seconds alive tick up in real time — the most impressive number you will see today.',
  alternates: { canonical: '/seconds-old-calculator' },
  openGraph: {
    title: 'How Many Seconds Old Am I? — Seconds Old Calculator',
    description:
      'Discover how many seconds old you are right now. Watch the number tick up live.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function SecondsOldCalculator() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Seconds Old Calculator',
            description: 'Calculate how many seconds old you are.',
            url: 'https://secondsalive.com/seconds-old-calculator',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          }),
        }}
      />

      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 text-center">
          How Many Seconds Old Am I?
        </h1>
        <div className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 space-y-3">
          <p>
            Your age in seconds is one of the most impressive numbers about your life. Even a
            newborn has lived through millions of seconds. By the time you reach your 30th birthday,
            you&apos;ve crossed the one-billion-second mark. Our seconds old calculator shows you this
            breathtaking count and updates it live, right before your eyes.
          </p>
          <p>
            Seconds are the heartbeat of time — literally. Each second your heart beats roughly
            once, and you take about a quarter of a breath. Enter your birthdate to see your total
            seconds alive alongside other incredible life statistics. It&apos;s the kind of number
            that makes you appreciate just how much living you&apos;ve already done.
          </p>
        </div>
      </div>

      <AgeCalculator highlightStat="totalSeconds" />
    </>
  );
}
