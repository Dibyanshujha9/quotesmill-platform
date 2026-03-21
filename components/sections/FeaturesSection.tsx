'use client'

import { FeatureCard } from '@/components/ui/FeatureCard'
import { MessageCircle, FileText, Bell, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Se Inquiry Capture',
    description: 'Customer ne WhatsApp pe photo, voice note ya text bheja? QuotesMill automatically samajhta hai kya chahiye.',
    gradient: 'from-green-400 to-green-600',
  },
  {
    icon: FileText,
    title: 'Intelligent Quotation Sharing',
    description: 'Professional PDF quotation banao aur seedha WhatsApp pe bhejo — apni company letterhead ke saath.',
    gradient: 'from-blue-400 to-blue-600',
  },
  {
    icon: Bell,
    title: 'Follow-Up & Payment Reminders',
    description: 'Kaunsa customer follow-up maang raha hai? QuotesMill yaad rakhta hai aur WhatsApp pe reminder bhejta hai — payment QR link ke saath.',
    gradient: 'from-orange-400 to-orange-600',
  },
  {
    icon: BarChart3,
    title: 'Simple Dashboard PWA',
    description: 'Apne phone pe dekho — kitni inquiries aayi, kitni quotations bheji, kitna payment aaya. Koi app download nahi.',
    gradient: 'from-purple-400 to-purple-600',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-500">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white text-balance">
            Kya Features Milenge?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Simple, powerful features designed for small manufacturers and job-work shops.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-in slide-up duration-500" style={{ animationDelay: `${index * 100}ms` }}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
