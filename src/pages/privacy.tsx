import Head from 'next/head';
import React from 'react';

const PrivacyPage: React.FC = () => {

  const sectionSpacing = "space-y-4";
  const cardStackSpacing = "mt-4 space-y-6";
  const cardClass =
    "rounded-lg border border-slate-700 bg-slate-800/60 p-8 shadow-sm";
  const listClass = "list-disc pl-6 space-y-1 mb-6";
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Read the privacy policy for the LiveTerm website and terminal experience."
        />
      </Head>

      <main className="p-8 overflow-y-auto h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
        <article className="max-w-3xl space-y-6">
          <header>
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
            <p className="mt-2">
              Schreck Works LLC (“Schreck Works,” “we,” “our,” or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information obtained through our website, email communications, and SMS messaging.
            </p>
          </header>

          <section className={sectionSpacing}>
            <h2 className="text-xl font-semibold">1. Information We Collect</h2>
            <p className="mt-2">
              We may collect the following types of information:
            </p>
            <div className={cardStackSpacing}>
              <div className={cardClass}>
              <h3 className="mb-2 text-base font-semibold">Contact Information</h3>
              <ul className={listClass}>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Any information you provide in communications with us</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-2 text-base font-semibold">Communication Data</h3>
              <ul className={listClass}>
                <li>Email correspondence</li>
                <li>SMS/text message communications</li>
                <li>Customer service inquiries</li>
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="mb-2 text-base font-semibold">Website &amp; Analytics Data</h3>
              <ul className={listClass}>
                <li>IP address</li>
                <li>Browser type and device information</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Interaction with marketing emails (opens, clicks)</li>
              </ul>
            </div>

            </div>

            <p>We collect this information when you:</p>
            <ul className={listClass}>
              <li>Visit our website</li>
              <li>Contact us by email or phone</li>
              <li>Text our business number</li>
              <li>Subscribe to our newsletter or marketing updates</li>
              <li>Engage with our marketing content</li>
            </ul>

          </section>

          <section className={sectionSpacing}>
            <h2 className="text-xl font-semibold">2. How We Use This Information</h2>
            <p className="mt-2">
              We use collected information to:
            </p>
            <ul className={listClass}>
              <li>Communicate with you directly (email, phone, SMS)</li>
              <li>Provide requested services or information</li>
              <li>Send newsletters, marketing communications, and updates (with your consent)</li>
              <li>Schedule meetings and respond to inquiries</li>
              <li>Improve our website and marketing effectiveness</li>
              <li>Maintain business and compliance records</li>
            </ul>
            <p><strong>We do not sell, rent, or trade your personal information.</strong></p>
          </section>

          <section className={sectionSpacing}>
            <h2 className="text-xl font-semibold">3. SMS Messaging</h2>
            <p className="mt-2">
              If you communicate with us via SMS:
            </p>
            <ul className={listClass}>
              <li>Messages are conversational and person-to-person.</li>
              <li>No automated or bulk messaging is used.</li>
              <li>Message frequency varies.</li>
              <li>Message and data rates may apply.</li>
              <li>You may opt out at any time by replying <strong>STOP</strong>.</li>
              <li>For assistance, reply <strong>HELP</strong> or contact us at <a href="mailto:support@schreck.works">support@schreck.works</a>.</li>
            </ul>
            <p>
              Phone numbers collected for SMS communication are used solely for direct business communication and are not sold
              or shared with third parties for marketing purposes.
            </p>
          </section>

          <section className={sectionSpacing}>
            <h2 className="text-xl font-semibold">4. Email Communications</h2>
            <p>We may send:</p>
            <ul className={listClass}>
              <li>Direct 1:1 business communications</li>
              <li>Service-related emails</li>
              <li>Marketing emails and newsletters (if you opt in)</li>
            </ul>
            <p>You may unsubscribe from marketing emails at any time by:</p>
            <ul className={listClass}>
              <li>Clicking the “unsubscribe” link in the email, or</li>
              <li>Contacting <a href="mailto:support@schreck.works">support@schreck.works</a>.</li>
            </ul>
            <p>
              Even if you unsubscribe from marketing emails, we may still send essential service-related communications.
            </p>
          </section>

          <section className={sectionSpacing}>
            <h2 className="text-xl font-semibold">5. Website Analytics &amp; Marketing Tools</h2>
            <p>We use standard website analytics and marketing tools to:</p>
            <ul className={listClass}>
              <li>Monitor website performance</li>
              <li>Measure marketing effectiveness</li>
              <li>Understand visitor behavior</li>
              <li>Improve user experience</li>
            </ul>
            <p>
              These tools may use cookies, tracking pixels, or similar technologies. You may control cookies through your browser settings.
            </p>
            <p>Analytics data is used in aggregate form and is not sold.</p>
          </section>

          <section className={sectionSpacing}>
            <h2 className="text-xl font-semibold">6. Data Retention</h2>
            <p>We retain personal information only as long as necessary to provide services, comply with legal or regulatory obligations, resolve disputes, and maintain business records.</p>
          </section>

          <section className={sectionSpacing}>
            <h2 className="text-xl font-semibold">7. Your Rights</h2>
            <p>You may:</p>
            <ul className={listClass}>
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent to marketing communications</li>
            </ul>
            <p>
              To make a request, contact: <a href="mailto:support@schreck.works">support@schreck.works</a>.
              We will respond within a reasonable timeframe consistent with applicable laws.
            </p>
          </section>

          <section className={sectionSpacing}>
            <h2 className="text-xl font-semibold">8. Data Security</h2>
            <p className="mt-2">
              We implement reasonable administrative, technical, and organizational safeguards to protect personal information from unauthorized access, disclosure, or misuse.
              However, no method of transmission over the Internet or electronic storage is completely secure.
            </p>
          </section>

          <section className={sectionSpacing}>
            <h2 className="text-xl font-semibold">9. Third-Party Services</h2>
            <p className="mt-2">
              We may use trusted third-party service providers (e.g., email platforms, analytics providers, communication platforms) to operate our business. These providers are required to safeguard personal information and use it only for authorized purposes.
            </p>
          </section>

          <section className={sectionSpacing}>
            <h2 className="text-xl font-semibold">10. Children’s Privacy</h2>
            <p className="mt-2">
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section className={sectionSpacing}>
            <h2 className="text-xl font-semibold">11. Contact Us</h2>
            <p className="mt-2">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact:
            </p>
            <p>
              <strong>Schreck Works LLC</strong><br />
              Email: <a href="mailto:support@schreck.works">support@schreck.works</a><br />
              Website: <a href="https://schreck.works">https://schreck.works</a>
            </p>
          </section>
        </article>
      </main>
    </>
  );
};

export default PrivacyPage;
