import { motion } from 'framer-motion'

const items = [
  { id: 1, title: 'أدراج رخامية', size: 'large', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=600&auto=format&fit=crop' },
  { id: 2, title: 'أرضيات فاخرة', size: 'small', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600&auto=format&fit=crop' },
  { id: 3, title: 'مغاسل', size: 'small', img: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=600&auto=format&fit=crop' },
  { id: 4, title: 'واجهات', size: 'large', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop' },
  { id: 5, title: 'ديكور جداري', size: 'small', img: 'https://images.unsplash.com/photo-1512915922610-d313a778045a?q=80&w=600&auto=format&fit=crop' },
]

export default function ProductsGrid() {
  return (
    <section id="collection" className="py-24 bg-brand-dark px-6">
      <div className="mx-auto max-w-7xl mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">التفاصيل المعمارية</h2>
        <p className="text-brand-stone/60 font-sans">حلول متكاملة من الأرضيات إلى الأسقف</p>
      </div>
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative group overflow-hidden rounded-sm border border-white/5 ${
              item.size === 'large' ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'
            }`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-100"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-4 right-4 z-10">
              <h3 className="text-white font-serif text-xl">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
