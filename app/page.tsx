import { Navigation } from '@/components/sections/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { WorkflowPreviewSection } from '@/components/sections/WorkflowPreviewSection'
import { DemoSection } from '@/components/sections/DemoSection'
import { UseCaseSection } from '@/components/sections/UseCaseSection'
import { EarlyAccessSection } from '@/components/sections/EarlyAccessSection'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <WorkflowPreviewSection />
      <DemoSection />
      <UseCaseSection />
      <EarlyAccessSection />
      <Footer />

      {/* Floating WhatsApp CTA - sticky on mobile */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <a
          href="https://wa.me/919876543210?text=Hi%20QuotesMill%2C%20I%27d%20like%20to%20know%20more%20about%20early%20access"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-full shadow-2xl transition-all hover:shadow-green-500/50"
        >
          Get Early Access on WhatsApp
        </a>
      </div>
    </main>
  )
}
