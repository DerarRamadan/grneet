import { useRef } from 'react'
import { motion } from 'framer-motion'

// Using Vite's import.meta.glob to dynamically load all images
const equipmentModules = import.meta.glob('../assets/equipment-mechanisms/*.{png,jpg,jpeg}', { eager: true, import: 'default' }) as Record<string, string>
const equipmentImages = Object.values(equipmentModules)

export default function Machinery() {
  const containerRef = useRef<HTMLDivElement>(null)

  const images = equipmentImages.length > 0 ? equipmentImages : []
  
  // Split images into two rows for the marquee
  const half = Math.ceil(images.length / 2) || 1
  const row1 = images.slice(0, half)
  const row2 = images.slice(half)

  const MarqueeRow = ({ rowImages, direction = 'left', speed = 80 }: { rowImages: string[], direction?: 'left'|'right', speed?: number }) => (
    // dir="ltr" is CRITICAL here to prevent RTL layout from breaking the CSS transform boundaries
    <div className="relative flex w-full overflow-hidden group" dir="ltr">
      <motion.div 
        className="flex w-max gap-8 py-4"
        animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        {/* We use 4 copies to ensure it safely loops. x moving by 50% means it shifts exactly 2 copies. */}
        {[...rowImages, ...rowImages, ...rowImages, ...rowImages].map((img, i) => (
          <div 
            key={i} 
            className="relative w-[280px] md:w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 border-2 border-dashed border-white/20 bg-brand-navy backdrop-blur-sm hover:border-brand-lightBlue transition-all duration-300 cursor-pointer shadow-xl group/card"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent z-10 opacity-60 group-hover/card:opacity-90 transition-opacity duration-300">
              <div className="absolute bottom-6 left-6 right-6 text-center transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                <div className="h-1 w-16 bg-brand-lightBlue mx-auto mb-3" />
                <p className="text-white font-bold text-lg font-sans tracking-wide">آلية متطورة</p>
              </div>
            </div>
            <img 
              src={img} 
              alt={`Machinery ${i}`} 
              className="w-full h-full object-cover transform scale-100 group-hover/card:scale-110 transition-transform duration-700 block" 
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )

  return (
    <section id="machinery" ref={containerRef} className="py-24 bg-[#0a0f18] relative overflow-hidden font-sans border-t-4 border-dashed border-slate-600">
      
      {/* Background decorations - Construction site vibe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-navy via-[#0a0f18] to-[#0a0f18] z-0 pointer-events-none" />

      {/* Subtle Road SVG Background */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1/3 opacity-5 pointer-events-none z-0 rotate-12">
        <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="w-full h-full text-white fill-current">
           <path d="M40,0 L60,0 L60,1000 L40,1000 Z" />
           <path d="M48,0 L52,0 L52,1000 L48,1000 Z" className="text-brand-navy" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl text-white mb-6 font-bold tracking-tight">
            أسطول <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lightBlue to-cyan-300">الآليات</span>
          </h2>
          <div className="flex justify-center items-center w-full max-w-xs mx-auto mb-8 gap-2">
            <div className="h-2 w-8 bg-brand-lightBlue rounded-sm" />
            <div className="h-2 w-8 bg-brand-lightBlue rounded-sm" />
            <div className="h-2 w-8 bg-brand-lightBlue rounded-sm" />
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            نمتلك أسطولاً حديثاً ومتكاملاً من الآليات والمعدات الثقيلة لضمان إنجاز أضخم المشاريع ضمن الجداول الزمنية المحددة وبأعلى مستويات الجودة.
          </p>
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col w-full py-8">
        {images.length > 0 ? (
          <>
            <MarqueeRow rowImages={row1} direction="left" speed={90} />
            
            {/* The Road Separator */}
            <div className="w-full overflow-hidden my-6 opacity-30 flex items-center justify-center min-w-full">
              <div className="w-[200%] border-t-4 border-dashed border-brand-lightBlue h-1 animate-pulse"></div>
            </div>

            {row2.length > 0 && <MarqueeRow rowImages={row2} direction="right" speed={100} />}
          </>
        ) : (
          <div className="text-center text-slate-500 py-10">جارٍ تحميل الآليات...</div>
        )}
      </div>

    </section>
  )
}
