"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { AnimatedElement } from "@/components/ui/animated-element"
import type { Locale } from "@/lib/types"

interface PartnershipAnnouncementProps {
  lang: Locale
  dict: {
    partnership: {
      title: string
      description: string
      cta: string
    }
  }
}

export default function PartnershipAnnouncement({ lang, dict }: PartnershipAnnouncementProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <AnimatedElement animation="fade-up" className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">{dict.partnership.title}</h2>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <AnimatedElement animation="fade-in" delay={200} className="order-2 lg:order-1">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>{dict.partnership.description}</p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                <Button
                  className="btn-hover-effect"
                  onClick={() => window.open("https://bit.ly/CivicTechConference2025", "_blank")}
                >
                  {dict.partnership.cta}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-in" delay={300} className="order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src={lang === "fr" ? "/images/partnership-fr.jpeg" : "/images/partnership-en.jpeg"}
                alt={`West Africa CivicTech Conference 2025 - ${lang === "fr" ? "Annonce de partenariat" : "Partnership announcement"}`}
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </AnimatedElement>
        </div>
      </div>
    </section>
  )
}
