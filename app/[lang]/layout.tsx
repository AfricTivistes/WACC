import type React from "react"
import { Inter, Montserrat } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import type { Locale } from "@/lib/types"
import "../globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

// Fonction pour générer les métadonnées dynamiquement
export async function generateMetadata({ 
  params 
}: { 
  params: { lang: string } 
}) {
  return {
    title: "AfricTivistes | Transformer la gouvernance par la technologie",
    description:
      "AfricTivistes est un réseau panafricain qui promeut une Afrique démocratique, inclusive et souveraine à l'ère du numérique.",
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  // Utiliser une valeur statique pour l'attribut lang
  const langAttribute = params?.lang || "fr"
  
  return (
    <html lang={langAttribute} suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
