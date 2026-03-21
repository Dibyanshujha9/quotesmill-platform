'use client'

import { useEffect, useState } from 'react'
import { CheckCheck } from 'lucide-react'

export function WhatsAppChat() {
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="glassmorphic rounded-2xl p-4 h-full flex flex-col overflow-hidden border border-white/20 dark:border-slate-700/50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 to-green-500 rounded-t-xl -m-4 mb-2 p-4 pb-3">
        <h3 className="text-white font-semibold text-sm">QuotesMill Support</h3>
        <p className="text-white/80 text-xs">Online</p>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto space-y-3 my-4">
        {/* Customer message */}
        <div className="flex justify-end">
          <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white rounded-2xl rounded-tr-none px-3 py-2 max-w-xs text-sm">
            <p>I need a quote for 50 units of your premium service</p>
            <div className="flex justify-end gap-1 mt-1">
              <CheckCheck size={14} className="opacity-70" />
            </div>
          </div>
        </div>

        {/* AI message */}
        <div className="flex justify-start">
          <div className="bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-2xl rounded-tl-none px-3 py-2 max-w-xs text-sm">
            <p className="font-semibold text-green-600 dark:text-green-400 text-xs mb-1">Generating Quote...</p>
            <p>✓ Service identified: Premium (Pro)</p>
            <p>✓ Quantity: 50 units</p>
            <p>✓ Total: $5,000/month</p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Quote generated in 2.3s</p>
          </div>
        </div>

        {/* AI typing indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-tl-none px-3 py-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700">
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Message..."
            className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500 border border-slate-200 dark:border-slate-700"
            disabled
          />
          <button className="text-green-500 hover:text-green-600 font-bold">
            ↓
          </button>
        </div>
      </div>
    </div>
  )
}
