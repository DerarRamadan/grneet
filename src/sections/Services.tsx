import { motion } from 'framer-motion'
import { Shield, Map, ShieldAlert, Navigation } from 'lucide-react'

const services = [
  {
    title: 'أمان الطرق',
    desc: 'توفير كافة وسائل السلامة المرورية والإنارة وتخطيط الشوارع لضمان سلامة المواطنين.',
    icon: Shield,
  },
  {
    title: 'المشروعات القومية',
    desc: 'تنفيذ خطط مشاريع الطرق الاستراتيجية الرابطة بين المدن الرئيسية.',
    icon: Map,
  },
  {
    title: 'تمهيد وتعبيد',
    desc: 'نقوم بتسوية وتمهيد الأرض وتعبيدها بأفضل المواصفات القياسية لضمان استدامة الطريق.',
    icon: Navigation,
  }
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#1a1c1d] relative overflow-hidden font-sans border-b-8 border-[#F5A623]">
      
      {/* Highway Dashboard Dashed Line (Top decoration) */}
      <div className="absolute top-0 left-0 w-full h-3 bg-[#1a1c1d] border-b-2 border-dashed border-white/20 z-0"></div>

      <div className="container mx-auto px-4 z-10 relative">
        
        {/* Header matching the Highway Realism pattern */}
        <div className="text-center mb-10 mt-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-wide font-sans"
          >
            مجالات العمل
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 font-bold uppercase tracking-[0.2em] text-sm md:text-base"
          >
            Areas of Expertise
          </motion.p>
        </div>

        {/* Central Highway Striping Line */}
        <div className="flex justify-center items-center w-full max-w-4xl mx-auto mb-16 gap-4 md:gap-8 overflow-hidden" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div 
               key={i} 
               initial={{ opacity: 0, scaleX: 0 }}
               whileInView={{ opacity: 1, scaleX: 1 }}
               transition={{ delay: i * 0.1, duration: 0.4 }}
               className="h-2 md:h-3 w-12 md:w-24 bg-slate-300 rounded-sm shrink-0" 
            />
          ))}
        </div>

        {/* Cards matching the Highway Realism Pattern */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto px-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.15, ease: "circOut" }
              }}
              className="bg-brand-navy border-2 border-dashed border-white/30 hover:border-brand-lightBlue rounded-xl p-8 text-center shadow-2xl flex flex-col items-center relative overflow-hidden group cursor-pointer transition-colors duration-200"
            >
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-brand-lightBlue/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="mb-6 mt-4">
                <service.icon strokeWidth={1.5} className="w-12 h-12 text-white group-hover:text-brand-lightBlue transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-300 leading-relaxed text-lg pb-6">
                {service.desc}
              </p>
              
              {/* Bottom Card Line Decoration */}
              <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-transparent via-brand-lightBlue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
