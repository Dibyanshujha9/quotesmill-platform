'use client'

import { FeatureCard } from '@/components/ui/FeatureCard'
import { MessageCircle, FileText, Bell, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: MessageCircle,
    title: 'Chatbot Quotation share karta Hai',
    description: 'Customer ne WhatsApp pe apni requirements share kiya? Multi-modal and Vernacular QuotesMill ne automatically uss information ko capture, understand, acknowledge and process kiya !!!',
    colorTheme: 'green',
  },
  {
    icon: FileText,
    title: 'Professional PDF with your approval and letterhead, sirf 2 mins me ready and shared with your leads on one-tap',
    description: 'Quotesmill apke kiye gaye approved quotation format ko use karke ek professional PDF quotation bannakr seedha apke customers ko share krta hai within mins (post your approval)',
    colorTheme: 'blue',
  },
  {
    icon: Bell,
    title: 'Auto reminders of payments, necessary follow-ups and payment QR & UPI ID sab WhatsApp pe share hota hai and apke dashboard pe track',
    description: 'Kab aur kaunse customers ko kitni baar follow-up krna hai and kis chiz pe follow-up krna hai? Whether to know about their decision to place order or not? Or, advance ya outstanding payment reminders. Aur toh aur payment ka QR link generate karke apke upi id ke saath customer ko share krta hai, jisse payment seedha apke registered bank account mein apko receive hoti hai !!!',
    colorTheme: 'orange',
  },
  {
    icon: BarChart3,
    title: 'Dashboard Analytics & Insights',
    description: 'Only with a click on a link apko apke dashboard ka access milta hai, apne mobile browser pe dekho — kitni inquiries aayi?, kitne leads convert hue sales mein?, kitne current mein hot leads hain ya cold leads hain?, kitne payment defaulters hain, kitna aur kab kab payments apko receive hue?, daily, weekly and monthly kitne quotations share kiye gaye, quotes logs, history, etc., aur bhi bahut kuch, bagair koi bhi app download kiye.',
    colorTheme: 'purple',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-500">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white text-balance">
            Features
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Yeh workflow perfect hai kisi bhi manufacturer yaa job-works (irrespective of their specific manufacturing categories) klye. Jinka business mostly WhatsApp se chalta hai ya migrate krna chahte hain yaa jinhein lead capture krke apni sales cycle choti krni hai quick quotation and follow-ups krke with minimum manual efforts.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div key={index} className="animate-in slide-up duration-500" style={{ animationDelay: `${index * 100}ms` }}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                colorTheme={feature.colorTheme}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
