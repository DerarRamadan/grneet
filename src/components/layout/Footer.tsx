export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-brand-stone pt-24 pb-10 border-t border-brand-gold/20">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
            لنبنِ شيئاً <br />
            <span className="text-brand-gold">خالداً.</span>
          </h2>
          <a href="https://wa.me/218917080090" className="inline-flex items-center gap-4 text-2xl border-b border-brand-gold pb-2">
            تواصل معنا عبر واتساب <span>↗</span>
          </a>
        </div>
        <div className="flex flex-col justify-end items-start md:items-end text-right font-sans space-y-6">
          <div>
            <h4 className="text-brand-stone/50 mb-2 text-sm">العنوان</h4>
            <p className="text-xl">ليبيا، طرابلس</p>
          </div>
          <div>
            <h4 className="text-brand-stone/50 mb-2 text-sm">الهاتف</h4>
            <p className="text-xl">091 708 0090</p>
            <p className="text-xl">092 708 0090</p>
          </div>
          <div>
            <h4 className="text-brand-stone/50 mb-2 text-sm">البريد الإلكتروني</h4>
            <p className="text-xl">info@firstgoal.ly</p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm opacity-50">
        <p>© 2025 الهدف الأول للرخام والجرانيت. جميع الحقوق محفوظة.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Instagram</span>
          <span>Facebook</span>
          <span>LinkedIn</span>
        </div>
      </div>
    </footer>
  )
}
