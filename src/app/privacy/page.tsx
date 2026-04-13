import Layout from '@/components/layout/Layout';

export const metadata = {
  title: 'Privacy Notice — Pleasant Junior',
  description: 'How your personal data is handled on Pleasant Junior’s portfolio site in line with the Kenya Data Protection Act.'
};

export default function PrivacyPage() {
  return (
    <Layout>
      <section className="py-16 bg-[var(--page-bg)] text-[var(--page-text)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-gray-900 dark:text-white">
            Privacy Notice
          </h1>
          <p className="mb-6 text-sm text-gray-600 dark:text-gray-300">
            Last updated: February 25, 2026
          </p>

          <div className="space-y-6 text-sm leading-relaxed">
            <p>
              This personal portfolio website is operated by Pleasant Junior. It is intended to showcase my work and
              professional profile. I take your privacy seriously and aim to comply with the{' '}
              <strong>Data Protection Act, 2019 (Kenya)</strong> and any related regulations.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              1. What personal data is collected
            </h2>
            <p>
              The only personal data collected through this site is information you choose to provide via the contact
              form:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Name</li>
              <li>Email address</li>
              <li>Subject and message content</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              2. How your data is used
            </h2>
            <p>Your details are used solely to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Read and respond to your enquiry.</li>
              <li>Follow up with you about opportunities you have raised.</li>
            </ul>
            <p>
              I do <strong>not</strong> use your details for marketing newsletters, and I do <strong>not</strong> sell
              or rent your personal data.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              3. Third-party services
            </h2>
            <p>
              Messages sent via the contact form are delivered using an email service provider (such as EmailJS or
              standard email infrastructure). This means your message and contact details may be processed by that
              provider solely for the purpose of sending and receiving email.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              4. Data retention
            </h2>
            <p>
              Messages and contact details are stored in my email inbox for as long as they are needed to respond to you
              and keep a basic professional record of the conversation. I do not build marketing profiles or automated
              decision-making systems with this data.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              5. Your rights under the Kenya Data Protection Act
            </h2>
            <p>
              Under the Data Protection Act, 2019, you have rights including (subject to certain conditions in the law):
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Right to be informed about how your data is used.</li>
              <li>Right to access the personal data I hold about you.</li>
              <li>Right to request correction or deletion of your personal data.</li>
              <li>Right to object to or restrict certain types of processing.</li>
            </ul>
            <p>
              To exercise any of these rights, please email{' '}
              <a href="mailto:pleasantjunior7@gmail.com" className="underline">
                pleasantjunior7@gmail.com
              </a>
              .
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              6. Cookies and analytics
            </h2>
            <p>
              This portfolio does not intentionally use analytics scripts (such as Google Analytics) or non-essential
              cookies. If such tools are added in the future, this notice will be updated and, where required, consent
              will be requested.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              7. Contact details
            </h2>
            <p>
              If you have any questions about this notice or how your data is handled, you can contact me at:{' '}
              <a href="mailto:pleasantjunior7@gmail.com" className="underline">
                pleasantjunior7@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

