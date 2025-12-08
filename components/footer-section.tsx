"use client"

import { Facebook, Instagram, Youtube } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="w-full bg-black text-white px-5 py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold">Wanda i Banda</h3>
            <p className="text-gray-400 leading-relaxed">
              Legenda polskiego rocka. Ponadczasowe hity, niepowtarzalna energia i profesjonalizm na najwyższym
              poziomie.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Wandaibanda"
                aria-label="Facebook"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#60A5FA] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/wandaibandahifi/"
                aria-label="Instagram"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#60A5FA] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@wandaibandatv6"
                aria-label="YouTube"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#60A5FA] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-gray-300">Nawigacja</h4>
            <div className="flex flex-col gap-2">
              <a href="#about-section" className="text-gray-400 hover:text-white transition-colors">
                O zespole
              </a>
              <a href="#hits-section" className="text-gray-400 hover:text-white transition-colors">
                Nasze hity
              </a>
              <a href="#offer-section" className="text-gray-400 hover:text-white transition-colors">
                Oferta
              </a>
              <a href="#testimonials-section" className="text-gray-400 hover:text-white transition-colors">
                Opinie
              </a>
              <a href="#contact-section" className="text-gray-400 hover:text-white transition-colors">
                Kontakt
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold text-gray-300">Kontakt</h4>
            <div className="flex flex-col gap-2 text-gray-400">
              <p className="font-semibold text-white">Taissa Matuszczyk</p>
              <p>607 461 143</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Wanda i Banda. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
