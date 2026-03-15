import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Milestone Birthdays: What 30, 40, 50, 60 & 70 Actually Mean',
  description:
    'The science, psychology, and cultural meaning behind every major milestone birthday. What really changes at 30, 40, 50, 60, and 70 — in your body, brain, and outlook on life.',
  alternates: { canonical: '/blog/milestone-birthdays' },
  openGraph: {
    title: 'Milestone Birthdays: What 30, 40, 50, 60 & 70 Actually Mean',
    description:
      'What really changes at each milestone birthday? The science, psychology, and cultural significance of turning 30, 40, 50, 60, and 70.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const milestones = [
  {
    age: 18,
    title: 'Turning 18 — The Legal Threshold',
    emoji: '🎓',
    color: 'border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-900/20',
    badgeColor: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-400',
    body: [
      'Turning 18 is the most legally consequential birthday in most of the world. In the U.S., U.K., Canada, and Australia, it marks the formal transition into adulthood — the right to vote, sign contracts, join the military, and be tried as an adult.',
      'Neurologically, though, the prefrontal cortex — responsible for impulse control, risk assessment, and long-term planning — will not fully develop until around age 25. This is why 18 feels simultaneously like "everything changes" and "nothing actually changes." The legal leap is real; the neuroscience has its own timeline.',
      'Culturally, 18 is celebrated with particular intensity across Latin America (the quinceañera tradition extends into an 18th-birthday equivalent in some regions), and is the centerpiece of British "18th birthday" party culture.',
    ],
  },
  {
    age: 21,
    title: 'Turning 21 — The Full Adult',
    emoji: '🥂',
    color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/20',
    badgeColor: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400',
    body: [
      'In the United States, 21 is the true cultural arrival into adulthood — the legal drinking age creates a sharp milestone that many other countries lack. It has become one of the most heavily celebrated birthdays in American culture.',
      'Beyond the U.S., 21 carries historical weight from a time when it marked full legal majority (the age at which a person was considered capable of managing their own affairs without a guardian). That legal threshold has since moved to 18 in most countries, but 21 retains its cultural symbolism.',
      'Physically, 21 is close to peak performance in many athletic domains — reaction time, lung capacity, and muscle recovery are all near their apex. It is also, notably, one of the last stages before the long, slow beginning of biological aging becomes measurable.',
    ],
  },
  {
    age: 30,
    title: 'Turning 30 — The First Reckoning',
    emoji: '⚡',
    color: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20',
    badgeColor: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400',
    body: [
      'No milestone birthday generates more cultural anxiety than 30. It is the first birthday where adulthood is no longer provisional — you are, by any reasonable measure, a grown-up, and that triggers a specific kind of self-assessment. "Did I do everything I was supposed to by now?"',
      'The reality, according to psychology researchers, is that people\'s 30s are consistently rated as among their happiest years. Identity crystallizes. The social comparisons that plagued the 20s soften. Decision-making improves as the prefrontal cortex reaches full maturity. Research by Harvard psychologist Daniel Levinson calls it the "settling down" phase — a time of increasing clarity about what actually matters.',
      'Physically, 30 is when some changes become measurable even if they are not yet noticeable. Muscle mass begins its slow decline (about 3-5% per decade without resistance training). Metabolic rate edges down. Recovery after hard exercise takes slightly longer. None of this is dramatic at 30, but it is the beginning of a trend that rewards attention.',
      'Culturally, the 30th birthday has become one of the most commercially significant milestones — a target for travel, experiences, and gift-giving. "Dirty 30" parties, destination birthdays, and milestone gift boxes all peak at this age.',
    ],
  },
  {
    age: 40,
    title: 'Turning 40 — The Prime of Your Life',
    emoji: '🔥',
    color: 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20',
    badgeColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400',
    body: [
      'Despite its fearsome reputation, 40 is — according to a large body of research — one of the best decades of adult life. The "midlife crisis" is a media myth that affects a small minority; for most people, 40 marks the beginning of their most effective, most confident years.',
      'Emotional intelligence peaks in the 40s and 50s. The ability to regulate emotions, navigate conflict, and read social situations improves with age in ways that raw intelligence does not. A 40-year-old professional is typically more effective at complex decision-making than their 25-year-old counterpart despite potentially slower processing speed.',
      'Physically, the 40s require more deliberate maintenance than the 30s. Sleep quality begins to decline. Testosterone (in men) and estrogen (in women) start measurable drops. Eyesight commonly changes — many people need reading glasses for the first time around 40-45. The good news: these are all manageable with lifestyle choices, and the 40s are an excellent time to establish the habits that determine quality of life at 60 and 70.',
      'The 40th birthday has replaced the 50th as the big commercial milestone in many cultures. Black "over the hill" decorations, luxury experiences, and major gifts have migrated from 50 to 40 over the past few decades.',
    ],
  },
  {
    age: 50,
    title: 'Turning 50 — Halfway to 100',
    emoji: '🏆',
    color: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20',
    badgeColor: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400',
    body: [
      'In a world where life expectancy in developed nations approaches 80-84 years, turning 50 genuinely is roughly the halfway point. But it does not feel like half-time — research consistently shows that people in their 50s report higher life satisfaction than at virtually any earlier age.',
      'The U-curve of happiness, documented by economists Andrew Oswald and David Blanchflower across 72 countries, shows that wellbeing dips to a trough in the mid-40s before climbing steadily through the 50s, 60s, and beyond. The reason: declining expectations of what life owes you, increasing appreciation for what you already have, and the gradual liberation from caring too much about what others think.',
      'Physically, the 50s bring menopause for women (typically 45-55) and andropause — a gradual testosterone decline — for men. Bone density loss becomes significant enough to warrant attention. Cardiovascular risk increases meaningfully. These are also exactly the years where preventive interventions (diet, exercise, sleep, regular screenings) deliver their highest return on investment.',
      'The AARP defines 50 as the entry point to its membership for a reason: this is when retirement planning, estate planning, and long-term care conversations move from abstract to urgent.',
    ],
  },
  {
    age: 60,
    title: 'Turning 60 — The Third Act Begins',
    emoji: '🌟',
    color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20',
    badgeColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400',
    body: [
      'Sixty was once considered the doorstep of old age. Today, with 83-84 year life expectancies in Japan and other top-ranking nations, 60 is more accurately the beginning of the third act — with potentially 25 more active, healthy years ahead.',
      'The psychological shift at 60 is notable. Studies using the MacArthur Foundation Research Network on Successful Aging found that adults in their 60s reported the highest scores on "mastery" — the sense of control over their own lives — of any age group. After decades of career demands, child-rearing pressures, and financial stress, 60 often brings a qualitatively different relationship with time.',
      'Medicare eligibility begins at 65 in the United States; Social Security benefits can begin at 62 with reduced amounts or 67 at full rate. These financial milestones make the 60s a significant planning decade.',
      'Cognitively, crystallized intelligence — the accumulated knowledge, vocabulary, and judgment developed over a lifetime — continues increasing well into the 60s. Fluid intelligence (processing speed, novel problem-solving) begins declining more noticeably, but the tradeoff is often described as trading speed for depth.',
    ],
  },
  {
    age: 70,
    title: 'Turning 70 — The Elder Wisdom Years',
    emoji: '🎯',
    color: 'border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/20',
    badgeColor: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400',
    body: [
      'Seventy is where the statistics on ageing happiness reach their peak. The Harvard Study of Adult Development — the longest running study of adult life in history — found that social relationships were the single strongest predictor of health and happiness at 70 and beyond. The people who maintained close friendships and stayed actively engaged with others were measurably healthier, cognitively sharper, and happier than those who became isolated.',
      'The paradox of ageing is that it tends to improve emotional life even as it complicates physical life. Older adults report fewer negative emotions, more satisfaction with what they have, and less time wasted on grievances. Psychologist Laura Carstensen\'s "socioemotional selectivity theory" explains this: as we sense our time horizon shortening, we become more selective about how we spend it, prioritizing meaning over ambition.',
      'Physically, 70 brings meaningful variability. Some 70-year-olds run marathons; others manage multiple chronic conditions. Genetics, lifestyle, and luck diverge at this age in ways they do not at 40 or 50. But the research on lifestyle\'s impact is clear: exercise, diet, social engagement, and sleep quality at 60-70 are the strongest predictors of the quality of life at 80.',
    ],
  },
];

