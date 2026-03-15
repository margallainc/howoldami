import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What Generation Am I? Complete Guide to Every Generation',
  description:
    'Find out which generation you belong to — Gen Z, Millennial, Gen X, Boomer, or Silent Generation. Exact year ranges, defining traits, and the events that shaped each era.',
  alternates: { canonical: '/blog/what-generation-am-i' },
  openGraph: {
    title: 'What Generation Am I? Complete Guide to Every Generation',
    description:
      'Find out which generation you belong to with exact birth year ranges, defining characteristics, and the historical events that shaped each era.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const generations = [
  {
    name: 'Generation Alpha',
    years: '2013 – 2025',
    ages: 'Under 13',
    color: 'bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-800',
    badge: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-400',
    description:
      'The first generation born entirely in the 21st century. Raised with iPads as toys, voice assistants as companions, and AI as a normal part of daily life. The most technologically immersed generation ever.',
  },
  {
    name: 'Generation Z',
    years: '1997 – 2012',
    ages: '13 – 28',
    color: 'bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800',
    badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400',
    description:
      'The first true digital natives. They grew up with smartphones from adolescence, witnessed the 2008 financial crisis through their parents, and came of age during a global pandemic. Pragmatic, diverse, and deeply fluent in online culture.',
  },
  {
    name: 'Millennials',
    years: '1981 – 1996',
    ages: '29 – 44',
    color: 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800',
    badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400',
    description:
      'Came of age during the internet revolution. Old enough to remember life before Google, young enough to adapt seamlessly to social media. Defined by the 9/11 attacks, the 2008 recession, and sky-high student debt. The most educated generation in history.',
  },
  {
    name: 'Generation X',
    years: '1965 – 1980',
    ages: '45 – 60',
    color: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800',
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400',
    description:
      'The "forgotten" middle generation. Raised as latchkey kids with unprecedented independence, they became the first generation to adapt to personal computers. Known for self-reliance, skepticism toward institutions, and a dry sense of humour.',
  },
  {
    name: 'Baby Boomers',
    years: '1946 – 1964',
    ages: '61 – 79',
    color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
    badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400',
    description:
      'Born during the post-WWII population boom, Boomers grew up in economic prosperity and witnessed transformative cultural shifts: civil rights, the moon landing, Vietnam, Woodstock. They defined modern consumerism and still hold significant economic and political influence.',
  },
  {
    name: 'Silent Generation',
    years: '1928 – 1945',
    ages: '80 – 97',
    color: 'bg-slate-50 dark:bg-slate-900/20 border-slate-200 dark:border-slate-700',
    badge: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400',
    description:
      'Shaped by the Great Depression and World War II, the Silent Generation learned conformity and caution as survival skills. They built the middle class, powered the civil rights movement, and created much of the cultural infrastructure Boomers inherited.',
  },
  {
    name: 'Greatest Generation',
    years: '1901 – 1927',
    ages: '98+',
    color: 'bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800',
    badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400',
    description:
      'Tom Brokaw named them the Greatest Generation for good reason. They survived the Great Depression, fought WWII, and rebuilt the world that followed. Their resilience, sacrifice, and civic sense shaped the modern world more than any other cohort.',
  },
];

