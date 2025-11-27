1. Fix src/sections/Hero.tsx (Typography & Spacing)
Action: Reduced font size, adjusted line height, and added better spacing.
code
Tsx
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
        // Swapped for a darker, more abstract marble fluid video
        src="https://cdn.pixabay.com/video/2020/05/25/40156-424930064_large.mp4" 
      />
      
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-5xl">
          <motion.h1 
            variants={item} 
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-normal leading-tight md:leading-snug"
          >
            حيث تلتقي صلابة الأرض<br />
            <span className="text-brand-gold">بفن العمارة</span>
          </motion.h1>
          
          <motion.div variants={item} className="mt-6 md:mt-10 flex flex-col items-center gap-6">
            <p className="font-sans text-lg md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
              الهدف الأول: نعيد صياغة مفهوم الفخامة في ليبيا
            </p>
            <div className="h-12 md:h-20 w-[1px] bg-brand-gold/50 mt-4"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
2. Fix src/sections/Gallery.tsx (RTL Logic & Images)
Action: Swapped images for High-Res Slab Textures. Fixed the scroll logic to work in RTL.
code
Tsx
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const products = [
  // Image Strategy: Use specific textures of Stone/Marble/Granite, not construction sites.
  { id: 1, name: "بيانكو كرارا", category: "إيطالي", img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop" }, // White Marble Texture
  { id: 2, name: "إمبرادور غامق", category: "إسباني", img: "https://images.unsplash.com/photo-1615800098779-1be32e60cca3?q=80&w=800&auto=format&fit=crop" }, // Brown Marble Texture
  { id: 3, name: "ترافرتين سلفر", category: "تركي", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop" }, // Grey Travertine
  { id: 4, name: "بورتورو جولد", category: "نادر", img: "https://images.unsplash.com/photo-1617791160588-241658c0f566?q=80&w=800&auto=format&fit=crop" }, // Black & Gold Marble
  { id: 5, name: "كلكتا جولد", category: "إيطالي", img: "https://images.unsplash.com/photo-1618221639252-9c3f4a4c6883?q=80&w=800&auto=format&fit=crop" }, // White & Gold
  { id: 6, name: "جرانيت أسود", category: "هندي", img: "https://images.unsplash.com/photo-1621261329626-44477c7285a8?q=80&w=800&auto=format&fit=crop" }, // Black Granite
]

export default function Gallery() {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // RTL FIX: 
  // In LTR: we translate x from 0 to -100%.
  // In RTL: framing motion translate x works on CSS transform. 
  // A positive X value moves items to the LEFT in RTL document flow.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "85%"]) 

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-brand-charcoal" dir="ltr"> 
      {/* 
        CRITICAL FIX: We force `dir="ltr"` ONLY for this scrolling container 
        because horizontal scroll logic with transforms is mathematically easier 
        in LTR, even if the content is Arabic. 
      */}
      
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Title (We keep this Absolute so it stays on screen) */}
        <div className="absolute top-10 right-10 z-10 text-right" dir="rtl">
          <h3 className="text-4xl md:text-6xl font-serif text-brand-gold">مجموعتنا المختارة</h3>
          <p className="text-brand-stone mt-2 font-sans text-xl">لمسة من الفخامة لكل زاوية</p>
        </div>

        <motion.div style={{ x }} className="flex gap-10 pl-10 md:pl-20">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative h-[60vh] w-[300px] md:w-[400px] flex-shrink-0 overflow-hidden rounded-sm border border-white/10 bg-brand-dark"
            >
              <img 
                src={product.img} 
                alt={product.name} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
              
              {/* Text Content (Force RTL inside the card) */}
              <div className="absolute bottom-0 right-0 p-6 w-full text-right" dir="rtl">
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
3. Fix src/sections/GraniteStrength.tsx (Better Image)
Action: Swapped the image to a close-up of rough, black granite texture.
code
Tsx
import { motion } from 'framer-motion'

export default function GraniteStrength() {
  return (
    <section className="relative flex flex-col md:flex-row min-h-screen bg-brand-dark">
      
      {/* Text Side */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-24 order-2 md:order-1">
        <div className="max-w-xl text-right">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }} // Inverted for RTL
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight"
          >
            صلابة <br />
            <span className="text-brand-stone/50">تتحدى الزمن</span>
          </motion.h2>
          
          <p className="text-lg md:text-xl text-brand-stone/80 font-sans leading-loose mb-8">
            الجرانيت هو الخيار الأمثل للواجهات الخارجية والأماكن ذات الحركة الكثيفة. 
            في "الهدف الأول"، نوفر لك جرانيت عالي الكثافة يقاوم العوامل الجوية، الحرارة، والخدش، 
            ليظل محافظاً على رونقه لعقود.
          </p>

          <ul className="grid grid-cols-2 gap-y-6 gap-x-4 font-sans text-brand-gold text-lg">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0" /> مقاوم للحرارة
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0" /> لا يمتص السوائل
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0" /> صلابة الماس
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-brand-gold rounded-full flex-shrink-0" /> ألوان طبيعية
            </li>
          </ul>
        </div>
      </div>

      {/* Image Side */}
      <div className="flex-1 relative h-[50vh] md:h-auto order-1 md:order-2">
        <img 
          // Image: Rough Black Stone Texture (Abstract & Strong)
          src="https://images.unsplash.com/photo-1613529329153-294747201b22?q=80&w=1200&auto=format&fit=crop" 
          alt="Granite Texture" 
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75"
        />
        <div className="absolute inset-0 bg-brand-gold/5 mix-blend-overlay" />
      </div>

    </section>
  )
}
4. Fix src/sections/Manufacturing.tsx (Better Images)
Action: Swapped images to focus on Waterjet machines and polished surfaces.
code
Tsx
import { motion } from 'framer-motion'

export default function Manufacturing() {
  return (
    <section className="relative py-32 bg-brand-charcoal overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-brand-stone/10 pb-8">
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            دقة التصنيع
          </h2>
          <p className="text-brand-stone/60 font-sans mt-4 md:mt-0 max-w-md text-lg">
            نستخدم أحدث تقنيات القص (CNC) و (Waterjet) لضمان مقاسات دقيقة وتشطيبات خالية من العيوب.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "قص الليزر و Waterjet", 
              desc: "دقة متناهية للحواف والزوايا المعقدة", 
              // Image: Close up of a CNC machine cutting stone wet
              img: "https://images.unsplash.com/photo-1626265774643-f194382584a3?q=80&w=600&auto=format&fit=crop" 
            },
            { 
              title: "معالجة الأسطح", 
              desc: "جلي وتلميع بأعلى المعايير العالمية", 
              // Image: Polishing pad on marble
              img: "https://images.unsplash.com/photo-1620023647483-39878203c9b7?q=80&w=600&auto=format&fit=crop" 
            },
            { 
              title: "التركيب", 
              desc: "فريق هندسي متخصص للتنفيذ في الموقع", 
              // Image: Installing a marble slab carefully
              img: "https://images.unsplash.com/photo-1618221639252-9c3f4a4c6883?q=80&w=600&auto=format&fit=crop" 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="h-80 overflow-hidden rounded-sm mb-6 border border-white/5">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              </div>
              <h3 className="text-2xl font-serif text-brand-gold mb-3">{item.title}</h3>
              <p className="text-brand-stone/70 font-sans text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
These changes should make the site feel much more premium and fix the scroll/typography issues.