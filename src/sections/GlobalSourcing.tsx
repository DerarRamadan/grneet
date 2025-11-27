import { motion } from 'framer-motion'
import { useState } from 'react'

const locations = [
  { id: 1, country: 'Italy', top: '32%', left: '51%', material: 'Carrara & Statuario' },
  { id: 2, country: 'Spain', top: '34%', left: '47%', material: 'Crema Marfil' },
  { id: 3, country: 'Turkey', top: '35%', left: '55%', material: 'Grey Marble' },
  { id: 4, country: 'India', top: '42%', left: '68%', material: 'Absolute Black' },
  { id: 5, country: 'Egypt', top: '40%', left: '54%', material: 'Galala & Sunny' },
  { id: 6, country: 'Oman', top: '43%', left: '58%', material: 'Omani Beige' },
]

export default function GlobalSourcing() {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <section className="relative h-screen bg-brand-charcoal overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-10 z-10 text-center">
        <h2 className="text-brand-gold font-serif text-3xl tracking-widest uppercase">Global Sourcing</h2>
        <p className="text-brand-stone/60 font-sans text-sm mt-2">From the World to Tripoli</p>
      </div>

      <div className="relative w-full max-w-6xl aspect-[1.8/1] opacity-80">
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-contain bg-center opacity-20 invert grayscale"></div>

        {locations.map((loc) => (
          <div
            key={loc.id}
            className="absolute group cursor-pointer"
            style={{ top: loc.top, left: loc.left }}
            onMouseEnter={() => setActiveId(loc.id)}
            onMouseLeave={() => setActiveId(null)}
          >
            <div className="absolute -inset-2 bg-brand-gold/30 rounded-full animate-ping"></div>
            <div className="relative w-3 h-3 bg-brand-gold rounded-full shadow-[0_0_10px_#D4AF37]"></div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: activeId === loc.id ? 1 : 0, y: activeId === loc.id ? -10 : 10 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-black/90 border border-brand-gold/30 p-2 rounded text-center pointer-events-none z-20"
            >
              <h4 className="text-brand-gold font-serif text-sm">{loc.country}</h4>
              <p className="text-white/70 text-[10px]">{loc.material}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
