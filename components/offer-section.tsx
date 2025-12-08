"use client"

import { Calendar, MapPin, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OfferSection() {
  const offerings = [
    {
      icon: Calendar,
      title: "Eventy firmowe",
      description: "Jubileusze, konferencje, imprezy integracyjne – dodamy rockowego charakteru każdemu wydarzeniu.",
      features: ["Pełen profesjonalizm", "Dopasowany repertuar", "Najwyższa jakość dźwięku"],
    },
    {
      icon: MapPin,
      title: "Koncerty plenerowe",
      description:
        "Festiwale, dni miasta, imprezy masowe – potrafimy rozkręcić tłumy i stworzyć niezapomnianą atmosferę.",
      features: ["Doświadczenie sceniczne", "Sprawdzeni na festiwalach", "Energia na żywo"],
    },
    {
      icon: Sparkles,
      title: "Koncerty klubowe",
      description: "Kameralne występy pełne energii i bliskości z publicznością. Rock w najczystszej formie.",
      features: ["Intymna atmosfera", "Klasyczne hity", "Autentyczne emocje"],
    },
  ]

  return (
    <section id="offer-section" className="w-full px-5 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Oferta koncertowa</h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Szukasz <strong>zespołu na imprezę</strong>? <strong>Wanda i Banda</strong> to gwarancja sukcesu. Nasz{" "}
            <strong>zespół rockowy</strong> zagra wszędzie tam, gdzie potrzeba prawdziwej, rockowej energii i
            ponadczasowych hitów.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {offerings.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#60A5FA]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#60A5FA] to-[#3B82F6] rounded-2xl flex items-center justify-center mb-6">
                <offer.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{offer.title}</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">{offer.description}</p>
              <ul className="space-y-3">
                {offer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 bg-[#60A5FA] rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl md:text-5xl font-bold mb-6">Zaproś legendę polskiego rocka na swoją scenę!</h3>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Każdy koncert to profesjonalizm, doświadczenie i energia, która zostaje w pamięci na lata.{" "}
            <strong>Muzyka na żywo</strong> w wykonaniu <strong>Wandy i Bandy</strong> to inwestycja w sukces Twojego
            wydarzenia.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#60A5FA] hover:bg-gray-100 px-8 py-6 text-lg font-bold rounded-full shadow-xl"
            onClick={() => {
              const contactSection = document.getElementById("contact-section")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Skontaktuj się z nami
          </Button>
        </div>
      </div>
    </section>
  )
}
