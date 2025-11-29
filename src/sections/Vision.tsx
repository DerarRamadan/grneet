import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Vision() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(sliderRef.current, {
      x: '100%',
      duration: 20,
      repeat: -1,
      ease: 'linear'
    })
  }, { scope: containerRef })

  return (
    <section className="py-20 bg-brand-gold overflow-hidden flex items-center" ref={containerRef}>
      <div className="flex whitespace-nowrap overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-20 text-brand-dark font-serif text-6xl md:text-8xl font-bold tracking-tight"
        >
          <span>الجودة</span>
          <span>•</span>
          <span>الإتقان</span>
          <span>•</span>
          <span>الريادة</span>
          <span>•</span>
          <span>الهدف الأول</span>
          <span>•</span>
          <span>الجودة</span>
          <span>•</span>
          <span>الإتقان</span>
          <span>•</span>
          <span>الريادة</span>
          <span>•</span>
          <span>الهدف الأول</span>
        </div>
      </div>
    </section>
  )
}
