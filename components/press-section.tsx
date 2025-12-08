import WandaBandaQuotesSlider from "./quotes-slider"

export function PressSection() {
  return (
    <section id="press-section" className="w-full px-5 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Co o nas piszą</h2>
          <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Relacje z koncertów i festiwali – zobacz, jak media opisują nasze występy
          </p>
        </div>

        <WandaBandaQuotesSlider />
      </div>
    </section>
  )
}
