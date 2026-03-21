'use client'

import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'
import { MessageCircle, Mail, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    whatsapp: '',
    city: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple form submission handling
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', businessName: '', whatsapp: '', city: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="relative w-full overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 min-h-[50vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white text-balance">
              Humse Contact Karo
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Questions? Ideas? Ya sirf hello kehne ke liye? Hum sune hain!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-800 rounded-lg p-8 text-center border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <MessageCircle size={32} className="text-green-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">WhatsApp</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Fastest way to reach us. Instant response guaranteed.
              </p>
              <p className="text-green-600 font-semibold">+91 98765 43210</p>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@quotesmill.com"
              className="bg-white dark:bg-slate-800 rounded-lg p-8 text-center border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Mail size={32} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Email</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Detailed inquiry? Send us an email. We'll respond in 24 hours.
              </p>
              <p className="text-blue-600 font-semibold">contact@quotesmill.com</p>
            </a>

            {/* Phone */}
            <div className="bg-white dark:bg-slate-800 rounded-lg p-8 text-center border border-slate-200 dark:border-slate-700">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <Phone size={32} className="text-orange-600" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Business Hours</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Monday - Friday<br/>
                9 AM - 6 PM IST
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Ya Form Bharo
            </h2>
            
            {submitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
                <p className="text-green-700 dark:text-green-300 font-semibold mb-2">
                  Shukriya! Your message received.
                </p>
                <p className="text-slate-600 dark:text-slate-300">
                  Hum 24 ghante mein reply karenge.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Aapka naam"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Business ka naam"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Aapka sheher"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Apka message yahan likho..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  Bhej Do (24 Hour Response)
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
