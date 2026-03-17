import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zodiac Sign by Birthday: Complete Astrology Date Guide',
  description:
    'Find your zodiac sign by birthday. Exact date ranges for all 12 signs, their core traits, ruling planets, compatible signs, and the history behind Western astrology.',
  alternates: { canonical: '/blog/zodiac-sign-by-birthday' },
  openGraph: {
    title: 'Zodiac Sign by Birthday: Complete Astrology Date Guide',
    description:
      'Look up your zodiac sign by birthday — exact date ranges, personality traits, ruling planets, and compatibility for all 12 signs.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
};

const signs = [
  {
    sign: 'Aries',
    symbol: '♈',
    dates: 'March 21 – April 19',
    element: 'Fire',
    ruler: 'Mars',
    color: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20',
    badge: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400',
    traits: 'Bold, ambitious, impulsive, energetic',
    compatible: 'Leo, Sagittarius, Gemini',
    description:
      'Aries kicks off the zodiac and carries that pioneering energy in everything they do. Ruled by Mars, the planet of action and desire, Aries people tend to move first and think second — which makes them fearless leaders and frustrating project partners in equal measure. They have low tolerance for inaction and thrive under pressure.',
  },
  {
    sign: 'Taurus',
    symbol: '♉',
    dates: 'April 20 – May 20',
    element: 'Earth',
    ruler: 'Venus',
    color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20',
    badge: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400',
    traits: 'Patient, reliable, stubborn, sensual',
    compatible: 'Virgo, Capricorn, Cancer',
    description:
      'Taurus is the steadiest sign in the zodiac. Ruled by Venus, the planet of love and beauty, they have a deep appreciation for comfort, quality, and the finer things in life. They are the people who will spend months researching a purchase and then own it for decades. Their stubbornness is legendary — once a Taurus makes up their mind, changing it requires geological patience.',
  },
  {
    sign: 'Gemini',
    symbol: '♊',
    dates: 'May 21 – June 20',
    element: 'Air',
    ruler: 'Mercury',
    color: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20',
    badge: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400',
    traits: 'Curious, adaptable, witty, inconsistent',
    compatible: 'Libra, Aquarius, Aries',
    description:
      'Gemini is the chameleon of the zodiac. Ruled by Mercury, the planet of communication and intellect, Geminis are gifted conversationalists who can talk to anyone about anything. They process the world through words and ideas, collect interests like other people collect objects, and are genuinely hard to pin down. The "two-faced" reputation is a misread of their genuine versatility.',
  },
  {
    sign: 'Cancer',
    symbol: '♋',
    dates: 'June 21 – July 22',
    element: 'Water',
    ruler: 'Moon',
    color: 'border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-900/20',
    badge: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-400',
    traits: 'Nurturing, intuitive, moody, protective',
    compatible: 'Scorpio, Pisces, Taurus',
    description:
      'Cancer is ruled by the Moon, which governs emotion and instinct. This makes Cancers among the most emotionally perceptive people in any room — they pick up on things others miss, and they never forget how a person made them feel. Home and family are their anchors. When they trust you, the loyalty is absolute; when they feel threatened, the claws come out.',
  },
  {
    sign: 'Leo',
    symbol: '♌',
    dates: 'July 23 – August 22',
    element: 'Fire',
    ruler: 'Sun',
    color: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/20',
    badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400',
    traits: 'Confident, generous, dramatic, warm',
    compatible: 'Aries, Sagittarius, Gemini',
    description:
      'Leo is ruled by the Sun itself — the only sign with that distinction — and carries that solar energy openly. Leos are magnetic, warm, and built for the spotlight. They give generously and expect recognition generously in return. The theatrical reputation is earned, but so is the loyalty: a Leo who loves you will defend you like their own reputation is on the line.',
  },
  {
    sign: 'Virgo',
    symbol: '♍',
    dates: 'August 23 – September 22',
    element: 'Earth',
    ruler: 'Mercury',
    color: 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400',
    traits: 'Analytical, hardworking, critical, precise',
    compatible: 'Taurus, Capricorn, Cancer',
    description:
      'Virgo is the editor of the zodiac. Ruled by Mercury and grounded in the Earth element, Virgos notice things others skip over. They are the ones who catch typos, remember the details of a plan, and quietly fix three problems before anyone else noticed there were problems. Their critical eye can tip into self-criticism and perfectionism, but the underlying drive is genuine care about quality.',
  },
  {
    sign: 'Libra',
    symbol: '♎',
    dates: 'September 23 – October 22',
    element: 'Air',
    ruler: 'Venus',
    color: 'border-pink-200 dark:border-pink-800 bg-pink-50 dark:bg-pink-900/20',
    badge: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-400',
    traits: 'Diplomatic, charming, indecisive, fair-minded',
    compatible: 'Gemini, Aquarius, Leo',
    description:
      'Libra is ruled by Venus and represented by scales — balance is their core preoccupation. They are gifted at seeing multiple sides of any situation, which makes them natural mediators and infuriating decision-makers. Aesthetics matter enormously to Libra: they are drawn to beauty, harmony, and environments that feel considered. They avoid conflict so deliberately that the avoidance sometimes becomes its own conflict.',
  },
  {
    sign: 'Scorpio',
    symbol: '♏',
    dates: 'October 23 – November 21',
    element: 'Water',
    ruler: 'Pluto & Mars',
    color: 'border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20',
    badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400',
    traits: 'Intense, determined, secretive, perceptive',
    compatible: 'Cancer, Pisces, Virgo',
    description:
      'Scorpio is the most misunderstood sign in the zodiac. Co-ruled by Pluto (transformation, depth) and Mars (drive, power), Scorpios operate at an emotional intensity that other signs rarely match. They are not obsessive so much as thorough — they want to understand things completely. Loyalty to a Scorpio is almost sacred; betrayal is never forgotten.',
  },
  {
    sign: 'Sagittarius',
    symbol: '♐',
    dates: 'November 22 – December 21',
    element: 'Fire',
    ruler: 'Jupiter',
    color: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20',
    badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400',
    traits: 'Adventurous, philosophical, blunt, optimistic',
    compatible: 'Aries, Leo, Aquarius',
    description:
      'Sagittarius is ruled by Jupiter, the planet of expansion, abundance, and wisdom. This makes them the eternal students and explorers of the zodiac — people who are always chasing a bigger horizon, whether that is a physical destination, an idea, or a belief system. Their bluntness is not cruelty; they simply cannot be bothered to filter the truth. Freedom is not optional for a Sagittarius — it is a survival requirement.',
  },
  {
    sign: 'Capricorn',
    symbol: '♑',
    dates: 'December 22 – January 19',
    element: 'Earth',
    ruler: 'Saturn',
    color: 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/20',
    badge: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
    traits: 'Ambitious, disciplined, patient, reserved',
    compatible: 'Taurus, Virgo, Scorpio',
    description:
      'Capricorn is ruled by Saturn, the planet of discipline, time, and consequence. This gives them an unusual relationship with age — they often seem older than their years when young, and then somehow younger as they get older once the pressure of building is behind them. They are the long-game players of the zodiac: patient, strategic, and quietly relentless in pursuit of their goals.',
  },
  {
    sign: 'Aquarius',
    symbol: '♒',
    dates: 'January 20 – February 18',
    element: 'Air',
    ruler: 'Uranus & Saturn',
    color: 'border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-900/20',
    badge: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-400',
    traits: 'Independent, humanitarian, eccentric, visionary',
    compatible: 'Gemini, Libra, Sagittarius',
    description:
      'Aquarius is ruled by Uranus, the planet of innovation and disruption, with Saturn as a secondary ruler. They are often ahead of their time — interested in ideas and systems that others have not caught up with yet. Aquarians care deeply about humanity in the abstract and can sometimes struggle with intimacy in the specific. They are the most likely sign to have deeply held, unusual opinions about nearly everything.',
  },
  {
    sign: 'Pisces',
    symbol: '♓',
    dates: 'February 19 – March 20',
    element: 'Water',
    ruler: 'Neptune & Jupiter',
    color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/20',
    badge: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-400',
    traits: 'Compassionate, artistic, intuitive, escapist',
    compatible: 'Cancer, Scorpio, Taurus',
    description:
      'Pisces is the final sign of the zodiac, ruled by Neptune (dreams, spirituality, illusion) and Jupiter. Having come last, they are said to carry traces of all the signs before them, which shows in their unusual empathy and their occasional difficulty staying anchored. Pisces are deeply creative, emotionally porous, and drawn to art, music, and anything that transcends the everyday.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What zodiac sign am I if I was born on the cusp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If your birthday falls within two or three days of a sign\'s cutoff date, you are said to be "on the cusp." The Sun transitions between signs on slightly different calendar dates each year (within a day or two). The only precise way to determine your sign is to check the exact time of the Sun\'s movement for your birth year. Most cusp birthdays still belong firmly to one sign.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a sun sign and a rising sign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your sun sign (the one based on your birthday) describes your core identity and ego. Your rising sign (ascendant) is the zodiac sign that was rising on the eastern horizon at the exact time of your birth, and it governs how others perceive you. Your moon sign reflects your emotional inner world. A full birth chart uses all three.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the four zodiac elements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 12 zodiac signs are divided into four elements: Fire (Aries, Leo, Sagittarius) — passionate and action-oriented; Earth (Taurus, Virgo, Capricorn) — practical and grounded; Air (Gemini, Libra, Aquarius) — intellectual and communicative; Water (Cancer, Scorpio, Pisces) — emotional and intuitive.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which zodiac sign is the most common birthday?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scorpio is often cited as statistically the most common birthday period in the United States (late October to November), likely because it falls approximately nine months after the winter holiday season. Virgo (August–September) ranks closely behind. The rarest birth months are typically February and early January.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is astrology scientifically valid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no scientific evidence that the position of the Sun or planets at the time of birth causes personality traits. Controlled studies, including the famous Shawn Carlson double-blind test published in Nature (1985), have consistently failed to find predictive validity for astrological claims. Astrology is best understood as a symbolic language and cultural framework rather than an empirical science.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the rarest zodiac sign?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ophiuchus is sometimes called the "13th sign" (the Sun passes through the Ophiuchus constellation between November 29 and December 18). Western astrology uses a 12-sign system based on the ecliptic seasons rather than the current positions of constellations, so Ophiuchus is not included in traditional Western zodiac calculations.',
      },
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Zodiac Sign by Birthday: Complete Astrology Date Guide',
  description:
    'Find your zodiac sign by birthday with exact date ranges for all 12 signs, personality traits, ruling planets, and compatibility.',
  author: { '@type': 'Organization', name: 'Seconds Alive' },
  publisher: { '@type': 'Organization', name: 'Seconds Alive' },
  url: 'https://secondsalive.com/blog/zodiac-sign-by-birthday',
};

