import type { Metadata } from 'next';
import AgeCalculator from '../components/AgeCalculator';

export const metadata: Metadata = {
  title: 'Life Expectancy Calculator — See Your Life Progress by Country',
  description:
    'See how much of the average life expectancy you have lived, based on your country. A visual life progress bar with stats for 30+ countries.',
  alternates: { canonical: '/life-expectancy-calculator' },
  openGraph: {
    title: 'Life Expectancy Calculator — See Your Life Progress by Country',
    description:
      'See how much of the average life expectancy you have lived based on your country.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function LifeExpectancyCalculator() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Life Expectancy Calculator',
            description: 'See your life progress based on country life expectancy.',
            url: 'https://secondsalive.com/life-expectancy-calculator',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          }),
        }}
      />

      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 text-center">
          Life Expectancy Calculator
        </h1>
        <div className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 space-y-3">
          <p>
            Where are you on your life journey? Our life expectancy calculator shows you a visual
            progress bar representing how much of the average life expectancy you&apos;ve experienced
            so far. Select your country from over 30 options to see results tailored to local
            averages — from Japan&apos;s 84.3 years to the global average of 73 years.
          </p>
          <p>
            This tool is designed to be positive and celebratory, focusing on how much life
            you&apos;ve already lived rather than what remains. Alongside the progress bar,
            you&apos;ll find your exact age counting live, total days and hours, heartbeats, breaths,
            and other remarkable numbers that illustrate the incredible journey you&apos;re on.
          </p>
        </div>
      </div>

      <AgeCalculator focusCountry />
    </>
  );
}
