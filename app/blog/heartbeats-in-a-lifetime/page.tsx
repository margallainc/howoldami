import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Many Heartbeats Do You Get in a Lifetime?',
  description:
    'The average human heart beats around 2.5 billion times over a lifetime. Discover the science behind this number, what affects your heart rate, and what it means for your health.',
  alternates: { canonical: '/blog/heartbeats-in-a-lifetime' },
  openGraph: {
    title: 'How Many Heartbeats Do You Get in a Lifetime?',
    description:
      'The average heart beats 2.5 billion times in a lifetime. Explore the science, the math, and what your heart rate reveals about your health.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const heartRateTable = [
  { category: 'Well-trained athlete', bpm: '40 – 60', dailyBeats: '57,600 – 86,400', lifetime: '1.8B – 2.7B' },
  { category: 'Healthy adult (average)', bpm: '60 – 100', dailyBeats: '86,400 – 144,000', lifetime: '2.5B – 4.1B' },
  { category: 'Sedentary adult', bpm: '80 – 100', dailyBeats: '115,200 – 144,000', lifetime: '3.3B – 4.1B' },
  { category: 'Newborn infant', bpm: '120 – 160', dailyBeats: '172,800 – 230,400', lifetime: 'n/a' },
  { category: 'Child (6–12 years)', bpm: '70 – 110', dailyBeats: '100,800 – 158,400', lifetime: 'n/a' },
];

