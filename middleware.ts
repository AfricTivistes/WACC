import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

// Langues supportées
export const locales = ["fr", "en"]
export const defaultLocale = "fr"

// Cette fonction obtient la langue préférée à partir des en-têtes de la requête
function getLocale(request: NextRequest): string {
  // Negotiator attend un objet avec une propriété headers qui est un objet avec une propriété accept-language
  const headers = { "accept-language": request.headers.get("accept-language") || "" }
  const languages = new Negotiator({ headers }).languages()

  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  // Vérifier si la requête est pour un fichier statique ou une API
  const { pathname } = request.nextUrl

  // Ignorer les fichiers statiques et les API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // Vérifier si le chemin contient déjà un locale
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) return NextResponse.next()

  // Rediriger si le chemin n'a pas de locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  // Par exemple, si l'URL est /projects et que la langue est 'fr',
  // la nouvelle URL sera /fr/projects
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
