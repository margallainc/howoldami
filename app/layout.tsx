import type { Metadata } from 'next';
import { DM_Serif_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import DarkModeToggle from './components/DarkModeToggle';
import Link from 'next/link';

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

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
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmSans.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0d0d0d" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f9f6f1" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3426561171885671"
          crossOrigin="anonymous"
        />
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
      <body className="min-h-screen transition-colors duration-300">
        {/* ── Navigation ── */}
        <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 h-14 flex items-center justify-between">
            {/* Wordmark */}
            <Link
              href="/"
              className="text-[var(--text)] text-sm font-medium tracking-[0.15em] uppercase hover:text-[var(--gold)] transition-colors duration-200"
            >
              Seconds Alive
            </Link>

            {/* Nav links */}
            <nav className="flex items-center gap-6 sm:gap-8">
              <Link
                href="/blog"
                className="hidden sm:block text-xs tracking-widest uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="hidden sm:block text-xs tracking-widest uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/sleep"
                className="hidden sm:block text-xs tracking-widest uppercase text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200"
              >
                Sleep
              </Link>
              <DarkModeToggle />
            </nav>
          </div>
        </header>

        {/* ── Main content ── */}
        <main className="max-w-5xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
          {children}
        </main>

        {/* ── Footer ── */}
        <footer className="border-t border-[var(--border)] mt-24">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[var(--muted)] text-xs tracking-wide">
            <span>© 2025 Seconds Alive — all calculations run in your browser, nothing is stored</span>
            <div className="flex items-center gap-5">
              <Link href="/blog" className="hover:text-[var(--text)] transition-colors">Blog</Link>
              <Link href="/about" className="hover:text-[var(--text)] transition-colors">About</Link>
              <Link href="/privacy-policy" className="hover:text-[var(--text)] transition-colors">Privacy</Link>
              <Link href="/terms-of-service" className="hover:text-[var(--text)] transition-colors">Terms</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
