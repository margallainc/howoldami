import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What Your Birth Month Says About You — Science & Personality',
  description:
    'What does your birth month say about your personality, health, and life outcomes? Explore the research behind birth month effects — from career trends to disease risk.',
  alternates: { canonical: '/blog/birth-month-personality' },
  openGraph: {
    title: 'What Your Birth Month Says About You — Science & Personality',
    description:
      'The real science behind birth month effects on personality, health, career, and more — what the research actually shows.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const months = [
  {
    month: 'January',
    emoji: '❄️',
    color: 'border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-900/20',
    badge: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-400',
    traits: 'Disciplined, analytical, ambitious',
    healthNote: 'Studies link January births to slightly higher rates of schizophrenia (1–5%) — linked to prenatal vitamin D deficiency in winter pregnancies.',
    funFact: 'January babies are statistically over-represented among general managers and CEOs in business research.',
  },
  {
    month: 'February',
    emoji: '💙',
    color: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20',
    badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400',
    traits: 'Creative, independent, idealistic',
    healthNote: 'February births correlate with slightly elevated rates of sleep disorders in some studies.',
    funFact: 'February has the fewest births of any month, meaning February-born people are among the rarest by birthday.',
  },
  {
    month: 'March',
    emoji: '🌬️',
    color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20',
    badge: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-400',
    traits: 'Optimistic, empathetic, adaptable',
    healthNote: 'March babies show slightly lower rates of cardiovascular disease in some Northern Hemisphere studies.',
    funFact: 'Research from the University of Vienna found March births are linked to occupations requiring long-term planning — architects, pilots, and surgeons.',
  },
  {
    month: 'April',
    emoji: '🌧️',
    color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20',
    badge: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400',
    traits: 'Assertive, courageous, direct',
    healthNote: 'April births have been associated with slightly lower rates of asthma in children, possibly due to the springtime in utero vitamin D environment.',
    funFact: 'A 2013 Columbia University study found April-born people score highest on a hyperthymia scale — a tendency toward consistently elevated, positive moods.',
  },
  {
    month: 'May',
    emoji: '🌸',
    color: 'border-pink-200 dark:border-pink-800 bg-pink-50 dark:bg-pink-900/20',
    badge: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-400',
    traits: 'Persistent, sensual, dependable',
    healthNote: 'May babies tend to have the highest birth weights on average, possibly due to optimal maternal nutrition in late pregnancy.',
    funFact: 'People born in May self-report the highest life satisfaction scores in several large UK surveys. They also have the lowest incidence of seasonal affective disorder (SAD).',
  },
  {
    month: 'June',
    emoji: '☀️',
    color: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20',
    badge: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400',
    traits: 'Versatile, sociable, romantic',
    healthNote: 'June babies benefit from high maternal vitamin D levels — linked in some studies to better bone density outcomes.',
    funFact: 'June is one of the most common birth months for athletes in sports with December 31 age cutoffs (like US youth soccer), due to the relative age effect.',
  },
  {
    month: 'July',
    emoji: '🌞',
    color: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20',
    badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400',
    traits: 'Protective, tenacious, intuitive',
    healthNote: 'July births in the Northern Hemisphere correlate with slightly lower risk of multiple sclerosis — likely due to peak summer vitamin D exposure during key developmental months.',
    funFact: 'July is consistently one of the most common birth months globally. The average person you meet is more likely to have been born in July than in any other month.',
  },
  {
    month: 'August',
    emoji: '🌻',
    color: 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20',
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400',
    traits: 'Confident, generous, perfectionist',
    healthNote: 'The "relative age effect" hits August babies hardest in academic systems with September start dates — they are the youngest in their class year and often initially labelled as behind.',
    funFact: 'A famous Malcolm Gladwell observation: the majority of elite Canadian hockey players are born in January–March, and the fewest are born in October–December — a direct consequence of the relative age effect in youth sports.',
  },
  {
    month: 'September',
    emoji: '🍂',
    color: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20',
    badge: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400',
    traits: 'Methodical, meticulous, practical',
    healthNote: 'September births benefit from the relative age effect in countries with September school start dates — they are the oldest in their class and consistently outperform peers academically in early years.',
    funFact: 'Studies in multiple countries show September babies are statistically more likely to attend university and earn more in early adulthood — entirely because of being oldest in their school cohort.',
  },
  {
    month: 'October',
    emoji: '🍁',
    color: 'border-orange-300 dark:border-orange-700 bg-orange-50 dark:bg-orange-900/20',
    badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
    traits: 'Balanced, charming, decisive',
    healthNote: 'October babies have been found in several studies to have lower-than-average risk of cardiovascular disease — a pattern researchers tentatively link to seasonal patterns in maternal diet.',
    funFact: 'Research published in the Journal of Aging Research found October-born people have an above-average chance of living past 100, along with November and December births.',
  },
  {
    month: 'November',
    emoji: '🍂',
    color: 'border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900/20',
    badge: 'bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300',
    traits: 'Intense, determined, magnetic',
    healthNote: 'November is Scorpio territory in Western astrology — more practically, November babies are the most common birth month in many US datasets, possibly due to Valentine\'s Day conceptions.',
    funFact: 'A study in the International Journal of Sports Medicine found November-born soccer players are significantly over-represented among elite European leagues — partly because November falls just after the January 1 age cutoff used in most European youth football systems.',
  },
  {
    month: 'December',
    emoji: '🌨️',
    color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/20',
    badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400',
    traits: 'Adventurous, optimistic, generous',
    healthNote: 'December babies face the double challenge of often being the youngest in their school year AND sharing their birthday season with major holidays — the social pressure of "holiday birthday" syndrome is a documented psychological phenomenon.',
    funFact: 'Despite the relative age disadvantage in school, research from the UK finds December babies are among the most likely to become professional athletes — possibly because late bloomers who survive youth sports selection tend to be genuinely talented.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does birth month actually affect personality?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The scientific evidence is mixed. Several large studies have found statistically significant correlations between birth month and certain personality traits, health outcomes, and career patterns. However, the effect sizes are generally small — birth month is a weak predictor at the individual level. The most well-established effects are the "relative age effect" (where being oldest or youngest in a school cohort affects educational and athletic outcomes) and vitamin D-related health effects (since vitamin D availability during pregnancy varies by season).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the relative age effect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The relative age effect (RAE) is the phenomenon whereby children born just after the school year\'s cutoff date (and therefore the oldest in their cohort) significantly outperform those born just before it (the youngest). This advantage is particularly pronounced in early education and youth sports. A child who is 11 months older than a classmate at age 6 represents a 15% developmental difference — enormous at that stage. The effect can persist into adulthood through compounding advantages in confidence, selection, and coaching.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are some birth months more common than others?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Birth rates in many countries peak in late summer and early autumn (July–September in the US and UK), approximately nine months after the winter holiday season. Some researchers point to increased indoor activity and intimacy during cold winter months. There are also smaller spikes around nine months after Valentine\'s Day (November). The least common birth months in the US are typically January and February.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a birth month linked to longer life?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A study published in the Journal of Aging Research analysed 1,574 centenarians (people who reached 100) in the US and found that those born in the autumn (September, October, November) were significantly over-represented compared to those born in the spring. The researchers theorised this relates to seasonal variation in maternal health, vitamin D availability, and early childhood disease exposure. However, these are population-level statistical patterns — individual longevity depends overwhelmingly on lifestyle, genetics, and healthcare access.',
      },
    },
    {
      '@type': 'Question',
      name: 'What birth month produces the most successful people?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Studies of CEOs, US presidents, and high-earning professionals tend to find over-representation of people born in certain months depending on the country\'s school start date. In the US (September school start), September and October births show advantages. In the UK (September school start), again September and autumn birthdays are advantaged. These effects are not destiny — they reflect systemic selection biases in early education and sport, not any inherent ability difference.',
      },
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Your Birth Month Says About You — Science & Personality',
  description:
    'The real research behind birth month effects on personality, health, career success, and lifespan — month by month.',
  author: { '@type': 'Organization', name: 'Seconds Alive' },
  publisher: { '@type': 'Organization', name: 'Seconds Alive' },
  url: 'https://secondsalive.com/blog/birth-month-personality',
};

