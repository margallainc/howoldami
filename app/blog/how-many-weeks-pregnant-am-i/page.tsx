import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Many Weeks Pregnant Am I? Pregnancy Weeks Explained',
  description:
    'Calculate how many weeks pregnant you are, understand how pregnancy trimesters work, and learn what happens to your body and baby in each week of pregnancy.',
  alternates: { canonical: '/blog/how-many-weeks-pregnant-am-i' },
  openGraph: {
    title: 'How Many Weeks Pregnant Am I? Pregnancy Weeks Explained',
    description:
      'Everything you need to know about pregnancy weeks — how to calculate them, what happens each trimester, and key milestones week by week.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const trimesters = [
  {
    name: 'First Trimester',
    weeks: 'Weeks 1–12',
    emoji: '🌱',
    color: 'border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-900/20',
    badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400',
    babyHighlights: [
      'Week 4: The embryo implants in the uterine wall; hCG hormone triggers a positive pregnancy test.',
      'Week 6: The heart begins to beat — approximately 100–160 bpm.',
      'Week 8: All major organ systems have started forming. Facial features are emerging.',
      'Week 10: Fingers and toes are distinct. The embryo is now officially called a fetus.',
      'Week 12: The fetus is about 2.5 inches (6 cm) long. Risk of miscarriage drops sharply after this point.',
    ],
    momHighlights: [
      'Nausea (morning sickness) is common — though it can strike at any hour.',
      'Extreme fatigue is typical, driven by rapidly rising progesterone.',
      'Breast tenderness and increased urination are among the earliest physical changes.',
      'The first prenatal visit and dating ultrasound typically occur around 8–12 weeks.',
    ],
  },
  {
    name: 'Second Trimester',
    weeks: 'Weeks 13–26',
    emoji: '🌿',
    color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400',
    babyHighlights: [
      'Week 16: The baby can make facial expressions and starts to develop fingerprints.',
      'Week 18–20: Anatomy scan ultrasound — often when sex can be determined.',
      'Week 20: You may begin to feel movement ("quickening") — most feel this between 16–24 weeks.',
      'Week 24: The baby reaches "viability" — the point at which survival outside the womb becomes possible with medical support.',
      'Week 26: Eyes are opening. The baby responds to sounds from outside the womb.',
    ],
    momHighlights: [
      'Most people feel significantly better in the second trimester — energy returns, nausea fades.',
      'A visible baby bump typically appears during this period.',
      'The anatomy scan at 18–20 weeks checks for structural abnormalities.',
      'Glucose screening for gestational diabetes is typically done around week 24–28.',
    ],
  },
  {
    name: 'Third Trimester',
    weeks: 'Weeks 27–40',
    emoji: '🌳',
    color: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20',
    badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400',
    babyHighlights: [
      'Week 28: Brain development accelerates rapidly. The baby can dream (REM sleep begins).',
      'Week 32: Bones are fully formed but still soft. The baby is practising breathing.',
      'Week 36: Most babies turn head-down in preparation for birth.',
      'Week 38: Considered "early term" — lungs and brain are still maturing.',
      'Week 40: Full term. The average first-time birth occurs at 40 weeks + 5 days.',
    ],
    momHighlights: [
      'Braxton Hicks contractions become more frequent — practice contractions preparing the uterus.',
      'Back pain, pelvic pressure, and sleep difficulty increase as the baby grows.',
      'Prenatal appointments become weekly in the final month.',
      'The cervix begins to efface (thin) and dilate in preparation for labour.',
    ],
  },
];

