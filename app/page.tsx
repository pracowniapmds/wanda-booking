import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { HitsSection } from "@/components/hits-section"
import { VideoSection } from "@/components/video-section"
import { OfferSection } from "@/components/offer-section"
import { PressSection } from "@/components/press-section"
import { ContactSection } from "@/components/contact-section"
import { FooterSection } from "@/components/footer-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <div className="relative">
        {/* Fixed parallax background */}
        <div
          className="fixed inset-0 z-0 opacity-30"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/colage2-iL3uiqDL5ghPIcbBT3o4MqIG5fhcrg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            top: "100vh",
          }}
        />
        <div className="fixed inset-0 z-0 bg-black/60" style={{ top: "100vh" }} />

        <div className="relative z-10">
          <AboutSection />
          <HitsSection />
          <OfferSection />
          <VideoSection />
          <PressSection />
          <ContactSection />
          <FooterSection />
        </div>
      </div>
    </div>
  )
}
