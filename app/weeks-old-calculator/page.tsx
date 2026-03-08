import type { Metadata } from 'next';
import AgeCalculator from '../components/AgeCalculator';

export const metadata: Metadata = {
  title: 'How Many Weeks Old Am I? — Weeks Old Calculator',
  description:
    'Calculate your exact age in weeks. Enter your birthdate and see how many weeks you have lived, plus days, hours, heartbeats, and other life statistics.',
  alternates: { canonical: '/weeks-old-calculator' },
  openGraph: {
    title: 'How Many Weeks Old Am I? — Weeks Old Calculator',
    description:
      'Calculate your exact age in weeks with our live calculator.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function WeeksOldCalculator() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Weeks Old Calculator',
            description: 'Calculate how many weeks old you are.',
            url: 'https://secondsalive.com/weeks-old-calculator',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          }),
        }}
      />

      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 text-center">
          How Many Weeks Old Am I?
        </h1>
        <div className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 space-y-3">
          <p>
            Thinking about your age in weeks gives you a unique perspective on time. The average
            human lifespan is roughly 4,000 weeks — a number that feels both vast and surprisingly
            finite. Our weeks old calculator instantly shows you exactly how many weeks you&apos;ve
            lived, ticking up in real time as you watch.
          </p>
          <p>
            Your total weeks alive puts your life into a framework that&apos;s easier to grasp than
            millions of minutes or billions of seconds. You&apos;ll also see a complete breakdown of
            your life statistics — days, hours, heartbeats, breaths, and more — all updating every
            second to paint a living portrait of your existence.
          </p>
        </div>
      </div>

      <AgeCalculator />
    </>
  );
}
