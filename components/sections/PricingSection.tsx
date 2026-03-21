'use client'

import { PricingCard } from '@/components/ui/PricingCard'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small teams',
    price: '0',
    period: 'month',
    popular: false,
    features: [
      'Up to 50 quotes/month',
      '24-hour support',
      'Basic analytics',
      'WhatsApp integration',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    description: 'For scaling businesses',
    price: '299',
    period: 'month',
    popular: true,
    highlighted: true,
    features: [
      'Unlimited quotes',
      '1-hour response support',
      'Advanced analytics',
      'WhatsApp + Email + Chat',
      'API access',
      'Priority support',
      'Custom integrations',
      'Team management (up to 10)',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: '999',
    period: 'month',
    popular: false,
    features: [
      'Everything in Growth',
      'Dedicated account manager',
      '24/7 phone support',
      'Multi-team management',
      'Custom workflows',
      'White-label solution',
      'SLA guarantee',
      'Advanced security features',
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20 space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-green-600 dark:text-green-400 bg-green-500/10 dark:bg-green-500/20 rounded-full">
            PRICING
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white text-balance">
            Pricing
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Choose the plan that fits your business. All plans include 14-day free trial.
          </p>
        </div>

        {/* Pricing cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-6">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              period={plan.period}
              features={plan.features}
              highlighted={plan.highlighted}
              popular={plan.popular}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-600 dark:text-slate-400">
            Need something custom? <a href="#" className="text-green-600 dark:text-green-400 font-semibold hover:underline">Get in touch with our team</a>
          </p>
        </div>
      </div>
    </section>
  )
}
