import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

type PreloaderProps = {
  loading: boolean
  onComplete: () => void
}

export default function Preloader({ loading, onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (loading) {
      // Initial states
      gsap.set(titleRef.current, { scale: 0.98, opacity: 0 })
      gsap.set(lineRef.current, { scaleX: 0 })
      
      // Entry animation
      const tl = gsap.timeline()
      tl.to(titleRef.current, { 
        scale: 1, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power3.out" 
      })
      .to(lineRef.current, { 
        scaleX: 1, 
        duration: 1, 
        ease: "power1.inOut" 
      }, "-=0.4")
    } else {
      // Exit animation
      gsap.to(containerRef.current, {
        yPercent: -100,
        duration: 0.6,
        ease: "power2.in",
        onComplete: onComplete
      })
    }
  }, { scope: containerRef, dependencies: [loading] })

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark"
    >
      <div className="relative flex flex-col items-center justify-center">
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-serif font-bold text-brand-gold"
        >
          القاضي للرخام
        </h1>

        <div
          ref={lineRef}
          className="mt-4 h-px w-40 bg-brand-gold origin-left"
        />
      </div>
    </div>
  )
}
