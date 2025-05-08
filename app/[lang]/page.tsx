import { getDictionary } from "@/lib/dictionary"
import type { Locale } from "@/lib/types"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import VideoSection from "@/components/video-section"
import ProjectsSection from "@/components/projects-section"
import ImpactSection from "@/components/impact-section"
import ConferenceSection from "@/components/conference-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale }
}) {
  // Récupérer le dictionnaire pour la langue actuelle
  const dict = await getDictionary(lang)

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar lang={lang} dict={dict} />
      <HeroSection dict={dict} lang={lang} />
      <AboutSection dict={dict} />
      <VideoSection dict={dict} />
      <ProjectsSection dict={dict} />
      <ImpactSection dict={dict} />
      <ConferenceSection dict={dict} lang={lang} />
      <ContactSection dict={dict} />
      <Footer dict={dict} lang={lang} />
    </main>
  )
}
