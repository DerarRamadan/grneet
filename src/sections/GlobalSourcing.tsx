import { motion } from 'framer-motion'
import { useState } from 'react'

const locations = [
  { id: 1, country: 'إيطاليا', top: '32%', left: '51%', material: 'كرارا & ستواريو' },
  { id: 2, country: 'إسبانيا', top: '34%', left: '47%', material: 'كريما مارفل' },
  { id: 3, country: 'تركيا', top: '35%', left: '55%', material: 'رخام رمادي' },
  { id: 4, country: 'الهند', top: '42%', left: '68%', material: 'جرانيت أسود' },
  { id: 5, country: 'مصر', top: '40%', left: '54%', material: 'جلالة & صني' },
  { id: 6, country: 'عمان', top: '43%', left: '58%', material: 'بيج عماني' },
]

export default function GlobalSourcing() {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <section className="relative h-screen bg-brand-charcoal overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-10 z-10 text-center">
        <h2 className="text-brand-gold font-serif text-4xl tracking-wide">نستورد من العالم</h2>
        <p className="text-brand-stone/60 font-sans text-lg mt-2">من قلب المحاجر العالمية إلى طرابلس</p>
      </div>

      <div className="relative w-full max-w-6xl aspect-[1.8/1] opacity-80 overflow-hidden" dir="ltr">
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-contain bg-center opacity-20 invert grayscale scale-[1.12] md:scale-100 transition-transform"></div>

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
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 bg-black/90 border border-brand-gold/30 p-3 rounded text-center pointer-events-none z-20"
            >
              <h4 className="text-brand-gold font-serif text-lg">{loc.country}</h4>
              <p className="text-white/70 text-xs font-sans mt-1">{loc.material}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
