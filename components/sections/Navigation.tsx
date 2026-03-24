'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, MessageCircle } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-900 flex items-center justify-center">
              <span className="text-white font-bold text-sm">QM</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <div className="flex items-baseline gap-0">
                <span className="font-bold text-slate-900 dark:text-white">QuotesMill</span>
                <span className="text-xs font-bold text-slate-900 dark:text-white ml-0.5">TM</span>
              </div>
              <span className="text-xs font-semibold text-green-600 dark:text-green-400 leading-tight">Quote Fast & Sell Faster</span>
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/how-it-works" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="/faq" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              FAQs
            </Link>
            <Link href="/contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/919958521274?text=Hi%20QuotesMill%2C%20I%27d%20like%20to%20know%20more%20about%20early%20access"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
            >
              <MessageCircle size={18} />
              Talk on WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-in slide-in-from-top-2 duration-300">
            <Link href="/" className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              Home
            </Link>
            <Link href="/about" className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              About Us
            </Link>
            <Link href="/how-it-works" className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              How It Works
            </Link>
            <Link href="/faq" className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              FAQs
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
              Contact
            </Link>
            <div className="flex gap-2 px-4 pt-2">
              <a
                href="https://wa.me/919958521274?text=Hi%20QuotesMill%2C%20I%27d%20like%20to%20know%20more%20about%20early%20access"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded-lg transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
