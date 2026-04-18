import { motion } from 'framer-motion'
import { PhoneCall } from 'lucide-react'

export default function Contact() {
  return (
    <section className="bg-brand-blue py-12 relative overflow-hidden">
      {/* Texture background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-brand-navy/20 p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl">
          
          <div className="text-center lg:text-right flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">استدعاء مباشر للطوارئ والمشاريع السريعة</h2>
            <p className="text-brand-lightBlue/80 text-lg">نحن مستعدون دائماً للتعاون مع المؤسسات والجهات السيادية وتلبية الإحتياجات الفورية.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 flex-1 justify-center lg:justify-end">
            <motion.a 
              href="tel:00218912110703" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-white text-brand-navy px-8 py-4 rounded-2xl font-bold text-xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all group"
            >
              <div className="bg-brand-lightBlue/20 p-2 rounded-full group-hover:bg-brand-blue/20 transition-colors">
                <PhoneCall className="w-6 h-6 text-brand-blue animate-[ring_2s_infinite]" />
              </div>
              <span dir="ltr">091-2110703</span>
            </motion.a>

            <motion.a 
              href="tel:00218922110703" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-xl hover:bg-white hover:text-brand-navy transition-all group"
            >
              <div className="bg-white/10 p-2 rounded-full group-hover:bg-brand-blue/10 transition-colors">
                <PhoneCall className="w-6 h-6 text-white group-hover:text-brand-blue animate-[ring_2s_infinite_0.5s]" />
              </div>
              <span dir="ltr">092-2110703</span>
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  )
}
