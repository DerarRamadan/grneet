import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white pt-24 pb-8 border-t border-brand-gold/30">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="text-right">
            <h2 className="text-6xl md:text-8xl font-serif mb-6 leading-tight">
              لنبنِ شيئاً <br />
              <span className="text-brand-gold">خالداً.</span>
            </h2>
            <p className="text-brand-stone/60 font-sans text-lg max-w-md">
              نحن هنا لتحويل رؤيتك المعمارية إلى واقع ملموس بأجود أنواع الحجر الطبيعي.
            </p>
          </div>
          <motion.a
            href="https://wa.me/218917080090"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-gold text-black px-8 py-4 rounded-sm font-bold text-xl flex items-center gap-3 hover:bg-white transition-colors"
          >
            <span>↗</span> تواصل معنا عبر واتساب
          </motion.a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16 mb-16">
          <div className="text-right">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 ml-auto">
              <span className="text-2xl">📍</span>
            </div>
            <h4 className="text-brand-gold font-bold text-lg mb-4">العنوان</h4>
            <p className="text-brand-stone/80 text-lg leading-relaxed font-sans">
              ليبيا، طرابلس <br />
              طريق السكة، بالقرب من رئاسة الوزراء
            </p>
          </div>
          <div className="text-right">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 ml-auto">
              <span className="text-2xl">📞</span>
            </div>
            <h4 className="text-brand-gold font-bold text-lg mb-4">أرقام التواصل</h4>
            <div className="flex flex-col gap-2 font-sans text-lg text-brand-stone/80" dir="ltr">
              <a href="tel:+218917080090" className="hover:text-white text-right transition-colors">+218 91 708 0090</a>
              <a href="tel:+218927080090" className="hover:text-white text-right transition-colors">+218 92 708 0090</a>
            </div>
          </div>
          <div className="text-right">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 ml-auto">
              <span className="text-2xl">✉️</span>
            </div>
            <h4 className="text-brand-gold font-bold text-lg mb-4">البريد الإلكتروني</h4>
            <a href="mailto:info@firstgoal.ly" className="text-brand-stone/80 text-lg font-sans hover:text-white transition-colors">info@firstgoal.ly</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-brand-stone/40 font-sans">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-brand-gold">Instagram</a>
            <a href="#" className="hover:text-brand-gold">Facebook</a>
            <a href="#" className="hover:text-brand-gold">LinkedIn</a>
          </div>
          <p>© 2025 الهدف الأول للرخام والجرانيت. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
