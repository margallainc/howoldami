import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for How Old Am I? Read the terms and conditions governing your use of our age calculator and life statistics tool.',
  alternates: { canonical: '/terms-of-service' },
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
        Terms of Service
      </h1>
      <p className="text-sm text-slate-400 dark:text-slate-500 mb-10">
        Last updated: March 4, 2026
      </p>

      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400">
        {/* Agreement */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            1. Agreement to Terms
          </h2>
          <p>
            By accessing and using How Old Am I? (the &quot;Site&quot;), available at
            secondsalive.com, you agree to be bound by these Terms of Service
            (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Site.
          </p>
        </section>

        {/* Description of Service */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            2. Description of Service
          </h2>
          <p>
            How Old Am I? is a free, client-side age calculator and life statistics tool. The Site
            allows users to enter their birthdate and view calculated age data including exact age,
            total days/hours/minutes/seconds lived, estimated heartbeats, estimated breaths, and
            other life statistics. All calculations are performed in the user&apos;s browser and no
            personal data is transmitted to or stored on our servers.
          </p>
        </section>

        {/* Accuracy */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            3. Accuracy of Calculations
          </h2>
          <p>
            While we strive to provide accurate calculations, all results are estimates and should
            be treated as such. Specifically:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Age calculations</strong> are based on the date you provide and the current
              date and time as reported by your device. They do not account for your exact time of
              birth.
            </li>
            <li>
              <strong>Heartbeat estimates</strong> use an average resting heart rate of 70 beats per
              minute. Actual heart rates vary by individual, age, fitness, and activity level.
            </li>
            <li>
              <strong>Breath estimates</strong> use an average respiratory rate of 16 breaths per
              minute. Actual breathing rates vary widely.
            </li>
            <li>
              <strong>Sleep estimates</strong> assume 8 hours of sleep per night, which is a general
              recommendation and may not reflect individual habits.
            </li>
            <li>
              <strong>Life expectancy data</strong> is based on published country-level averages and
              does not predict any individual&apos;s lifespan.
            </li>
          </ul>
          <p>
            The Site is intended for entertainment and informational purposes only. It should not be
            used as a substitute for professional medical, health, or actuarial advice.
          </p>
        </section>

        {/* Use of the Site */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            4. Acceptable Use
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Use the Site for any unlawful purpose</li>
            <li>Attempt to interfere with the proper functioning of the Site</li>
            <li>Use automated tools to scrape, crawl, or extract data from the Site beyond what
              is permitted by our robots.txt file</li>
            <li>Reproduce, duplicate, copy, sell, or exploit any portion of the Site without
              express written permission</li>
            <li>Use the Site to transmit malicious code or engage in any activity that could
              harm other users</li>
          </ul>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            5. Intellectual Property
          </h2>
          <p>
            All content on the Site, including but not limited to text, graphics, logos, icons,
            images, code, and software, is the property of How Old Am I? or its content suppliers
            and is protected by applicable intellectual property laws. You may not use, reproduce,
            or distribute any content from the Site without prior written consent.
          </p>
        </section>

        {/* Third-Party Content */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            6. Third-Party Advertising
          </h2>
          <p>
            The Site may display advertisements provided by third-party advertising networks,
            including Google AdSense. These advertisements may use cookies and similar tracking
            technologies to serve relevant ads. We are not responsible for the content, accuracy, or
            practices of third-party advertisers. Your interactions with third-party advertisements
            are solely between you and the advertiser.
          </p>
        </section>

        {/* Links */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            7. External Links
          </h2>
          <p>
            The Site may contain links to third-party websites or services that are not owned or
            controlled by us. We have no control over, and assume no responsibility for, the
            content, privacy policies, or practices of any third-party websites. You acknowledge and
            agree that we are not responsible or liable for any damage or loss caused by or in
            connection with the use of any such third-party content or services.
          </p>
        </section>

        {/* Disclaimer */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            8. Disclaimer of Warranties
          </h2>
          <p>
            The Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis without
            any warranties of any kind, whether express or implied. We do not warrant that the Site
            will be uninterrupted, error-free, or free of viruses or other harmful components. We
            make no warranties regarding the accuracy, reliability, or completeness of any
            calculations, data, or content provided on the Site.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            9. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by applicable law, How Old Am I? and its operators shall
            not be liable for any indirect, incidental, special, consequential, or punitive damages,
            including but not limited to loss of data, loss of profits, or other intangible losses,
            arising out of or in connection with your use of the Site.
          </p>
        </section>

        {/* Indemnification */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            10. Indemnification
          </h2>
          <p>
            You agree to indemnify and hold harmless How Old Am I?, its operators, and affiliates
            from and against any claims, damages, losses, liabilities, costs, or expenses arising
            out of or in connection with your use of the Site or violation of these Terms.
          </p>
        </section>

        {/* Modifications */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            11. Modifications to Terms
          </h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be posted on this
            page with a revised &quot;Last updated&quot; date. Your continued use of the Site after
            any changes constitutes acceptance of the revised Terms. We encourage you to review
            these Terms periodically.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            12. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with applicable laws,
            without regard to conflict of law principles. Any disputes arising under or in
            connection with these Terms shall be subject to the exclusive jurisdiction of the
            competent courts.
          </p>
        </section>

        {/* Severability */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            13. Severability
          </h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that provision
            shall be limited or eliminated to the minimum extent necessary so that the remaining
            Terms remain in full force and effect.
          </p>
        </section>

        {/* Contact */}
        {/* <section>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            14. Contact Us
          </h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a
              href="mailto:legal@secondsalive.com"
              className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300 underline"
            >
              legal@secondsalive.com
            </a>
          </p>
        </section> */}
      </div>
    </div>
  );
}
