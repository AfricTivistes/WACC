"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AnimatedElement } from "@/components/ui/animated-element"

interface VideoSectionProps {
  dict: any
}

export default function VideoSection({ dict }: VideoSectionProps) {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{dict.video.title}</h2>
          <p className="text-gray-600 dark:text-gray-400">{dict.video.description}</p>
        </AnimatedElement>

        <AnimatedElement animation="fade-in" delay={300} className="relative max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black aspect-video card-hover">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/u3U9R9Bwp14?si=kXfRvxPyIhVIQHmf&rel=0&autoplay=0&mute=0&controls=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

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
          <p className="text-lg font-medium gradient-text">{dict.video.tagline}</p>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{dict.video.projects}</p>
        </AnimatedElement>
      </div>
    </section>
  )
}
