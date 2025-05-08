import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { AnimatedElement } from "@/components/ui/animated-element"

interface HeroSectionProps {
  dict: {
    hero: {
      title: string
      description: string
      cta: {
        projects: string
        conference: string
      }
    }
  }
  lang: "fr" | "en"
}

export default function HeroSection({ dict, lang }: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 z-0" />

      <div className="container relative z-10 pt-10 pb-20 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="fade-up" duration={800} className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {lang === "fr" ? (
                <>
                  {dict.hero.title.split("technologie")[0]}
                  <span className="gradient-text">technologie</span>
                </>
              ) : (
                <>
                  {dict.hero.title.split("technology")[0]}
                  <span className="gradient-text">technology</span>
                </>
              )}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
              {dict.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-base btn-hover-effect">
                {dict.hero.cta.projects}
                <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-base transition-all duration-300 hover:bg-primary/10">
                {dict.hero.cta.conference}
              </Button>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-in" delay={300} duration={800} className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl card-hover">
              <Image
                src="/images/conference-civictech.jpg"
                alt="West Africa CivicTech Conference 2025"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <div className="bg-red-600 text-white px-4 py-2 rounded-md inline-block mb-2 max-w-max glass">
                  19-21 Mai 2025
                </div>
                <h3 className="text-white text-xl md:text-2xl font-bold">{dict.hero.cta.conference}</h3>
                <p className="text-white/80 mt-1">Lagos, Nigeria</p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-xl bg-secondary/20 animate-float"></div>
            <div
              className="absolute -top-6 -left-6 -z-10 w-full h-full rounded-xl bg-primary/20 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </AnimatedElement>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
