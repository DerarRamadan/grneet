import { motion } from 'framer-motion'

export default function Vision() {
  return (
    <section className="py-20 bg-brand-gold overflow-hidden flex items-center">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          className="flex gap-20 text-brand-dark font-serif text-6xl md:text-8xl font-bold tracking-tight"
          animate={{ x: ['0%', '100%'] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        >
          <span>الجودة</span>
          <span>•</span>
          <span>الإتقان</span>
          <span>•</span>
          <span>الريادة</span>
          <span>•</span>
          <span>الهدف الأول</span>
          <span>•</span>
          <span>الجودة</span>
          <span>•</span>
          <span>الإتقان</span>
          <span>•</span>
          <span>الريادة</span>
          <span>•</span>
          <span>الهدف الأول</span>
        </motion.div>
      </div>
    </section>
  )
}
