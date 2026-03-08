import type { Metadata } from 'next';
import AgeCalculator from '../components/AgeCalculator';

export const metadata: Metadata = {
  title: 'How Many Days Old Am I? — Days Old Calculator',
  description:
    'Calculate exactly how many days old you are right now. Enter your birthdate and see your age in days counting live, plus heartbeats, breaths and more life stats.',
  alternates: { canonical: '/days-old-calculator' },
  openGraph: {
    title: 'How Many Days Old Am I? — Days Old Calculator',
    description:
      'Calculate exactly how many days old you are right now. See your age in days counting live.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function DaysOldCalculator() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Days Old Calculator',
            description: 'Calculate how many days old you are.',
            url: 'https://secondsalive.com/days-old-calculator',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          }),
        }}
      />

      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 text-center">
          How Many Days Old Am I?
        </h1>
        <div className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 space-y-3">
          <p>
            Ever wondered exactly how many days you&apos;ve been alive? Our days old calculator gives you a
            precise count of every single day since you were born, updating in real time. Just enter your
            birthdate and watch the number tick upward — it&apos;s a surprisingly powerful way to appreciate
            the sheer number of days you&apos;ve experienced.
          </p>
          <p>
            Beyond your total days alive, you&apos;ll also see your age broken down into hours, minutes,
            and seconds, along with fascinating life statistics like how many times your heart has
            beaten and how many breaths you&apos;ve taken. Each stat updates every second, giving you a
            living snapshot of your life in numbers.
          </p>
        </div>
      </div>

      <AgeCalculator highlightStat="totalDays" />
    </>
  );
}
