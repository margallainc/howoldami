import AgeCalculator from './components/AgeCalculator';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'How Old Am I? — Exact Age Calculator',
            description:
              'Find out exactly how old you are in years, months, days, hours, minutes and seconds. See your life stats counting live.',
            url: 'https://secondsalive.com',
            applicationCategory: 'UtilityApplication',
            operatingSystem: 'Any',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
            },
          }),
        }}
      />

      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          How Old Am I
          <span className="text-indigo-500">?</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Discover your exact age down to the second — plus heartbeats,
          breaths, and life milestones, all counting live.
        </p>
      </div>

      <AgeCalculator />
    </>
  );
}
