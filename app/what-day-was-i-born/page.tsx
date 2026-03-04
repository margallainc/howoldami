import type { Metadata } from 'next';
import AgeCalculator from '../components/AgeCalculator';

export const metadata: Metadata = {
  title: 'What Day of the Week Was I Born? — Birth Day Finder',
  description:
    'Find out what day of the week you were born on. Enter your birthday and instantly see if you were born on a Monday, Tuesday, or any other day — plus your full life stats.',
  alternates: { canonical: '/what-day-was-i-born' },
  openGraph: {
    title: 'What Day of the Week Was I Born? — Birth Day Finder',
    description:
      'Enter your birthday and instantly find out what day of the week you were born on.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

export default function WhatDayWasIBorn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Birth Day of Week Finder',
            description: 'Find out what day of the week you were born on.',
            url: 'https://howoldami.com/what-day-was-i-born',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Any',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          }),
        }}
      />

      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 text-center">
          What Day of the Week Was I Born?
        </h1>
        <div className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 space-y-3">
          <p>
            Were you born on a Monday, a Friday, or perhaps a lazy Sunday? The day of the week you
            were born on is one of those fun facts that most people don&apos;t know off the top of
            their heads. Our tool calculates it instantly — just enter your full birthdate and
            you&apos;ll see the exact day of the week you arrived in the world.
          </p>
          <p>
            There&apos;s an old nursery rhyme that assigns personality traits based on your birth
            day: Monday&apos;s child is fair of face, Tuesday&apos;s child is full of grace, and so
            on. Whether you take that seriously or just enjoy the trivia, you&apos;ll also get your
            complete age breakdown, life statistics, and a countdown to your next birthday.
          </p>
        </div>
      </div>

      <AgeCalculator />
    </>
  );
}
