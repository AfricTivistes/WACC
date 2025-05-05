import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Award, BookOpen, Globe } from "lucide-react"
import { AnimatedElement } from "@/components/ui/animated-element"

export default function AboutSection() {
  const stats = [
    { icon: <Users className="h-6 w-6 text-primary" />, value: "550+", label: "Participants aux sommets" },
    { icon: <Globe className="h-6 w-6 text-primary" />, value: "400+", label: "Membres dans 45 pays" },
    { icon: <BookOpen className="h-6 w-6 text-primary" />, value: "2000+", label: "Apprenants MOOC" },
    { icon: <Award className="h-6 w-6 text-primary" />, value: "20", label: "Communautés propulsées" },
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 bg-pattern-dots">
      <div className="container">
        <AnimatedElement animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">À Propos d&apos;Africtivistes</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Fondée en 2015 à Dakar, Africtivistes est une organisation panafricaine qui rassemble des activistes et
            innovateurs utilisant la technologie pour renforcer la démocratie et la bonne gouvernance en Afrique.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="fade-in" className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-lg card-hover">
              <Image
                src="/images/africtivistes-members.jpeg"
                alt="Membres d'Africtivistes"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full rounded-xl bg-primary/20"></div>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={200} className="space-y-6">
            <h3 className="text-2xl font-bold">Notre Mission</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Africtivistes s&apos;engage à promouvoir la démocratie, la transparence et la participation citoyenne à
              travers l&apos;Afrique en utilisant des technologies innovantes et des approches civic tech.
            </p>

            <h3 className="text-2xl font-bold">Notre Vision</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Nous aspirons à une Afrique où les citoyens sont pleinement engagés dans les processus démocratiques, où
              la gouvernance est transparente et où la technologie est un outil d&apos;émancipation pour tous.
            </p>

            <Button className="btn-hover-effect">En savoir plus</Button>
          </AnimatedElement>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {stats.map((stat, index) => (
            <AnimatedElement
              key={index}
              animation="fade-up"
              delay={100 * index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md text-center card-hover glass"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h4 className="text-3xl font-bold text-primary mb-2">{stat.value}</h4>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}
