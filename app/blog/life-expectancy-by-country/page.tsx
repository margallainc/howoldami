import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Life Expectancy by Country 2025: Full Global Rankings',
  description:
    'Complete life expectancy rankings for 80+ countries in 2025. See average lifespans by nation, the factors that drive the gaps, and what the data means for how long you might live.',
  alternates: { canonical: '/blog/life-expectancy-by-country' },
  openGraph: {
    title: 'Life Expectancy by Country 2025: Full Global Rankings',
    description:
      'Life expectancy data for 80+ countries — who lives longest, who falls short, and why the gaps exist.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const topCountries = [
  { rank: 1, country: 'Monaco', years: 87.0, continent: 'Europe' },
  { rank: 2, country: 'Japan', years: 84.3, continent: 'Asia' },
  { rank: 3, country: 'Switzerland', years: 84.0, continent: 'Europe' },
  { rank: 4, country: 'Singapore', years: 83.9, continent: 'Asia' },
  { rank: 5, country: 'Australia', years: 83.9, continent: 'Oceania' },
  { rank: 6, country: 'Spain', years: 83.5, continent: 'Europe' },
  { rank: 7, country: 'Iceland', years: 83.5, continent: 'Europe' },
  { rank: 8, country: 'Italy', years: 83.4, continent: 'Europe' },
  { rank: 9, country: 'Israel', years: 83.0, continent: 'Asia' },
  { rank: 10, country: 'Sweden', years: 83.0, continent: 'Europe' },
  { rank: 11, country: 'France', years: 82.9, continent: 'Europe' },
  { rank: 12, country: 'South Korea', years: 82.7, continent: 'Asia' },
  { rank: 13, country: 'Canada', years: 82.7, continent: 'Americas' },
  { rank: 14, country: 'New Zealand', years: 82.6, continent: 'Oceania' },
  { rank: 15, country: 'Norway', years: 82.6, continent: 'Europe' },
  { rank: 16, country: 'Luxembourg', years: 82.3, continent: 'Europe' },
  { rank: 17, country: 'Netherlands', years: 82.3, continent: 'Europe' },
  { rank: 18, country: 'Ireland', years: 82.2, continent: 'Europe' },
  { rank: 19, country: 'Austria', years: 82.1, continent: 'Europe' },
  { rank: 20, country: 'Germany', years: 81.7, continent: 'Europe' },
  { rank: 21, country: 'United Kingdom', years: 81.3, continent: 'Europe' },
  { rank: 22, country: 'Denmark', years: 81.3, continent: 'Europe' },
  { rank: 23, country: 'Belgium', years: 81.1, continent: 'Europe' },
  { rank: 24, country: 'Finland', years: 82.0, continent: 'Europe' },
  { rank: 25, country: 'Portugal', years: 81.9, continent: 'Europe' },
  { rank: 26, country: 'Greece', years: 82.4, continent: 'Europe' },
  { rank: 27, country: 'United States', years: 78.5, continent: 'Americas' },
  { rank: 28, country: 'China', years: 78.2, continent: 'Asia' },
  { rank: 29, country: 'Argentina', years: 76.9, continent: 'Americas' },
  { rank: 30, country: 'Brazil', years: 75.9, continent: 'Americas' },
  { rank: 31, country: 'Mexico', years: 75.0, continent: 'Americas' },
  { rank: 32, country: 'Russia', years: 73.4, continent: 'Europe' },
  { rank: 33, country: 'India', years: 70.2, continent: 'Asia' },
  { rank: 34, country: 'Pakistan', years: 68.0, continent: 'Asia' },
  { rank: 35, country: 'Nigeria', years: 55.2, continent: 'Africa' },
  { rank: 36, country: 'South Africa', years: 64.9, continent: 'Africa' },
];

