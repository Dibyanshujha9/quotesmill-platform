import { Navigation } from '@/components/sections/Navigation'
import { FeaturesSection } from '@/components/sections/FeaturesSection'
import { Footer } from '@/components/sections/Footer'

export default function FeaturesPage() {
  return (
    <main className="relative w-full overflow-x-hidden min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      <Navigation />
      <div className="flex-grow pt-16">
        <FeaturesSection />
      </div>
      <Footer />
    </main>
  )
}
