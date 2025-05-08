import "server-only"
import type { Locale } from "@/lib/types"

// Nous définissons un type pour notre dictionnaire
type Dictionary = {
  [key: string]: any
}

// Nous créons un objet qui contient les fonctions pour charger les dictionnaires
const dictionaries = {
  fr: () => import("@/dictionaries/fr.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
}

// Cette fonction retourne le dictionnaire pour la locale spécifiée
export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]()
}
