"use client"

import { Music, Users, Tv, Award } from "lucide-react"
import { useEffect, useState } from "react"

export function AboutSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const highlights = [
    {
      icon: Music,
      title: "40+ lat na scenie",
      description: "Niezapomniane koncerty od lat 80.",
    },
    {
      icon: Tv,
      title: 'Serial "Siedem życzeń"',
      description: "Kultowy udział w legendarnej produkcji TVP",
    },
    {
      icon: Award,
      title: "Ponadczasowe hity",
      description: '"Hi-Fi", "Kochaj mnie, kochaj" i wiele innych',
    },
    {
      icon: Users,
      title: "Tysiące fanów",
      description: "Wierni słuchacze w całej Polsce",
    },
  ]

  return (
    <section id="about-section" className="relative w-full px-5 py-16 md:py-24">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Wanda i Banda</h2>
          <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            <strong>Zespół rockowy</strong>, który nie potrzebuje przedstawienia. Od dekad{" "}
            <strong>Wanda i Banda</strong> to synonim autentycznego polskiego rocka – energetycznego, emocjonalnego i
            zawsze granego z pasją. To <strong>legenda polskiego rocka</strong>, która zdobyła serca milionów fanów
            dzięki niezapomnianym hitom i elektryzującym występom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-[#60A5FA] rounded-full flex items-center justify-center mb-4">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Historia, która trwa</h3>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong>Wanda i Banda</strong> to nie tylko <strong>zespół na imprezę</strong> – to gwarancja
              niezapomnianych wrażeń. Ich <strong>muzyka na żywo</strong> to prawdziwy wybuch energii, który potrafi
              rozkręcić każdą publiczność – od kameralnych eventów po wielkie <strong>koncerty plenerowe</strong>.
            </p>
            <p>
              Zespół zyskał ogromną popularność dzięki udziałowi w kultowym serialu <strong>„Siedem życzeń"</strong>,
              gdzie ich utwory stały się nieodłącznym elementem polskiej kultury popularnej. Hity takie jak{" "}
              <strong>„Hi-Fi"</strong> czy <strong>„Kochaj mnie, kochaj"</strong> to kawałki, które zna każdy – od
              najmłodszych po najstarszych fanów polskiego rocka.
            </p>
            <p>
              Dziś <strong>Wanda i Banda</strong> to synonim profesjonalizmu i rockowej klasy. Każdy koncert to podróż
              przez dekady polskiej muzyki, pełna emocji, nostalgii i niesamowitej energii scenicznej.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
