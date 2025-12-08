import { Star, Quote } from "lucide-react"
import WandaBandaQuotesSlider from "./quotes-slider"

export function TestimonialSection() {
  const testimonials = [
    {
      name: "Marek Kowalski",
      role: "Organizator Festiwalu Rockowego",
      content:
        "Wanda i Banda to absolutna legenda! Ich koncert plenerowy był największą atrakcją naszego festiwalu. Publiczność szalała, a energia zespołu była niesamowita. Profesjonalizm na najwyższym poziomie.",
      rating: 5,
    },
    {
      name: "Anna Nowak",
      role: "Dyrektor HR, Firma Technologiczna",
      content:
        "Szukaliśmy zespołu na imprezę firmową i trafiliśmy w dziesiątkę! Wanda i Banda potrafiła rozkręcić nawet najbardziej nieśmiałych gości. Muzyka na żywo w ich wykonaniu to czysta magia.",
      rating: 5,
    },
    {
      name: "Piotr Wiśniewski",
      role: "Burmistrz Miasta",
      content:
        "Koncert podczas Dni Miasta przeszedł nasze najśmielsze oczekiwania. Zespół rockowy tej klasy to rzadkość. Hity znane wszystkim, świetny kontakt z publicznością. Gorąco polecamy!",
      rating: 5,
    },
    {
      name: "Katarzyna Lewandowska",
      role: "Organizatorka Wesel",
      content:
        "Moi klienci chcieli czegoś wyjątkowego na wesele i Wanda i Banda była strzałem w dziesiątkę. Goście do dziś wspominają ten koncert. To nie tylko zespół – to prawdziwe show!",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials-section" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Recenzje</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">Opinie organizatorów, mediów i publiczności</p>
        </div>

        {/* Client testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <Quote className="w-10 h-10 text-[#60A5FA] flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#60A5FA] text-[#60A5FA]" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">{testimonial.content}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press reviews slider */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Co o nas piszą media</h3>
          <WandaBandaQuotesSlider />
        </div>
      </div>
    </section>
  )
}
