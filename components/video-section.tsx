"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AnimatedElement } from "@/components/ui/animated-element"

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container">
        <AnimatedElement animation="fade-up" className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Découvrez Nos Initiatives</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Plongez dans l&apos;univers d&apos;Africtivistes à travers cette compilation vidéo de nos différentes
            initiatives et activités à travers l&apos;Afrique.
          </p>
        </AnimatedElement>

        <AnimatedElement animation="fade-in" delay={300} className="relative max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black aspect-video card-hover">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/placeholder.svg?key=uflna"
              onEnded={() => setIsPlaying(false)}
            >
              {/* Remplacez cette source par votre vidéo réelle */}
              <source
                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Votre navigateur ne prend pas en charge la lecture de vidéos.
            </video>

            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-500",
                isPlaying ? "opacity-0 pointer-events-none" : "opacity-100 glass dark:glass-dark bg-opacity-30",
              )}
              onClick={togglePlay}
            >
              <Button
                size="lg"
                className="rounded-full w-16 h-16 flex items-center justify-center bg-primary/90 hover:bg-primary text-white transition-transform duration-300 hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation()
                  togglePlay()
                }}
              >
                <Play className="h-8 w-8 fill-current" />
              </Button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-between">
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={togglePlay}>
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleMute}>
                  {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 -z-10 w-full h-full rounded-xl bg-primary/20 animate-float"></div>
          <div
            className="absolute -top-6 -left-6 -z-10 w-full h-full rounded-xl bg-secondary/20 animate-float"
            style={{ animationDelay: "3s" }}
          ></div>
        </AnimatedElement>

        <AnimatedElement animation="fade-up" delay={600} className="mt-12 text-center">
          <p className="text-lg font-medium gradient-text">
            Ensemble, transformons la gouvernance en Afrique par la technologie
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Cette vidéo présente nos projets phares : MOOC Démocratie, Soobu.tech, Farafina.tech, Citizen Lab, Charter
            Project Africa et Taxaw Temm.
          </p>
        </AnimatedElement>
      </div>
    </section>
  )
}
