This is **Batch #4**, which focuses on fixing the broken images/scroll logic and adding the next set of advanced sections.

### Part 1: Fixes (Gallery & Images)

The "Empty Gallery" issue happened because the horizontal scroll logic was pushing items in the wrong direction. We will switch to a **Negative Transform** logic to pull items into view naturally.

#### 1. Fix `src/sections/Gallery.tsx`
*Action: Corrected scroll direction, added more items, and fixed image sizes.*

```tsx
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const products = [
  { id: 1, name: "بيانكو كرارا", category: "إيطالي", img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "إمبرادور غامق", category: "إسباني", img: "https://images.unsplash.com/photo-1615800098779-1be32e60cca3?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "ترافرتين سلفر", category: "تركي", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "بورتورو جولد", category: "نادر", img: "https://images.unsplash.com/photo-1617791160588-241658c0f566?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "كلكتا جولد", category: "إيطالي", img: "https://images.unsplash.com/photo-1618221639252-9c3f4a4c6883?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "جرانيت أسود", category: "هندي", img: "https://images.unsplash.com/photo-1621261329626-44477c7285a8?q=80&w=600&auto=format&fit=crop" },
  { id: 7, name: "روزا برتغال", category: "برتغالي", img: "https://images.unsplash.com/photo-1618221639252-9c3f4a4c6883?q=80&w=600&auto=format&fit=crop" },
  { id: 8, name: "فيردي غواتيمالا", category: "أخضر", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=600&auto=format&fit=crop" },
]

export default function Gallery() {
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // FIX: Move from 0% to -60% (Pulling items to the left as we scroll down)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"])

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-brand-charcoal" dir="ltr">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Title */}
        <div className="absolute top-10 right-10 z-10 text-right" dir="rtl">
          <h3 className="text-4xl md:text-6xl font-serif text-brand-gold">مجموعتنا المختارة</h3>
          <p className="text-brand-stone mt-2 font-sans text-xl">لمسة من الفخامة لكل زاوية</p>
        </div>

        <motion.div style={{ x }} className="flex gap-8 pl-10 md:pl-20">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative h-[50vh] md:h-[60vh] w-[300px] md:w-[400px] flex-shrink-0 overflow-hidden rounded-sm border border-white/10 bg-brand-dark"
            >
              <img 
                src={product.img} 
                alt={product.name} 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
              
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
```

#### 2. Fix `src/sections/GraniteStrength.tsx` (Working Image)
*Action: Updated the broken image link.*

```tsx
import { motion } from 'framer-motion'

export default function GraniteStrength() {
  return (
    <section className="relative flex flex-col md:flex-row min-h-screen bg-brand-dark overflow-hidden">
      
      {/* Text Side */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-24 order-2 md:order-1">
        <div className="max-w-xl text-right">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight"
          >
            صلابة <br />
            <span className="text-brand-stone/50">تتحدى الزمن</span>
          </motion.h2>
          
          <p className="text-lg md:text-xl text-brand-stone/80 font-sans leading-loose mb-8">
            الجرانيت هو الخيار الأمثل للواجهات الخارجية والأماكن ذات الحركة الكثيفة. 
            في "الهدف الأول"، نوفر لك جرانيت عالي الكثافة يقاوم العوامل الجوية، الحرارة، والخدش.
          </p>

          <ul className="grid grid-cols-2 gap-y-6 gap-x-4 font-sans text-brand-gold text-lg">
            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-brand-gold rounded-full" /> مقاوم للحرارة</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-brand-gold rounded-full" /> لا يمتص السوائل</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-brand-gold rounded-full" /> صلابة الماس</li>
            <li className="flex items-center gap-3"><span className="w-2 h-2 bg-brand-gold rounded-full" /> ألوان طبيعية</li>
          </ul>
        </div>
      </div>

      {/* Image Side */}
      <div className="flex-1 relative h-[50vh] md:h-auto order-1 md:order-2">
        <img 
          src="https://images.unsplash.com/photo-1621261329626-44477c7285a8?q=80&w=1200&auto=format&fit=crop" 
          alt="Granite Texture" 
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark to-transparent opacity-80" />
      </div>

    </section>
  )
}
```

#### 3. Fix `src/sections/Manufacturing.tsx` (Working Images)
*Action: Updated image links.*

```tsx
import { motion } from 'framer-motion'

export default function Manufacturing() {
  const images = [
    { title: "قص الليزر و Waterjet", img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800&auto=format&fit=crop" },
    { title: "معالجة الأسطح", img: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?q=80&w=800&auto=format&fit=crop" },
    { title: "التركيب", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop" }
  ]

  return (
    <section className="relative py-32 bg-brand-charcoal overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 border-b border-brand-stone/10 pb-8">
          <h2 className="text-4xl md:text-6xl font-serif text-white">دقة التصنيع</h2>
          <p className="text-brand-stone/60 font-sans mt-4 md:mt-0 max-w-md text-lg">
            أحدث تقنيات القص والمعالجة لضمان الجودة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="h-80 overflow-hidden rounded-sm mb-6 border border-white/5 bg-black">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
              </div>
              <h3 className="text-2xl font-serif text-brand-gold mb-3">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

### Part 2: New Sections (Masonry, Comparison, Spotlight)

Copy these files into `src/sections/`.

#### 4. `src/sections/ProductsGrid.tsx` (Masonry Grid)
*A beautiful grid for tiles and stairs.*

```tsx
import { motion } from 'framer-motion'

