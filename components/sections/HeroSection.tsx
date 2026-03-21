'use client'

import { Button } from '@/components/ui/button'
import { WhatsAppChat } from '@/components/ui/WhatsAppChat'
import { ArrowRight, MessageCircle } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-950">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/20 dark:bg-green-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-orange-100/10 dark:bg-orange-900/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Headlines and CTAs */}
          <div className="space-y-6 animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800/50">
              <MessageCircle size={16} className="text-green-600 dark:text-green-400" />
              <span className="text-sm font-medium text-green-700 dark:text-green-300">Built exclusively for MSMEs</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-balance leading-tight text-slate-900 dark:text-white">
              QuotesMill<span className="text-lg align-super">™</span>
            </h1>
            
            <p className="text-2xl sm:text-3xl font-semibold text-green-600 dark:text-green-400 text-balance">
              Quote Fast & Sell Faster
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 text-balance leading-relaxed max-w-lg">
              Text & Voice supported with Hindi + English + 10 other regional languages
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#early-access"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-8 py-4 transition-colors group"
              >
                Get Early Access
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/919958521274?text=Hi%20QuotesMill%2C%20I%27d%20like%20to%20know%20more%20about%20early%20access"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="rounded-full px-8 py-4 text-lg font-semibold border-2 border-slate-300 dark:border-slate-600 hover:border-slate-400 dark:hover:border-slate-500">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded-full" />
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Built for MSMEs</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded-full" />
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">WhatsApp-First</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded-full" />
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">Multi-language Support</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded-full" />
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">No App Required</p>
              </div>
            </div>
          </div>

          {/* Right side - Chat UI */}
          <div className="animate-in slide-in-from-right duration-700 delay-200">
            <div className="h-[500px] lg:h-[600px]">
              <WhatsAppChat />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
