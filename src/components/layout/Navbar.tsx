import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMenuRendered, setIsMenuRendered] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) setIsMenuRendered(true)
  }, [isOpen])

  useGSAP(() => {
    if (isOpen && menuRef.current) {
      gsap.fromTo(menuRef.current,
        { x: '100%', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      )
    } else if (!isOpen && isMenuRendered && menuRef.current) {
      gsap.to(menuRef.current, {
        x: '100%',
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => setIsMenuRendered(false)
      })
    }
  }, { dependencies: [isOpen, isMenuRendered] })

  const scrollToId = (id: string) => {
    const el = document.getElementById(id) || (document.querySelector(`[id="${id}"]`) as HTMLElement | null)
    const header = document.querySelector('header') as HTMLElement | null
    const offset = header ? header.offsetHeight : 0
    if (!el) return
    
    // const start = window.scrollY
    const end = el.getBoundingClientRect().top + window.scrollY - offset
    
    document.body.classList.add('no-snap')
    gsap.to(window, {
      duration: 0.85,
      scrollTo: { y: end, autoKill: false },
      ease: "power2.inOut", // Approximate to [0.33, 1, 0.68, 1]
      onComplete: () => document.body.classList.remove('no-snap')
    })
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-brand-dark/10 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <span className="font-serif text-2xl md:text-3xl font-bold text-brand-gold tracking-widest cursor-pointer z-50 relative">
            الهدف الأول
          </span>

          <nav className="hidden md:flex items-center gap-8 text-base font-medium text-brand-stone/90 font-sans">
            <button onClick={() => scrollToId('home')} className="hover:text-brand-gold transition-colors">الرئيسية</button>
            <button onClick={() => scrollToId('philosophy')} className="hover:text-brand-gold transition-colors">فلسفتنا</button>
            <button onClick={() => scrollToId('collection')} className="hover:text-brand-gold transition-colors">منتجاتنا</button>
            <button onClick={() => scrollToId('gallery')} className="hover:text-brand-gold transition-colors">المعرض</button>
            <button onClick={() => scrollToId('sourcing')} className="hover:text-brand-gold transition-colors">المصادر العالمية</button>
            <button onClick={() => scrollToId('manufacturing')} className="hover:text-brand-gold transition-colors">التصنيع</button>
            <button onClick={() => scrollToId('projects')} className="hover:text-brand-gold transition-colors">مشاريعنا</button>
            <a
              href="#contact"
              className="px-6 py-2 rounded-sm border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition-all duration-300 font-bold"
            >
              اطلب استشارة
            </a>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 flex flex-col gap-1.5 p-2 group">
            <span
              className={`w-8 h-0.5 bg-brand-gold block origin-center transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-8 h-0.5 bg-brand-gold block transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`w-8 h-0.5 bg-brand-gold block origin-center transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </header>

      {isMenuRendered && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl flex flex-col items-center justify-center text-center space-y-8 md:hidden"
        >
          <button onClick={() => { setIsOpen(false); scrollToId('home') }} className="text-3xl font-serif text-white hover:text-brand-gold">الرئيسية</button>
          <button onClick={() => { setIsOpen(false); scrollToId('philosophy') }} className="text-3xl font-serif text-white hover:text-brand-gold">فلسفتنا</button>
          <button onClick={() => { setIsOpen(false); scrollToId('collection') }} className="text-3xl font-serif text-white hover:text-brand-gold">منتجاتنا</button>
          <button onClick={() => { setIsOpen(false); scrollToId('gallery') }} className="text-3xl font-serif text-white hover:text-brand-gold">المعرض</button>
          <button onClick={() => { setIsOpen(false); scrollToId('sourcing') }} className="text-3xl font-serif text-white hover:text-brand-gold">المصادر العالمية</button>
          <button onClick={() => { setIsOpen(false); scrollToId('manufacturing') }} className="text-3xl font-serif text-white hover:text-brand-gold">التصنيع</button>
          <button onClick={() => { setIsOpen(false); scrollToId('projects') }} className="text-3xl font-serif text-white hover:text-brand-gold">مشاريعنا</button>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-3xl font-serif text-brand-gold border-b border-brand-gold pb-2">اتصل بنا</a>
        </div>
      )}
    </>
  )
}
