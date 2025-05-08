"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { AnimatedElement } from "@/components/ui/animated-element"
import LanguageSwitcher from "@/components/language-switcher"
import type { Locale } from "@/lib/types"

interface NavbarProps {
  lang: Locale
  dict: any
}

export default function Navbar({ lang, dict }: NavbarProps) {
  const [scrollY, setScrollY] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Initialiser la valeur au chargement
    setScrollY(window.scrollY)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculer l'opacité en fonction du défilement
  // Commence à 0 et atteint 1 à 100px de défilement
  const scrollProgress = Math.min(scrollY / 100, 1)

  // Créer les liens de navigation avec le préfixe de langue
  const navLinks = [
    { name: dict.navigation.home, href: `/${lang}#home` },
    { name: dict.navigation.about, href: `/${lang}#about` },
    { name: dict.navigation.projects, href: `/${lang}#projects` },
    { name: dict.navigation.events, href: `/${lang}#events` },
    { name: dict.navigation.contact, href: `/${lang}#contact` },
  ]

  // Styles dynamiques basés sur le défilement
  const headerStyle = {
    backgroundColor: `rgba(255, 255, 255, ${scrollProgress * 0.9})`,
    backdropFilter: `blur(${scrollProgress * 8}px)`,
    boxShadow: scrollProgress > 0.1 ? `0 4px 6px -1px rgba(0, 0, 0, ${scrollProgress * 0.1})` : "none",
  }

  // Styles pour le mode sombre
  const darkHeaderStyle = {
    backgroundColor: `rgba(17, 24, 39, ${scrollProgress * 0.9})`,
    backdropFilter: `blur(${scrollProgress * 8}px)`,
    boxShadow: scrollProgress > 0.1 ? `0 4px 6px -1px rgba(0, 0, 0, ${scrollProgress * 0.2})` : "none",
  }

  // Déterminer si nous sommes en mode sombre
  const isDarkMode = isClient && document.documentElement.classList.contains("dark")

  return (
    <header
      className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", "py-4")}
      style={isDarkMode ? darkHeaderStyle : headerStyle}
    >
      <div className="container flex items-center justify-between">
        <AnimatedElement animation="fade-in" duration={800}>
          <Link href={`/${lang}`} className="flex items-center group">
            <div className="overflow-hidden rounded-lg mr-3">
              <Image
                src={`/images/logo-africtivistes.svg?v=${new Date().getTime()}`}
                alt="AfricTivistes Logo"
                width={50}
                height={50}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="font-montserrat font-bold text-xl gradient-text transition-all duration-300">
              AfricTivistes
            </span>
            <span className="sr-only">AfricTivistes Logo</span>
          </Link>
        </AnimatedElement>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <AnimatedElement key={link.name} animation="fade-in" delay={100 + index * 100} duration={800}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover-underline hover:text-primary",
                  scrollProgress < 0.5 ? "text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-200",
                )}
              >
                {link.name}
              </Link>
            </AnimatedElement>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <AnimatedElement animation="fade-in" delay={600} duration={800}>
            <LanguageSwitcher lang={lang} dict={dict} />
          </AnimatedElement>

          <AnimatedElement animation="fade-in" delay={700} duration={800}>
            <Button className="bg-[#3CB371] hover:bg-[#2E8B57] text-white transition-all duration-300 btn-hover-effect relative">
              <MessageCircle className="h-5 w-5 mr-2" />
              <span>{dict.chat}</span>
              <span className="notification-dot pulse"></span>
            </Button>
          </AnimatedElement>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "md:hidden transition-all duration-300",
                scrollProgress < 0.5
                  ? "text-gray-900 dark:text-white hover:bg-white/10 dark:hover:bg-black/10"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-200/20 dark:hover:bg-gray-800/20",
              )}
              style={{
                backgroundColor: scrollProgress < 0.2 ? `rgba(255, 255, 255, ${scrollProgress * 0.2})` : "transparent",
              }}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-l border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200/50 dark:border-gray-700/50">
                <div className="flex items-center">
                  <Image
                    src={`/images/logo-africtivistes.svg?v=${new Date().getTime()}`}
                    alt="AfricTivistes Logo"
                    width={40}
                    height={40}
                    className="h-8 w-auto mr-2"
                  />
                  <span className="font-montserrat font-bold text-lg gradient-text">AfricTivistes</span>
                  <span className="sr-only">AfricTivistes Logo</span>
                </div>
              </div>
              <nav className="flex flex-col space-y-4 mt-6">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium py-2 text-gray-800 hover:text-primary transition-colors dark:text-gray-100 dark:hover:text-primary hover-underline"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 flex justify-center">
                <LanguageSwitcher lang={lang} dict={dict} />
              </div>
              <div className="mt-auto pb-6">
                <Button className="w-full bg-[#3CB371] hover:bg-[#2E8B57] text-white transition-all duration-300 btn-hover-effect relative">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span>{dict.chat}</span>
                  <span className="notification-dot pulse"></span>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
