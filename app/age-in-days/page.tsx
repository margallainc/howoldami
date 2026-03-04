import type { Metadata } from 'next';
import AgeCalculator from '../components/AgeCalculator';

export const metadata: Metadata = {
  title: 'Age in Days — Calculate Your Exact Age in Days',
  description:
    'Find your exact age in days. Enter your birthday and see how many days you have been alive, with live updates every second. Plus heartbeats, breaths, and more.',
  alternates: { canonical: '/age-in-days' },
  openGraph: {
    title: 'Age in Days — Calculate Your Exact Age in Days',
    description:
      'Find your exact age in days with live updates every second.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function AgeInDays() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Age in Days Calculator',
            description: 'Calculate your exact age in days.',
            url: 'https://howoldami.com/age-in-days',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          }),
        }}
      />

      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 text-center">
          What Is My Age in Days?
        </h1>
        <div className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 space-y-3">
          <p>
            Measuring your age in days offers a fresh perspective on how long you&apos;ve been
            alive. While we typically think in years, days give you a much more granular and tangible
            number. Our calculator converts your birthdate into a precise count of days lived,
            updating in real time as each new day dawns.
          </p>
          <p>
            You might be surprised by how large the number is — or how quickly it grows. Alongside
            your total days, you&apos;ll find a full breakdown of hours, minutes, seconds,
            heartbeats, and breaths. It&apos;s a compelling way to visualize the richness of your
            life experience, one day at a time.
          </p>
        </div>
      </div>

      <AgeCalculator highlightStat="totalDays" />
    </>
  );
}
