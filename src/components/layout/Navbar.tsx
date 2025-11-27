export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full bg-brand-dark/10 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <span className="font-serif text-3xl font-bold text-brand-gold tracking-widest cursor-pointer">الهدف الأول</span>
        <nav className="hidden md:flex items-center gap-8 text-base font-medium text-brand-stone/90 font-sans">
          <a href="#home" className="hover:text-brand-gold transition-colors">الرئيسية</a>
          <a href="#collection" className="hover:text-brand-gold transition-colors">منتجاتنا</a>
          <a href="#projects" className="hover:text-brand-gold transition-colors">مشاريعنا</a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-sm border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition-all duration-300 font-bold"
          >
            اطلب استشارة
          </a>
        </nav>
      </div>
    </header>
  )
}
