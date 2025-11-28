import { useState } from 'react'
import { motion, AnimatePresence, animate } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    closed: { x: '100%', opacity: 0 },
    open: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  }

  const scrollToId = (id: string) => {
    const el = document.getElementById(id) || (document.querySelector(`[id="${id}"]`) as HTMLElement | null)
    const header = document.querySelector('header') as HTMLElement | null
    const offset = header ? header.offsetHeight : 0
    if (!el) return
    const start = window.scrollY
    const end = el.getBoundingClientRect().top + window.scrollY - offset
    document.body.classList.add('no-snap')
    animate(0, end - start, {
      duration: 0.85,
      ease: [0.33, 1, 0.68, 1],
      onUpdate: (latest) => window.scrollTo(0, start + latest),
      onComplete: () => document.body.classList.remove('no-snap'),
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

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 flex flex-col gap-1.5 p-2">
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-brand-gold block origin-center transition-transform"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-8 h-0.5 bg-brand-gold block transition-opacity"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-8 h-0.5 bg-brand-gold block origin-center transition-transform"
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
