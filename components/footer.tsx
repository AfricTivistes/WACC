import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedElement } from "@/components/ui/animated-element"
import { LegalDialog } from "@/components/ui/legal-dialog"
import PrivacyPolicy from "@/components/legal/privacy-policy"
import TermsOfUse from "@/components/legal/terms-of-use"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
      <div className="container py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedElement animation="fade-up" className="space-y-4">
            <div className="relative group">
              <Image
                src={`/images/logo-africtivistes-alt.svg?v=${new Date().getTime()}`}
                alt="Africtivistes Logo"
                width={180}
                height={40}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="sr-only">Africtivistes Logo</span>
            <p className="text-gray-400 text-sm">
              Africtivistes est une organisation panafricaine qui promeut la démocratie via la technologie civique en
              Afrique.
            </p>
            <div className="flex space-x-3">
              <Link href="https://twitter.com/africtivistes" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-white/10 transition-colors duration-300"
                >
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="https://facebook.com/africtivistes" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-white/10 transition-colors duration-300"
                >
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/company/africtivistes" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-white/10 transition-colors duration-300"
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="https://instagram.com/africtivistes" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-white/10 transition-colors duration-300"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link href="https://youtube.com/africtivistes" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full hover:bg-white/10 transition-colors duration-300"
                >
                  <Youtube className="h-4 w-4" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </Link>
            </div>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={200}>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors hover-underline">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-white transition-colors hover-underline">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-gray-400 hover:text-white transition-colors hover-underline">
                  Événements
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors hover-underline">
                  Contact
                </Link>
              </li>
            </ul>
          </AnimatedElement>

          <AnimatedElement animation="fade-up" delay={400}>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400">Dakar, Sénégal</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary shrink-0" />
                <a
                  href="mailto:info@africtivistes.org"
                  className="text-gray-400 hover:text-white transition-colors hover-underline"
                >
                  info@africtivistes.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary shrink-0" />
                <a
                  href="tel:+221338673080"
                  className="text-gray-400 hover:text-white transition-colors hover-underline"
                >
                  +221 33 867 30 80
                </a>
              </li>
            </ul>
          </AnimatedElement>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Africtivistes. Tous droits réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <LegalDialog
              title="Politique de confidentialité"
              trigger={
                <span className="text-gray-500 hover:text-white text-sm transition-colors hover-underline">
                  Politique de confidentialité
                </span>
              }
            >
              <PrivacyPolicy />
            </LegalDialog>
            <LegalDialog
              title="Conditions d'utilisation"
              trigger={
                <span className="text-gray-500 hover:text-white text-sm transition-colors hover-underline">
                  Conditions d&apos;utilisation
                </span>
              }
            >
              <TermsOfUse />
            </LegalDialog>
          </div>
        </div>
      </div>
    </footer>
  )
}
