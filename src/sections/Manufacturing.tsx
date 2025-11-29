import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import img1 from '../assets/images/s5-1.webp'
import img2 from '../assets/images/s5-2.webp'
import img3 from '../assets/images/s5-3.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Manufacturing() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".manuf-item-anim", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true
      },
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.out"
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} id="manufacturing" className="relative py-32 bg-brand-charcoal overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-brand-stone/10 pb-8">
          <h2 className="text-4xl md:text-6xl font-serif text-white">دقة التصنيع</h2>
          <p className="text-brand-stone/60 font-sans mt-4 md:mt-0 max-w-md text-lg">
            نستخدم أحدث تقنيات القص (CNC) و (Waterjet) لضمان مقاسات دقيقة وتشطيبات خالية من العيوب.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'قص الليزر و Waterjet', desc: 'دقة متناهية للحواف والزوايا المعقدة', img: img1 },
            { title: 'معالجة الأسطح', desc: 'جلي وتلميع بأعلى المعايير العالمية', img: img2 },
            { title: 'التركيب', desc: 'فريق هندسي متخصص للتنفيذ في الموقع', img: img3 },
          ].map((item, i) => (
            <div
              key={i}
              className="manuf-item-anim group cursor-pointer"
            >
              <div className="h-80 overflow-hidden rounded-sm mb-6 border border-white/5">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-serif text-brand-gold mb-3">{item.title}</h3>
              <p className="text-brand-stone/70 font-sans text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
