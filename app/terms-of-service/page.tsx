import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'

export default function TermsOfService() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Last Updated: May 02, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the QuotesMill website, dashboard, Progressive Web App (PWA), and WhatsApp-based services (collectively, the “Services”), you agree to be bound by these Terms of Service (“Terms”). These Terms constitute a legally binding agreement between you and QuotesMill Tech Solutions LLP (“QuotesMill”, “we”, “our”, or “us”). If you do not agree to these Terms, you must not access or use the Services.
          </p>

          <h2>2. Eligibility and Authority</h2>
          <p>By using the Services, you represent and warrant that you:</p>
          <ul>
            <li>Are at least 18 years of age and have the legal capacity to enter into a binding agreement.</li>
            <li>Have the authority to bind your business to these Terms.</li>
            <li>Own or have rights to all content, templates, catalogs, customer data, and intellectual property you upload or process through QuotesMill.</li>
            <li>Maintain an active, compliant WhatsApp Business Account in good standing with Meta.</li>
            <li>Comply with all applicable Indian laws including GST, MSME regulations, labor laws, and the Digital Personal Data Protection (DPDP) Act, 2023.</li>
          </ul>

          <h2>3. WhatsApp Business Platform Compliance</h2>
          <p><strong>Your Responsibilities:</strong> You are solely responsible for:</p>
          <ul>
            <li>Obtaining explicit opt-in consent from your customers before using QuotesMill to send proactive business-initiated messages outside WhatsApp's 24-hour messaging window.</li>
            <li>Using only Meta-approved message templates for notifications, follow-ups, and promotional content.</li>
            <li>Maintaining accurate business profile information verified through Meta Business Manager.</li>
            <li>Monitoring WhatsApp quality rating and resolving any policy violations promptly.</li>
            <li>Ensuring all outbound communications comply with WhatsApp Business Messaging Policy and template guidelines.</li>
          </ul>
          <p>
            <strong>QuotesMill Role:</strong> We act as an Independent Software Vendor (ISV) facilitating your compliance with WhatsApp platform requirements. We do not control your WhatsApp Business Account, message content, customer relationships, or end-customer consent.
          </p>

          <h2>4. User Content & Data Ownership</h2>
          <p>
            <strong>Your Content:</strong> You retain all rights to your business data including customer enquiries, quotation templates, pricing, catalogs, negotiation history, and transaction records. QuotesMill claims no ownership rights over Your Content.
          </p>
          <p>
            <strong>Your License to Us:</strong> You grant QuotesMill a worldwide, non-exclusive, royalty-free license to host, display, process, analyze, and transmit Your Content solely to provide the Services and maintain platform functionality.
          </p>
          <p>
            <strong>Customer Data:</strong> You represent and warrant that you have all necessary rights, consents, and legal bases to process end-customer personal data through QuotesMill and that your use complies with the DPDP Act, 2023 and platform policies.
          </p>

          <h2>5. AI-Assisted Processing Disclosures</h2>
          <p>
            <strong>How AI Works:</strong> QuotesMill uses AI models to extract requirements from text, transcribe voice notes, analyze images/drawings, populate quotation templates, suggest follow-up timing, classify lead temperature, and generate workflow recommendations. All outputs require your review and one-tap approval before customer delivery.
          </p>
          <p>
            <strong>No Training on Your Data:</strong> We do not use your business conversations, customer enquiries, or quotation data to train third-party or general-purpose AI models.
          </p>
          <p>
            <strong>Human Oversight:</strong> You remain fully responsible for commercial accuracy, pricing, tax calculations, legal terms, and final approval of all customer-facing outputs.
          </p>

          <h2>6. Service Levels & Availability</h2>
          <ul>
            <li><strong>Target Availability:</strong> We aim for 99.5% monthly uptime excluding scheduled maintenance and force majeure events.</li>
            <li><strong>Scheduled Maintenance:</strong> We may perform maintenance with advance notice via dashboard/email when feasible.</li>
            <li><strong>WhatsApp Dependencies:</strong> Service availability depends on WhatsApp platform uptime, which is beyond our control.</li>
            <li><strong>No Uptime Guarantees:</strong> Except as expressly stated in your paid subscription agreement, we do not guarantee uninterrupted access.</li>
          </ul>

          <h2>7. Payment Terms</h2>
          <ul>
            <li><strong>Pricing Plans:</strong> Free tier, trial periods, and paid subscriptions available. Current pricing displayed at signup/dashboard.</li>
            <li><strong>Billing:</strong> Monthly/annual recurring via authorized payment gateways. All fees exclude GST (applicable GST will be added).</li>
            <li><strong>Late Payments:</strong> Overdue amounts accrue 1.5% monthly interest. We may suspend services for non-payment after 15 days-notice.</li>
            <li><strong>Refunds:</strong> No refunds except as required by law or specified in subscription terms.</li>
          </ul>

          <h2>8. Third-Party Services & Limitations</h2>
          <p>
            Our services integrate with third-party platforms including the WhatsApp Platform (subject to Meta's terms and 2026 AI Policy), Payment Gateways, and Cloud Infrastructure (AWS/GCP). We are not responsible for third-party service failures, policy changes, suspensions, or data processing practices.
          </p>

          <h2>9. Prohibited Conduct</h2>
          <p>You may NOT use QuotesMill to:</p>
          <ul>
            <li>Send unsolicited commercial messages without explicit opt-in consent.</li>
            <li>Violate WhatsApp messaging policies or quality rating requirements.</li>
            <li>Process illegal, fraudulent, or harmful content.</li>
            <li>Reverse engineer, decompile, or attempt to discover source code.</li>
            <li>Use automated means to artificially inflate message volume or quality rating.</li>
            <li>Harass customers or send abusive/threatening content.</li>
            <li>Upload malware, violate IP rights, or impersonate others.</li>
          </ul>

          <h2>10. Termination & Suspension</h2>
          <p>
            <strong>By You:</strong> Cancel anytime via dashboard settings.
          </p>
          <p>
            <strong>By Us:</strong> Immediate suspension/termination for WhatsApp account suspension, quality rating drops, payment defaults, policy violations, or legal requirements.
          </p>
          <p>
            <strong>Post-Termination:</strong> Access revoked. Data export available for 30 days. Thereafter, data is deleted per our retention policy.
          </p>

          <h2>11. Intellectual Property</h2>
          <p>
            All platform software, AI models, algorithms, templates, designs, documentation, and trademarks remain the exclusive property of QuotesMill. Suggestions voluntarily provided as feedback become our property royalty-free.
          </p>

          <h2>12. Confidentiality</h2>
          <p>
            Quote templates, pricing, customer lists, and commercial terms shared through QuotesMill remain confidential between you and QuotesMill. You agree not to disclose QuotesMill's proprietary workflows, AI capabilities, or technical documentation to competitors.
          </p>

          <h2>13. Representations & Warranties</h2>
          <p>
            You warrant that your use complies with all laws and you have necessary consents for customer data processing. QuotesMill provides Services with reasonable care and skill, but otherwise provides them “as-is” without further warranties.
          </p>

          <h2>14. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
          <ul>
            <li>No liability for indirect, consequential, special, or punitive damages.</li>
            <li>Direct damages capped at 12 months' fees paid (or ₹25,000 if no payment made).</li>
            <li>No liability for lost profits, business interruption, data loss, or WhatsApp suspensions.</li>
          </ul>

          <h2>15. Indemnification</h2>
          <p>
            You agree to indemnify QuotesMill against claims arising from your violation of WhatsApp policies, customer claims regarding quotation accuracy, IP infringement from Your Content, or breach of data protection obligations.
          </p>

          <h2>16. Governing Law & Dispute Resolution</h2>
          <p>
            <strong>Governing Law:</strong> Laws of India, excluding conflict of laws principles.
          </p>
          <p>
            <strong>Jurisdiction:</strong> Courts in Gurugram, Haryana have exclusive jurisdiction.
          </p>
          <p>
            <strong>Arbitration:</strong> Disputes under ₹50 lakhs may be referred to arbitration in Gurugram under the Indian Arbitration Act.
          </p>

          <h2>17. Changes to Terms</h2>
          <p>
            We may update Terms with 30 days-notice via dashboard/email. Continued use constitutes acceptance. Critical changes (billing, termination rights) require explicit opt-in consent.
          </p>

          <h2>18. Contact Information</h2>
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 not-prose">
            <p className="font-bold text-slate-900 dark:text-white mb-2">QuotesMill Tech Solutions LLP</p>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              1st Floor, Enkya Tower, Plot No. B&B1, Vanijya Kunj, Udyog Vihar Phase-5, Opposite Cyber Hub, Gurugram-122016, Haryana, India.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              <strong>Sales/Support:</strong> +91-9958521274<br />
              <strong>Legal/Compliance:</strong> legal@quotesmill.com
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}
