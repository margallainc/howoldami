import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import DarkModeToggle from './components/DarkModeToggle';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://secondsalive.com'),
  title: {
    default: 'How Old Am I? — Exact Age Calculator with Live Life Stats',
    template: '%s | How Old Am I?',
  },
  description:
    'Find out exactly how old you are in years, months, days, hours, minutes and seconds. See your life stats: heartbeats, breaths, and more — all counting live.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'How Old Am I?',
    title: 'How Old Am I? — Exact Age Calculator with Live Life Stats',
    description:
      'Find out exactly how old you are in years, months, days, hours, minutes and seconds. See your life stats: heartbeats, breaths, and more — all counting live.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Old Am I? — Exact Age Calculator with Live Life Stats',
    description:
      'Find out exactly how old you are in years, months, days, hours, minutes and seconds. See your life stats counting live.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3426561171885671"crossOrigin="anonymous"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-white dark:bg-slate-950 text-slate-900 dark:text-white min-h-screen transition-colors duration-300`}
      >
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
            >
              <svg
                className="w-7 h-7 text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              How Old Am I?
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/blog"
                className="text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors hidden sm:block"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors hidden sm:block"
              >
                About
              </Link>
              <DarkModeToggle />
            </div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {children}
        </main>

        <footer className="border-t border-slate-200 dark:border-slate-800 mt-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-3">
                  Age Calculators
                </h4>
                <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                  <li><Link href="/days-old-calculator" className="hover:text-indigo-500 transition-colors">Days Old Calculator</Link></li>
                  <li><Link href="/hours-old-calculator" className="hover:text-indigo-500 transition-colors">Hours Old Calculator</Link></li>
                  <li><Link href="/seconds-old-calculator" className="hover:text-indigo-500 transition-colors">Seconds Old Calculator</Link></li>
                  <li><Link href="/weeks-old-calculator" className="hover:text-indigo-500 transition-colors">Weeks Old Calculator</Link></li>
                  <li><Link href="/age-in-days" className="hover:text-indigo-500 transition-colors">Age in Days</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-3">
                  Life Stats
                </h4>
                <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                  <li><Link href="/heartbeats-since-birth" className="hover:text-indigo-500 transition-colors">Heartbeats Since Birth</Link></li>
                  <li><Link href="/what-day-was-i-born" className="hover:text-indigo-500 transition-colors">What Day Was I Born?</Link></li>
                  <li><Link href="/next-birthday-countdown" className="hover:text-indigo-500 transition-colors">Birthday Countdown</Link></li>
                  <li><Link href="/life-expectancy-calculator" className="hover:text-indigo-500 transition-colors">Life Expectancy</Link></li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-3">
                  Blog
                </h4>
                <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                  <li><Link href="/blog/what-generation-am-i" className="hover:text-indigo-500 transition-colors">What Generation Am I?</Link></li>
                  <li><Link href="/blog/life-expectancy-by-country" className="hover:text-indigo-500 transition-colors">Life Expectancy by Country</Link></li>
                  <li><Link href="/blog/milestone-birthdays" className="hover:text-indigo-500 transition-colors">Milestone Birthdays</Link></li>
                  <li><Link href="/blog/birthday-facts-and-statistics" className="hover:text-indigo-500 transition-colors">Birthday Facts & Statistics</Link></li>
                  <li><Link href="/blog" className="hover:text-indigo-500 transition-colors font-medium">View All Articles →</Link></li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
              <div className="col-span-2 sm:col-span-3">
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white mb-3">
                  Company
                </h4>
                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                  <li><Link href="/about" className="hover:text-indigo-500 transition-colors">How It Works</Link></li>
                  <li><Link href="/privacy-policy" className="hover:text-indigo-500 transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" className="hover:text-indigo-500 transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-slate-200 dark:border-slate-800 pt-6 text-center text-sm text-slate-400 dark:text-slate-500">
              <p>&copy; 2025 How Old Am I? — All calculations are performed client-side. No data is stored.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
