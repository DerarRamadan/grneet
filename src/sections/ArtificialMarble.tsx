import { useState } from 'react'

export default function ArtificialMarble() {
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <section className="relative h-[80vh] bg-brand-charcoal overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-10 z-10 text-center">
        <h2 className="text-white font-serif text-4xl mb-2">حلول عصرية</h2>
        <p className="text-brand-stone/70">الرخام الصناعي: جمال الطبيعة بمتانة التكنولوجيا</p>
      </div>
      <div className="relative w-full max-w-5xl aspect-video border-4 border-brand-gold/20 rounded-lg overflow-hidden cursor-ew-resize group">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
          alt="Natural"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
          <img
            src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1200&auto=format&fit=crop"
            alt="Artificial"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: '100vw', maxWidth: '1280px' }}
          />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        />
        <div className="absolute top-0 bottom-0 w-1 bg-brand-gold z-10 pointer-events-none" style={{ left: `${sliderPosition}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-black font-bold">⇄</div>
        </div>
        <span className="absolute bottom-5 right-5 bg-black/50 px-3 py-1 text-white rounded pointer-events-none">طبيعي</span>
        <span className="absolute bottom-5 left-5 bg-black/50 px-3 py-1 text-white rounded pointer-events-none">صناعي</span>
      </div>
    </section>
  )
}
