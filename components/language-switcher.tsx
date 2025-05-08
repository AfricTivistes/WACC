"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import type { Locale } from "@/lib/types"

interface LanguageSwitcherProps {
  lang: Locale
  dict: {
    language: {
      fr: string
      en: string
    }
  }
}

export default function LanguageSwitcher({ lang, dict }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = () => {
    // Déterminer la nouvelle langue
    const newLang = lang === "fr" ? "en" : "fr"

    // Obtenir le chemin sans le préfixe de langue et sans l'ancre
    const pathWithoutLang = pathname.replace(`/${lang}`, "")

    // Récupérer l'ancre actuelle si elle existe
    const currentHash = typeof window !== "undefined" ? window.location.hash : ""

    // Construire la nouvelle URL avec la nouvelle langue et l'ancre actuelle
    const newPath = `/${newLang}${pathWithoutLang}${currentHash}`

    // Rediriger vers la nouvelle URL
    window.location.href = newPath
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={switchLanguage}
      className="text-gray-700 dark:text-gray-200 hover:bg-primary/10 transition-all duration-300"
    >
      <Globe className="h-5 w-5 mr-1" />
      <span className="text-xs font-medium">{dict.language[lang]}</span>
    </Button>
  )
}
