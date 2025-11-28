import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import quarryImg from '../assets/images/yossanunj-T6HmS2NFaSM-unsplash.webp'

export default function RawMaterial() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-brand-dark">
      <div className="absolute inset-0 z-0 bg-gradient-radial from-brand-charcoal to-brand-dark" />
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img src={quarryImg} alt="محجر رخام" className="w-full h-[120%] object-cover brightness-50" loading="lazy" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center p-8 md:p-12 border border-white/10 bg-black/40 backdrop-blur-md max-w-3xl mx-4">
        <h2 className="text-5xl md:text-8xl font-serif text-white font-bold tracking-tighter">
          قوة الخام
        </h2>
        <p className="mt-6 text-brand-stone/90 text-lg md:text-2xl font-sans leading-relaxed">
          مستخرجة من قلب الجبال.. نقية، صلبة، وجاهزة لنصنع منها إرثاً معمارياً.
        </p>
      </motion.div>
    </section>
  )
}
