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
            Last Updated: March 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert max-w-none">
          <h2>1. Overview</h2>
          <p>
            QuotesMill is a product of QuotesMill Tech Solutions LLP, a company registered in India. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect the following types of information:</p>
          <ul>
            <li><strong>Personal Information:</strong> Name, business name, WhatsApp number, email, city, and any business details you provide</li>
            <li><strong>Enquiry Data:</strong> Customer inquiries, specifications, materials, quantities, drawings, photos, and voice notes shared via WhatsApp</li>
            <li><strong>Quotation Data:</strong> Quotations generated, pricing, GST, terms, customer details, and validity periods</li>
            <li><strong>Usage Data:</strong> How you use QuotesMill—which features, how often, when, and from where</li>
            <li><strong>Device Data:</strong> Device type, browser, IP address, and approximate location (for analytics only)</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Provide and maintain QuotesMill service</li>
            <li>Generate quotations and manage inquiries</li>
            <li>Send follow-up reminders and payment notifications via WhatsApp</li>
            <li>Improve, optimize, and debug our service</li>
            <li>Respond to customer support queries</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>4. Data Sharing & Third Parties</h2>
          <p>
            <strong>We do NOT sell or share your data with third parties.</strong> Your business data, customer inquiries, and quotation information are completely private and used only to provide QuotesMill service.
          </p>
          <p>
            We may share data only when required by law (e.g., court order, legal compliance with India jurisdiction).
          </p>

          <h2>5. Data Storage & Security</h2>
          <ul>
            <li>Data is stored on <strong>India-based secure servers</strong></li>
            <li>All sensitive data is <strong>encrypted in transit and at rest</strong></li>
            <li>We follow industry-standard security practices (HTTPS, secure authentication, regular backups)</li>
            <li>Access to data is restricted to authorized personnel only</li>
          </ul>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request deletion of your data (with exceptions for legal obligations)</li>
            <li>Update or correct inaccurate information</li>
            <li>Opt-out of promotional communications</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at <strong>contact@quotesmill.com</strong>.
          </p>

          <h2>7. Cookies & Analytics</h2>
          <p>
            We use basic analytics tools to understand how users interact with our service. No personal data is shared with analytics providers.
          </p>

          <h2>8. WhatsApp Data</h2>
          <p>
            Inquiries and quotations are sent via WhatsApp. Your WhatsApp number is used only to deliver our service. We do NOT spam or misuse your contact.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            QuotesMill is designed for business owners and manufacturers. We do not knowingly collect data from individuals under 18 years of age.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Significant changes will be communicated via email or notification through QuotesMill.
          </p>

          <h2>11. Jurisdiction</h2>
          <p>
            This Privacy Policy is governed by the laws of India. Any disputes will be resolved under Indian jurisdiction.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, contact us at:
          </p>
          <ul>
            <li><strong>Phone:</strong> Sales @+91-9958521274</li>
            <li><strong>Corporate Address:</strong> 1st Floor, Enkya Tower, Plot No. B&B1, Vanijya Kunj, Udyog Vihar, Phase-5, Opposite Cyber Hub, Gurugram-122016, Haryana</li>
            <li><strong>Company:</strong> QuotesMill Tech Solutions LLP, India</li>
          </ul>

          <p className="pt-8 border-t border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-400">
            <strong>Note:</strong> This Privacy Policy is provided as-is. Before going live, we recommend legal review to ensure compliance with India's personal data protection laws and regulations.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
