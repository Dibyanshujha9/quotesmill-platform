'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Check, Crown } from 'lucide-react'

interface PricingCardProps {
  name: string
  description: string
  price: string
  period: string
  features: string[]
  highlighted?: boolean
  popular?: boolean
}

export function PricingCard({
  name,
  description,
  price,
  period,
  features,
  highlighted = false,
  popular = false,
}: PricingCardProps) {
  return (
    <div className={`relative group transition-transform duration-300 ${highlighted ? 'md:scale-105' : ''}`}>
      {/* Popular badge - Fixed position */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-900 border border-green-500 text-slate-900 dark:text-white text-xs font-semibold rounded-full shadow-sm">
            <Crown size={13} className="text-green-500" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      <div className={`relative rounded-2xl border transition-all duration-400 overflow-hidden ${
        highlighted
          ? 'border-green-500/50 bg-white dark:bg-slate-900/50 shadow-lg'
          : 'border-slate-200/60 dark:border-slate-700/40 bg-white/80 dark:bg-slate-900/30'
      } hover:border-green-500/70 dark:hover:border-green-500/60 group-hover:shadow-lg`}>
        
        {/* Subtle top accent line for highlighted card */}
        {highlighted && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-60" />
        )}

        {/* Content */}
        <div className="relative p-8 sm:p-9 space-y-6">
          {/* Header */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-2">{name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
          </div>

          {/* Price section */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl sm:text-5xl font-bold text-slate-900 dark:text-white">${price}</span>
              <span className="text-slate-500 dark:text-slate-400 text-sm">/{period}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              {price === '0' ? 'Forever free • No credit card required' : 'Billed monthly • 14-day free trial'}
            </p>
          </div>

          {/* CTA Button */}
          <Button
            className={`w-full py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
              highlighted
                ? 'bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {price === '0' ? 'Start Free' : 'Get Started'}
          </Button>

          {/* Divider */}
          <div className="h-px bg-slate-200 dark:bg-slate-700/50" />

          {/* Features list */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className={`w-4 h-4 flex-shrink-0 mt-1 ${highlighted ? 'text-green-500' : 'text-slate-400 dark:text-slate-500'}`} />
                <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
