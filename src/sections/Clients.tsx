import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const clients = [
  'شركة الإعمار',
  'مجموعة القابضة',
  'المكتب الهندسي الحديث',
  'أبراج ليبيا',
  'المتوسط للمقاولات',
  'مؤسسة البنيان',
  'الدار للتطوير',
  'مجموعة الفنادق',
]

export default function Clients() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".client-item", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true
      },
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out"
    })
  }, { scope: containerRef })

  return (
    <section className="py-24 bg-brand-charcoal border-y border-white/5" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-brand-gold font-serif text-2xl mb-12 opacity-80">شركاء النجاح</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {clients.map((client, i) => (
            <div
              key={i}
              className="client-item text-xl md:text-2xl font-serif text-brand-stone/40 hover:text-white transition-colors duration-300"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
