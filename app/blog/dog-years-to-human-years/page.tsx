import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dog Years to Human Years: The Real Conversion Chart',
  description:
    'Convert your dog\'s age to human years with the accurate breed-size-adjusted chart. The "multiply by 7" myth explained, plus the science of how dogs actually age.',
  alternates: { canonical: '/blog/dog-years-to-human-years' },
  openGraph: {
    title: 'Dog Years to Human Years: The Real Conversion Chart',
    description:
      'How old is your dog in human years? The accurate conversion chart — not the multiply-by-7 myth — plus the science of canine aging.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const smallDogChart = [
  { dogAge: 1, humanAge: 15, stage: 'Puppy / Adolescent' },
  { dogAge: 2, humanAge: 24, stage: 'Young Adult' },
  { dogAge: 3, humanAge: 28, stage: 'Adult' },
  { dogAge: 4, humanAge: 32, stage: 'Adult' },
  { dogAge: 5, humanAge: 36, stage: 'Adult' },
  { dogAge: 6, humanAge: 40, stage: 'Mature Adult' },
  { dogAge: 7, humanAge: 44, stage: 'Mature Adult' },
  { dogAge: 8, humanAge: 48, stage: 'Senior' },
  { dogAge: 9, humanAge: 52, stage: 'Senior' },
  { dogAge: 10, humanAge: 56, stage: 'Senior' },
  { dogAge: 12, humanAge: 64, stage: 'Senior' },
  { dogAge: 14, humanAge: 72, stage: 'Senior' },
  { dogAge: 16, humanAge: 80, stage: 'Geriatric' },
];

const largeDogChart = [
  { dogAge: 1, humanAge: 15, stage: 'Puppy / Adolescent' },
  { dogAge: 2, humanAge: 24, stage: 'Young Adult' },
  { dogAge: 3, humanAge: 28, stage: 'Adult' },
  { dogAge: 4, humanAge: 32, stage: 'Adult' },
  { dogAge: 5, humanAge: 36, stage: 'Adult' },
  { dogAge: 6, humanAge: 45, stage: 'Mature Adult' },
  { dogAge: 7, humanAge: 50, stage: 'Senior' },
  { dogAge: 8, humanAge: 55, stage: 'Senior' },
  { dogAge: 9, humanAge: 61, stage: 'Senior' },
  { dogAge: 10, humanAge: 66, stage: 'Senior' },
  { dogAge: 11, humanAge: 72, stage: 'Geriatric' },
  { dogAge: 12, humanAge: 77, stage: 'Geriatric' },
];

const lifeExpectancy = [
  { size: 'Toy / Extra Small', weight: 'Under 10 lbs', examples: 'Chihuahua, Yorkshire Terrier', avgYears: '14–16 years' },
  { size: 'Small', weight: '10–20 lbs', examples: 'Beagle, Shih Tzu, Dachshund', avgYears: '13–15 years' },
  { size: 'Medium', weight: '20–50 lbs', examples: 'Cocker Spaniel, Border Collie', avgYears: '11–14 years' },
  { size: 'Large', weight: '50–90 lbs', examples: 'Labrador, German Shepherd', avgYears: '10–12 years' },
  { size: 'Giant', weight: '90+ lbs', examples: 'Great Dane, Saint Bernard', avgYears: '7–10 years' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it accurate to multiply a dog\'s age by 7?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The "multiply by 7" rule is a popular simplification but biologically inaccurate. Dogs reach sexual maturity by around age 1 (the equivalent of a mid-teenage human), which the ×7 rule misses entirely. A 1-year-old dog is much more developed than a 7-year-old child. A 2025 study in Cell Systems using DNA methylation analysis found that the relationship between dog and human aging is logarithmic, not linear — dogs age very rapidly in their first two years, then slow down considerably.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do large dogs age faster than small dogs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The relationship between body size and lifespan in dogs is the opposite of what we see across species (where larger animals generally live longer). Researchers believe large dogs age faster because they grow faster — the cellular processes that drive rapid growth in giant breeds may also accelerate aging. Large dogs also show higher rates of certain cancers, which may contribute to their shorter lifespans. A Great Dane at age 7 is already in old age, while a Chihuahua at 7 is middle-aged.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is a dog considered a senior?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Veterinarians generally classify dogs as "senior" when they have reached the last 25% of their expected lifespan for their size: roughly age 7 for large breeds, age 8–9 for medium breeds, and age 10–11 for small breeds. "Geriatric" is used for dogs in the final 10–15% of their expected lifespan. Senior dogs benefit from twice-yearly vet check-ups, dental care, joint supplements, and adjusted nutrition.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the oldest dog ever recorded?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bobi, a purebred Rafeiro do Alentejo from Portugal, was recognised by Guinness World Records as the oldest dog ever at 31 years and 165 days (born May 11, 1992). However, the record has since been disputed on documentation grounds. Before Bobi, the verified record holder was Bluey, an Australian cattle dog who lived to 29 years and 5 months, dying in 1939. Both cases represent extreme outliers far beyond typical lifespans.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I help my dog live longer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The factors most strongly associated with longer dog lifespan are: maintaining a healthy weight (obese dogs live significantly shorter lives), regular veterinary care including dental cleanings, daily exercise appropriate to the breed, high-quality nutrition, keeping vaccinations and parasite prevention current, and addressing health problems early. Neutering/spaying has a complex relationship with lifespan — it eliminates certain cancers but may increase risk of others depending on breed and timing.',
      },
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dog Years to Human Years: The Real Conversion Chart',
  description:
    'How to accurately convert your dog\'s age to human years, why the multiply-by-7 rule is wrong, and the science of canine aging.',
  author: { '@type': 'Organization', name: 'Seconds Alive' },
  publisher: { '@type': 'Organization', name: 'Seconds Alive' },
  url: 'https://secondsalive.com/blog/dog-years-to-human-years',
};