export default function HeartbeatsInALifetime() {
  return (
    <div className="max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How Many Heartbeats Do You Get in a Lifetime?',
            description:
              'The average human heart beats around 2.5 billion times over a lifetime. Explore the science and what it means for your health.',
            url: 'https://secondsalive.com/blog/heartbeats-in-a-lifetime',
            publisher: {
              '@type': 'Organization',
              name: 'How Old Am I?',
              url: 'https://secondsalive.com',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How many times does the human heart beat in a lifetime?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The average human heart beats approximately 2.5 billion times over a 70-year lifespan, based on an average resting heart rate of 70 beats per minute. Athletes with lower resting heart rates may have fewer total beats; sedentary individuals more.',
                },
              },
              {
                '@type': 'Question',
                name: 'How many heartbeats per day does a human have?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'At an average resting heart rate of 70 beats per minute, the human heart beats approximately 100,800 times per day. This varies based on activity level, fitness, age, and health status.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does a slower heart rate mean you live longer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A lower resting heart rate is generally associated with better cardiovascular fitness and health outcomes, but it is not simply a matter of having a "lifetime beat budget." A low resting heart rate achieved through fitness is beneficial; a low heart rate from other causes may not be.',
                },
              },
            ],
          }),
        }}
      />

      <nav className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 mb-8">
        <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-indigo-500 transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-slate-600 dark:text-slate-400">Heartbeats in a Lifetime</span>
      </nav>

      <div className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 mb-4">
          Life Stats
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          How Many Heartbeats Do You Get in a Lifetime?
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">7 min read</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-400">

        <p className="text-lg leading-relaxed">
          Your heart has been beating since roughly the 22nd day after conception. It will beat without a single voluntary command from you until the day you die. And over the course of an average human life, it will beat approximately <strong className="text-slate-900 dark:text-white">2.5 billion times</strong>. That number is so large it barely registers. Here is what it actually means, and what drives it up or down.
        </p>

        {/* Live counter callout */}
        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5 my-8">
          <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-2">See your personal heartbeat count — live</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Our heartbeats-since-birth calculator shows your estimated total heartbeat count updating in real time, based on your birthdate and an average resting rate of 70 bpm.
          </p>
          <Link
            href="/heartbeats-since-birth"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-colors"
          >
            See my heartbeat count →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          The Math Behind the Number
        </h2>
        <p>
          The calculation is straightforward, though the inputs vary by person:
        </p>
        <div className="not-prose bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-5 my-4 font-mono text-sm">
          <div className="space-y-2 text-slate-600 dark:text-slate-400">
            <div><span className="text-slate-400 dark:text-slate-500">{"// Average resting heart rate"}</span></div>
            <div className="text-slate-900 dark:text-white">70 beats/minute</div>
            <div className="mt-3"><span className="text-slate-400 dark:text-slate-500">{"// Per day"}</span></div>
            <div className="text-slate-900 dark:text-white">70 × 60 × 24 = <strong>100,800 beats/day</strong></div>
            <div className="mt-3"><span className="text-slate-400 dark:text-slate-500">{"// Per year"}</span></div>
            <div className="text-slate-900 dark:text-white">100,800 × 365.25 = <strong>~36.8 million beats/year</strong></div>
            <div className="mt-3"><span className="text-slate-400 dark:text-slate-500">{"// Over 70 years"}</span></div>
            <div className="text-slate-900 dark:text-white">36.8M × 70 = <strong>~2.57 billion total beats</strong></div>
          </div>
        </div>
        <p>
          This calculation uses a resting heart rate throughout, which slightly underestimates the true total — during exercise, stress, fever, or excitement, your heart rate climbs significantly. A more precise estimate accounting for activity variation typically lands between 2.5 and 3.5 billion beats for a typical 75-80 year lifespan.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          Heart Rate by Age and Fitness Level
        </h2>
        <p>
          Resting heart rate varies substantially by age, fitness level, and individual biology:
        </p>

        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="text-left px-4 py-3 font-semibold text-slate-900 dark:text-white rounded-tl-lg">Category</th>
                <th className="text-right px-4 py-3 font-semibold text-slate-900 dark:text-white">Resting BPM</th>
                <th className="text-right px-4 py-3 font-semibold text-slate-900 dark:text-white">Beats/Day</th>
                <th className="text-right px-4 py-3 font-semibold text-slate-900 dark:text-white rounded-tr-lg">Lifetime Est.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {heartRateTable.map((row, i) => (
                <tr key={row.category} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-800/50'}>
                  <td className="px-4 py-2.5 font-medium text-slate-900 dark:text-white">{row.category}</td>
                  <td className="px-4 py-2.5 text-right text-slate-600 dark:text-slate-400">{row.bpm}</td>
                  <td className="px-4 py-2.5 text-right text-slate-600 dark:text-slate-400">{row.dailyBeats}</td>
                  <td className="px-4 py-2.5 text-right text-slate-600 dark:text-slate-400">{row.lifetime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          Do Animals Have a "Heartbeat Budget"?
        </h2>
        <p>
          One of the most fascinating observations in biology is the consistency of lifetime heartbeats across mammalian species. A mouse lives about 2&ndash;3 years with a heart rate of 500&ndash;600 bpm. An elephant lives 60&ndash;70 years with a heart rate of 25&ndash;35 bpm. Both clock roughly 1&ndash;1.5 billion heartbeats over their lifespans.
        </p>
        <p>
          This observation led to the popular idea of a &quot;lifetime heartbeat budget&quot; &mdash; that each animal gets a fixed number of beats, and the faster you use them, the sooner you die. While this is a compelling pattern, it is an observation rather than a mechanism. Humans are actually a notable exception: we live far longer than the mammalian heartbeat pattern would predict, likely because of upright posture, cognitive complexity, social behavior, and our accumulated medical knowledge.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          What Your Resting Heart Rate Tells You
        </h2>
        <p>
          Resting heart rate is one of the simplest and most accessible indicators of cardiovascular health. A lower resting heart rate generally indicates:
        </p>
        <ul className="space-y-3 my-4">
          <li className="flex gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
            <div><strong className="text-slate-900 dark:text-white">Greater cardiac efficiency.</strong> A well-trained heart pumps more blood per beat, so it needs fewer beats per minute to circulate the same volume.</div>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
            <div><strong className="text-slate-900 dark:text-white">Better autonomic nervous system balance.</strong> A lower resting rate reflects stronger parasympathetic (rest-and-digest) tone and lower chronic stress response.</div>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
            <div><strong className="text-slate-900 dark:text-white">Reduced cardiovascular risk.</strong> Large-scale studies have found that for every 10-beat-per-minute increase in resting heart rate, cardiovascular mortality risk increases by approximately 9–16%.</div>
          </li>
        </ul>
        <p>
          The American Heart Association considers a resting heart rate between 60 and 100 bpm normal for adults. Well-trained endurance athletes often have resting rates of 40–55 bpm. A consistently high resting rate (over 90 bpm) warrants discussion with a doctor.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          How Exercise Affects Your Lifetime Beat Count
        </h2>
        <p>
          Here is the interesting paradox: regular aerobic exercise raises your heart rate during the workout — potentially adding millions of beats in the short term — but lowers your resting heart rate over time, saving far more beats in the long run.
        </p>
        <p>
          Someone who exercises regularly and lowers their resting rate from 75 to 60 bpm saves about 21,600 beats per day, or roughly 7.9 million beats per year. Over 30 years of consistent exercise, that is a saving of approximately 236 million beats — nearly a 10% reduction in lifetime total. More importantly, the cardiovascular benefits of that exercise extend lifespan, meaning the heart actually ends up beating more total times — but with much less strain per beat.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          Heart Rate Variability: The Metric That Matters More
        </h2>
        <p>
          Beyond resting heart rate, cardiologists increasingly focus on heart rate variability (HRV) — the variation in time between consecutive heartbeats. A healthy heart does not beat with mechanical regularity; it fluctuates slightly with each breath and in response to dozens of other signals. Higher HRV indicates a more adaptable, resilient cardiovascular system. Lower HRV is associated with stress, overtraining, poor recovery, and increased risk of cardiac events.
        </p>
        <p>
          Modern smartwatches from Apple, Garmin, Fitbit, and others now track HRV during sleep. It is one of the most practically useful metrics available to individuals who want to monitor their cardiovascular health without medical intervention.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5 not-prose">
          {[
            { q: 'How many times does the human heart beat in a lifetime?', a: 'Approximately 2.5 billion times over a 70-year lifespan at an average resting rate of 70 bpm. Accounting for activity, the real total is closer to 2.5–3.5 billion for most people.' },
            { q: 'How many heartbeats per day does a human have?', a: 'At 70 bpm average, approximately 100,800 beats per day. This rises during exercise, fever, and stress, and falls during deep sleep.' },
            { q: 'How many heartbeats per minute is normal?', a: 'The American Heart Association defines a normal resting heart rate as 60–100 bpm for adults. Well-trained athletes typically range from 40–60 bpm.' },
            { q: 'Does a slower heart rate mean you live longer?', a: 'A lower resting rate from fitness is associated with better health outcomes, but there is no simple "beat budget" that determines lifespan. Exercise-induced bradycardia is beneficial; pathological bradycardia is not.' },
            { q: 'How many heartbeats since birth have I had?', a: 'Use our heartbeats-since-birth calculator for a real-time estimate based on your exact age and an average resting rate of 70 bpm.' },
          ].map((faq) => (
            <div key={faq.q} className="border border-slate-200 dark:border-slate-700 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mt-10">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Count Your Heartbeats</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            See your total estimated heartbeat count since birth, updating live every second.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/heartbeats-since-birth" className="text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg transition-colors">
              Heartbeats Since Birth
            </Link>
            <Link href="/" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-4 py-2 rounded-lg transition-colors">
              Full Age Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
