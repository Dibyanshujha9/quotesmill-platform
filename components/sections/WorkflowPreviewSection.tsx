'use client'

import { Card } from '@/components/ui/card'
import { MessageCircle, Brain, FileText, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: MessageCircle,
    title: 'Inquiry Aati Hai',
    description: 'Customer WhatsApp par photo, message ya voice note bhejta hai.',
    color: 'from-green-400 to-green-600',
  },
  {
    number: 2,
    icon: Brain,
    title: 'AI Samajhta Hai',
    description: 'Automatically product, quantity, material, specs extract hota hai.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    number: 3,
    icon: FileText,
    title: 'Quotation Bhejo',
    description: 'Professional PDF with your letterhead. 2 minutes mein ready.',
    color: 'from-orange-400 to-orange-600',
  },
  {
    number: 4,
    icon: CheckCircle,
    title: 'Follow-Up & Payment',
    description: 'Auto reminders, payment QR link. Sab WhatsApp mein track hoga.',
    color: 'from-purple-400 to-purple-600',
  },
]

export function WorkflowPreviewSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-500">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white text-balance">
            Kaise Kaam Karta Hai?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            4 simple steps se inquiry se payment tak — sirf WhatsApp mein.
          </p>
        </div>

        {/* Steps grid with connecting lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative animate-in slide-up duration-500" style={{ animationDelay: `${index * 100}ms` }}>
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-3 w-6 h-1 bg-gradient-to-r from-slate-300 dark:from-slate-700 to-transparent" />
                )}

                {/* Card */}
                <Card className="p-6 h-full border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all hover:border-slate-300 dark:hover:border-slate-600">
                  {/* Number circle */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg w-fit">
                    <Icon className="w-6 h-6 text-slate-700 dark:text-slate-200" />
                  </div>

                  {/* Title and description */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-lg mx-auto">
            Yeh workflow perfect hai kisi bhi manufacturer yaa job-works (irrespective of their specific manufacturing categories) klye. Jinka business mostly WhatsApp se chalta hai ya migrate krna chahte hain yaa jinhein lead capture krke apni sales cycle choti krni hai quick quotation and follow-ups krke with minimum manual efforts.
          </p>
        </div>
      </div>
    </section>
  )
}
