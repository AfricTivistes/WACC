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

// Fonction pour générer les métadonnées dynamiquement
export async function generateMetadata({ 
  params 
}: { 
  params: { lang: string } 
}) {
  return {
    title: "AfricTivistes | Transformer la gouvernance par la technologie",
    description:
      "AfricTivistes est un réseau panafricain qui promeut une Afrique démocratique, inclusive et souveraine à l'ère du numérique.",
  }
}

// Fonction pour générer les paramètres statiques
export async function generateStaticParams() {
  return [
    { lang: "fr" },
    { lang: "en" }
  ]
}

export default async function Home({
  params,
}: {
  params: { lang: string }
}) {
  // Convertir le paramètre en Locale et récupérer le dictionnaire
  const locale = (params?.lang || "fr") as Locale
  const dict = await getDictionary(locale)

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar lang={locale} dict={dict} />
      <HeroSection dict={dict} lang={locale} />
      <AboutSection dict={dict} />
      <VideoSection dict={dict} />
      <ProjectsSection dict={dict} />
      <ImpactSection dict={dict} />
      <ConferenceSection dict={dict} lang={locale} />
      <ContactSection dict={dict} />
      <Footer dict={dict} lang={locale} />
    </main>
  )
}
