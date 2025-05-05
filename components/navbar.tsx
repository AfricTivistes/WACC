"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Globe, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { AnimatedElement } from "@/components/ui/animated-element"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [language, setLanguage] = useState("FR")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "FR" ? "EN" : "FR")
  }

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Projets", href: "#projects" },
    { name: "Événements", href: "#events" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "glass dark:glass-dark shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <AnimatedElement animation="fade-in" duration={800}>
          <Link href="/" className="flex items-center group">
            <div className="overflow-hidden rounded-lg">
              <Image
                src={`/images/logo-africtivistes.svg?v=${new Date().getTime()}`}
                alt="Africtivistes Logo"
                width={180}
                height={40}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="sr-only">Africtivistes Logo</span>
          </Link>
        </AnimatedElement>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <AnimatedElement key={link.name} animation="fade-in" delay={100 + index * 100} duration={800}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-all duration-300 hover-underline dark:text-gray-200 dark:hover:text-primary"
              >
                {link.name}
              </Link>
            </AnimatedElement>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <AnimatedElement animation="fade-in" delay={600} duration={800}>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-gray-700 dark:text-gray-200 hover:bg-primary/10 transition-all duration-300"
            >
              <Globe className="h-5 w-5 mr-1" />
              <span className="text-xs font-medium">{language}</span>
            </Button>
          </AnimatedElement>

          <AnimatedElement animation="fade-in" delay={700} duration={800}>
            <Button className="bg-[#3CB371] hover:bg-[#2E8B57] text-white transition-all duration-300 btn-hover-effect relative">
              <MessageCircle className="h-5 w-5 mr-2" />
              <span>Chat Signal</span>
              <span className="notification-dot pulse"></span>
            </Button>
          </AnimatedElement>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="glass dark:glass-dark">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <Image
                  src={`/images/logo-africtivistes.svg?v=${new Date().getTime()}`}
                  alt="Africtivistes Logo"
                  width={150}
                  height={35}
                  className="h-8 w-auto"
                />
                <span className="sr-only">Africtivistes Logo</span>
              </div>
              <nav className="flex flex-col space-y-4 mt-6">
                {navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-base font-medium py-2 text-gray-700 hover:text-primary transition-colors dark:text-gray-200 dark:hover:text-primary hover-underline"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pb-6">
                <Button className="w-full bg-[#3CB371] hover:bg-[#2E8B57] text-white transition-all duration-300 btn-hover-effect relative">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span>Chat Signal</span>
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
