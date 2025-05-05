import { CheckCircle } from "lucide-react"
import { AnimatedElement } from "@/components/ui/animated-element"

export default function ImpactSection() {
  const impacts = [
    {
      title: "Éducation Civique",
      description: "Plus de 2000 apprenants formés via notre MOOC sur la démocratie, les élections et la gouvernance.",
    },
    {
      title: "Transparence Électorale",
      description:
        "Soutien à 10 processus électoraux à travers l'Afrique, contribuant à des élections plus transparentes.",
    },
    {
      title: "Autonomisation des Femmes",
      description: "Formation de plus de 500 femmes en cybersécurité pour lutter contre les violences en ligne.",
    },
    {
      title: "Engagement Citoyen",
      description:
        "Développement de plateformes permettant aux citoyens de participer activement aux processus démocratiques.",
    },
    {
      title: "Innovation Technologique",
      description: "Création d'outils numériques adaptés aux défis spécifiques de la gouvernance en Afrique.",
    },
    {
      title: "Réseau Panafricain",
      description: "Construction d'un réseau de plus de 400 activistes et innovateurs dans 45 pays africains.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
      <div className="container relative z-10">
        <AnimatedElement animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Impact</h2>
          <p className="text-white/80">
            Depuis 2015, Africtivistes transforme la gouvernance en Afrique à travers des initiatives technologiques
            innovantes.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <AnimatedElement
              key={index}
              animation="fade-up"
              delay={100 * index}
              className="glass dark:glass-dark rounded-lg p-6 hover:bg-white/20 transition-all duration-300 card-hover"
            >
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-1 mr-3" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{impact.title}</h3>
                  <p className="text-white/80">{impact.description}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
