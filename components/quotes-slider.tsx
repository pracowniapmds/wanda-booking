"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

// --- Dane: cytaty z recenzji/relacji (z podpisami i linkami) ---
const QUOTES = [
  {
    quote:
      "Dobrymi punktami poniedziałkowego wieczoru okazały się również Wanda i Banda – ich występy, mimo że znacząco różniące się od siebie, efektywnie pobudziły sopocką publikę.",
    source: "polskaplyta-polskamuzyka.pl (relacja)",
    date: "26.08.2024",
    url: "https://polskaplyta-polskamuzyka.pl/2024/08/26/czym-zaskoczyl-nas-top-of-the-top-sopot-festival-2024-relacja/",
  },
  {
    quote:
      'Nie ma dobrej imprezy, jeżeli ktoś nie wpadnie na pomysł, żeby puścić "Hi‑Fi" grupy Wanda i Banda, a kiedy dodamy do tego "Nie będę Julią", to mamy balangę do rana.',
    source: "Onet Kultura (relacja, Top of the Top)",
    date: "19.08.2024",
    url: "https://kultura.onet.pl/muzyka/wywiady-i-artykuly/top-of-the-top-sopot-festival-relacja-z-pierwszego-dnia-zdjecia/s61yc11",
  },
  {
    quote: "Wanda i Banda, L.U.C. i Kayah łoją na gitarach i łączą pokolenia.",
    source: "Gazeta Wyborcza Trójmiasto (relacja)",
    date: "23.08.2024",
    url: "https://trojmiasto.wyborcza.pl/trojmiasto/7,35611,31247835,opera-lesna-spiewala-przeboje-wzruszala-sie-i-rapowala-spedzilam.html",
  },
  {
    quote: "Publiczność klaskała, tańczyła i świetnie bawiła się w rytm kultowych przebojów.",
    source: "Interia Muzyka (relacja, 62. KFPP Opole)",
    date: "15.06.2025",
    url: "https://muzyka.interia.pl/festiwal-w-opolu/news-festiwal-w-opolu-2025-huczne-urodziny-poruszajace-wspomnieni,nId,21827426",
  },
  {
    quote:
      "Największym zaskoczeniem wieczoru był wspólny występ Dody i Wandy Kwietniewskiej… Publiczność nagrodziła go gromkimi brawami.",
    source: "WP Kultura (relacja)",
    date: "05.07.2025",
    url: "https://kultura.wp.pl/koncert-tvp-w-zakopanem-tym-razem-bez-disco-polo-jeden-wystep-zaskoczyl-7175162084506336a",
  },
  {
    quote: "Wydarzenie zgromadziło bardzo wielu mieszkańców regionu. Publiczność bawiła się wyśmienicie.",
    source: "Relacje Regionalne / czadrow24.pl (relacja)",
    date: "04.09.2019",
    url: "https://czadrow24.pl/swieto-powiatu-koncert-zespolu-wanda-i-banda",
  },
]

// --- Komponent slajdera ---
export default function WandaBandaQuotesSlider() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const INTERVAL = 5000 // 5s auto-rotacja

  // Auto-rotacja
  useEffect(() => {
    start()
    return stop // cleanup
  }, [index])

  const start = () => {
    stop()
    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % QUOTES.length)
    }, INTERVAL)
  }

  const stop = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
  }

  const goTo = (i: number) => setIndex((i + QUOTES.length) % QUOTES.length)

  // Swipe (mobile)
  const touch = useRef<{ x: number | null }>({ x: null })
  const onTouchStart = (e: React.TouchEvent) => (touch.current.x = e.touches[0].clientX)
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touch.current.x === null) return
    const dx = e.changedTouches[0].clientX - touch.current.x
    if (Math.abs(dx) > 40) {
      goTo(index + (dx < 0 ? 1 : -1))
    }
    touch.current.x = null
  }

  const q = QUOTES[index]

  return (
    <section className="w-full max-w-3xl mx-auto p-6" aria-label="Cytaty z relacji o koncertach Wanda i Banda">
      <div
        className="relative rounded-2xl shadow-lg p-8 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60"
        onMouseEnter={stop}
        onMouseLeave={start}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Cytat */}
        <blockquote className="text-xl leading-relaxed md:text-2xl">
          <span className="select-none align-top text-4xl mr-2">“</span>
          <span className="font-medium">{q.quote}</span>
          <span className="select-none align-bottom text-4xl ml-2">”</span>
        </blockquote>

        {/* Podpis i link */}
        <div className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
          <span className="font-semibold">{q.source}</span>
          {" · "}
          <time dateTime={toISODate(q.date)}>{q.date}</time>
          {" · "}
          <a
            href={q.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted underline-offset-4 hover:opacity-80"
            aria-label={`Otwórz artykuł źródłowy: ${q.source}`}
          >
            Zobacz artykuł
          </a>
        </div>

        {/* Nawigacja */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            onClick={() => goTo(index - 1)}
            className="px-4 py-2 rounded-xl border dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800"
            aria-label="Poprzedni cytat"
          >
            ◀
          </button>
          <Dots total={QUOTES.length} index={index} goTo={goTo} />
          <button
            onClick={() => goTo(index + 1)}
            className="px-4 py-2 rounded-xl border dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800"
            aria-label="Następny cytat"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  )
}

function Dots({ total, index, goTo }: { total: number; index: number; goTo: (i: number) => void }) {
  return (
    <div className="flex items-center gap-2" role="tablist" aria-label="Wybierz slajd">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          role="tab"
          aria-selected={i === index}
          aria-label={`Slajd ${i + 1}`}
          onClick={() => goTo(i)}
          className={`h-2.5 w-2.5 rounded-full transition-all ${
            i === index ? "w-6" : "opacity-60"
          } bg-zinc-800 dark:bg-zinc-100`}
        />
      ))}
    </div>
  )
}

function toISODate(plDate: string) {
  // Oczekuje formatu dd.mm.rrrr
  const [d, m, y] = plDate.split(".")
  if (!d || !m || !y) return plDate
  const iso = new Date(Number(y), Number(m) - 1, Number(d)).toISOString()
  return iso.split("T")[0]
}
