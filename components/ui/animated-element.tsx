"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedElementProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in" | "scale-in" | "none"
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export function AnimatedElement({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  threshold = 0.1,
  once = true,
}: AnimatedElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [once, threshold])

  const animationClasses = {
    "fade-up": "translate-y-10 opacity-0",
    "fade-in": "opacity-0",
    "slide-in": "translate-x-10 opacity-0",
    "scale-in": "scale-95 opacity-0",
    none: "",
  }

  const visibleClass = animation !== "none" ? "transform-gpu transition-all ease-out" : ""

  return (
    <div
      ref={ref}
      className={cn(
        className,
        visibleClass,
        animation !== "none" && !isVisible ? animationClasses[animation] : "",
        animation !== "none" && isVisible ? "translate-y-0 translate-x-0 scale-100 opacity-100" : "",
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
