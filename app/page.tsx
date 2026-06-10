import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/sections/hero"
import { TrustBar } from "@/components/sections/trust-bar"
import { BeforeAfter } from "@/components/sections/before-after"
import { HowItWorks } from "@/components/sections/how-it-works"
import { TreatmentFeatures } from "@/components/sections/treatment-features"
import { Pricing } from "@/components/sections/pricing"
import { SocialProof } from "@/components/sections/social-proof"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"
import { MobileCtaBar } from "@/components/mobile-cta-bar"
import { Footer } from "@/components/footer"
export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <BeforeAfter />
        <HowItWorks />
        <TreatmentFeatures />
        <Pricing />
        <SocialProof />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  )
}
