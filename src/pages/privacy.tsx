import Head from 'next/head';
import React from 'react';

const PrivacyPage: React.FC = () => {
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
              This page explains what information may be collected when you
              visit this site and how it is used.
            </p>
          </header>

          <section>
            <h2 className="text-xl font-semibold">Information We Collect</h2>
            <p className="mt-2">
              We may collect limited technical information such as browser type,
              device characteristics, and basic request logs to keep the site
              running reliably.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">How Information Is Used</h2>
            <p className="mt-2">
              Collected information is used to operate, secure, and improve the
              website experience. We do not sell your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Third-Party Services</h2>
            <p className="mt-2">
              If third-party tools are enabled for analytics, hosting, or
              infrastructure, those services may process technical data
              according to their own privacy terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-2">
              If you have questions about this policy, please reach out using
              the contact options available on the main terminal page.
            </p>
          </section>
        </article>
      </main>
    </>
  );
};

export default PrivacyPage;
