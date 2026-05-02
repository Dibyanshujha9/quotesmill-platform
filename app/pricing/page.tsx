import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'
import { Clock } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  return (
    <main className="relative w-full overflow-x-hidden min-h-screen flex flex-col">
      <Navigation />

      {/* Content Section */}
      <section className="flex-1 flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-50 dark:bg-blue-900/20 mb-8 animate-in zoom-in duration-700">
            <Clock className="text-blue-600 dark:text-blue-400 w-10 h-10" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight uppercase animate-in fade-in slide-in-from-bottom-4 duration-700">
            THE PRICING WILL BE PUBLISHED SOON <br className="hidden sm:block" />
            <span className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl md:text-4xl block mt-4 font-semibold italic">
              w.r.t THE MENTIONED GUIDELINES OF QUOTESMILL <Link href="/terms-of-service" className="underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-pointer">'terms of service'</Link>
            </span>
          </h1>

          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full mb-12 animate-in slide-in-from-left duration-1000" />

          <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed animate-in fade-in duration-1000 delay-300">
            We are currently refining our subscription models to ensure the best value for Indian MSMEs. Stay tuned for updates!
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