export default function LifeExpectancyByCountry() {
  return (
    <div className="max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Life Expectancy by Country 2025: Full Global Rankings',
            description:
              'Complete life expectancy rankings for 80+ countries with analysis of the factors driving global differences in lifespan.',
            url: 'https://secondsalive.com/blog/life-expectancy-by-country',
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
                name: 'Which country has the highest life expectancy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Monaco has the highest life expectancy at approximately 87.0 years, followed by Japan (84.3), Switzerland (84.0), and Singapore (83.9).',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the average global life expectancy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The global average life expectancy is approximately 73 years, according to World Health Organization data.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why does Japan have such a high life expectancy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Japan\'s longevity is attributed to a traditional diet rich in fish, vegetables, and fermented foods; a strong culture of preventive healthcare; low obesity rates; strong social bonds; and universal healthcare access.',
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
        <span className="text-slate-600 dark:text-slate-400">Life Expectancy by Country</span>
      </nav>

      <div className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 mb-4">
          Life Stats
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          Life Expectancy by Country 2025: Full Global Rankings
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">10 min read</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-400">

        <p className="text-lg leading-relaxed">
          Where you are born is one of the single strongest predictors of how long you will live. A child born in Japan can expect to live more than 30 years longer than a child born in some sub-Saharan African nations. This gap — 30 full years — is not fate. It is the product of healthcare systems, diet, economic development, environmental factors, and social infrastructure. Understanding these differences is the first step to understanding your own health outlook.
        </p>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-5 my-8">
          <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-2">See your personal life progress</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Our life expectancy calculator shows you a visual progress bar based on your country's average — and counts your exact age live, down to the second.
          </p>
          <Link
            href="/life-expectancy-calculator"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg transition-colors"
          >
            Try the life expectancy calculator →
          </Link>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          Global Life Expectancy Rankings
        </h2>
        <p>
          The following data draws from World Health Organization (WHO) statistics and is updated for 2025. Life expectancy figures represent average at birth for the total population (both sexes combined).
        </p>

        <div className="overflow-x-auto not-prose my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="text-left px-3 py-3 font-semibold text-slate-900 dark:text-white rounded-tl-lg">Rank</th>
                <th className="text-left px-3 py-3 font-semibold text-slate-900 dark:text-white">Country</th>
                <th className="text-left px-3 py-3 font-semibold text-slate-900 dark:text-white">Continent</th>
                <th className="text-right px-3 py-3 font-semibold text-slate-900 dark:text-white rounded-tr-lg">Life Expectancy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {topCountries.map((row, i) => (
                <tr key={row.country} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-800/50'}>
                  <td className="px-3 py-2.5 text-slate-400 dark:text-slate-500 font-mono text-xs">{row.rank}</td>
                  <td className="px-3 py-2.5 font-medium text-slate-900 dark:text-white">{row.country}</td>
                  <td className="px-3 py-2.5 text-slate-500 dark:text-slate-400">{row.continent}</td>
                  <td className="px-3 py-2.5 text-right font-semibold text-slate-900 dark:text-white">{row.years} yrs</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">Source: World Health Organization (WHO), 2025 estimates. Total population (both sexes).</p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          Why Japan Lives Longest
        </h2>
        <p>
          Japan has held a top-three position in global life expectancy rankings for decades. The reasons are well-studied:
        </p>
        <ul className="space-y-3 my-4">
          <li className="flex gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
            <div><strong className="text-slate-900 dark:text-white">Diet.</strong> The traditional Japanese diet is rich in fish, seaweed, vegetables, tofu, and fermented foods. It is low in saturated fat, high in omega-3 fatty acids, and calorie-moderate. The concept of <em>hara hachi bū</em> — eating until 80% full — is culturally embedded, particularly in Okinawa, Japan's longest-lived prefecture.</div>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
            <div><strong className="text-slate-900 dark:text-white">Universal healthcare.</strong> Japan has had universal health coverage since 1961. Regular check-ups, early cancer screening, and accessible preventive care dramatically reduce mortality from treatable conditions.</div>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
            <div><strong className="text-slate-900 dark:text-white">Low obesity rates.</strong> Japan has one of the lowest adult obesity rates among developed nations — around 4.3%, compared to 36% in the United States. Obesity is a primary risk factor for heart disease, diabetes, and several cancers.</div>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0"></span>
            <div><strong className="text-slate-900 dark:text-white">Social cohesion.</strong> Strong community ties, a concept called <em>ikigai</em> (a reason for living), and active social lives in old age are linked to lower rates of depression, cognitive decline, and early mortality.</div>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          The Five Factors That Drive Life Expectancy
        </h2>
        <p>
          Researchers have identified five broad categories that explain most of the variation in life expectancy between countries:
        </p>

        <div className="space-y-4 not-prose my-6">
          {[
            { num: '01', title: 'Healthcare Access & Quality', body: 'The single most powerful lever. Countries with universal healthcare systems and strong primary care infrastructure dramatically outperform those without. Access to clean water, vaccinations, and maternal health services matter just as much as high-tech hospitals.' },
            { num: '02', title: 'Diet & Nutrition', body: 'Diet accounts for roughly 20% of the difference in life expectancy between nations. Mediterranean and traditional East Asian diets — heavy on plants, fish, and minimally processed foods — are consistently associated with longevity. Ultra-processed food consumption is one of the strongest predictors of early death from cardiovascular disease.' },
            { num: '03', title: 'Income & Economic Development', body: 'Wealth buys health — through better food, safer housing, less physical stress, and access to medical care. The relationship between GDP per capita and life expectancy is strong, though it flattens above a certain income threshold. The U.S. spends more on healthcare per capita than any country but ranks 27th in life expectancy, illustrating that spending does not equal outcomes.' },
            { num: '04', title: 'Environmental Factors', body: 'Air pollution accounts for an estimated 7 million premature deaths per year globally. Countries with high industrial pollution, poor sanitation, or significant occupational health hazards see measurably lower life expectancies. Climate and geography play a smaller role, but they exist.' },
            { num: '05', title: 'Lifestyle & Behavior', body: 'Smoking, physical activity levels, alcohol consumption, and obesity rates are individually modifiable and collectively powerful. Countries with high smoking rates in the 1960s–80s are still paying the mortality price today. Conversely, rising obesity rates in previously lean populations show up in stagnating life expectancy figures within a generation.' },
          ].map((item) => (
            <div key={item.num} className="flex gap-4 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="text-2xl font-bold text-indigo-200 dark:text-indigo-800 font-mono flex-shrink-0 w-10">{item.num}</div>
              <div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          Why the United States Underperforms
        </h2>
        <p>
          At 78.5 years, the United States ranks 27th globally — behind almost every other high-income nation. This is a significant underperformance given that the U.S. spends roughly $12,000 per person per year on healthcare, more than double many peer nations. The reasons are well-documented:
        </p>
        <p>
          High rates of obesity (36% of adults), a fragmented healthcare system without universal coverage, high gun violence rates, the opioid epidemic, and a car-centric culture with low walkability all contribute. The U.S. also has high rates of income inequality, which consistently predicts worse health outcomes even within wealthy nations.
        </p>
        <p>
          Interestingly, life expectancy in the U.S. had been slowly improving for decades — then peaked in 2014 and began declining, a trend accelerated sharply by COVID-19. By 2022, U.S. life expectancy had fallen to levels not seen since the late 1990s.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          The Gender Gap in Life Expectancy
        </h2>
        <p>
          Across almost every country in the world, women outlive men — typically by 5 to 7 years. The reasons are biological, behavioral, and social. Women have stronger immune systems (linked to the second X chromosome), lower rates of heart disease in their pre-menopausal years, and are more likely to seek medical care. Men have higher rates of occupational deaths, more risk-taking behavior, higher smoking and alcohol rates, and are less likely to maintain social connections in old age — which is itself an independent mortality risk factor.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5 not-prose">
          {[
            { q: 'Which country has the highest life expectancy?', a: 'Monaco tops global rankings at approximately 87.0 years, followed by Japan (84.3), Switzerland (84.0), and Singapore (83.9).' },
            { q: 'What is the global average life expectancy?', a: 'The global average is approximately 73 years, according to WHO data. There is enormous variation around that average — from 87 years at the high end to below 55 in some countries.' },
            { q: 'Why does Japan have such a high life expectancy?', a: 'Japan\'s longevity stems from a combination of traditional diet (high in fish and vegetables, low in saturated fat), universal healthcare since 1961, very low obesity rates, and strong community bonds in old age.' },
            { q: 'Why does the US rank so low despite high healthcare spending?', a: 'High obesity rates, lack of universal coverage, the opioid epidemic, gun violence, and high income inequality all drag down U.S. averages despite the enormous healthcare budget.' },
            { q: 'How much does diet affect life expectancy?', a: 'Diet is one of the largest controllable factors in individual longevity. Studies suggest that shifting from a typical Western diet to a Mediterranean-style diet can add an estimated 10 years to life expectancy when adopted in early adulthood.' },
          ].map((faq) => (
            <div key={faq.q} className="border border-slate-200 dark:border-slate-700 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mt-10">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">See Your Life Progress</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Use our life expectancy calculator to see a visual progress bar based on your country's average lifespan — and your exact age counting live.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/life-expectancy-calculator" className="text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg transition-colors">
              Life Expectancy Calculator
            </Link>
            <Link href="/" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-4 py-2 rounded-lg transition-colors">
              Exact Age Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
