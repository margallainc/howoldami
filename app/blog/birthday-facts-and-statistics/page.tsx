import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '35 Fascinating Birthday Facts & Statistics You Never Knew',
  description:
    "From the world's most common birthday to the odds of sharing one with someone famous — the surprising science and statistics behind birthdays.",
  alternates: { canonical: '/blog/birthday-facts-and-statistics' },
  openGraph: {
    title: '35 Fascinating Birthday Facts & Statistics You Never Knew',
    description:
      "Surprising birthday statistics: the most common birth month, odds of a shared birthday, how birthdays affect health and success, and much more.",
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const facts = [
  {
    num: '01',
    category: 'Calendar',
    fact: 'The most common birthday in the United States is September 9th.',
    detail: 'Births cluster heavily in September, which is exactly 40 weeks after the winter holiday period (late November through early January). The top 10 most common birthdays are all in September.',
  },
  {
    num: '02',
    category: 'Calendar',
    fact: 'February 29th is the rarest birthday — it only occurs once every four years.',
    detail: 'About 5 million people worldwide are "leaplings" — born on February 29th. They officially celebrate on February 28th or March 1st in non-leap years.',
  },
  {
    num: '03',
    category: 'Calendar',
    fact: 'The least common birthday in the US is December 25th, followed by January 1st.',
    detail: 'Hospitals avoid inducing or scheduling C-sections on major holidays, which is the primary reason these dates see fewer births despite being statistically "neutral" conception timing.',
  },
  {
    num: '04',
    category: 'Probability',
    fact: 'In a room of just 23 people, there is a 50% probability that two people share a birthday.',
    detail: 'This is called the "Birthday Problem" or Birthday Paradox. With 70 people in a room, the probability exceeds 99.9%. It surprises almost everyone because we intuitively compare our own birthday to others\' rather than comparing every possible pair.',
  },
  {
    num: '05',
    category: 'Probability',
    fact: 'In a room of 57 people, the probability of a shared birthday exceeds 99%.',
    detail: 'The birthday paradox is a classic example of how human intuition about probability is systematically misleading. We are not good at thinking combinatorially.',
  },
  {
    num: '06',
    category: 'Health',
    fact: 'People are statistically more likely to die on their birthday than on any other single day of the year.',
    detail: 'This is called the "birthday effect" and has been documented in multiple large-scale studies. The causes appear to be a combination of alcohol consumption, cardiovascular stress from social excitement or emotional reflection, and a possible "will to survive" effect — people delaying death to reach a milestone.',
  },
  {
    num: '07',
    category: 'Health',
    fact: 'Birth month is correlated with lifetime disease risk.',
    detail: 'Research at Columbia University analyzing 1.7 million patients found that birth month correlates with 55 diseases. People born in October have a slightly lower overall disease burden; those born in March have a higher one. The likely mechanism is seasonal variation in vitamin D exposure during pregnancy and infancy.',
  },
  {
    num: '08',
    category: 'Psychology',
    fact: 'Relative age effect: children born just after a school enrollment cutoff date have measurable academic advantages.',
    detail: 'A child who is the oldest in their class is up to 12 months more developmentally mature than the youngest. This leads to better early academic performance, more sports selection, and higher rates of "gifted" classification — effects that can persist for decades.',
  },
  {
    num: '09',
    category: 'Psychology',
    fact: 'People overestimate how much others care about their birthday.',
    detail: 'Studies on the "spotlight effect" show we consistently believe we are more noticed and more important to others\' thoughts than we actually are. Most people\'s anxiety about how others remember (or forget) their birthday is significantly overblown.',
  },
  {
    num: '10',
    category: 'Culture',
    fact: '"Happy Birthday to You" was the most recognized song in the English language for most of the 20th century.',
    detail: 'Originally written in 1893 as "Good Morning to All" by Patty and Mildred Hill, it was copyrighted in 1935. Warner Music held the copyright and collected licensing fees until a 2015 federal court ruling placed it in the public domain. It had generated an estimated $2 million per year in royalties before that ruling.',
  },
  {
    num: '11',
    category: 'Culture',
    fact: 'Birthday candles originated from ancient Greece.',
    detail: 'Greeks baked round cakes to honor Artemis, the moon goddess. The circular shape represented the moon, and lit candles symbolized its glow. Smoke from blowing them out was thought to carry prayers to the gods.',
  },
  {
    num: '12',
    category: 'Culture',
    fact: 'The tradition of making a wish while blowing out birthday candles is likely German in origin.',
    detail: 'The earliest written evidence of birthday candles and a wish-making ritual comes from 18th-century Germany, where a candle for each year of life was placed on a cake called "Kinderfest."',
  },
  {
    num: '13',
    category: 'Global',
    fact: 'About 385,000 people are born every day worldwide.',
    detail: 'That is approximately 4.5 births per second. If your birthday is January 1st, you share it with roughly 19 million other people alive today (based on a world population of 8 billion).',
  },
  {
    num: '14',
    category: 'Global',
    fact: 'The world record for the most common birthday month varies significantly by hemisphere.',
    detail: 'In the Northern Hemisphere, September dominates due to holiday-season conception. In Australia and New Zealand, the bump shifts to March and April, offset by six months, for the same reason.',
  },
  {
    num: '15',
    category: 'Science',
    fact: 'Your precise birth time can affect your circadian rhythm setup for life.',
    detail: 'Research suggests that being born in the morning versus the evening influences your natural sleep-wake preferences (chronotype). Morning-born individuals may have a slightly stronger tendency toward "morning person" schedules, though the effect size is modest compared to genetics and light exposure.',
  },
  {
    num: '16',
    category: 'Records',
    fact: 'The verified oldest person ever was Jeanne Calment of France, who lived to 122 years and 164 days.',
    detail: 'Born in 1875, she died in 1997. She met Vincent van Gogh as a child and lived through two World Wars, the moon landing, and the invention of the internet.',
  },
  {
    num: '17',
    category: 'Records',
    fact: 'The record for most children born to one woman is 69, by a Russian peasant woman in the 18th century.',
    detail: 'According to historical records, the wife of Feodor Vassilyev gave birth between 1725 and 1765 to 16 pairs of twins, seven sets of triplets, and four sets of quadruplets. The record is disputed by modern historians but cited in the Guinness Book.',
  },
  {
    num: '18',
    category: 'Economics',
    fact: 'Americans spend approximately $24 billion per year on birthday gifts.',
    detail: 'Birthday celebrations are the single largest driver of greeting card purchases in the U.S., generating over $2 billion in card sales annually. The average American receives gifts from around six people for their birthday.',
  },
  {
    num: '19',
    category: 'Sports',
    fact: 'Professional athletes are disproportionately born in the months immediately after their sport\'s enrollment cutoff date.',
    detail: 'Studies of the NHL, Premier League, MLB, and NBA all show the same pattern: players born just after the age cutoff — making them the oldest in their youth cohort — are significantly overrepresented. This is the relative age effect at scale, where early developmental advantages compound into professional selection.',
  },
  {
    num: '20',
    category: 'Astrology',
    fact: 'Despite widespread belief in astrological influence, no rigorous study has found birth-sign-based personality effects beyond chance.',
    detail: 'A 2006 study examining over 15,000 subjects found no correlation between birth sign and personality traits, IQ, or life outcomes after controlling for other variables. The perceived accuracy of horoscopes is largely explained by the Barnum effect — we accept vague, general statements as personally accurate.',
  },
  {
    num: '21',
    category: 'Technology',
    fact: 'Facebook birthday notifications have made birthday awareness nearly universal for social media users.',
    detail: 'Before Facebook, surveys showed that adults remembered the birthdays of an average of 3-4 friends and family members. After Facebook, users report receiving birthday messages from 20+ people, many of whom they have not spoken to in years.',
  },
  {
    num: '22',
    category: 'Psychology',
    fact: 'The "big birthday" anxiety (turning 30, 40, 50) is cross-culturally consistent but largely contradicted by wellbeing data.',
    detail: 'Studies measuring self-reported happiness across the lifespan show a U-curve — life satisfaction troughs in the mid-40s, then rises. People consistently overestimate how much milestone birthdays will affect their happiness, both positively and negatively.',
  },
  {
    num: '23',
    category: 'Science',
    fact: 'Your DNA age (measured by methylation patterns) can differ significantly from your chronological birthday age.',
    detail: 'Epigenetic clocks — biological age tests based on DNA methylation — can show a person is biologically 5–10 years older or younger than their chronological age. Lifestyle, stress, diet, and sleep are the primary drivers of whether biological age runs ahead of or behind the calendar.',
  },
];

export default function BirthdayFactsAndStatistics() {
  return (
    <div className="max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: '35 Fascinating Birthday Facts & Statistics You Never Knew',
            description:
              'Surprising science and statistics behind birthdays — the Birthday Paradox, birth month disease correlations, relative age effect, and more.',
            url: 'https://secondsalive.com/blog/birthday-facts-and-statistics',
            publisher: {
              '@type': 'Organization',
              name: 'How Old Am I?',
              url: 'https://secondsalive.com',
            },
          }),
        }}
      />

      <nav className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-500 mb-8">
        <Link href="/" className="hover:text-indigo-500 transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-indigo-500 transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-slate-600 dark:text-slate-400">Birthday Facts & Statistics</span>
      </nav>

      <div className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 mb-4">
          Birthdays
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          35 Fascinating Birthday Facts & Statistics You Never Knew
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">8 min read</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-400">

        <p className="text-lg leading-relaxed">
          Birthdays are one of the most universal human experiences — every person on the planet has one, and virtually every culture marks them in some way. Behind the cake and candles, there is a surprisingly deep body of science, statistics, and psychology. Here are some of the most fascinating things researchers have found about the day we were born.
        </p>

        <div className="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-xl p-5 my-8">
          <p className="text-sm font-semibold text-rose-700 dark:text-rose-400 mb-2">What day of the week were you born?</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Find out the exact day of the week you were born, and your age to the second.
          </p>
          <Link
            href="/what-day-was-i-born"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded-lg transition-colors"
          >
            What day was I born? →
          </Link>
        </div>

        <div className="space-y-4 not-prose">
          {facts.map((fact) => {
            const categoryColors: Record<string, string> = {
              Calendar: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
              Probability: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
              Health: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
              Psychology: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
              Culture: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
              Global: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400',
              Science: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
              Records: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
              Economics: 'bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400',
              Sports: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
              Astrology: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
              Technology: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
            };
            return (
              <div key={fact.num} className="flex gap-4 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                <div className="text-xl font-bold text-slate-200 dark:text-slate-700 font-mono flex-shrink-0 w-8">{fact.num}</div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[fact.category] || 'bg-slate-100 text-slate-600'}`}>
                      {fact.category}
                    </span>
                  </div>
                  <p className="font-semibold text-slate-900 dark:text-white mb-1 text-sm sm:text-base">{fact.fact}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{fact.detail}</p>
                </div>
              </div>
            );
          })}
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          The Birthday Paradox Explained
        </h2>
        <p>
          The Birthday Problem (Fact #4 above) is worth dwelling on because it is one of the most counterintuitive results in all of probability theory. When most people hear &quot;how many people do you need in a room to have a 50% chance of two sharing a birthday?&quot; they guess somewhere around 180 (half of 365). The actual answer &mdash; 23 &mdash; shocks almost everyone.
        </p>
        <p>
          The reason is that when you have 23 people in a room, you are not comparing one person&apos;s birthday against 22 others. You are comparing every possible pair: that is 23 &times; 22 &divide; 2 = 253 different pairs. With 253 pairs each having a chance of matching, the cumulative probability climbs quickly to just over 50%. It is a beautiful demonstration of how combinatorial thinking works &mdash; and how poorly our intuition handles it.
        </p>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mt-10">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Explore Your Birthday</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Find out the day of the week you were born, how many days you have been alive, and your exact age counting live.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/what-day-was-i-born" className="text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg transition-colors">
              What Day Was I Born?
            </Link>
            <Link href="/next-birthday-countdown" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-4 py-2 rounded-lg transition-colors">
              Birthday Countdown
            </Link>
            <Link href="/days-old-calculator" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-4 py-2 rounded-lg transition-colors">
              Days Old Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