export default function MilestoneBirthdays() {
  return (
    <div className="max-w-3xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Milestone Birthdays: What 30, 40, 50, 60 & 70 Actually Mean',
            description:
              'The science, psychology, and cultural significance of every major milestone birthday.',
            url: 'https://secondsalive.com/blog/milestone-birthdays',
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
                name: 'What is the best milestone birthday to celebrate?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'All milestone birthdays deserve celebration, but the 30th, 40th, and 50th tend to receive the most cultural attention. Research suggests that people\'s 50s are actually among their happiest years, making 50 a particularly meaningful milestone to mark.',
                },
              },
              {
                '@type': 'Question',
                name: 'What happens to your body when you turn 30?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'At 30, muscle mass begins a slow decline (around 3-5% per decade without resistance training), metabolic rate edges down slightly, and recovery from intense exercise takes a little longer. None of these changes are dramatic at 30, but they mark the start of trends that reward attention.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is a midlife crisis real?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The dramatic "midlife crisis" is largely a cultural myth that affects a small minority. Research shows that most people in their 40s actually report increasing life satisfaction, emotional stability, and confidence — not crisis.',
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
        <span className="text-slate-600 dark:text-slate-400">Milestone Birthdays</span>
      </nav>

      <div className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 mb-4">
          Birthdays
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          Milestone Birthdays: What 30, 40, 50, 60 & 70 Actually Mean
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400">9 min read</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-400">

        <p className="text-lg leading-relaxed">
          Every decade birthday carries weight. They are the moments when we pause, look back at the years that have passed and forward at what we want the next chapter to hold. Some milestones bring anxiety; most bring clarity. Here is what the science actually says about each one — and why the cultural fears often get it completely wrong.
        </p>

        <div className="bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 rounded-xl p-5 my-8">
          <p className="text-sm font-semibold text-rose-700 dark:text-rose-400 mb-2">How long until your next milestone birthday?</p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Use our birthday countdown to see exactly how many days, hours, and seconds until your next birthday.
          </p>
          <Link
            href="/next-birthday-countdown"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-rose-500 hover:bg-rose-600 px-4 py-2 rounded-lg transition-colors"
          >
            Birthday Countdown →
          </Link>
        </div>

        <div className="space-y-8 not-prose">
          {milestones.map((m) => (
            <div key={m.age} className={`rounded-xl border p-6 ${m.color}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{m.emoji}</span>
                <div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${m.badgeColor}`}>
                    Age {m.age}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">{m.title}</h2>
                </div>
              </div>
              <div className="space-y-3">
                {m.body.map((para, i) => (
                  <p key={i} className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          The Happiness Curve: Why Life Gets Better
        </h2>
        <p>
          Here is the finding that surprises most people: happiness research consistently shows that humans follow a U-curve through their lives. Wellbeing is highest in youth, dips to its lowest point in the mid-40s (the "trough"), then climbs steadily from 50 onward, reaching its highest sustained levels in the 60s and 70s.
        </p>
        <p>
          This pattern has been found in data from over 72 countries across multiple independent research teams. The exact cause is debated — it may relate to declining expectations, increasing acceptance, growing social skill, or some combination — but the trend is robust. If you are dreading your 40s, the evidence says you are dreading the last rough patch before a long, sustained improvement.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5 not-prose">
          {[
            { q: 'What is considered a milestone birthday?', a: 'Milestone birthdays are typically the 18th, 21st, and then every decade birthday: 30, 40, 50, 60, 70, 80, 90, and 100. The 18th and 21st carry legal significance; the decade birthdays carry cultural and psychological weight.' },
            { q: 'What happens to your body when you turn 30?', a: 'Muscle mass begins a slow decline (3-5% per decade without resistance training), metabolic rate edges down slightly, and recovery takes slightly longer. The prefrontal cortex reaches full maturity around 25, so by 30 decision-making and impulse control are actually at their peak.' },
            { q: 'Is a midlife crisis real?', a: 'The dramatic "midlife crisis" is largely a cultural myth. Research shows most people in their 40s report increasing life satisfaction and emotional stability, not crisis. A small minority do experience significant disruption at midlife, but it is not the universal experience pop culture implies.' },
            { q: 'When does life get better according to research?', a: 'Research consistently shows wellbeing troughs in the mid-40s, then climbs steadily. People in their 50s, 60s, and 70s consistently report higher life satisfaction than those in their 30s and 40s. The 50s and beyond appear to be, on average, the happiest decades of life.' },
            { q: 'What is the significance of turning 50?', a: 'Fifty is roughly the midpoint of a long modern life, and research shows it marks the beginning of a sustained improvement in wellbeing. The "U-curve of happiness" reaches its trough in the mid-40s and begins its ascent around 50.' },
          ].map((faq) => (
            <div key={faq.q} className="border border-slate-200 dark:border-slate-700 rounded-xl p-5">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl p-6 mt-10">
          <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Know Your Numbers</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Find out exactly how old you are today — in years, months, days, hours, and seconds — and how long until your next milestone birthday.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 px-4 py-2 rounded-lg transition-colors">
              Age Calculator
            </Link>
            <Link href="/next-birthday-countdown" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-4 py-2 rounded-lg transition-colors">
              Birthday Countdown
            </Link>
            <Link href="/life-expectancy-calculator" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 px-4 py-2 rounded-lg transition-colors">
              Life Progress Bar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
