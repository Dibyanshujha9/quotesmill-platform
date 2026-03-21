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
            Last Updated: March 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert max-w-none">
          <h2>1. Service Overview</h2>
          <p>
            <strong>Service Provider:</strong> QuotesMill Tech Solutions LLP, a company registered in India
          </p>
          <p>
            <strong>Service Description:</strong> QuotesMill is a WhatsApp-based inquiry management and quotation platform designed for small and medium manufacturers. Users can capture customer inquiries via WhatsApp, generate professional quotations, manage sales pipelines, and track payments—all within WhatsApp without requiring a separate app.
          </p>

          <h2>2. Eligibility</h2>
          <p>You agree that:</p>
          <ul>
            <li>You are at least 18 years of age or the legal age of majority in your jurisdiction</li>
            <li>You are authorized to enter into this agreement on behalf of your business</li>
            <li>You will use QuotesMill only for lawful purposes and in compliance with all applicable laws and regulations</li>
            <li>You own or have rights to all information and data you provide to QuotesMill</li>
          </ul>

          <h2>3. User Responsibilities</h2>
          <p>You are responsible for:</p>
          <ul>
            <li>Providing accurate and truthful information</li>
            <li>Maintaining the confidentiality of your WhatsApp connection and login credentials</li>
            <li>Monitoring activity on your account and notifying us of unauthorized access</li>
            <li>Using QuotesMill ethically and not for harassment, fraud, or illegal activities</li>
            <li>Ensuring your use complies with all applicable laws, including GST, tax, and labor laws</li>
          </ul>

          <h2>4. Service Availability & Maintenance</h2>
          <ul>
            <li>QuotesMill is provided on an "as-is" basis</li>
            <li>We strive for high availability but do not guarantee 100% uptime</li>
            <li>We may perform scheduled maintenance without notice</li>
            <li>We are not liable for service interruptions, delays, or data loss due to circumstances beyond our control</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            All QuotesMill software, designs, features, and documentation are owned by QuotesMill Tech Solutions LLP. You retain ownership of your business data and customer information.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            <strong>TO THE FULLEST EXTENT PERMITTED BY LAW:</strong>
          </p>
          <ul>
            <li>QuotesMill is provided "as-is" without warranties of any kind</li>
            <li>We are not liable for indirect, incidental, consequential, or punitive damages</li>
            <li>Our total liability is limited to the amount you paid for the service (if any)</li>
            <li>We are not responsible for lost revenue, lost data, business interruption, or reputational harm</li>
          </ul>

          <h2>7. Third-Party Services</h2>
          <p>
            QuotesMill relies on WhatsApp and other third-party services. We are not responsible for their availability, performance, or compliance. Check their terms of service for their policies.
          </p>

          <h2>8. Payment & Billing</h2>
          <p>
            QuotesMill may offer free, trial, or paid plans. Payment terms will be clearly communicated. By providing payment information, you authorize us to charge the specified amount.
          </p>

          <h2>9. Termination</h2>
          <p>
            Either party may terminate this agreement at any time. Upon termination:
          </p>
          <ul>
            <li>Your access to QuotesMill will be revoked</li>
            <li>You must delete or retrieve your data as per our data retention policy</li>
            <li>Payment obligations remain in effect</li>
          </ul>

          <h2>10. Prohibited Activities</h2>
          <p>You may NOT use QuotesMill to:</p>
          <ul>
            <li>Violate any laws, regulations, or third-party rights</li>
            <li>Harass, threaten, or abuse others</li>
            <li>Send spam, malware, or malicious content</li>
            <li>Reverse-engineer or attempt to hack our systems</li>
            <li>Interfere with QuotesMill's operation or security</li>
            <li>Impersonate anyone or fraudulently represent yourself</li>
          </ul>

          <h2>11. Jurisdiction & Disputes</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes will be resolved in the courts of India under Indian jurisdiction.
          </p>

          <h2>12. Amendments</h2>
          <p>
            We may update these Terms from time to time. Continued use of QuotesMill after changes constitutes acceptance of the new terms.
          </p>

          <h2>13. Contact</h2>
          <p>
            For questions or disputes, contact us at:
          </p>
          <ul>
            <li><strong>Email:</strong> contact@quotesmill.com</li>
            <li><strong>WhatsApp:</strong> +91 98765 43210</li>
            <li><strong>Company:</strong> QuotesMill Tech Solutions LLP, India</li>
          </ul>

          <p className="pt-8 border-t border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-400">
            <strong>Note:</strong> This Terms of Service is provided as a template. Before going live, we strongly recommend legal review by an Indian lawyer to ensure compliance with Indian consumer protection laws, e-commerce regulations, and industry-specific requirements.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