const weekMilestones = [
  { week: 4, milestone: 'Positive pregnancy test possible; embryo implants' },
  { week: 6, milestone: 'Heartbeat detectable on ultrasound' },
  { week: 8, milestone: 'All major organs begin forming' },
  { week: 10, milestone: 'Officially called a fetus; fingers & toes visible' },
  { week: 12, milestone: 'First trimester ends; miscarriage risk drops' },
  { week: 16, milestone: 'Facial expressions appear; fingerprints develop' },
  { week: 20, milestone: 'Anatomy scan; movement felt ("quickening")' },
  { week: 24, milestone: 'Viability threshold — survival possible with support' },
  { week: 28, milestone: 'Third trimester begins; REM sleep starts' },
  { week: 32, milestone: 'Bones formed; baby practises breathing' },
  { week: 36, milestone: 'Baby turns head-down; considered "late preterm"' },
  { week: 37, milestone: 'Early term — lungs near maturity' },
  { week: 39, milestone: 'Full term begins' },
  { week: 40, milestone: 'Due date (average first births: 40w + 5 days)' },
  { week: 42, milestone: 'Post-term; induction typically considered' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do doctors calculate how many weeks pregnant I am?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pregnancy is measured from the first day of your last menstrual period (LMP), not from the date of conception. This means you are technically considered "pregnant" for two weeks before conception actually occurs. If you have irregular cycles or are unsure of your LMP, an early ultrasound (before 14 weeks) can date the pregnancy very accurately using the size of the embryo or fetus.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a due date and how accurate is it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A due date is calculated as 40 weeks (280 days) from the first day of the last menstrual period. Only about 5% of babies are born on their exact due date. Around 80% of births occur within two weeks before or after the due date. The due date is best understood as the midpoint of a likely birth window rather than a precise prediction.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does "full term" mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Full term is defined as 39 weeks 0 days to 40 weeks 6 days. "Early term" is 37–38 weeks, "late term" is 41 weeks, and "post-term" is 42 weeks or beyond. Babies born before 37 weeks are considered premature (preterm). The brain and lungs continue to mature significantly between weeks 37 and 40, which is why "full term" was redefined to 39 weeks in 2013.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do I find out the sex of my baby?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The anatomy scan ultrasound, typically done between 18 and 20 weeks, is when fetal sex can usually be determined visually — though it depends on the baby\'s position. Non-invasive prenatal testing (NIPT) blood tests, which screen for chromosomal conditions, can also reveal fetal sex as early as 10 weeks. Chorionic villus sampling (CVS) and amniocentesis can determine sex earlier still but are invasive and typically reserved for higher-risk pregnancies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many weeks pregnant is 9 months?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is where the calendar gets confusing. Pregnancy is 40 weeks, but calendar months are not equal in length. 40 weeks works out to approximately 9 months and 1 week. Pregnancy is typically divided into three trimesters of roughly 13 weeks each — not three months each. Healthcare providers universally use weeks as the primary unit because months are imprecise.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the viability threshold in pregnancy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The viability threshold — the point at which a fetus can potentially survive outside the womb with intensive medical support — is generally considered to be around 22–24 weeks. Survival rates improve dramatically with each additional week: around 22 weeks the survival rate with intensive care is approximately 10–35%; by 25 weeks it rises to around 50–70%; by 28 weeks it exceeds 90%. Most NICUs will initiate intensive care from 23–24 weeks onward.',
      },
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Many Weeks Pregnant Am I? Pregnancy Weeks Explained',
  description:
    'How to calculate pregnancy weeks, what happens in each trimester, and key milestones from week 4 to week 40.',
  author: { '@type': 'Organization', name: 'Seconds Alive' },
  publisher: { '@type': 'Organization', name: 'Seconds Alive' },
  url: 'https://secondsalive.com/blog/how-many-weeks-pregnant-am-i',
};