const items = [
  { id: 1, title: "أدراج رخامية", size: "large", img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=600&auto=format&fit=crop" },
  { id: 2, title: "أرضيات فاخرة", size: "small", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=600&auto=format&fit=crop" },
  { id: 3, title: "مغاسل", size: "small", img: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=600&auto=format&fit=crop" },
  { id: 4, title: "واجهات", size: "large", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop" },
  { id: 5, title: "ديكور جداري", size: "small", img: "https://images.unsplash.com/photo-1512915922610-d313a778045a?q=80&w=600&auto=format&fit=crop" },
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
```

#### 5. `src/sections/ArtificialMarble.tsx` (Slider)
*Compare Natural vs Artificial.*

```tsx
import { useState } from 'react'

export default function ArtificialMarble() {
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <section className="relative h-[80vh] bg-brand-charcoal overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-10 z-10 text-center">
        <h2 className="text-white font-serif text-4xl mb-2">حلول عصرية</h2>
        <p className="text-brand-stone/70">الرخام الصناعي: جمال الطبيعة بمتانة التكنولوجيا</p>
      </div>

      <div className="relative w-full max-w-5xl aspect-video border-4 border-brand-gold/20 rounded-lg overflow-hidden cursor-ew-resize group">
        
        {/* Natural Image (Underneath) */}
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" 
          alt="Natural" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        
        {/* Artificial Image (Overlay) */}
        <div 
          className="absolute inset-0 overflow-hidden" 
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?q=80&w=1200&auto=format&fit=crop" 
            alt="Artificial" 
            className="absolute inset-0 w-full h-full object-cover max-w-none" 
            style={{ width: '100vw', maxWidth: '1280px' }} // Approximate correction
          />
        </div>

        {/* Slider Handle */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPosition} 
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        />
        
        {/* Visual Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-brand-gold z-10 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-brand-gold rounded-full flex items-center justify-center text-black font-bold">
            ⇄
          </div>
        </div>

        {/* Labels */}
        <span className="absolute bottom-5 right-5 bg-black/50 px-3 py-1 text-white rounded pointer-events-none">طبيعي</span>
        <span className="absolute bottom-5 left-5 bg-black/50 px-3 py-1 text-white rounded pointer-events-none">صناعي</span>

      </div>
    </section>
  )
}
```

#### 6. `src/sections/CustomWorks.tsx` (Spotlight)
*Moves a light with the mouse.*

```tsx
import { useState, MouseEvent } from 'react'

export default function CustomWorks() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent) => {
    // Get relative position inside the section
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative h-screen bg-black flex items-center justify-center overflow-hidden cursor-none"
    >
      {/* Background Image (Hidden in dark) */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1550921479-79a04a0808c1?q=80&w=1200&auto=format&fit=crop" 
          alt="Sculpture" 
          className="w-full h-full object-cover grayscale"
        />
      </div>

      {/* Text */}
      <div className="relative z-20 text-center pointer-events-none mix-blend-difference text-white">
        <h2 className="text-6xl md:text-9xl font-serif font-bold">خيالك.. ننحته</h2>
        <p className="text-2xl mt-4 font-sans">مغاسل، سلالم، وتحف فنية.</p>
      </div>

      {/* Flashlight Effect */}
      <div 
        className="absolute w-[300px] h-[300px] bg-brand-gold/20 rounded-full blur-[100px] pointer-events-none z-10 mix-blend-screen"
        style={{ 
          left: mousePos.x - 150, 
          top: mousePos.y - 150,
          transition: 'transform 0.1s ease-out'
        }}
      />
    </section>
  )
}
```

---

### Step 3: Update `App.tsx` (Add New Sections)

Update your App file to include the new sections.

```tsx
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/layout/Preloader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Sections
import Hero from './sections/Hero'
import Philosophy from './sections/Philosophy'
import Gallery from './sections/Gallery'
import GraniteStrength from './sections/GraniteStrength'
import GlobalSourcing from './sections/GlobalSourcing'
import RawMaterial from './sections/RawMaterial'
import Manufacturing from './sections/Manufacturing'
import ProductsGrid from './sections/ProductsGrid'
import ArtificialMarble from './sections/ArtificialMarble'
import CustomWorks from './sections/CustomWorks'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
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
            <Gallery />
            <GraniteStrength />
            <ProductsGrid />      {/* New */}
            <GlobalSourcing />
            <RawMaterial />
            <Manufacturing />
            <ArtificialMarble />  {/* New */}
            <CustomWorks />       {/* New */}
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
```