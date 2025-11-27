import { useState } from 'react'

export default function ArtificialMarble() {
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <section className="py-24 bg-brand-charcoal flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h2 className="text-brand-gold font-serif text-4xl md:text-5xl mb-3">حلول عصرية</h2>
        <p className="text-brand-stone/70 font-sans text-lg">مقارنة: الرخام الطبيعي مقابل الرخام الصناعي</p>
      </div>
      <div className="relative w-full max-w-6xl aspect-[16/9] border border-white/10 rounded-lg overflow-hidden cursor-ew-resize select-none" dir="ltr">
        <img
          src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1200&auto=format&fit=crop"
          alt="Artificial Stone"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 overflow-hidden border-r-2 border-brand-gold" style={{ width: `${sliderPosition}%` }}>
          <img
            src="https://images.unsplash.com/photo-1618221639252-9c3f4a4c6883?q=80&w=1200&auto=format&fit=crop"
            alt="Natural Marble"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: '100%', maxWidth: 'none' }}
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
        <div className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-black font-bold shadow-lg shadow-black/50 pointer-events-none z-10" style={{ left: `calc(${sliderPosition}% - 20px)` }}>
          ⇄
        </div>
        <span className="absolute bottom-6 left-6 bg-black/70 px-4 py-2 text-white rounded font-sans border border-white/20">رخام طبيعي</span>
        <span className="absolute bottom-6 right-6 bg-black/70 px-4 py-2 text-white rounded font-sans border border-white/20">رخام صناعي</span>
      </div>
    </section>
  )
}
