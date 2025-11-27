export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-brand-stone pt-24 pb-10 border-t border-brand-gold/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="text-right">
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
              لنبنِ شيئاً <br />
              <span className="text-brand-gold">خالداً.</span>
            </h2>
            <a
              href="https://wa.me/218917080090"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 text-xl md:text-2xl border-b border-brand-gold pb-2 transition-colors group"
            >
              <span className="group-hover:-translate-x-2 transition-transform duration-300">↗</span>
              تواصل معنا عبر واتساب
            </a>
          </div>
          <div className="flex flex-col justify-end items-start lg:items-end text-right space-y-8 font-sans">
            <div className="w-full lg:w-auto">
              <h4 className="text-brand-gold text-sm font-bold mb-2">العنوان</h4>
              <p className="text-xl text-white">ليبيا، طرابلس</p>
              <p className="text-brand-stone/60">طريق السكة، بالقرب من...</p>
            </div>
            <div className="w-full lg:w-auto">
              <h4 className="text-brand-gold text-sm font-bold mb-2">الهاتف</h4>
              <div className="flex flex-col items-end gap-1" dir="ltr">
                <a href="tel:+218917080090" className="text-xl text-white transition-colors hover:text-brand-gold">+218 91 708 0090</a>
                <a href="tel:+218927080090" className="text-xl text-white transition-colors hover:text-brand-gold">+218 92 708 0090</a>
              </div>
            </div>
            <div className="w-full lg:w-auto">
              <h4 className="text-brand-gold text-sm font-bold mb-2">البريد الإلكتروني</h4>
              <a href="mailto:info@firstgoal.ly" className="text-xl text-white transition-colors hover:text-brand-gold">info@firstgoal.ly</a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm opacity-60 font-sans">
          <p className="order-2 md:order-1 mt-4 md:mt-0">© 2025 الهدف الأول للرخام والجرانيت. جميع الحقوق محفوظة.</p>
          <div className="flex gap-8 order-1 md:order-2">
            <a href="#" className="transition-colors hover:text-brand-gold">Instagram</a>
            <a href="#" className="transition-colors hover:text-brand-gold">Facebook</a>
            <a href="#" className="transition-colors hover:text-brand-gold">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
