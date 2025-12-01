import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import graniteImg from '../assets/images/s4.webp'

gsap.registerPlugin(ScrollTrigger)

export default function GraniteStrength() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    gsap.from(textRef.current, {
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        once: true
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: "power2.out"
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative flex flex-col md:flex-row min-h-screen bg-brand-dark">
      <div className="flex-1 flex items-center justify-center p-8 md:p-24 order-2 md:order-1">
        <div className="max-w-xl text-right">
          <h2
            ref={textRef}
            className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight"
          >
            صلابة <br />
            <span className="text-brand-stone/50">تتحدى الزمن</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-stone/80 font-sans leading-loose mb-8">
            الجرانيت هو الخيار الأمثل للواجهات الخارجية والأماكن ذات الحركة الكثيفة. في "القاضي للرخام"، نوفر لك جرانيت عالي الكثافة يقاوم العوامل الجوية، الحرارة، والخدش، ليظل محافظاً على رونقه لعقود.
          </p>
          <ul className="grid grid-cols-2 gap-y-6 gap-x-4 font-sans text-brand-gold text-lg">
            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0" /> مقاوم للحرارة</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0" /> لا يمتص السوائل</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0" /> صلابة الماس</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0" /> ألوان طبيعية</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 relative h-[50vh] md:h-auto order-1 md:order-2">
        <img
          src={graniteImg}
          alt="Granite Texture"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent opacity-80" />
      </div>
    </section>
  )
}
