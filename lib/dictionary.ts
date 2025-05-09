import "server-only"
import type { Locale } from "@/lib/types"

// Nous définissons un type pour notre dictionnaire
type Dictionary = {
  [key: string]: any
}

// Nous créons un objet qui contient les dictionnaires
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: async () => (await import("@/dictionaries/fr.json")).default,
  en: async () => (await import("@/dictionaries/en.json")).default,
}

// Cette fonction retourne le dictionnaire pour la locale spécifiée
export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  try {
    return await dictionaries[locale]()
  } catch (error) {
    console.error(`Error loading dictionary for locale: ${locale}`, error)
    // Fallback to default locale
    return await dictionaries.fr()
  }
}
