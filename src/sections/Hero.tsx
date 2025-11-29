import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import heroPoster from '../assets/images/here-poster.webp'
import heroVideoWebm from '../assets/video/hero.webm'
import heroVideoMp4 from '../assets/video/hero.mp4'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".hero-anim", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.2,
      ease: "power2.out"
    })
  }, { scope: containerRef })

  return (
    <section id="home" ref={containerRef} className="relative h-[85vh] md:h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroPoster}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideoWebm} type="video/webm" />
        <source src={heroVideoMp4} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-5xl">
          <h1 className="hero-anim font-serif text-5xl md:text-8xl text-white font-bold tracking-normal leading-tight">
            حيث تلتقي صلابة الأرض
            <br />
            <span className="text-brand-gold">بفن العمارة</span>
          </h1>
          <div className="hero-anim mt-6 md:mt-10 flex flex-col items-center gap-6">
            <p className="font-sans text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
              الهدف الأول: نعيد صياغة مفهوم الفخامة في ليبيا
            </p>
            <div className="h-16 w-[1px] bg-gradient-to-b from-brand-gold to-transparent mt-4 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
