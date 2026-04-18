import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'الرئيسية', href: '#' },
  { name: 'من نحن', href: '#about' },
  { name: 'الخدمات', href: '#services' },
  { name: 'المشاريع', href: '#projects' },
  { name: 'فريق العمل', href: '#team' },
  { name: 'تواصل معنا', href: '#contact-form' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    
    const targetId = href.replace('#', '')
    if (targetId === '') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80 
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, y: 15 },
    open: { opacity: 1, y: 0 }
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled || isOpen ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        
        {/* Logo - Stays Right in RTL */}
        <a href="#" onClick={(e) => scrollToSection(e, '#')} className="relative flex items-center gap-3 group">
          <div className="absolute inset-0 bg-white/40 blur-xl rounded-full scale-150 -z-10 group-hover:bg-white/60 transition-all opacity-50 md:opacity-100" />
          <img src="/logo.svg" alt="شركة التطوير المتقن للإنشاءات" className="relative h-10 md:h-16 drop-shadow-md z-10 transition-transform group-hover:scale-105" />
        </a>

        {/* Desktop Links - Middle */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`font-semibold hover:text-brand-lightBlue transition-all relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-lightBlue after:transition-all hover:after:w-full ${isScrolled ? 'text-white' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button - Left in RTL desktop */}
        <div className="hidden md:block">
          <a 
            href="#contact-form" 
            onClick={(e) => scrollToSection(e, '#contact-form')}
            className="bg-brand-blue hover:bg-brand-lightBlue text-white px-7 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-brand-blue/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            طلب عرض سعر
          </a>
        </div>

        {/* Mobile Toggle - Stays Left in RTL mobile */}
        <button 
          className={`md:hidden p-2 rounded-lg transition-colors ${isOpen || isScrolled ? 'text-white' : 'text-white bg-black/20 backdrop-blur-sm'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </motion.div>
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden absolute top-full left-0 w-full bg-brand-navy border-t border-white/10 flex flex-col p-6 shadow-2xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <motion.a 
                key={link.name} 
                href={link.href} 
                variants={itemVariants}
                className="text-white font-bold py-4 border-b border-white/5 flex items-center justify-between group"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                <span>{link.name}</span>
                <div className="w-2 h-2 rounded-full bg-brand-lightBlue opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
            <motion.a 
              variants={itemVariants}
              href="#contact-form" 
              className="bg-brand-blue text-center text-white px-6 py-4 rounded-2xl mt-6 font-bold shadow-lg"
              onClick={(e) => scrollToSection(e, '#contact-form')}
            >
              طلب عرض سعر
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  )
}
