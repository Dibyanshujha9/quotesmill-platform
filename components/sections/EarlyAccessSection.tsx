'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CheckCircle2, Zap } from 'lucide-react'

export function EarlyAccessSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    designation: '',
    mobileNumber: '',
    ownerName: '',
    businessName: '',
    whatsappNumber: '',
    city: '',
    businessType: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      businessType: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const businessTypes = [
    'Job-Work Shop',
    'Auto Ancillary',
    'Plastic Parts',
    'Sheet Metal',
    'CNC/Machining',
    'Other Manufacturing',
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/10 dark:to-green-900/10">
      <div className="max-w-2xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 space-y-4 animate-in fade-in duration-500" id="early-access">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full border border-green-300 dark:border-green-800">
            <Zap size={16} className="text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              Limited Early Access Available
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white text-balance">
            Sabse Phele Access Paao
          </h2>
          
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
            Subscribe Kijiye !!!
          </h3>

          <p className="text-lg text-slate-600 dark:text-slate-300">
            Aap pehle 24 manufacturers mein se ek ban sakte ho jo QuotesMill use kar rahe hain. Aaj hi register karo.
          </p>
        </div>

        {/* Form card */}
        <Card className="p-8 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-lg animate-in slide-up duration-500">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Your Full Name
                </label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Rajesh Kumar"
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Designation */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Your Designation in the company/business
                </label>
                <Input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Owner, Director, Manager"
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Your Mobile No.
                </label>
                <Input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Company Owner Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Company/Business Owner's Full Name
                </label>
                <Input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  placeholder="Company Owner Name"
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Business Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Company's or Business Name
                </label>
                <Input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Sharma Job Works Pvt Ltd"
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  WhatsApp Number with country code
                </label>
                <Input
                  type="tel"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  City
                </label>
                <Input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Mumbai, Delhi, Bangalore"
                  required
                  className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                  Type of Business
                </label>
                <Select value={formData.businessType} onValueChange={handleSelectChange}>
                  <SelectTrigger className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg">
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors"
              >
                Get Early access Now
              </Button>

              <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                Hum aapko WhatsApp pe contact karenge aur onboard karne mein madad denge.
              </p>
            </form>
          ) : (
            <div className="text-center space-y-6 py-12">
              <div className="flex justify-center">
                <CheckCircle2 className="w-16 h-16 text-green-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Dhanyavaad!
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Aapka request receive hua. Hum aapko 24 hours mein WhatsApp pe contact karenge.
                </p>
              </div>
              <div className="pt-4">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Jab tak hum aapko message nahi karte, aap yeh dekh sakte ho:
                </p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-green-600 dark:text-green-400 hover:underline font-medium"
                >
                  WhatsApp par humse connect karo →
                </a>
              </div>
            </div>
          )}
        </Card>

        {/* Trust badges */}
        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
          <div className="space-y-2">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">24+</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Early Access Users</p>
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">Immediate</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Onboarding Assistance</p>
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-bold text-slate-900 dark:text-white">₹0</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">Setup Cost</p>
          </div>
        </div>
      </div>
    </section>
  )
}