export default function DogYearsToHumanYears() {
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
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
              Pets
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">9 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Dog Years to Human Years: Accurate Conversion Charts by Breed Size
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            The classic &ldquo;multiply by 7&rdquo; rule is wrong — and we have known it for decades.
            Here is how to accurately estimate your dog&apos;s age in human terms, adjusted for breed
            size, and what the science of canine aging actually tells us.
          </p>
        </header>

        {/* The 7x myth */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Why the &ldquo;Multiply by 7&rdquo; Rule Is Wrong
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            The idea that one dog year equals seven human years is a back-of-the-envelope
            calculation that was probably derived by dividing average human lifespan (around 70
            years at the time) by average dog lifespan (around 10 years). Simple, but biologically
            misleading.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            The problem is that dogs do not age at a constant rate. They develop at a dramatically
            accelerated pace in their first two years — a 1-year-old dog is sexually mature and
            physically fully grown, something no 7-year-old human comes close to. After that early
            burst, the aging rate slows and stays slower for the rest of the dog&apos;s life.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            A 2020 study from the University of California San Diego, published in <em>Cell
            Systems</em>, used DNA methylation patterns (changes to how genes are expressed over
            time) to build a mathematical model of dog aging. The result was a logarithmic
            relationship: a 1-year-old dog is roughly equivalent to a 31-year-old human; a
            4-year-old dog is roughly equivalent to a 52-year-old human; an 8-year-old dog
            is roughly 64 — not 56 as the ×7 rule would suggest.
          </p>
        </section>

        {/* Small dog chart */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Dog Age in Human Years — Small &amp; Medium Breeds
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Applies to dogs under approximately 50 lbs (23 kg): Beagles, Spaniels, Dachshunds, Shih Tzus, Border Collies, etc.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Dog Age</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Human Equivalent</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Life Stage</th>
                </tr>
              </thead>
              <tbody>
                {smallDogChart.map((row, i) => (
                  <tr key={row.dogAge} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-800/30'}>
                    <td className="px-4 py-3 font-semibold text-amber-600 dark:text-amber-400">{row.dogAge} {row.dogAge === 1 ? 'year' : 'years'}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">≈ {row.humanAge} years</td>
                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{row.stage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Large dog chart */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Dog Age in Human Years — Large &amp; Giant Breeds
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Applies to dogs over approximately 50 lbs: Labradors, German Shepherds, Golden Retrievers, Rottweilers, Great Danes, Saint Bernards, etc.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Dog Age</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Human Equivalent</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Life Stage</th>
                </tr>
              </thead>
              <tbody>
                {largeDogChart.map((row, i) => (
                  <tr key={row.dogAge} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-800/30'}>
                    <td className="px-4 py-3 font-semibold text-orange-600 dark:text-orange-400">{row.dogAge} {row.dogAge === 1 ? 'year' : 'years'}</td>
                    <td className="px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">≈ {row.humanAge} years</td>
                    <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{row.stage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Lifespan by size */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Average Dog Lifespan by Breed Size
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed">
            Breed size is the single strongest predictor of dog lifespan. Small dogs consistently
            outlive large dogs by a significant margin — a pattern that is the reverse of what we
            see when comparing large and small animal species. A Chihuahua can routinely reach
            15–18 years; a Great Dane is geriatric at 8.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Size Category</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Weight</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Examples</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Avg Lifespan</th>
                </tr>
              </thead>
              <tbody>
                {lifeExpectancy.map((row, i) => (
                  <tr key={row.size} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-800/30'}>
                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{row.size}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{row.weight}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{row.examples}</td>
                    <td className="px-4 py-3 font-semibold text-emerald-600 dark:text-emerald-400">{row.avgYears}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Canine life stages */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            The Six Stages of a Dog&apos;s Life
          </h2>
          <div className="space-y-4">
            {[
              {
                stage: 'Neonatal',
                range: 'Birth – 2 weeks',
                emoji: '🐾',
                color: 'border-pink-200 bg-pink-50 dark:border-pink-800 dark:bg-pink-900/20',
                desc: 'Eyes and ears are closed. Puppies are entirely dependent on their mother for warmth, nutrition, and stimulation. The brain is present but minimally functional; the world is experienced only through touch and smell.',
              },
              {
                stage: 'Socialization',
                range: '3–12 weeks',
                emoji: '🐶',
                color: 'border-rose-200 bg-rose-50 dark:border-rose-800 dark:bg-rose-900/20',
                desc: 'The most critical developmental window in a dog\'s life. Positive exposure to people, animals, environments, and sounds during this period shapes temperament for life. Dogs poorly socialized in this window are disproportionately likely to develop fear and aggression issues.',
              },
              {
                stage: 'Juvenile',
                range: '3–6 months',
                emoji: '🦴',
                color: 'border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20',
                desc: 'Rapid physical growth. Baby teeth are replaced by adult teeth. Energy levels are extremely high and attention spans are short. This is prime time for basic obedience training.',
              },
              {
                stage: 'Adolescence',
                range: '6 months – 2 years',
                emoji: '⚡',
                color: 'border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20',
                desc: 'Sexual maturity arrives, bringing hormonal surges that can temporarily undo training and increase risk-taking. Many dogs are surrendered to shelters during this phase. Patience, consistency, and continued training are essential. Large breeds continue growing until 18–24 months.',
              },
              {
                stage: 'Adult',
                range: '2–7 years (size dependent)',
                emoji: '🐕',
                color: 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20',
                desc: 'Full physical and mental maturity. Energy levels stabilize. Most dogs are at their behavioral best during this stage — trained, bonded, and reliably predictable. Annual vet check-ups are sufficient for healthy adults.',
              },
              {
                stage: 'Senior / Geriatric',
                range: '7+ years (large breeds) / 10+ years (small)',
                emoji: '🌟',
                color: 'border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/30',
                desc: 'Gradual slowing is normal — reduced exercise tolerance, greying muzzle, possible joint stiffness. Cognitive decline (canine cognitive dysfunction) affects roughly 14% of dogs over 8 years. Semi-annual vet visits, joint support, dental care, and adjusted nutrition become important.',
              },
            ].map((s) => (
              <div key={s.stage} className={`rounded-xl border p-5 ${s.color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{s.emoji}</span>
                  <h3 className="font-bold text-slate-900 dark:text-white">{s.stage}</h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">({s.range})</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
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
        <section className="rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-100 dark:border-amber-800 p-6 text-center">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Calculate Your Own Age in Any Unit
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-5 text-sm">
            Curious how old <em>you</em> are in days, weeks, hours, or heartbeats? Our calculators have you covered.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 transition-colors"
            >
              ⏱️ How Old Am I?
            </Link>
            <Link
              href="/life-expectancy-calculator"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              📊 Life Expectancy Calculator
            </Link>
            <Link
              href="/blog/life-expectancy-by-country"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              🌍 Life Expectancy by Country
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
