import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'

export default function PrivacyPolicy() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Last Updated: May 02, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>
            QuotesMill (“we”, “our”, or “us”), a product of QuotesMill Tech Solutions LLP, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and protect personal data when you use our website, dashboard, Progressive Web App (PWA), and WhatsApp-based services (collectively, the “Services”).
          </p>
          <p>
            By accessing or using our Services, you agree to the practices described in this Privacy Policy. This policy is designed to comply with applicable laws, including the Digital Personal Data Protection (DPDP) Act, 2023 of India, and platform policies such as the WhatsApp Business Terms.
          </p>

          <h2>2. Scope and Consent</h2>
          <p>
            This Privacy Policy applies to:
          </p>
          <ul>
            <li><strong>Business Customers:</strong> Manufacturers, suppliers, and service providers who use QuotesMill to manage their enquiries and quotations.</li>
            <li><strong>End-Customers:</strong> Leads and buyers who interact with Business Customers through QuotesMill-enabled workflows.</li>
          </ul>
          <p>
            When you provide personal data to us or through our Services, you consent to its collection and processing as described here. If we process data on behalf of a business customer, that business is responsible for obtaining any required consents from their own customers.
          </p>

          <h2>3. Information we collect</h2>
          <p>We collect information you provide directly, as well as data generated during your use of the Services:</p>
          <ul>
            <li><strong>Account and Profile Information:</strong> Business name, registration details (GST/MSME), contact person name, email address, phone number, and physical address.</li>
            <li><strong>WhatsApp and Communication Data:</strong> WhatsApp phone numbers, profile names, message content (text, voice notes, images, drawings, documents), and metadata related to your enquiries and quotations.</li>
            <li><strong>Business Content:</strong> Product catalogs, price lists, quotation templates, negotiation history, and tax preferences.</li>
            <li><strong>Payment Information:</strong> Transaction history and billing details (payment processing is handled by authorized third-party gateways).</li>
            <li><strong>Technical and Usage Data:</strong> IP address, device type, browser information, OS, and interaction logs with our website and dashboard.</li>
          </ul>

          <h2>4. How we use your information</h2>
          <p>We use your information for the following purposes:</p>
          <ul>
            <li><strong>Service Delivery:</strong> To extract enquiry requirements, generate quotations, manage sales pipelines, send follow-ups, and process payments.</li>
            <li><strong>AI-Assisted Features:</strong> To automate the extraction, structuring, and summarization of business enquiries and to suggest workflow optimizations.</li>
            <li><strong>Communication:</strong> To send service updates, security alerts, administrative messages, and permitted marketing communications.</li>
            <li><strong>Improvement and Personalization:</strong> To analyze usage trends, debug technical issues, and enhance our AI models and platform features.</li>
            <li><strong>Compliance and Security:</strong> To verify accounts, prevent fraud, comply with legal obligations, and enforce our terms.</li>
          </ul>

          <h2>5. AI and Data Privacy</h2>
          <p>
            QuotesMill uses AI-assisted processing to help businesses respond to enquiries faster.
          </p>
          <p>
            Where permitted, we may use aggregated, statistical, or de-identified information to analyze service performance, adoption trends, response timelines, conversion metrics, and product reliability.
          </p>
          <p>
            We do not use business customer chat content or end-customer enquiry content to train general-purpose AI models or to augment unrelated user profiles, and any AI-assisted processing we use is intended to support the requested business workflow for that customer.
          </p>

          <h2>6. AI-assisted processing</h2>
          <p>
            QuotesMill may use automated systems and AI-assisted tools to extract, structure, summarize, validate, or classify information from text messages, voice notes, images, attachments, and uploaded templates in order to generate drafts, quotations, reminders, dashboards, and workflow suggestions.
          </p>
          <p>
            Where AI-assisted features are used, outputs may require human review, business-user confirmation, or manual edits before final quotation approval or dispatch.
          </p>
          <p>
            Business customers remain responsible for reviewing commercial terms, pricing, taxes, and legal accuracy before approving any final quotation, invoice, or commercial communication.
          </p>

          <h2>7. WhatsApp-specific notices</h2>
          <p>
            If you interact with QuotesMill or a QuotesMill-enabled business workflow through WhatsApp, your messages and related metadata may be processed to provide the requested service, respond to your enquiry, generate quotations or catalogs, send permitted follow-ups, and record communication history.
          </p>
          <p>
            Business customers using QuotesMill for proactive WhatsApp communication are responsible for obtaining any required opt-ins from their own leads or customers, and QuotesMill may store proof of such opt-ins and related consent records for compliance and audit purposes.
          </p>
          <p>
            Where required by WhatsApp platform rules, outbound business-initiated messages may be sent only through approved message templates and in accordance with platform restrictions, quality standards, and user choice mechanisms.
          </p>
          <p>
            Users may opt out of non-essential or promotional WhatsApp communications at any time by following the instructions shared in the message or by contacting the relevant business or QuotesMill, as applicable.
          </p>

          <h2>8. Sharing and disclosures</h2>
          <p>We do not sell personal data.</p>
          <p>
            We may share personal data with authorized service providers and subprocessors that help us operate the Services, such as cloud hosting providers, storage providers, analytics providers, customer support tools, payment processors, document generation vendors, communication providers, security vendors, and AI or automation vendors engaged to support the Services under contractual and confidentiality controls.
          </p>
          <p>
            We may share data with Meta, WhatsApp-related providers, or other integration partners to the extent necessary to enable messaging, template delivery, account connection, message routing, compliance, or related platform functionality.
          </p>
          <p>
            We may disclose information where required by law, regulation, legal process, court order, government request, or to establish, exercise, or defend legal claims.
          </p>
          <p>
            We may also disclose information in connection with a merger, acquisition, restructuring, financing, asset sale, or similar corporate transaction, subject to applicable confidentiality and legal requirements.
          </p>

          <h2>9. International and third-party processing</h2>
          <p>
            Some service providers or infrastructure providers used by QuotesMill may process data outside India, depending on the hosting, communication, analytics, backup, or AI tools selected for the Services.
          </p>
          <p>
            Where cross-border processing occurs, we will take reasonable contractual, technical, and organizational measures designed to protect personal data and to support compliance with applicable law.
          </p>

          <h2>10. Data retention</h2>
          <p>
            We retain personal data only for as long as necessary to provide the Services, fulfill the purposes described in this Privacy Policy, maintain appropriate business records, resolve disputes, enforce our agreements, and comply with applicable legal, tax, accounting, or regulatory obligations.
          </p>
          <p>
            Retention periods may vary depending on the type of data, the nature of the customer relationship, the business workflow involved, applicable contractual commitments, and legal requirements.
          </p>
          <p>
            When personal data is no longer reasonably required, we will delete, anonymize, or securely isolate it in accordance with our retention and deletion practices, subject to backup cycles and legal retention obligations.
          </p>

          <h2>11. Security</h2>
          <p>
            We implement reasonable technical, administrative, and organizational safeguards designed to protect personal data against unauthorized access, disclosure, alteration, loss, misuse, or destruction.
          </p>
          <p>
            These measures may include encryption in transit and at rest, access controls, role-based permissions, authentication safeguards, monitoring, logging, secure development practices, vendor controls, and backup and recovery procedures.
          </p>
          <p>
            No system can be guaranteed to be completely secure, but we take commercially reasonable steps to reduce risk and respond to incidents in accordance with applicable law and our internal security procedures.
          </p>

          <h2>12. Your rights and choices</h2>
          <p>
            Subject to applicable law, you may have the right to request access to personal data, correction or updating of inaccurate or incomplete data, deletion of personal data, withdrawal of consent where processing is based on consent, grievance redressal, and nomination of another person to exercise rights on your behalf in the event of death or incapacity.
          </p>
          <p>
            If QuotesMill processes your data on behalf of one of our business customers, you may need to contact that business customer directly for certain requests, and we may assist them in responding where required.
          </p>
          <p>
            To exercise privacy rights or make a complaint, please contact us using the details in the “Contact and Grievance” section below, and we may request reasonable verification of identity before processing the request.
          </p>

          <h2>13. Cookies, logs, and analytics</h2>
          <p>
            Our website, dashboard, and PWA interfaces may use cookies, pixels, SDKs, local storage, and similar technologies to enable core functionality, remember preferences, maintain sessions, improve performance, detect abuse, and understand service usage.
          </p>
          <p>
            Where required, we will obtain consent for non-essential technologies, and users can also manage certain browser or device settings to limit such technologies.
          </p>

          <h2>14. Children’s privacy</h2>
          <p>
            QuotesMill is intended for business and commercial use and is not directed to children.
          </p>
          <p>
            We do not knowingly collect personal data from individuals under 18 years of age without authorization required under applicable law, and if we become aware that such data has been collected inadvertently, we will take reasonable steps to delete or restrict it.
          </p>

          <h2>15. Data breach and incident response</h2>
          <p>
            If we become aware of a personal data breach affecting personal data under our control, we will take reasonable steps to investigate, contain, mitigate, document, and respond to the incident.
          </p>
          <p>
            Where required by applicable law, we will provide notices to affected parties, customers, regulators, or authorities.
          </p>

          <h2>16. Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in law, regulation, technology, platform requirements, or our business practices.
          </p>
          <p>
            When we make material changes, we will update the “Last Updated” date and may also provide notice through our website, dashboard, email, or other appropriate communication channels.
          </p>

          <h2>17. Contact and grievance</h2>
          <p>
            For questions, requests, or complaints regarding this Privacy Policy or our privacy practices, please contact:
          </p>
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 not-prose">
            <p className="font-bold text-slate-900 dark:text-white mb-2">QuotesMill Tech Solutions LLP</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Corporate Address: 1st Floor, Enkya Tower, Plot No. B&B1, Vanijya Kunj, Udyog Vihar, Phase-5, Opposite Cyber Hub, Gurugram-122016, Haryana, India.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              <strong>Email:</strong> grievance@quotesmill.com<br />
              <strong>Phone:</strong> +91-9958521274<br />
              <strong>Grievance Officer:</strong> Anshuman Jha (CEO & Founder)<br />
              <strong>Contact Email:</strong> anshuman.jha@quotesmill.com
            </p>
          </div>
          <p className="mt-6 text-sm italic">
            If you are a business customer using QuotesMill for your own leads and end-customers, you are also responsible for maintaining your own customer-facing privacy notice, lawful permissions, and communication practices as required under applicable law and platform rules.
          </p>

        </div>
      </section>

      <Footer />
    </main>
  )
}