export default function HowManyWeeksPregnant() {
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
              Pregnancy
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">11 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            How Many Weeks Pregnant Am I? Pregnancy Weeks, Trimesters & Milestones
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            Pregnancy is measured in weeks — 40 of them from the first day of your last period to
            your estimated due date. This guide explains how those weeks are counted, what happens
            to you and your baby in each trimester, and the key milestones to know along the way.
          </p>
        </header>

        {/* How to calculate */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            How Pregnancy Weeks Are Calculated
          </h2>
          <div className="rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-5 mb-5">
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>The standard method:</strong> Pregnancy is counted from the first day of
              your last menstrual period (LMP) — <em>not</em> from the date of conception. Because
              ovulation and conception happen approximately two weeks after your period begins,
              you are considered &ldquo;2 weeks pregnant&rdquo; at the moment of conception.
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            This system was standardised before modern medicine could pinpoint ovulation, and it
            persists because LMP is reliably known while the exact date of conception usually
            is not. If your cycles are irregular or you conceived via IVF, your doctor will use
            an early ultrasound to date the pregnancy instead.
          </p>
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
            <div className="bg-slate-50 dark:bg-slate-800/60 px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              Quick Reference
            </div>
            <div className="divide-y divide-slate-200 dark:divide-slate-700">
              {[
                ['Your LMP date', 'Week 0 (pregnancy week 1 begins)'],
                ['Ovulation / Conception', 'Around week 2–3'],
                ['Positive pregnancy test', 'Around week 4–5'],
                ['End of first trimester', 'Week 12–13'],
                ['Anatomy scan', 'Week 18–20'],
                ['End of second trimester', 'Week 26–27'],
                ['Full term begins', 'Week 39'],
                ['Due date', 'Week 40 (40 weeks from LMP)'],
              ].map(([event, timing]) => (
                <div key={event} className="flex justify-between px-4 py-3 text-sm">
                  <span className="text-slate-700 dark:text-slate-300">{event}</span>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">{timing}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trimesters */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            The Three Trimesters
          </h2>
          <div className="space-y-6">
            {trimesters.map((t) => (
              <div key={t.name} className={`rounded-2xl border p-6 ${t.color}`}>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-2xl">{t.emoji}</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{t.name}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${t.badge}`}>
                    {t.weeks}
                  </span>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Baby&apos;s development
                    </h4>
                    <ul className="space-y-1.5">
                      {t.babyHighlights.map((h) => (
                        <li key={h} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                          <span className="text-emerald-500 mt-0.5 flex-shrink-0">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                      Your body & appointments
                    </h4>
                    <ul className="space-y-1.5">
                      {t.momHighlights.map((h) => (
                        <li key={h} className="text-sm text-slate-600 dark:text-slate-400 flex gap-2">
                          <span className="text-rose-400 mt-0.5 flex-shrink-0">♥</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Key Milestones Week by Week
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300 w-20">Week</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Milestone</th>
                </tr>
              </thead>
              <tbody>
                {weekMilestones.map((m, i) => (
                  <tr key={m.week} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-800/30'}>
                    <td className="px-4 py-3 font-semibold text-indigo-600 dark:text-indigo-400">W{m.week}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{m.milestone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Weeks vs months */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Why Weeks, Not Months?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            People often ask &ldquo;how many months pregnant am I?&rdquo; — and the honest answer
            is that months are a messy unit for pregnancy. Calendar months range from 28 to 31
            days, which means &ldquo;three months pregnant&rdquo; could mean anywhere from 12 to
            14 weeks depending on how you count. A 40-week pregnancy spans approximately nine
            calendar months and one week — which is why people sometimes say &ldquo;ten months.&rdquo;
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Weeks are precise: every prenatal appointment, test, and guideline is referenced to
            a specific week. If your midwife says your anatomy scan is at 20 weeks, she means
            exactly 20 weeks from your LMP — no ambiguity. This is why healthcare providers,
            books, and apps universally use weeks rather than months.
          </p>
        </section>

        {/* Medical disclaimer */}
        <div className="mb-10 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 p-5 text-sm text-slate-500 dark:text-slate-400">
          <strong className="text-slate-700 dark:text-slate-300">Medical note:</strong> This
          article provides general educational information. Pregnancy care is individual — always
          follow the guidance of your midwife, OB-GYN, or other qualified healthcare provider.
          If you have concerns about your pregnancy at any stage, contact your healthcare team.
        </div>

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
        <section className="rounded-2xl bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 border border-rose-100 dark:border-rose-800 p-6 text-center">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            More Age & Time Calculators
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-5 text-sm">
            Curious about your own age in weeks, days, or hours? Our calculators can tell you exactly.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/weeks-old-calculator"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 text-white text-sm font-medium hover:bg-rose-700 transition-colors"
            >
              📅 How Many Weeks Old Am I?
            </Link>
            <Link
              href="/days-old-calculator"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              📆 How Many Days Old Am I?
            </Link>
            <Link
              href="/blog/milestone-birthdays"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              🎂 Milestone Birthdays Guide
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
