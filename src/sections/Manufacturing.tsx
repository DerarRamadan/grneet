import { motion } from 'framer-motion'

export default function Manufacturing() {
  return (
    <section className="relative py-32 bg-brand-charcoal overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-brand-stone/10 pb-8">
          <h2 className="text-4xl md:text-6xl font-serif text-white">دقة التصنيع</h2>
          <p className="text-brand-stone/60 font-sans mt-4 md:mt-0 max-w-md">
            نستخدم أحدث تقنيات القص (CNC) و (Waterjet) لضمان مقاسات دقيقة وتشطيبات خالية من العيوب.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'قص الليزر', desc: 'دقة متناهية للحواف والزوايا', img: 'https://images.unsplash.com/photo-1565624707425-4a25a94379e4?q=80&w=600&auto=format&fit=crop' },
            { title: 'معالجة الأسطح', desc: 'جلي وتلميع بأعلى المعايير', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop' },
            { title: 'التركيب', desc: 'فريق هندسي متخصص للتنفيذ', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="h-64 overflow-hidden rounded-sm mb-4">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              </div>
              <h3 className="text-2xl font-serif text-brand-gold mb-2">{item.title}</h3>
              <p className="text-brand-stone/70 font-sans text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
