import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import quarryImg from '../assets/images/yossanunj-T6HmS2NFaSM-unsplash.webp'

gsap.registerPlugin(ScrollTrigger)

export default function RawMaterial() {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    // Parallax
    gsap.fromTo(".parallax-img", 
      { y: "-20%" },
      {
        y: "20%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      }
    )

    // Content Opacity Fade In/Out
    // 0-20% fade in, 90-100% fade out
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

    // Map framer [0, 0.2, 0.9, 1] -> [0, 1, 1, 0]
    // Total duration 1.
    tl.fromTo(".content-box", { opacity: 0 }, { opacity: 1, duration: 0.2, ease: "none" })
      .to(".content-box", { opacity: 1, duration: 0.7, ease: "none" }) // hold
      .to(".content-box", { opacity: 0, duration: 0.1, ease: "none" })

  }, { scope: containerRef })

  return (
    <section id="raw-material" ref={containerRef} className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-brand-dark">
      <div className="absolute inset-0 z-0 bg-gradient-radial from-brand-charcoal to-brand-dark" />
      <div className="absolute inset-0 z-0">
        <img src={quarryImg} alt="محجر رخام" className="parallax-img w-full h-[140%] -translate-y-[20%] object-cover brightness-50" loading="lazy" />
      </div>

      <div className="content-box relative z-10 text-center p-8 md:p-12 border border-white/10 bg-black/40 backdrop-blur-md max-w-3xl mx-4 opacity-0">
        <h2 className="text-5xl md:text-8xl font-serif text-white font-bold tracking-tighter">
          قوة الخام
        </h2>
        <p className="mt-6 text-brand-stone/90 text-lg md:text-2xl font-sans leading-relaxed">
          مستخرجة من قلب الجبال.. نقية، صلبة، وجاهزة لنصنع منها إرثاً معمارياً.
        </p>
      </div>
    </section>
  )
}
