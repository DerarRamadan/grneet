import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="relative flex items-center gap-3">
          {/* Subtle white glow / spotlight behind the logo */}
          <div className="absolute inset-0 bg-white/70 blur-xl rounded-full scale-150 -z-10" />
          <img src="/logo.svg" alt="شركة التطوير المتقن للإنشاءات" className="relative h-12 md:h-16 drop-shadow-md z-10" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-semibold hover:text-brand-lightBlue transition-colors ${isScrolled ? 'text-white' : 'text-white/90'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a href="#contact-form" className="bg-brand-blue hover:bg-brand-lightBlue text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md">
            طلب عرض سعر
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-navy border-t border-white/10 flex flex-col p-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white font-bold py-3 border-b flex border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact-form" className="bg-brand-blue text-center text-white px-6 py-3 rounded-xl mt-4 font-bold" onClick={() => setIsOpen(false)}>
            طلب عرض سعر
          </a>
        </div>
      )}

    </nav>
  )
}
