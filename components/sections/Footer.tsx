'use client'

import Link from 'next/link'
import { MessageCircle, Mail, Linkedin } from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'FAQ', href: '/faq' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-blue-900 flex items-center justify-center">
                <span className="text-white font-bold text-sm">QM</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white block">QuotesMill<span className="text-xs align-super">™</span></span>
                <span className="text-xs text-green-600 dark:text-green-400 font-semibold">Quote Fast & Sell Faster</span>
              </div>
            </Link>
            {/* Social links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://wa.me/919958521274"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="mailto:contact@quotesmill.com"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://linkedin.com/company/quotesmill"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4 capitalize">
                {category === 'product' ? 'Product' : category === 'company' ? 'Company' : 'Legal'}
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="border-t border-slate-200 dark:border-slate-700 pt-8 space-y-4">
          <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <p><strong>Contact:</strong> Sales @+91-9958521274</p>
            <p><strong>Corporate Address:</strong> 1st Floor, Enkya Tower, Plot No. B&B1, Vanijya Kunj, Udyog Vihar, Phase-5, Opposite Cyber Hub, Gurugram-122016, Haryana</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 pt-4">
            <p>© 2026 QuotesMill Tech Solutions LLP. Made in India.</p>
            <p>Built exclusively for MSMEs.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
