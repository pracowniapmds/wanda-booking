"use client"

import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section id="video-section" className="relative w-full px-5 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg">
            Sprawdź jak brzmimy na żywo
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Poczuj energię naszych koncertów i przekonaj się, dlaczego jesteśmy legendą polskiego rocka
          </p>
        </div>

        <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300">
          <div className="aspect-video relative">
            <video
              className="w-full h-full"
              controls
              preload="metadata"
              poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wanda%20%26%20Banda%20-%20Nie%20be%CC%A8de%CC%A8%20Julia%CC%A8%20PRORESS.00_01_05_03.Still001-lCWwxuhgnGG5bCjRD3gccG0tCHrM3O.jpg"
            >
              <source
                src="https://houawbutw0i1eb0k.public.blob.vercel-storage.com/WiBNiebedeJulia.mp4"
                type="video/mp4"
              />
              Twoja przeglądarka nie obsługuje odtwarzania wideo.
            </video>
          </div>
          <div className="p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-2xl font-bold text-white mb-2">Nie będę Julią - Live</h3>
            <p className="text-gray-300 text-lg">Zobacz nasz energetyczny występ na żywo</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact-section"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-400 hover:bg-blue-500 text-white font-bold text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Play className="w-5 h-5" />
            Zarezerwuj nas na swoje wydarzenie
          </a>
        </div>
      </div>
    </section>
  )
}
