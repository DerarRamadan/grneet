import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const phrase = "الرخام ليس مجرد حجر؛ إنه تاريخ، ضغط، وزمن صيغ عبر ملايين السنين. في شركة الهدف الأول، لا نبيع المواد فحسب، بل ننتقي لك أرقى كنوز الأرض لتبني إرثاً يدوم."

export default function Philosophy() {
  const containerRef = useRef<HTMLDivElement>(null)
  const words = phrase.split(' ')

  useGSAP(() => {
    // Section entry
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true
      },
      opacity: 0,
      scale: 0.98,
      duration: 0.6,
      ease: "power2.out"
    })

    // Word staggering
    gsap.from(".word-anim", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        once: true
      },
      opacity: 0,
      y: 20,
      stagger: 0.08,
      delay: 0.2,
      duration: 0.5,
      ease: "power2.out"
    })
  }, { scope: containerRef })

  return (
    <section
      id="philosophy"
      ref={containerRef}
      className="h-[100dvh] flex items-center justify-center bg-brand-dark px-6 py-16 md:py-32 snap-start"
    >
      <div className="max-w-4xl mx-auto text-center rtl:text-center">
        <div className="flex flex-wrap justify-center gap-x-1.5 gap-y-2 md:gap-x-4">
          {words.map((word, index) => (
            <span
              key={index}
              className={`word-anim inline-block ${
                word.includes('الهدف') || word.includes('الأول') ? 'text-brand-gold' : 'text-brand-stone'
              } text-2xl md:text-5xl font-serif leading-relaxed`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
