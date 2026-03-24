import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'
import { CheckCircle, MessageCircle, FileText, TrendingUp } from 'lucide-react'

export default function HowItWorks() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 mt-16 bg-white dark:bg-slate-950 min-h-[50vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white text-balance">
              Kaise Kaam Karta Hai QuotesMill?
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              WhatsApp pe inquiry se leke payment tak — step by step samajhiye
            </p>
          </div>
        </div>
      </section>

      {/* Step 1: Inquiry Capture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                    <MessageCircle size={24} />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  A. Inquiry Capture
                </h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Customer ne WhatsApp pe inquiry bhej di? Koi baat nahi. QuotesMill sab format samjhta hai:
              </p>
              <ul className="space-y-3">
                {['Text (Hindi/English/Hinglish)', 'Photos & drawings', 'Voice notes', 'IndiaMART/TradeIndia messages (forwarded)'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3 max-w-xs text-sm">
                    Bhai, 500 pcs CNC turned component chahiye, material SS304, drawing attach kar raha hu
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-lg p-3 max-w-xs text-sm">
                    ✅ Inquiry received! Processing your request...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2: Smart Parsing */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:order-2">
            <div className="space-y-6 md:order-1">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <TrendingUp size={24} />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  B. Smart Parsing
                </h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Messy WhatsApp message ko clean structured data mein convert karta hai:
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <div className="font-mono text-sm space-y-2">
                  <p><span className="font-bold">Item:</span> CNC Turned Component</p>
                  <p><span className="font-bold">Qty:</span> 500 pcs</p>
                  <p><span className="font-bold">Material:</span> SS304</p>
                  <p><span className="font-bold">Drawing:</span> Captured</p>
                  <p><span className="font-bold">Customer:</span> Auto OEM Client</p>
                </div>
              </div>
            </div>
            <div className="md:order-2"></div>
          </div>
        </div>
      </section>

      {/* Step 3: Quotation Generation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">
                    <FileText size={24} />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  C. Quotation Generation
                </h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Professional quotation banao sirf 1-2 minutes mein. Quotation mein automatically include hota hai:
              </p>
              <ul className="space-y-3">
                {['Company name & logo', 'Customer details', 'Item-wise pricing', 'GST calculation', 'Terms & conditions', 'Validity period (15/30 days)'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-lg">
              <div className="space-y-3 text-sm">
                <p className="font-bold text-slate-900 dark:text-white border-b pb-3">QUOTATION</p>
                <p><span className="font-bold">To:</span> Auto OEM Client</p>
                <p><span className="font-bold">Item:</span> CNC Turned Component</p>
                <p><span className="font-bold">Qty:</span> 500 pcs @ ₹45/pc = ₹22,500</p>
                <p><span className="font-bold">GST (18%):</span> ₹4,050</p>
                <p className="font-bold border-t pt-3">Total: ₹26,550</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4: Pipeline Tracking */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                  <TrendingUp size={24} />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                D. Pipeline Tracking
              </h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
              Har inquiry ka status track karo—kaunsi quoted hai, kaunsi won, kaunsi lost:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: 'Inquiry', value: '24' },
              { label: 'Quoted', value: '18' },
              { label: 'Won', value: '12' },
              { label: 'Paid', value: '10' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 text-center border border-slate-200 dark:border-slate-700">
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step 5: Follow-Up & Payment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                  <CheckCircle size={24} />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                E. Follow-Up & Payment Reminders
              </h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
              Quotation bhej diya? QuotesMill automatic follow-up reminders bhejta hai:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3">Pending Quotations</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Day 3 pe: "Aapke quotation ke baare mein decision ho gaya?"</p>
                <p className="text-slate-600 dark:text-slate-300">Day 7 pe: Second follow-up</p>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3">Won Orders - Payment Due</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">Order accepted ke baad: "Payment ke liye UPI link" with QR code</p>
                <p className="text-slate-600 dark:text-slate-300">Automatic payment tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-green-700 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">
            Sabse Pehle Access Paao
          </h2>
          <p className="text-xl opacity-90">
            QuotesMill jaldi launch ho raha hai. Early access ke liye register karo aur sabse pehle apne business mein istemal karo.
          </p>
          <a
            href="https://wa.me/919958521274?text=Hi%20QuotesMill%2C%20I%27d%20like%20to%20know%20more%20about%20early%20access"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-700 font-bold py-3 px-8 rounded-full hover:bg-slate-100 transition-colors"
          >
            Get Early Access on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
