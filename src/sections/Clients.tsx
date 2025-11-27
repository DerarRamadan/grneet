import { motion } from 'framer-motion'

const clients = [
  'شركة الإعمار',
  'مجموعة القابضة',
  'المكتب الهندسي الحديث',
  'أبراج ليبيا',
  'المتوسط للمقاولات',
  'مؤسسة البنيان',
  'الدار للتطوير',
  'مجموعة الفنادق',
]

export default function Clients() {
  return (
    <section className="py-24 bg-brand-charcoal border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-brand-gold font-serif text-2xl mb-12 opacity-80">شركاء النجاح</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-xl md:text-2xl font-serif text-brand-stone/40 hover:text-white transition-colors duration-300"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
