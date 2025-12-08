import { Music2 } from "lucide-react"

export function HitsSection() {
  const hits = [
    {
      title: "Hi-Fi",
      description: "Kultowy hit, który zna cała Polska. Energetyczny kawałek, który rozkręca każdą imprezę.",
      spotifyUrl: null,
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273f8c5e1e5e1e5e1e5e1e5e1e5",
    },
    {
      title: "Kochaj mnie, kochaj",
      description: "Romantyczny rockowy klasyk",
      spotifyUrl: null,
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273a8c5e1e5e1e5e1e5e1e5e1e5",
    },
    {
      title: "Nie będę Julią",
      description: "Dynamiczny utwór pełen rockowego pazura i charakterystycznego brzmienia zespołu.",
      spotifyUrl: null,
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273b8c5e1e5e1e5e1e5e1e5e1e5",
    },
    {
      title: "7 życzeń",
      description:
        'Kultowy utwór z serialu "Siedem życzeń", który na zawsze zapisał się w historii polskiej telewizji.',
      spotifyUrl: null,
      imageUrl: "https://i.scdn.co/image/ab67616d0000b273c8c5e1e5e1e5e1e5e1e5e1e5",
    },
  ]

  return (
    <section id="hits-section" className="w-full px-5 py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#60A5FA] px-4 py-2 rounded-full mb-6">
            <Music2 className="w-5 h-5" />
            <span className="font-semibold">Nasze Hity</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Utwory, które zna każdy</h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ponadczasowe kawałki, które od dekad rozbrzmiewają na polskich scenach. <strong>Muzyka na żywo</strong> w
            najlepszym wydaniu – od energetycznych hitów po wzruszające ballady.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hits.map((hit, index) => {
            return (
              <div
                key={index}
                className="group relative bg-gray-800 rounded-2xl p-8 transition-all border border-gray-700 overflow-hidden block"
              >
                {/* Background image with overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity"
                  style={{ backgroundImage: `url(${hit.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#60A5FA] rounded-full flex items-center justify-center flex-shrink-0">
                        <Music2 className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">{hit.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{hit.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-300">
            I wiele, wiele innych! Każdy <strong>koncert plenerowy</strong> czy event to pełen setlist hitów, które
            porwą Twoich gości.
          </p>
        </div>
      </div>
    </section>
  )
}
