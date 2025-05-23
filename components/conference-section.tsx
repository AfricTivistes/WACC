"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Award, ChevronRight } from "lucide-react"
import { AnimatedElement } from "@/components/ui/animated-element"
import PartnershipAnnouncement from "@/components/partnership-announcement"
import type { Locale } from "@/lib/types"

interface ConferenceSectionProps {
  dict: {
    conference: {
      title: string
      description: string
      date: string
      location: string
      register: string
      features: Array<{
        title: string
        description: string
      }>
    }
    partnership: {
      title: string
      description: string
      cta: string
    }
  }
  lang: Locale
}

export default function ConferenceSection({ dict, lang }: ConferenceSectionProps) {
  // Utiliser les fonctionnalités du dictionnaire
  const features = dict.conference.features || [
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
      description:
        "Assistez à des ateliers sur les dernières tendances en matière d'innovation civique et de droits numériques.",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Exposition",
      description:
        "Découvrez les projets innovants d'AfricTivistes et de ses partenaires pour une Afrique plus démocratique.",
    },
  ]

  // Mapping des icônes pour les fonctionnalités
  const featureIcons = {
    Networking: <Users className="h-6 w-6 text-primary" />,
    Hack4Democracy: <Award className="h-6 w-6 text-primary" />,
    Ateliers: <Calendar className="h-6 w-6 text-primary" />,
    Workshops: <Calendar className="h-6 w-6 text-primary" />,
    Exposition: <MapPin className="h-6 w-6 text-primary" />,
    Exhibition: <MapPin className="h-6 w-6 text-primary" />,
  }

  return (
    <>
      <section id="events" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-grid opacity-5"></div>
        <div className="container relative z-10">
          <AnimatedElement animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{dict.conference.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{dict.conference.description}</p>
          </AnimatedElement>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedElement animation="fade-in" delay={300} className="order-2 lg:order-1">
              <div className="glass dark:glass-dark rounded-lg p-6 shadow-lg card-hover">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{dict.conference.date}</h3>
                    <p className="text-gray-600 dark:text-gray-400">21 Mai 2025</p>
                  </div>
                </div>

                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{dict.conference.location}</h3>
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
                      <div className="mr-3 mt-1">
                        {featureIcons[feature.title as keyof typeof featureIcons] || (
                          <Users className="h-6 w-6 text-primary" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold">{feature.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                      </div>
                    </AnimatedElement>
                  ))}
                </div>

                <div className="mt-8">
                  <Button
                    size="lg"
                    className="w-full btn-hover-effect"
                    onClick={() => window.open("https://bit.ly/CivicTechConference2025", "_blank")}
                  >
                    {dict.conference.register}
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

      <PartnershipAnnouncement lang={lang} dict={dict} />
    </>
  )
}
