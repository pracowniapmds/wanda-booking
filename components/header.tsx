"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const navItems = [
    { name: "O zespole", href: "#about-section" },
    { name: "Nasze hity", href: "#hits-section" },
    { name: "Oferta", href: "#offer-section" },
    { name: "Na żywo", href: "#video-section" },
    { name: "Recenzje", href: "#press-section" },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementPosition, behavior: "smooth" })
    }
  }

  return (
    <header className="w-full py-4 px-6 opacity-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="#hero-section" onClick={(e) => handleScroll(e, "#hero-section")} className="flex items-center">
            <Image
              src="/images/design-mode/logo_wib_white_850x.png"
              alt="Wanda i Banda"
              width={180}
              height={60}
              className="drop-shadow-lg h-[70px] py-px w-auto my-4"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-white/90 hover:text-white px-4 py-2 rounded-full font-medium transition-colors drop-shadow"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="#contact-section"
            onClick={(e) => handleScroll(e, "#contact-section")}
            className="hidden md:block"
          >
            <Button className="bg-[#60A5FA] text-white hover:bg-[#3B82F6] px-6 py-2 rounded-full font-medium shadow-lg">
              Zarezerwuj koncert
            </Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="bg-background border-t border-border text-foreground">
              <SheetHeader>
                <SheetTitle className="text-left text-xl font-semibold text-foreground">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="text-[#888888] hover:text-foreground justify-start text-lg py-2"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="#contact-section"
                  onClick={(e) => handleScroll(e, "#contact-section")}
                  className="w-full mt-4"
                >
                  <Button className="bg-[#60A5FA] text-white hover:bg-[#3B82F6] w-full px-6 py-2 rounded-full font-medium shadow-lg">
                    Zarezerwuj koncert
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
