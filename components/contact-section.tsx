"use client"

import { Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ContactForm } from "./contact-form"

export function ContactSection() {
  return (
    <section
      id="contact-section"
      className="w-full px-5 py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Zarezerwuj koncert</h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Masz pytania? Chcesz zaprosić <strong>Wandę i Bandę</strong> na swoje wydarzenie? Skontaktuj się z nami –
            odpowiemy na wszystkie pytania i pomożemy zorganizować niezapomniany koncert!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800 rounded-2xl p-8 text-center hover:bg-gray-750 transition-all md:col-span-1 flex flex-col justify-center">
            <div className="w-16 h-16 bg-[#60A5FA] rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Telefon</h3>
            <p className="text-gray-300 font-semibold mb-1">Taissa Matuszczyk</p>
            <p className="text-gray-300">607 461 143</p>
          </div>

          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Gotowy na rockowe show?</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nie czekaj – najlepsze terminy rezerwują się szybko. Zaproś <strong>legendę polskiego rocka</strong> na
            swoją scenę już dziś!
          </p>
          <Button
            size="lg"
            className="bg-white text-[#60A5FA] hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-full shadow-xl"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Wypełnij formularz
          </Button>
        </div>
      </div>
    </section>
  )
}
