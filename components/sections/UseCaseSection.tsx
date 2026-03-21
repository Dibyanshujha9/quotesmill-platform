'use client'

import { Card } from '@/components/ui/card'
import { Wrench, Cog, Boxes } from 'lucide-react'

const useCases = [
  {
    icon: Wrench,
    title: 'Job-Work Shop',
    description: 'Small fabrication units jinhone daily 20-30 inquiries aati hain. Quotation manual banate the, ab 2 minutes mein aajata hai.',
    highlights: [
      'Daily 20-30 inquiries',
      '₹50L–2Cr annual revenue',
      'Materials vary per job',
    ],
  },
  {
    icon: Cog,
    title: 'Auto Ancillary Manufacturer',
    description: 'Medium-sized manufacturers jo automotive companies ke liye parts banate hain. Bulk orders ko track karna aasaan ho gaya.',
    highlights: [
      'Bulk inquiry handling',
      '₹1Cr–5Cr annual revenue',
      'Complex materials & specs',
    ],
  },
  {
    icon: Boxes,
    title: 'Plastic Parts Manufacturer',
    description: 'Plastic injection molding plants joko different designs aur quantities banani padti hain. QuotesMill har inquiry ko samajhta hai.',
    highlights: [
      'Multiple design variants',
      '₹2Cr–10Cr annual revenue',
      'Rapid follow-up required',
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
            Banaya Gaya Manufacturers Jaisa Aap Ke Liye
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            See how manufacturers like you are using QuotesMill to manage inquiries and grow their business.
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
