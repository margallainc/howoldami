import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for How Old Am I? Learn how we handle your data, our use of cookies, and third-party advertising policies.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-slate-400 dark:text-slate-500 mb-10">
        Last updated: March 4, 2026
      </p>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400">
        {/* Introduction */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Introduction
          </h2>
          <p>
            How Old Am I? (&quot;we,&quot; &quot;our,&quot; or &quot;the Site&quot;) respects your
            privacy and is committed to protecting any information that may be collected while you
            use our website at secondsalive.com. This Privacy Policy explains what data we collect, how
            we use it, and your choices regarding that data.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Information We Collect
          </h2>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Personal Information
          </h3>
          <p>
            We do <strong>not</strong> collect any personally identifiable information. The birthdate
            you enter into our calculator is processed entirely within your browser using
            client-side JavaScript. It is never transmitted to our servers, stored in any database,
            or shared with any third party.
          </p>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Automatically Collected Information
          </h3>
          <p>
            When you visit our Site, certain non-personal information may be collected automatically
            through standard web technologies. This may include:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring URL</li>
            <li>Pages visited and time spent on each page</li>
            <li>Device type (desktop, mobile, tablet)</li>
          </ul>
          <p>
            This information is collected through server logs and analytics tools to help us
            understand how visitors use the Site and to improve our services.
          </p>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Cookies and Tracking Technologies
          </h2>
          <p>Our Site uses the following types of cookies and storage mechanisms:</p>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Essential Cookies
          </h3>
          <p>
            We use browser localStorage to save your theme preference (dark or light mode). This is
            strictly functional and does not track you across websites.
          </p>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Third-Party Advertising Cookies
          </h3>
          <p>
            We use Google AdSense to display advertisements on our Site. Google and its advertising
            partners may use cookies to serve ads based on your prior visits to this Site or other
            websites. Google&apos;s use of advertising cookies enables it and its partners to serve
            ads based on your browsing history.
          </p>
          <p>
            You may opt out of personalized advertising by visiting{' '}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 underline"
            >
              Google Ads Settings
            </a>
            . Alternatively, you may opt out of third-party vendor cookies by visiting the{' '}
            <a
              href="https://optout.networkadvertising.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 underline"
            >
              Network Advertising Initiative opt-out page
            </a>
            .
          </p>

          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Analytics Cookies
          </h3>
          <p>
            We may use third-party analytics services (such as Google Analytics) to help understand
            Site usage. These services collect information about how visitors interact with the Site,
            including pages viewed, time on site, and navigation paths. This data is aggregated and
            anonymized.
          </p>
        </section>

        {/* Third-Party Advertising */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Third-Party Advertising
          </h2>
          <p>
            We partner with Google AdSense to display advertisements. Google, as a third-party
            vendor, uses cookies to serve ads on our Site. Google&apos;s use of the DART cookie
            enables it to serve ads to visitors based on their visit to our Site and other sites on
            the Internet.
          </p>
          <p>
            Third-party ad servers or ad networks may use technologies like cookies, JavaScript, or
            web beacons in their advertisements and links that appear on our Site. These technologies
            are used to measure the effectiveness of their advertising campaigns and to personalize
            the advertising content you see.
          </p>
          <p>
            We have no access to or control over cookies used by third-party advertisers. You should
            consult the respective privacy policies of these third-party ad servers for more
            information on their practices and instructions on how to opt out.
          </p>
        </section>

        {/* Data Retention */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Data Retention
          </h2>
          <p>
            Since we do not collect personal data through our calculator tool, there is no personal
            data to retain. Server logs and analytics data may be retained for a reasonable period to
            analyze trends and improve the Site, after which they are deleted or anonymized.
          </p>
        </section>

        {/* Children's Privacy */}
        {/* <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Children&apos;s Privacy
          </h2>
          <p>
            Our Site is not directed to children under the age of 13. We do not knowingly collect
            personal information from children under 13. If you are a parent or guardian and believe
            that your child has provided personal information to us, please contact us so that we
            can take appropriate action.
          </p>
        </section> */}

        {/* Your Rights */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Your Rights
          </h2>
          <p>Depending on your location, you may have certain rights regarding your data, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The right to access data collected about you</li>
            <li>The right to request deletion of your data</li>
            <li>The right to opt out of data collection and personalized advertising</li>
            <li>The right to data portability</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the information provided below.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this
            page with a revised &quot;Last updated&quot; date. We encourage you to review this page
            periodically to stay informed about how we protect your information.
          </p>
        </section>
{/* 
        Contact
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please
            contact us at:
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:privacy@secondsalive.com"
              className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 underline"
            >
              privacy@secondsalive.com
            </a>
          </p>
        </section> */}
      </div>
    </div>
  );
}
