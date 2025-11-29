import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import p1 from '../assets/images/s8-1.webp'
import p2 from '../assets/images/s8-2.webp'
import p3 from '../assets/images/s8-3.webp'
import p4 from '../assets/images/s8-4.webp'
import p5 from '../assets/images/s8-5.webp'

gsap.registerPlugin(ScrollTrigger)

const items = [
  { id: 1, title: 'أدراج رخامية', size: 'large', img: p1 },
  { id: 2, title: 'أرضيات فاخرة', size: 'small', img: p2 },
  { id: 3, title: 'مغاسل', size: 'small', img: p3 },
  { id: 4, title: 'واجهات', size: 'large', img: p4 },
  { id: 5, title: 'ديكور جداري', size: 'small', img: p5 },
]

export default function ProductsGrid() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".grid-item-anim", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} id="collection" className="py-24 bg-brand-dark px-6">
      <div className="mx-auto max-w-7xl mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">التفاصيل المعمارية</h2>
        <p className="text-brand-stone/60 font-sans">حلول متكاملة من الأرضيات إلى الأسقف</p>
      </div>
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {items.map((item) => (
          <div
            key={item.id}
            className={`grid-item-anim relative group overflow-hidden rounded-sm border border-white/5 ${
              item.size === 'large' ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'
            }`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-4 right-4 z-10">
              <h3 className="text-white font-serif text-xl">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
