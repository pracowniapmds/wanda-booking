import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import Script from "next/script"
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
  const isProduction = process.env.NODE_ENV === "production"

  return (
    <html lang="pl">
      <head>
        {isProduction && (
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-1DM1EEPP83" strategy="afterInteractive" />
        )}
      </head>
      <body className={`${inter.variable} ${montserrat.variable}`}>
        {isProduction && (
          <Script id="ga-ads" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1DM1EEPP83');
              gtag('config', 'AW-17783263323');
            `}
          </Script>
        )}

        {children}
      </body>
    </html>
  )
}