export default function BirthMonthPersonality() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400">
              Birthdays
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">10 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            What Your Birth Month Says About You
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            Beyond horoscopes and folk wisdom, real scientific research has found measurable
            links between birth month and personality, health, and life outcomes. Here is what
            the data actually says — and why these patterns exist.
          </p>
        </header>

        {/* Intro / Context */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            The Science Behind Birth Month Effects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Birth month research has generated hundreds of peer-reviewed studies. The findings
            are often surprising — not because the month itself has magical properties, but
            because the season of birth correlates with real biological and social factors:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {[
              {
                icon: '☀️',
                title: 'Vitamin D & Sunlight',
                desc: 'Maternal vitamin D levels during pregnancy vary dramatically by season. Deficiency has been linked to higher risk of certain conditions including multiple sclerosis, schizophrenia, and some autoimmune conditions.',
              },
              {
                icon: '🎓',
                title: 'The Relative Age Effect',
                desc: 'Being the oldest or youngest child in a school cohort creates compounding advantages or disadvantages in education, sports selection, and early confidence-building that can persist for decades.',
              },
              {
                icon: '🌡️',
                title: 'Seasonal Infections',
                desc: 'Exposure to viruses and infections during critical developmental periods (both prenatal and early childhood) varies by season, influencing immune system calibration.',
              },
              {
                icon: '🌾',
                title: 'Maternal Nutrition',
                desc: 'The availability of fresh produce and dietary patterns varies by season, affecting the nutritional environment during key prenatal development windows.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 dark:border-slate-700 p-4 bg-white dark:bg-slate-900">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-4 text-sm text-slate-700 dark:text-slate-300">
            <strong>Important caveat:</strong> All birth month effects are statistical patterns
            across large populations. They say nothing certain about any individual. A person born
            in December in a September-cutoff school system faces a statistical headwind — but it
            is a small one, and individual effort, environment, and opportunity vastly outweigh it.
          </div>
        </section>

        {/* Month by month */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Your Birth Month — What Research Says
          </h2>
          <div className="space-y-4">
            {months.map((m) => (
              <div key={m.month} className={`rounded-2xl border p-6 ${m.color}`}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-2xl">{m.emoji}</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{m.month}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${m.badge}`}>
                    {m.traits}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wide">Health research</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{m.healthNote}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wide">Research finding</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{m.funFact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Relative age deep dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            The Relative Age Effect: The Most Consequential Birth Month Factor
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Of all birth month effects, the relative age effect (RAE) is the most extensively
            documented and the most practically significant. First described in the context of
            Canadian youth hockey by researcher Roger Barnsley in 1985, the RAE has since been
            found in education systems, professional sports, and business leadership studies
            across dozens of countries.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            The mechanism is straightforward: when children are grouped by academic year with a
            fixed cutoff date, the oldest children in the cohort have had months more of
            cognitive and physical development than the youngest. At age 6, an eleven-month
            age gap represents roughly 15% of the child&apos;s entire life experience. Teachers
            identify the older children as &ldquo;gifted,&rdquo; select them for advanced
            tracks, and give them more positive feedback. The effect compounds.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Malcolm Gladwell popularised this finding in <em>Outliers</em> (2008), noting
            that the majority of elite Canadian NHL players were born in January, February,
            and March — the months immediately following the January 1 hockey age cutoff.
            The same pattern appears in European football, baseball, and cricket.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Crucially, the relative age effect is not about the calendar month per se — it
            is about proximity to the cutoff date. If school years started in July, July
            babies would have the same systematic advantages that September babies currently
            enjoy in the UK, or January babies in the US youth sports context.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((faq) => (
              <details
                key={faq.name}
                className="group rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden"
              >
                <summary className="flex justify-between items-center cursor-pointer px-5 py-4 font-medium text-slate-900 dark:text-white list-none">
                  {faq.name}
                  <svg
                    className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-2xl bg-gradient-to-br from-rose-50 to-violet-50 dark:from-rose-900/20 dark:to-violet-900/20 border border-rose-100 dark:border-rose-800 p-6 text-center">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Explore More Birthday Science
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-5 text-sm">
            Find out what day of the week you were born, count down to your next birthday, or calculate your exact age.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/what-day-was-i-born"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 text-white text-sm font-medium hover:bg-rose-700 transition-colors"
            >
              📅 What Day Was I Born?
            </Link>
            <Link
              href="/blog/zodiac-sign-by-birthday"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              ♈ Zodiac Sign by Birthday
            </Link>
            <Link
              href="/blog/birthday-facts-and-statistics"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              🎉 Birthday Facts & Statistics
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
