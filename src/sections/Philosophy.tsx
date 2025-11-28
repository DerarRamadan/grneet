import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const phrase = "الرخام ليس مجرد حجر؛ إنه تاريخ، ضغط، وزمن صيغ عبر ملايين السنين. في شركة الهدف الأول، لا نبيع المواد فحسب، بل ننتقي لك أرقى كنوز الأرض لتبني إرثاً يدوم."

export default function Philosophy() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const words = phrase.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.02 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  }

  return (
    <motion.section
      id="philosophy"
      className="h-[100dvh] flex items-center justify-center bg-brand-dark px-6 py-16 md:py-32 snap-start"
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.6 }}
    >
      <div ref={ref} className="max-w-4xl mx-auto text-center rtl:text-center">
        <motion.div
          className="flex flex-wrap justify-center gap-x-1.5 gap-y-2 md:gap-x-4"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={child}
              className={`${
                word.includes('الهدف') || word.includes('الأول') ? 'text-brand-gold' : 'text-brand-stone'
              } text-2xl md:text-5xl font-serif leading-relaxed`}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
