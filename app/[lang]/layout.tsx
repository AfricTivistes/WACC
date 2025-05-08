import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import { getDictionary } from "@/lib/dictionary"
import { ThemeProvider } from "@/components/theme-provider"
import type { Locale } from "@/lib/types"
import "../globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })

export const metadata: Metadata = {
  title: "AfricTivistes | Transformer la gouvernance par la technologie",
  description:
    "AfricTivistes est un réseau panafricain qui promeut une Afrique démocratique, inclusive et souveraine à l'ère du numérique.",
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  // Récupérer le dictionnaire pour la langue actuelle
  const dict = await getDictionary(params.lang)

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
