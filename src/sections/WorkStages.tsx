import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const workModules = import.meta.glob('../assets/work/*.{png,jpg,jpeg}', { eager: true, import: 'default' }) as Record<string, string>
const workImages = Object.values(workModules)

export default function WorkStages() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"])
  const y3 = useTransform(scrollYProgress, [0, 1], ["-10%", "15%"])

  // Split images into 3 columns for Masonry layout
  const col1: string[] = []
  const col2: string[] = []
  const col3: string[] = []

  workImages.forEach((img, i) => {
    if (i % 3 === 0) col1.push(img)
    else if (i % 3 === 1) col2.push(img)
    else col3.push(img)
  })

  // To prevent the section from being too massive if there are 23 images, we limit it to the top 15 images for the featured masonry.
  const trimSize = 5
  const displayCol1 = col1.slice(0, trimSize + 1)
  const displayCol2 = col2.slice(0, trimSize)
  const displayCol3 = col3.slice(0, trimSize)

  const Col = ({ images, yTransform, className = "" }: { images: string[], yTransform: any, className?: string }) => (
    <motion.div style={{ y: yTransform }} className={`flex flex-col gap-6 ${className}`}>
      {images.map((img, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl group"
        >
          {/* Glass overlay on hover */}
          <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center backdrop-blur-[2px]">
            <div className="text-center p-4">
              <p className="text-brand-gold font-bold text-sm tracking-widest mb-1">مرحلة إنجاز</p>
              <div className="w-8 h-[2px] bg-white mx-auto" />
            </div>
          </div>
          <img 
            src={img} 
            alt="Work Progress" 
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 block" 
            loading="lazy"
          />
        </motion.div>
      ))}
    </motion.div>
  )

  return (
    <section id="work" ref={containerRef} className="py-32 bg-white relative">
      <div className="container mx-auto px-4 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-brand-navy mb-6 font-serif leading-tight">
              ديناميكية العمل <br />
              <span className="text-brand-lightBlue">والمراحل التنفيذية</span>
            </h2>
            <div className="w-24 h-1 bg-brand-lightBlue rounded-full mb-6 relative">
              <div className="absolute top-0 right-0 w-8 h-full bg-brand-navy rounded-full"></div>
            </div>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              نحن لا نكتفي بتقديم المخططات؛ بل نجسدها واقعاً ملموساً. يعكس هذا المعرض الحي تطور مشاريعنا من نقطة الصفر وحتى التسليم النهائي، مقدماً لمحة عن الكفاءة والاحترافية التي تدار بها مواقعنا الميدانية.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden md:flex gap-4 items-center"
          >
            <div className="flex flex-col items-end">
              <span className="text-4xl font-bold text-brand-navy">23+</span>
              <span className="text-sm text-slate-500 font-bold uppercase tracking-wider">مرحلة موثقة</span>
            </div>
            <div className="h-12 w-[1px] bg-slate-200 mx-2"></div>
            <div className="flex flex-col items-end">
              <span className="text-4xl font-bold text-brand-lightBlue">100%</span>
              <span className="text-sm text-slate-500 font-bold uppercase tracking-wider">التزام بالجودة</span>
            </div>
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative pb-20 pt-10">
          <Col images={displayCol1} yTransform={y1} className="mt-0" />
          <Col images={displayCol2} yTransform={y2} className="md:-mt-16" />
          <Col images={displayCol3} yTransform={y3} className="hidden lg:flex lg:mt-12" />
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mt-12 relative z-30"
        >
          <a href="#projects" className="inline-block px-8 py-4 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-lightBlue transition-all duration-300 shadow-xl hover:shadow-brand-lightBlue/30 hover:-translate-y-1">
            مشاهدة تفاصيل المشاريع
          </a>
        </motion.div>

      </div>
    </section>
  )
}
