import { Navigation } from '@/components/sections/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
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
      <WorkflowPreviewSection />
      <DemoSection />
      <UseCaseSection />
      <EarlyAccessSection />
      <Footer />


    </main>
  )
}
