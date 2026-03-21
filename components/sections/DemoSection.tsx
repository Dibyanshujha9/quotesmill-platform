'use client'

import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'

export function DemoSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4 animate-in fade-in duration-500">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white text-balance">
            Dekho Kaise Kaam Karta Hai
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Real WhatsApp chat flow: Customer inquires → QuotesMill understands → Owner sends quotation
          </p>
        </div>

        {/* Demo chat UI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Chat preview */}
          <div className="animate-in slide-in-from-left duration-500">
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
              {/* Phone header */}
              <div className="bg-white dark:bg-slate-950 px-4 py-3 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-900 dark:text-white">Rajesh Kumar</span>
                <div className="flex gap-1">
                  <span className="text-green-600">✓✓</span>
                </div>
              </div>

              {/* Chat messages */}
              <div className="p-4 space-y-4 h-96 overflow-y-auto bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
                {/* Customer message 1 */}
                <div className="flex justify-start">
                  <div className="bg-gray-300 dark:bg-slate-700 text-slate-900 dark:text-white rounded-3xl rounded-bl-none px-4 py-2 max-w-xs">
                    <p className="text-sm">
                      Hi, I need 500 pieces of MS sheet metal brackets, 2mm thickness, with M8 holes. What's the quote?
                    </p>
                  </div>
                </div>

                {/* System message - parsing */}
                <div className="flex justify-center py-2">
                  <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
                    QuotesMill processing...
                  </div>
                </div>

                {/* Owner message - auto parsed */}
                <div className="flex justify-start">
                  <div className="bg-green-100 dark:bg-green-900/30 text-slate-900 dark:text-white rounded-3xl rounded-bl-none px-4 py-2 max-w-xs border border-green-300 dark:border-green-800">
                    <div className="text-xs font-semibold text-green-700 dark:text-green-400 mb-1">PARSED AUTOMATICALLY:</div>
                    <div className="space-y-1 text-sm">
                      <p>✓ Product: MS Sheet Metal Brackets</p>
                      <p>✓ Quantity: 500 pieces</p>
                      <p>✓ Thickness: 2mm</p>
                      <p>✓ Specs: M8 holes</p>
                    </div>
                  </div>
                </div>

                {/* Customer message 2 */}
                <div className="flex justify-start">
                  <div className="bg-gray-300 dark:bg-slate-700 text-slate-900 dark:text-white rounded-3xl rounded-bl-none px-4 py-2 max-w-xs">
                    <p className="text-sm">Thanks! Need it in 2 weeks. Best price?</p>
                  </div>
                </div>

                {/* Owner message - quotation */}
                <div className="flex justify-end">
                  <div className="bg-blue-500 dark:bg-blue-600 text-white rounded-3xl rounded-br-none px-4 py-3 max-w-xs">
                    <div className="text-sm font-semibold mb-2">📄 Quotation Sent!</div>
                    <div className="bg-blue-600 dark:bg-blue-700 rounded px-2 py-1 text-xs">
                      <p>Ref: QM-2406-001</p>
                      <p>₹12,500 + GST</p>
                      <p>Delivery: 12 days</p>
                    </div>
                  </div>
                </div>

                {/* Customer message 3 */}
                <div className="flex justify-start">
                  <div className="bg-gray-300 dark:bg-slate-700 text-slate-900 dark:text-white rounded-3xl rounded-bl-none px-4 py-2 max-w-xs">
                    <p className="text-sm">Looking good! Will confirm tomorrow.</p>
                  </div>
                </div>

                {/* System follow-up */}
                <div className="flex justify-end">
                  <div className="bg-green-600 text-white rounded-3xl rounded-br-none px-4 py-2 max-w-xs">
                    <div className="text-sm">
                      <p className="font-semibold mb-1">⏰ Auto Follow-Up Set</p>
                      <p className="text-xs opacity-90">Reminder tomorrow at 10 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits list */}
          <div className="space-y-6 animate-in slide-in-from-right duration-500">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Aisa Kaise Hota Hai
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                3 simple steps to convert inquiry into quotation:
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: '1',
                  title: 'Customer WhatsApp Karta Hai',
                  desc: 'Photo, message, or voice note bheje — kuch bhi.',
                },
                {
                  step: '2',
                  title: 'AI Samajhta Hai (Automatically)',
                  desc: 'Product, quantity, material, specs sab extract hota hai. Aap edit kar sakte ho.',
                },
                {
                  step: '3',
                  title: 'Quotation 2 Minutes Mein',
                  desc: 'Professional PDF quotation with your company letterhead. WhatsApp pe send hojata hai.',
                },
                {
                  step: '4',
                  title: 'Follow-Up & Payment',
                  desc: 'Auto-reminders bheje jaye. Payment QR link attached rahe. Sab track hoga dashboard mein.',
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="p-6 border border-slate-200 dark:border-slate-700 hover:border-green-400 dark:hover:border-green-600 transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
