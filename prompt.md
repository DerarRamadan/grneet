Create the Components
Copy these files into src/sections/.
1. src/sections/Gallery.tsx
(A luxurious horizontal scroll gallery for your products).
code
Tsx
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const products = [
  { id: 1, name: "بيانكو كرارا", category: "إيطالي", img: "https://images.unsplash.com/photo-1618221639252-9c3f4a4c6883?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "إمبرادور غامق", category: "إسباني", img: "https://images.unsplash.com/photo-1615800098779-1be32e60cca3?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "ترافرتين سلفر", category: "تركي", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "بورتورو جولد", category: "نادر", img: "https://images.unsplash.com/photo-1617791160588-241658c0f566?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "كلكتا جولد", category: "إيطالي", img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop" },
]

export default function Gallery() {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // RTL Transform: We move from 0 to Positive X to scroll "Leftwards" visually in RTL context
  // Or standard negative X if we want to pull items. Let's use standard negative to pull content.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-brand-charcoal">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Title Overlay */}
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
2. src/sections/GraniteStrength.tsx
(Split screen showing the toughness of Granite).
code
Tsx
import { motion } from 'framer-motion'

export default function GraniteStrength() {
  return (
    <section className="relative flex flex-col md:flex-row min-h-screen bg-brand-dark">
      
      {/* Text Side */}
      <div className="flex-1 flex items-center justify-center p-12 md:p-24 order-2 md:order-1">
        <div className="max-w-xl">
          <motion.h2 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-white mb-8"
          >
            صلابة <br />
            <span className="text-brand-stone/50">تتحدى الزمن</span>
          </motion.h2>
          
          <p className="text-xl text-brand-stone/80 font-sans leading-loose mb-8">
            الجرانيت هو الخيار الأمثل للواجهات الخارجية والأماكن ذات الحركة الكثيفة. 
            في "الهدف الأول"، نوفر لك جرانيت عالي الكثافة يقاوم العوامل الجوية، الحرارة، والخدش، 
            ليظل محافظاً على رونقه لعقود.
          </p>

          <ul className="grid grid-cols-2 gap-4 font-sans text-brand-gold">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-gold rounded-full" /> مقاوم للحرارة
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-gold rounded-full" /> لا يمتص السوائل
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-gold rounded-full" /> صلابة الماس
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-gold rounded-full" /> ألوان طبيعية
            </li>
          </ul>
        </div>
      </div>

      {/* Image Side */}
      <div className="flex-1 relative h-[50vh] md:h-auto order-1 md:order-2">
        <img 
          src="https://images.unsplash.com/photo-1621261329626-44477c7285a8?q=80&w=1000&auto=format&fit=crop" 
          alt="Granite Texture" 
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-brand-gold/10 mix-blend-overlay" />
      </div>

    </section>
  )
}
3. src/sections/Manufacturing.tsx
(Video background showing the machines).
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
          <p className="text-brand-stone/60 font-sans mt-4 md:mt-0 max-w-md">
            نستخدم أحدث تقنيات القص (CNC) و (Waterjet) لضمان مقاسات دقيقة وتشطيبات خالية من العيوب.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "قص الليزر", desc: "دقة متناهية للحواف والزوايا", img: "https://images.unsplash.com/photo-1565624707425-4a25a94379e4?q=80&w=600&auto=format&fit=crop" },
            { title: "معالجة الأسطح", desc: "جلي وتلميع بأعلى المعايير", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" },
            { title: "التركيب", desc: "فريق هندسي متخصص للتنفيذ", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="h-64 overflow-hidden rounded-sm mb-4">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h3 className="text-2xl font-serif text-brand-gold mb-2">{item.title}</h3>
              <p className="text-brand-stone/70 font-sans text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
Step 2: Update App.tsx
Now, update your main App file to include these new sections in the correct order.
code
Tsx
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/layout/Preloader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import Philosophy from './sections/Philosophy'
import GlobalSourcing from './sections/GlobalSourcing'
import RawMaterial from './sections/RawMaterial'
// Import new sections
import Gallery from './sections/Gallery'
import GraniteStrength from './sections/GraniteStrength'
import Manufacturing from './sections/Manufacturing'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const t = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen bg-brand-dark">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader visible={isLoading} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Philosophy />
            <Gallery /> {/* Horizontal Scroll */}
            <GraniteStrength />
            <GlobalSourcing />
            <RawMaterial />
            <Manufacturing />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
Note on Images:
I have used Unsplash links in this code. They are free, high-quality, and generally reliable. If you still don't see them:
Check if your internet blocks Unsplash.
Or download images manually, put them in public/assets/, and change the src paths in the code from https://... to /assets/image-name.jpg.