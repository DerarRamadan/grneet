import { motion } from 'framer-motion'

export default function GraniteStrength() {
  return (
    <section className="relative flex flex-col md:flex-row min-h-screen bg-brand-dark">
      <div className="flex-1 flex items-center justify-center p-12 md:p-24 order-2 md:order-1">
        <div className="max-w-xl">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-white mb-8"
          >
            صلابة <br />
            <span className="text-brand-stone/50">تتحدى الزمن</span>
          </motion.h2>
          <p className="text-xl text-brand-stone/80 font-sans leading-loose mb-8">
            الجرانيت هو الخيار الأمثل للواجهات الخارجية والأماكن ذات الحركة الكثيفة. في "الهدف الأول"، نوفر لك جرانيت عالي الكثافة يقاوم العوامل الجوية، الحرارة، والخدش، ليظل محافظاً على رونقه لعقود.
          </p>
          <ul className="grid grid-cols-2 gap-4 font-sans text-brand-gold">
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-brand-gold rounded-full" /> مقاوم للحرارة</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-brand-gold rounded-full" /> لا يمتص السوائل</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-brand-gold rounded-full" /> صلابة الماس</li>
            <li className="flex items-center gap-2"><span className="w-2 h-2 bg-brand-gold rounded-full" /> ألوان طبيعية</li>
          </ul>
        </div>
      </div>
      <div className="flex-1 relative h-[50vh] md:h-auto order-1 md:order-2">
        <img
          src="https://images.unsplash.com/photo-1621261329626-44477c7285a8?q=80&w=1000&auto=format&fit=crop"
          alt="Granite Texture"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay" />
      </div>
    </section>
  )
}
