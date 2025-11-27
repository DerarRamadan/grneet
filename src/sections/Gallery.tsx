import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const products = [
  { id: 1, name: 'بيانكو كرارا', category: 'إيطالي', img: 'https://images.unsplash.com/photo-1618221639252-9c3f4a4c6883?q=80&w=800&auto=format&fit=crop' },
  { id: 2, name: 'إمبرادور غامق', category: 'إسباني', img: 'https://images.unsplash.com/photo-1615800098779-1be32e60cca3?q=80&w=800&auto=format&fit=crop' },
  { id: 3, name: 'ترافرتين سلفر', category: 'تركي', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop' },
  { id: 4, name: 'بورتورو جولد', category: 'نادر', img: 'https://images.unsplash.com/photo-1617791160588-241658c0f566?q=80&w=800&auto=format&fit=crop' },
  { id: 5, name: 'كلكتا جولد', category: 'إيطالي', img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop' },
]

export default function Gallery() {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: targetRef })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%'])

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-brand-charcoal">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-10 right-10 z-10">
          <h3 className="text-4xl md:text-6xl font-serif text-brand-gold">مجموعتنا المختارة</h3>
          <p className="text-brand-stone mt-2 font-sans">لمسة من الفخامة لكل زاوية</p>
        </div>
        <motion.div style={{ x }} className="flex gap-10 pr-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative h-[60vh] w-[400px] flex-shrink-0 overflow-hidden rounded-sm border border-white/10 bg-brand-dark"
            >
              <img
                src={product.img}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-60" />
              <div className="absolute bottom-0 right-0 p-6">
                <p className="text-brand-gold text-sm font-sans mb-1">{product.category}</p>
                <h4 className="text-white text-3xl font-serif">{product.name}</h4>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
