import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import VideoSection from "@/components/video-section"
import ProjectsSection from "@/components/projects-section"
import ImpactSection from "@/components/impact-section"
import ConferenceSection from "@/components/conference-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <ProjectsSection />
      <ImpactSection />
      <ConferenceSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