export default function ZodiacSignByBirthday() {
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
              Astrology
            </span>
            <span className="text-xs text-slate-400 dark:text-slate-500">12 min read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Zodiac Sign by Birthday: Every Sign, Every Date
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            Your zodiac (or &ldquo;sun&rdquo;) sign is determined by where the Sun sat in the sky on
            the day you were born. Below you will find every sign&apos;s exact date range,
            element, ruling planet, core traits, and compatible signs — plus a look at where
            Western astrology actually comes from.
          </p>
        </header>

        {/* Quick Reference Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Zodiac Sign Date Chart — All 12 Signs at a Glance
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/60">
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Sign</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Date Range</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Element</th>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700 dark:text-slate-300">Ruling Planet</th>
                </tr>
              </thead>
              <tbody>
                {signs.map((s, i) => (
                  <tr key={s.sign} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-800/30'}>
                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">
                      {s.symbol} {s.sign}
                    </td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{s.dates}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{s.element}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{s.ruler}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* All 12 Signs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            All 12 Zodiac Signs — Full Profiles
          </h2>
          <div className="space-y-5">
            {signs.map((s) => (
              <div key={s.sign} className={`rounded-2xl border p-6 ${s.color}`}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-2xl">{s.symbol}</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{s.sign}</h3>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.badge}`}>
                    {s.dates}
                  </span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${s.badge}`}>
                    {s.element} · {s.ruler}
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">{s.description}</p>
                <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <span><strong className="text-slate-700 dark:text-slate-300">Key traits:</strong> {s.traits}</span>
                  <span><strong className="text-slate-700 dark:text-slate-300">Best matches:</strong> {s.compatible}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Elements Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            The Four Elements — Fire, Earth, Air & Water
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            One of the most useful frameworks in astrology is grouping signs by element. Signs
            sharing an element tend to have fundamentally compatible approaches to the world, even
            when their personalities differ sharply.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                element: 'Fire',
                emoji: '🔥',
                signs: 'Aries, Leo, Sagittarius',
                desc: 'Driven by passion, enthusiasm, and the need to act. Fire signs initiate, inspire, and occasionally burn things down accidentally.',
                color: 'border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20',
              },
              {
                element: 'Earth',
                emoji: '🌍',
                signs: 'Taurus, Virgo, Capricorn',
                desc: 'Grounded in the material world — resources, systems, and tangible results. Earth signs build things that last.',
                color: 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20',
              },
              {
                element: 'Air',
                emoji: '💨',
                signs: 'Gemini, Libra, Aquarius',
                desc: 'Operate through ideas, language, and social connection. Air signs need mental stimulation the way other signs need food.',
                color: 'border-sky-200 bg-sky-50 dark:border-sky-800 dark:bg-sky-900/20',
              },
              {
                element: 'Water',
                emoji: '🌊',
                signs: 'Cancer, Scorpio, Pisces',
                desc: 'Navigate by emotion and intuition. Water signs feel everything deeply, remember everything longer, and often see what others miss.',
                color: 'border-violet-200 bg-violet-50 dark:border-violet-800 dark:bg-violet-900/20',
              },
            ].map((e) => (
              <div key={e.element} className={`rounded-xl border p-5 ${e.color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{e.emoji}</span>
                  <h3 className="font-bold text-slate-900 dark:text-white">{e.element} Signs</h3>
                </div>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">{e.signs}</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Origins */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Where Western Astrology Comes From
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed space-y-4">
            <p>
              Western astrology traces its roots to Babylon roughly 2,400 years ago. Babylonian
              astronomers divided the sky into 12 equal sections corresponding to the 12 months of
              their lunar calendar and named each section after a nearby constellation. This system
              was later adopted and refined by the Greeks, who gave us most of the mythological
              names we still use today.
            </p>
            <p>
              The key distinction in Western astrology is that it is <em>tropical</em> — meaning
              it is anchored to the seasons, not to the actual positions of the constellations in
              the sky. Aries begins on the spring equinox (around March 21) regardless of where
              the constellation Aries physically appears. This is why your Western zodiac sign
              differs from your Vedic (sidereal) sign, which tracks the actual astronomical
              positions: due to a phenomenon called precession, the equinoxes have shifted about
              23–24 degrees since the tropical zodiac was fixed, meaning the constellations and
              the zodiac signs are now out of sync by roughly one sign.
            </p>
            <p>
              Astrology spread through the Roman Empire and survived into the medieval period
              largely because it was intertwined with medicine — physicians used birth charts to
              diagnose illness. It fell out of mainstream Western science after the Enlightenment
              but has never left popular culture, and has experienced a significant resurgence
              since the 2010s driven largely by millennial and Gen Z interest.
            </p>
          </div>
        </section>

        {/* Cusp note */}
        <section className="mb-12 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            Born on the Cusp?
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
            The Sun does not switch signs at exactly midnight on the same date every year. It
            transitions within a window of roughly a day on either side of the dates listed
            above. If your birthday falls within two or three days of a sign change, you were
            born &ldquo;on the cusp.&rdquo;
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            To find your precise sign, look up a free birth chart calculator and enter your exact
            birth date, time, and location. The Sun&apos;s position is calculated to the degree,
            so there is no ambiguity once you have your exact birth time.
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
        <section className="rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 border border-indigo-100 dark:border-indigo-800 p-6 text-center">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Discover More About Your Birthday
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-5 text-sm">
            Find out what day of the week you were born, how old you are to the exact second, and when your next birthday arrives.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/what-day-was-i-born"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              📅 What Day Was I Born?
            </Link>
            <Link
              href="/next-birthday-countdown"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              🎂 Birthday Countdown
            </Link>
            <Link
              href="/blog/birthday-facts-and-statistics"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              🎉 Birthday Facts & Stats
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
