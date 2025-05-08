import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronRight } from "lucide-react"
import { AnimatedElement } from "@/components/ui/animated-element"

interface ProjectsSectionProps {
  dict: {
    projects: {
      title: string
      description: string
      cta: string
      visit: string
      more: string
    }
  }
}

export default function ProjectsSection({ dict }: ProjectsSectionProps) {
  const projects = [
    {
      id: "mooc",
      title: "MOOC Démocratie",
      description:
        "Cours en ligne sur la démocratie, les élections et la gouvernance pour renforcer les capacités des citoyens et activistes africains.",
      image: "/images/mooc-africtivistes.png",
      url: "https://mooc.africtivistes.org",
      axis: "Renforcement des capacités",
    },
    {
      id: "soobu",
      title: "Soobu.tech",
      description:
        "Plateforme pour la gouvernance ouverte et la transparence, permettant de cartographier les initiatives citoyennes liées aux élections.",
      image: "/images/soobu-platform.png",
      url: "https://soobu.tech",
      axis: "Consolidation démocratique",
    },
    {
      id: "farafina",
      title: "Farafina.tech",
      description:
        "Hub d'innovation numérique pour l'engagement civique, offrant des données électorales et démocratiques à travers l'Afrique.",
      image: "/images/farafina-platform.png",
      url: "https://farafina.tech",
      axis: "Participation citoyenne",
    },
    {
      id: "citizenlab",
      title: "Citizen Lab",
      description:
        "Formation et outils pour la société civile, incubant des solutions civic tech initiées par les citoyens pour une participation active.",
      image: "/images/citizenlab-madagascar.webp",
      url: "https://citizenlabbenin.org",
      axis: "Participation citoyenne",
    },
    {
      id: "charter",
      title: "Charter Project Africa",
      description:
        "Initiative pour la gouvernance démocratique promouvant la Charte africaine de la démocratie, des élections et de la gouvernance.",
      image: "/images/charter-project-africa.png",
      url: "https://charter.africa",
      axis: "Consolidation démocratique",
    },
    {
      id: "taxawtemm",
      title: "Taxaw Temm",
      description:
        "Programme de formation en cybersécurité pour les femmes, visant à défendre les droits numériques et combattre les violences en ligne.",
      image: "/images/taxawtemm-program.png",
      url: "https://taxawtemm.net",
      axis: "Droits numériques",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <AnimatedElement animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{dict.projects.title}</h2>
          <p className="text-gray-600 dark:text-gray-400">{dict.projects.description}</p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedElement
              key={project.id}
              animation="fade-up"
              delay={100 * index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md card-hover project-card"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/70 opacity-0 transition-opacity duration-300 flex items-center justify-center project-overlay">
                  <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="sm" className="btn-hover-effect">
                      {dict.projects.visit}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="absolute top-2 right-2 bg-primary/90 text-white text-xs px-2 py-1 rounded-full">
                  {project.axis}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover-underline inline-flex items-center group"
                >
                  {dict.projects.more}
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animation="fade-in" delay={600} className="text-center mt-12">
          <Button size="lg" className="btn-hover-effect">
            {dict.projects.cta}
          </Button>
        </AnimatedElement>
      </div>
    </section>
  )
}
