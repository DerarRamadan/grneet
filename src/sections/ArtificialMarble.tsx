import { useState, useRef, useEffect } from 'react'
import artificialImg from '../assets/images/s6-artificial.webp'
import naturalImg from '../assets/images/s6-natural.webp'
import type { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react'

export default function ArtificialMarble() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
      setSliderPosition(percent)
    }
  }

  const onMouseMove = (e: ReactMouseEvent) => {
    if (isDragging) handleMove(e.clientX)
  }

  const onTouchMove = (e: ReactTouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX)
  }

  useEffect(() => {
    const handleUp = () => setIsDragging(false)
    window.addEventListener('mouseup', handleUp)
    window.addEventListener('touchend', handleUp)
    return () => {
      window.removeEventListener('mouseup', handleUp)
      window.removeEventListener('touchend', handleUp)
    }
  }, [])

  return (
    <section className="py-24 bg-brand-charcoal flex flex-col items-center justify-center select-none">
      <div className="text-center mb-12 px-4">
        <h2 className="text-brand-gولد font-serif text-4xl md:text-6xl mb-4">حلول عصرية</h2>
        <p className="text-brand-stone/70 font-sans text-lg max-w-2xl mx-auto">اختر ما يناسب مساحتك: دفء الرخام الطبيعي أو عملية الرخام الصناعي</p>
      </div>
      <div
        ref={containerRef}
        className="relative w-full max-w-6xl aspect-[16/9] md:aspect-[21/9] border border-white/10 rounded-lg overflow-hidden cursor-ew-resize"
        dir="ltr"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        onMouseMove={onMouseMove}
        onTouchMove={onTouchMove}
        onClick={(e) => handleMove(e.clientX)}
      >
        <img src={artificialImg} alt="Artificial" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 w-full h-full" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <img src={naturalImg} alt="Natural" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="absolute top-0 bottom-0 w-1 bg-brand-gold z-20" style={{ left: `${sliderPosition}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-black font-bold shadow-[0_0_20px_rgba(212,175,55,0.5)]">
            ⇄
          </div>
        </div>
        <div className="absolute bottom-8 left-8 z-10">
          <span className="bg-black/60 backdrop-blur-md border border-brand-gold/30 text-brand-gold px-6 py-2 rounded-full font-serif text-xl">رخام طبيعي</span>
        </div>
        <div className="absolute bottom-8 right-8 z-10">
          <span className="bg-white/90 backdrop-blur-md text-black px-6 py-2 rounded-full font-serif text-xl">رخام صناعي</span>
        </div>
      </div>
    </section>
  )
}
