import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Wanda i Banda - Legenda Polskiego Rocka | Zespół na Imprezę",
  description:
    "Wanda i Banda to legendarny polski zespół rockowy. Zarezerwuj koncert na żywo - eventy firmowe, wesela, koncerty plenerowe. Ponadczasowe hity: Hi-Fi, Kochaj mnie kochaj i wiele innych.",
  keywords:
    "Wanda i Banda, zespół rockowy, zespół na imprezę, muzyka na żywo, koncert plenerowy, polski rock, legenda polskiego rocka, Hi-Fi, Kochaj mnie kochaj",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