export default function WhatGenerationAmI() {
  return (
    <div className="max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'What Generation Am I? Complete Guide to Every Generation',
            description:
              'Find out which generation you belong to with exact birth year ranges, defining characteristics, and historical context for each era.',
            url: 'https://secondsalive.com/blog/what-generation-am-i',
            publisher: {
              '@type': 'Organization',
              name: 'How Old Am I?',
              url: 'https://secondsalive.com',
            },
            mainEntityOfPage: 'https://secondsalive.com/blog/what-generation-am-i',
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
                name: 'What years are Millennials?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Millennials were born between 1981 and 1996, making them 29–44 years old in 2025. They are also known as Generation Y.',
                },
              },
              {
                '@type': 'Question',
                name: 'What years are Gen Z?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Generation Z includes people born between 1997 and 2012, making them approximately 13–28 years old in 2025.',
                },
              },
              {
                '@type': 'Question',
                name: 'Am I a Millennial or Gen Z?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'If you were born between 1981–1996, you are a Millennial. If you were born between 1997–2012, you are Gen Z. Those born right on the boundary (1995–1998) are sometimes called "Zillennials" — a micro-generation sharing traits of both.',
                },
              },
              {
                '@type': 'Question',
                name: 'What generation is 1995?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'People born in 1995 are technically Millennials (1981–1996), but fall within the "Zillennial" micro-generation (roughly 1993–1998) that straddles Millennial and Gen Z culture.',
                },
              },
              {
                '@type': 'Question',
                name: 'What years are Baby Boomers?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Baby Boomers were born between 1946 and 1964, making them 61–79 years old in 2025. The name comes from the dramatic post-WWII rise in birth rates.',
                },
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 mb-8">
        <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-indigo-500 transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-slate-600 dark:text-slate-400">What Generation Am I?</span>
      </nav>

      <div className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400 mb-4">
          Generations
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          What Generation Am I? Complete Guide to Every Generation
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">
          8 min read
        </p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-400">
        <p className="text-lg leading-relaxed">
          Generations are one of the most useful lenses for understanding human history — they capture shared experiences, values, and the cultural fingerprints left by the world as it was when you were growing up. But the exact year ranges are hotly debated, and different researchers draw the lines differently. Here is the most widely accepted breakdown, with context for what each generation actually lived through.
        </p>

        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5 my-8">
          <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Find your exact age first</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Use our free calculator to see your exact age in years, days, hours, and seconds — then come back to see which generation shaped your world.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg transition-colors"
          >
            Calculate my exact age →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-6">
          Every Generation: Year Ranges, Ages & Defining Traits
        </h2>

        <div className="space-y-4 not-prose">
          {generations.map((gen) => (
            <div key={gen.name} className={`rounded-xl border p-5 ${gen.color}`}>
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${gen.badge}`}>
                    {gen.name}
                  </span>
                </div>
                <div className="text-right text-sm text-slate-500 dark:text-slate-400">
                  <div className="font-semibold text-slate-900 dark:text-white">{gen.years}</div>
                  <div>Age in 2025: {gen.ages}</div>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{gen.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          Why the Boundaries Are Fuzzy
        </h2>
        <p>
          No one is born with a generational label stamped on them. The Pew Research Center, which is generally considered the most authoritative source on generation definitions, draws the Millennial/Gen Z cutoff at 1996. But the U.S. Census Bureau has used 1982 as the Millennial start date, and demographers William Strauss and Neil Howe &mdash; who coined the term &quot;Millennial&quot; &mdash; placed the start at 1982 as well.
        </p>
        <p>
          What matters more than the exact year is the formative experience. Someone born in 1980 and someone born in 1965 are both technically Gen X, but they had meaningfully different childhoods. The generation concept works best as a rough cultural guide, not a rigid identity box.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          The &quot;Zillennial&quot; Micro-Generation
        </h2>
        <p>
          If you were born between roughly 1993 and 1998, you may find that neither &quot;Millennial&quot; nor &quot;Gen Z&quot; fully captures your experience. You likely had a childhood without smartphones but adopted them as a teenager. You remember MySpace and Facebook launching, but also grew up on Instagram and Snapchat. This micro-generation &mdash; sometimes called Zillennials or the Oregon Trail Generation &mdash; straddles the cultural divide in a way the broader categories miss.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          What Shapes a Generation&apos;s Character
        </h2>
        <p>
          Researchers identify a few core factors that define a generation&apos;s character:
        </p>
        <ul className="space-y-3 my-4">
          <li className="flex gap-3">
            <span className="mt-1 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"></span>
            <div><strong className="text-slate-900 dark:text-white">Coming-of-age events.</strong> The events that happen when you are between roughly 15 and 25 leave the deepest mark. Boomers had Vietnam and the moon landing. Millennials had 9/11 and the 2008 crash. Gen Z had COVID-19.</div>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"></span>
            <div><strong className="text-slate-900 dark:text-white">Technology adoption.</strong> The technology available during childhood shapes cognition and communication. Gen X learned to type on keyboards. Millennials learned to search on Google. Gen Z learned to scroll on a touchscreen.</div>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"></span>
            <div><strong className="text-slate-900 dark:text-white">Economic conditions at entry.</strong> The job market you walk into at 22 shapes your financial trajectory for decades. Millennials entered the workforce during the worst recession since the Great Depression. That timing has measurable long-term effects on lifetime earnings and wealth accumulation.</div>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0"></span>
            <div><strong className="text-slate-900 dark:text-white">Parenting styles of the preceding generation.</strong> How your parents raised you — which reflects the era they grew up in — shapes your own values and behaviors more than most people acknowledge.</div>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          Quick Reference Table
        </h2>
        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="text-left px-4 py-3 font-semibold text-slate-900 dark:text-white rounded-tl-lg">Generation</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-900 dark:text-white">Birth Years</th>
                <th className="text-left px-4 py-3 font-semibold text-slate-900 dark:text-white rounded-tr-lg">Age in 2025</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {generations.map((gen, i) => (
                <tr key={gen.name} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-800/50'}>
                  <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{gen.name}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{gen.years}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{gen.ages}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5 not-prose">
          {[
            { q: 'What years are Millennials?', a: 'Millennials were born between 1981 and 1996, making them 29–44 years old in 2025. They are also called Generation Y.' },
            { q: 'What years are Gen Z?', a: 'Generation Z spans from 1997 to 2012, making them approximately 13–28 years old in 2025.' },
            { q: 'Am I a Millennial or Gen Z?', a: 'If you were born between 1981–1996 you are a Millennial. Born 1997–2012, you are Gen Z. If you were born 1993–1998 you sit in the "Zillennial" micro-generation and may identify with traits of both.' },
            { q: 'What generation is 1995?', a: '1995 is technically Millennial (1981–1996), but sits squarely in the Zillennial micro-generation (roughly 1993–1998) that bridges Millennial and Gen Z culture.' },
            { q: 'What years are Baby Boomers?', a: 'Baby Boomers were born between 1946 and 1964, making them 61–79 years old in 2025. The name comes from the post-WWII population surge.' },
            { q: 'What generation is 2000?', a: 'Anyone born in 2000 is Generation Z (1997–2012), making them 25 years old in 2025.' },
          ].map((faq) => (
            <div key={faq.q} className="border border-slate-200 dark:border-slate-700 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mt-10">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Calculate Your Exact Age</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Now that you know your generation, find out your exact age in years, months, days, hours, and seconds — live, down to the second.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg transition-colors">
              Age Calculator
            </Link>
            <Link href="/days-old-calculator" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-4 py-2 rounded-lg transition-colors">
              Days Old Calculator
            </Link>
            <Link href="/next-birthday-countdown" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-4 py-2 rounded-lg transition-colors">
              Birthday Countdown
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
