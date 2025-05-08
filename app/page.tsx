import { redirect } from "next/navigation"
import { defaultLocale } from "@/middleware"

// Cette page redirige simplement vers la page avec la locale par défaut
export default function Home() {
  redirect(`/${defaultLocale}`)
}
