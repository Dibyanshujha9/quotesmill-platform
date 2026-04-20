'use client'

import { MessageCircle, Brain, FileText, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    title: 'Customer Message',
    description: 'Customer sends requirements via WhatsApp',
  },
  {
    icon: Brain,
    title: 'AI Understands',
    description: 'AI analyzes intent and requirements',
  },
  {
    icon: FileText,
    title: 'Quote Generated',
    description: 'Accurate quote created automatically',
  },
  {
    icon: CheckCircle2,
    title: 'Deal Closed',
    description: 'Customer accepts and deal is complete',
  },
]

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-slate-50 dark:via-slate-900/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-500">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white text-balance">
            Streamlined Workflow
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            From customer enquiry to deal closure in minutes, not hours.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-2 lg:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative animate-in slide-up duration-500" style={{ animationDelay: `${index * 100}ms` }}>
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-14 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-400 to-transparent" />
              )}

              <div className="relative">
                {/* Icon circle */}
                <div className="mb-6 relative">
                  <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-indigo-900 to-green-500 p-0.5 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300">
                    <div className="w-full h-full bg-white dark:bg-slate-900 rounded-full flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-slate-900 dark:text-white" />
                    </div>
                  </div>

                  {/* Number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm border-2 border-white dark:border-slate-900">
                    {index + 1}
                  </div>
                </div>

                {/* Text content */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
