import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

type PreloaderProps = {
  loading: boolean
  onComplete: () => void
}

export default function Preloader({ loading, onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const logoWrapperRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLImageElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (loading) {
      // Initial states
      gsap.set(logoWrapperRef.current, { scale: 0.5, opacity: 0, rotationY: -90 })
      gsap.set(glowRef.current, { scale: 0.5, opacity: 0 })
      gsap.set(titleRef.current, { opacity: 0, y: 20 })
      gsap.set(lineRef.current, { scaleX: 0 })
      
      // Entry animation sequence
      const tl = gsap.timeline()
      
      // 1. Logo 3D Spin & Scale Reveal
      tl.to(logoWrapperRef.current, { 
        scale: 1, 
        opacity: 1, 
        rotationY: 0,
        duration: 1.5, 
        ease: "expo.out" 
      })
      // 2. Background glow expands and pulses
      .to(glowRef.current, {
        scale: 1.2,
        opacity: 0.8,
        duration: 1.5,
        ease: "power2.out"
      }, "-=1.0")
      // 3. Title sliding up
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.8")
      // 4. Loading line expands
      .to(lineRef.current, { 
        scaleX: 1, 
        duration: 1.5, 
        ease: "power2.inOut" 
      }, "-=1")

      // Continuous Floating animations after reveal
      gsap.to(logoRef.current, {
        y: -12,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5
      })

      gsap.to(glowRef.current, {
        scale: 1.4,
        opacity: 0.5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.5
      })
      
    } else {
      // Exit animation
      const tl = gsap.timeline({ onComplete })
      
      tl.to([logoWrapperRef.current, titleRef.current, lineRef.current], {
        scale: 1.1,
        opacity: 0,
        y: -30,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.in"
      })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut"
      }, "-=0.3")
    }
  }, { scope: containerRef, dependencies: [loading] })

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-navy"
      style={{ perspective: "1000px" }}
    >
      <div className="relative flex flex-col items-center justify-center gap-8">
        
        {/* Logo Container with 3D rotation */}
        <div ref={logoWrapperRef} className="relative px-8 py-6 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
          {/* Spotlight Glow Behind Logo */}
          <div 
            ref={glowRef}
            className="absolute inset-0 bg-white/40 blur-[50px] rounded-full scale-125 z-0" 
          />
          
          <img 
            ref={logoRef}
            src="/logo.svg" 
            alt="شركة التطوير المتقن" 
            className="relative w-40 md:w-56 drop-shadow-2xl z-10"
          />
        </div>

        <h1
          ref={titleRef}
          className="text-2xl md:text-3xl font-sans font-bold text-brand-white drop-shadow-md tracking-wide"
        >
          شركة التطوير المتقن
        </h1>

        {/* Loading Line */}
        <div
          ref={lineRef}
          className="h-1 w-48 bg-brand-blue origin-center rounded-full opacity-80"
        />
      </div>
    </div>
  )
}
