import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Age, Birthdays & Life Stats Articles',
  description:
    'Explore articles on milestone birthdays, life expectancy, heartbeat statistics, generational guides, and more. Learn fascinating facts about age and time.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — Age, Birthdays & Life Stats Articles',
    description:
      'Explore articles on milestone birthdays, life expectancy, heartbeat statistics, and more.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const articles = [
  {
    slug: 'what-generation-am-i',
    title: 'What Generation Am I? Complete Guide to Every Generation',
    description:
      'Find out exactly which generation you belong to — Gen Z, Millennial, Gen X, Boomer, or Silent Generation — with year ranges, defining traits, and key events that shaped each era.',
    category: 'Generations',
    readTime: '8 min read',
  },
  {
    slug: 'life-expectancy-by-country',
    title: 'Life Expectancy by Country 2025: Full Global Rankings',
    description:
      'A comprehensive breakdown of average life expectancy across 80+ countries, the factors that drive the differences, and what the data means for how you think about your own lifespan.',
    category: 'Life Stats',
    readTime: '10 min read',
  },
  {
    slug: 'milestone-birthdays',
    title: 'Milestone Birthdays: What 30, 40, 50, 60 & 70 Actually Mean',
    description:
      'The science, psychology, and cultural significance of every major milestone birthday. What really changes at each decade — in your body, your brain, and your outlook on life.',
    category: 'Birthdays',
    readTime: '9 min read',
  },
  {
    slug: 'heartbeats-in-a-lifetime',
    title: 'How Many Heartbeats Do You Get in a Lifetime?',
    description:
      'The average human heart beats 2.5 billion times over a lifetime. Explore the science behind that number, what affects your heart rate, and why every beat counts.',
    category: 'Life Stats',
    readTime: '7 min read',
  },
  {
    slug: 'birthday-facts-and-statistics',
    title: '35 Fascinating Birthday Facts & Statistics You Never Knew',
    description:
      "From the world's most common birth month to the odds of sharing a birthday with someone famous — a deep dive into the surprising science and statistics of birthdays.",
    category: 'Birthdays',
    readTime: '8 min read',
  },
  {
    slug: 'how-to-calculate-your-exact-age',
    title: 'How to Calculate Your Exact Age in Years, Days, Hours & Seconds',
    description:
      'A step-by-step guide to calculating your precise age across every unit of time. Why simple subtraction gets it wrong, how leap years complicate the math, and what your age in days actually reveals.',
    category: 'Calculators',
    readTime: '6 min read',
  },
];

const categoryColors: Record<string, string> = {
  Generations: 'bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400',
  'Life Stats': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  Birthdays: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
  Calculators: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
};

export default function BlogIndex() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
          Blog
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">
          Articles on age, birthdays, life statistics, and what the numbers mean.
        </p>
      </div>

      <div className="space-y-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="block group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[article.category]}`}
              >
                {article.category}
              </span>
              <span className="text-xs text-slate-400 dark:text-slate-500">{article.readTime}</span>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {article.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              {article.description}
            </p>
            <div className="mt-4 text-sm font-medium text-indigo-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 flex items-center gap-1 transition-colors">
              Read article
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
