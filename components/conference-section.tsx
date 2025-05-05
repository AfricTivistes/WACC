import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Award, ChevronRight } from "lucide-react"
import { AnimatedElement } from "@/components/ui/animated-element"

export default function ConferenceSection() {
  const features = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Networking",
      description: "Rencontrez des innovateurs et activistes civic tech de toute l'Afrique de l'Ouest.",
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Hack4Democracy",
      description: "Participez au hackathon pour développer des solutions numériques pour la démocratie.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Ateliers",
      description: "Assistez à des ateliers sur les dernières tendances en matière de civic tech.",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Exposition",
      description: "Découvrez les projets innovants d'Africtivistes et de ses partenaires.",
    },
  ]

  return (
    <section id="events" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-grid opacity-5"></div>
      <div className="container relative z-10">
        <AnimatedElement animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">West Africa CivicTech Conference 2025</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Rejoignez-nous à Lagos, Nigeria, du 19 au 21 mai 2025 pour la plus grande conférence sur la civic tech en
            Afrique de l'Ouest.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="fade-in" delay={300} className="order-2 lg:order-1">
            <div className="glass dark:glass-dark rounded-lg p-6 shadow-lg card-hover">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Date</h3>
                  <p className="text-gray-600 dark:text-gray-400">19-21 Mai 2025</p>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Lieu</h3>
                  <p className="text-gray-600 dark:text-gray-400">Civic Centre, Lagos, Nigeria</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <AnimatedElement
                    key={index}
                    animation="fade-up"
                    delay={100 * index + 500}
                    className="flex items-start"
                  >
                    <div className="mr-3 mt-1">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  </AnimatedElement>
                ))}
              </div>

              <div className="mt-8">
                <Button size="lg" className="w-full btn-hover-effect">
                  S'inscrire à la conférence
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-in" delay={300} className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-lg card-hover">
                <Image
                  src="/images/conference-civictech.jpg"
                  alt="West Africa CivicTech Conference 2025"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 -z-10 w-full h-full rounded-xl bg-secondary/20 animate-float"></div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
