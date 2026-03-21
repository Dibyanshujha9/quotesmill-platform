'use client'

import { Card } from '@/components/ui/card'
import { Wrench, Cog, Boxes } from 'lucide-react'

const useCases = [
  {
    icon: Wrench,
    title: 'Job-Work Shop',
    description: 'Fabrication units jinka business mostly WhatsApp se chalta hai. Daily inquiries ko handle karna aasaan ho gaya with instant quotation generation.',
    highlights: [
      'Inquiry capture from WhatsApp',
      'Quick quotation generation',
      'Lead conversion tracking',
    ],
  },
  {
    icon: Cog,
    title: 'Manufacturing Units',
    description: 'Manufacturers jo apne sales cycle ko shorter karna chahte hain aur lead capture improve karna chahte hain. QuotesMill har inquiry ko automatically samajhta hai.',
    highlights: [
      'Rapid inquiry processing',
      'Automated quotation sharing',
      'Follow-up management',
    ],
  },
  {
    icon: Boxes,
    title: 'Custom & Specialty Manufacturing',
    description: 'Businesses jo different designs aur specifications handle karti hain. Multi-modal aur vernacular support ke saath quick response dekh sakte hain.',
    highlights: [
      'Multi-language support',
      'Voice & text inquiry handling',
      'Dashboard analytics',
    ],
  },
]

export function UseCaseSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-500">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white text-balance">
            Kaunse Manufacturers Use Kar Sakte Hain
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Yeh workflow perfect hai kisi bhi manufacturer yaa job-works (irrespective of their specific manufacturing categories) klye. Jinka business mostly WhatsApp se chalta hai ya migrate krna chahte hain yaa jinhein lead capture krke apni sales cycle choti krni hai.
          </p>
        </div>

        {/* Use case cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className="group animate-in slide-up duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 cursor-default">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {useCase.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>

                  <div className="space-y-3 border-t border-slate-200 dark:border-slate-700 pt-6">
                    {useCase.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0" />
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
