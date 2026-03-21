import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'
import { CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950 min-h-[50vh] flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white text-balance">
              QuotesMill Ka Kahani
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Bharat ke chhote manufacturers ke liye, WhatsApp-first quotation solution
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Humara Story
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              India mein 6 crore+ chhote manufacturing businesses hain—CNC shops, auto ancillaries, plastic parts makers, sheet metal workers. Un sabke paas ek common problem hai:
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-semibold mb-6 border-l-4 border-orange-500 pl-4">
              "WhatsApp pe inquiries aati hain, lekin quotation banana padta hai manually. Phone pe bajti hai, customer chala jata hai, payment hota nahi."
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Hum yeh problem solve karne aa gaye. QuotesMill sirf WhatsApp pe kaam karta hai—koi app download nahi, koi complicated setup nahi. Bas connect karo aur shuru karo.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Build For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Hum Kiske Liye Banate Hain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'CNC & VMC Job-Work Shops',
                desc: 'Jinhein har din 10-20 inquiries aati hain, manual quotation se time waste hota hai',
              },
              {
                title: 'Auto Ancillary Manufacturers',
                desc: 'OEM clients ko raat ko drawing aati hai, morning tak quote chahiye hota hai',
              },
              {
                title: 'Plastic Parts Makers',
                desc: 'High-volume inquiries, har customer track karna padta hai, follow-up time lagta hai',
              },
              {
                title: 'Sheet Metal & Fabrication',
                desc: 'Quote validity, pricing changes, customer follow-up—sab WhatsApp mein karo',
              },
            ].map((segment, idx) => (
              <div key={idx} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{segment.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{segment.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
            <p className="text-slate-700 dark:text-slate-300">
              <span className="font-bold text-slate-900 dark:text-white">₹1 Cr – ₹5 Cr</span> annual revenue wale small-mid manufacturers jinhein profit maximize karna hai aur wasted admin time reduce karna hai.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Hamara Tarika
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'WhatsApp-First',
                desc: 'Apne ghar/office se kaam karte ho, apne phone pe jo app use karte ho—wahi use karo',
              },
              {
                title: 'Vernacular (Hindi/Hinglish/English)',
                desc: 'Factory owner ko English samajh mein nahi aata? Hinglish mein kaam karo. Simple language.',
              },
              {
                title: 'India-Native',
                desc: 'GST, UPI, Indian accounting. US SaaS features tumhare liye koi use nahi hain.',
              },
              {
                title: 'Simple',
                desc: 'Koi API docs nahi, koi integrations nahi. Ek click aur shuru. Bus itna hi.',
              },
              {
                title: 'Privacy-First',
                desc: 'Apka data apka business. Kisi ko sell nahi karenge, kisi ko share nahi karenge.',
              },
              {
                title: 'India-Based',
                desc: 'Customer support Hindi mein, servers India mein, jurisdiction India mein.',
              },
            ].map((approach, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0" />
                  {approach.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">{approach.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
            Company Information
          </h2>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700 space-y-4 text-center">
            <p><span className="font-bold text-slate-900 dark:text-white">Company Name:</span> QuotesMill Tech Solutions LLP</p>
            <p><span className="font-bold text-slate-900 dark:text-white">Jurisdiction:</span> India</p>
            <p><span className="font-bold text-slate-900 dark:text-white">Status:</span> Building in public, beta launching soon</p>
            <p><span className="font-bold text-slate-900 dark:text-white">Contact:</span> contact@quotesmill.com</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-green-700 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">
            Samjh Aaya Kahani? Ab Shuru Karte Hain
          </h2>
          <p className="text-xl opacity-90">
            Early access ke liye aaj hi register karo aur sabse pehle QuotesMill use karo.
          </p>
          <a
            href="https://wa.me/919876543210?text=Hi%20QuotesMill%2C%20I%27d%20like%20to%20know%20more%20about%20early%20access"
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
