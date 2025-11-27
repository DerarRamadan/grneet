This is **Batch #5 (The Final Batch)**.

I have addressed your feedback:
1.  **Fixed the "Artificial vs Natural" Slider:** I forced the slider logic to be `LTR` (Left-to-Right) physically so the math works, while keeping the text Arabic. I also swapped the images to specific **Marble vs. Quartz** textures instead of houses.
2.  **New Sections:** I have created the final 5 sections: **Vision (Marquee)**, **Projects (Card Stack)**, **Clients**, **Sustainability**, and updated the **Footer**.

### Part 1: The Fix (`src/sections/ArtificialMarble.tsx`)

*Changes: Forced LTR for slider mechanics, moved the Title ABOVE the image (so it doesn't get cut), and used stone-specific images.*

```tsx
import { useState } from 'react'

export default function ArtificialMarble() {
  const [sliderPosition, setSliderPosition] = useState(50)

  return (
    <section className="py-24 bg-brand-charcoal flex flex-col items-center justify-center">
      
      {/* Title is now outside the slider to prevent cutting */}
      <div className="text-center mb-12">
        <h2 className="text-brand-gold font-serif text-4xl md:text-5xl mb-3">حلول عصرية</h2>
        <p className="text-brand-stone/70 font-sans text-lg">
          مقارنة: الرخام الطبيعي (العمق) مقابل الرخام الصناعي (التجانس)
        </p>
      </div>

      {/* 
        FORCE LTR: This container uses dir="ltr" to ensure the slider math 
        (0% to 100%) works correctly regardless of Arabic settings.
      */}
      <div className="relative w-full max-w-6xl aspect-[16/9] border border-white/10 rounded-lg overflow-hidden cursor-ew-resize select-none" dir="ltr">
        
        {/* Image 2 (Artificial/Quartz - Clean & White) - Underlying */}
        <img 
          src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1200&auto=format&fit=crop" 
          alt="Artificial Stone" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        
        {/* Image 1 (Natural Marble - Veined & Dramatic) - Overlay */}
        <div 
          className="absolute inset-0 overflow-hidden border-r-2 border-brand-gold" 
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1618221639252-9c3f4a4c6883?q=80&w=1200&auto=format&fit=crop" 
            alt="Natural Marble" 
            className="absolute inset-0 w-full h-full object-cover max-w-none" 
            style={{ width: '100%', maxWidth: 'none' }} 
          />
        </div>

        {/* Input Logic */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPosition} 
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        />
        
        {/* Handle Button */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-black font-bold shadow-lg shadow-black/50 pointer-events-none z-10"
          style={{ left: `calc(${sliderPosition}% - 20px)` }}
        >
          ⇄
        </div>

        {/* Labels (Positioned absolutely) */}
        <span className="absolute bottom-6 left-6 bg-black/70 px-4 py-2 text-white rounded font-sans border border-white/20">
          رخام طبيعي
        </span>
        <span className="absolute bottom-6 right-6 bg-black/70 px-4 py-2 text-white rounded font-sans border border-white/20">
          رخام صناعي
        </span>

      </div>
    </section>
  )
}
```

---

### Part 2: The Final Sections (Create these new files)

#### 1. `src/sections/Vision.tsx` (Infinite Marquee)
*A high-end moving text strip.*

```tsx
import { motion } from 'framer-motion'

export default function Vision() {
  return (
    <section className="py-20 bg-brand-gold overflow-hidden flex items-center">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div 
          className="flex gap-20 text-brand-dark font-serif text-6xl md:text-8xl font-bold uppercase tracking-tight"
          animate={{ x: ["0%", "100%"] }} // RTL moves Right
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <span>الجودة</span>
          <span>•</span>
          <span>الإتقان</span>
          <span>•</span>
          <span>الريادة</span>
          <span>•</span>
          <span>الهدف الأول</span>
          <span>•</span>
          <span>الجودة</span>
          <span>•</span>
          <span>الإتقان</span>
          <span>•</span>
          <span>الريادة</span>
          <span>•</span>
          <span>الهدف الأول</span>
        </motion.div>
      </div>
    </section>
  )
}
```

#### 2. `src/sections/Projects.tsx` (Stacked Cards)
*Shows your best work (Hotels, Villas) in a sticky scrolling effect.*

```tsx
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  { id: 1, title: "فندق ريكسوس", location: "طرابلس", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, title: "فيلا خاصة", location: "بنغازي", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, title: "مجمع إداري", location: "مصراتة", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, title: "قصر الضيافة", location: "طرابلس", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop" }
]

export default function Projects() {
  return (
    <section id="projects" className="bg-brand-dark px-4 py-24">
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-5xl font-serif text-white">أحدث المشاريع</h2>
        <p className="text-brand-stone/60 mt-4">بصمتنا في المعالم الليبية</p>
      </div>

      <div className="flex flex-col gap-10 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <Card key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

function Card({ project, index }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="sticky top-24 bg-brand-charcoal border border-white/5 rounded-lg overflow-hidden shadow-2xl h-[500px] flex flex-col md:flex-row"
    >
      <div className="w-full md:w-1/2 h-64 md:h-full relative">
        <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-right bg-brand-charcoal">
        <span className="text-brand-gold text-sm font-sans mb-2">0{index + 1}</span>
        <h3 className="text-4xl font-serif text-white mb-4">{project.title}</h3>
        <div className="flex items-center gap-2 text-brand-stone/70">
          <span className="text-brand-gold">📍</span>
          {project.location}
        </div>
        <p className="mt-6 text-brand-stone/50 text-sm leading-relaxed">
          تم توريد وتركيب أفخم أنواع الرخام والجرانيت وفق أعلى المواصفات الهندسية.
        </p>
      </div>
    </motion.div>
  )
}
```

#### 3. `src/sections/Clients.tsx` (Social Proof)
*Since we don't have real logos, I used elegant typography.*

```tsx
import { motion } from 'framer-motion'

const clients = [
  "شركة الإعمار", "مجموعة القابضة", "المكتب الهندسي الحديث", "أبراج ليبيا",
  "المتوسط للمقاولات", "مؤسسة البنيان", "الدار للتطوير", "مجموعة الفنادق"
]

export default function Clients() {
  return (
    <section className="py-24 bg-brand-charcoal border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-brand-gold font-serif text-2xl mb-12 opacity-80">شركاء النجاح</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {clients.map((client, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-xl md:text-2xl font-serif text-brand-stone/40 hover:text-white transition-colors duration-300 cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

#### 4. `src/sections/Sustainability.tsx`
*Eco-friendly section.*

```tsx
export default function Sustainability() {
  return (
    <section className="relative py-32 flex items-center justify-center bg-brand-dark overflow-hidden">
      {/* Background Image showing nature + stone */}
      <img 
        src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1600&auto=format&fit=crop" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale" 
        alt="Nature Stone"
      />
      
      <div className="relative z-10 max-w-4xl text-center px-6">
        <h2 className="text-5xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-brand-stone to-brand-stone/20 mb-6">
          مسؤولية مستدامة
        </h2>
        <p className="text-xl font-sans text-brand-stone/80 leading-relaxed">
          نلتزم في "الهدف الأول" بمعايير الاستدامة البيئية في عمليات الاستخراج والتصنيع، 
          لنضمن أن جمال الطبيعة الذي نأخذه اليوم، يظل ملهماً للأجيال القادمة.
        </p>
      </div>
    </section>
  )
}
```

#### 5. Update `src/components/layout/Footer.tsx`
*A complete footer with the contact info you provided.*

```tsx
export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-brand-stone pt-24 pb-10 border-t border-brand-gold/20">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        
        {/* Left: CTA */}
        <div>
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
            لنبنِ شيئاً <br />
            <span className="text-brand-gold">خالداً.</span>
          </h2>
          <a 
            href="https://wa.me/218917080090" 
            className="inline-flex items-center gap-4 text-2xl border-b border-brand-gold pb-2 hover:opacity-80 transition-opacity"
          >
            تواصل معنا عبر واتساب <span>↗</span>
          </a>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col justify-end items-start md:items-end text-right font-sans space-y-6">
          <div>
            <h4 className="text-brand-stone/50 mb-2 text-sm">العنوان</h4>
            <p className="text-xl">ليبيا، طرابلس</p>
          </div>
          
          <div>
            <h4 className="text-brand-stone/50 mb-2 text-sm">الهاتف</h4>
            <p className="text-xl dir-ltr">091 708 0090</p>
            <p className="text-xl dir-ltr">092 708 0090</p>
          </div>

          <div>
            <h4 className="text-brand-stone/50 mb-2 text-sm">البريد الإلكتروني</h4>
            <p className="text-xl">info@firstgoal.ly</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto max-w-7xl px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm opacity-50">
        <p>© 2025 الهدف الأول للرخام والجرانيت. جميع الحقوق محفوظة.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Instagram</span>
          <span>Facebook</span>
          <span>LinkedIn</span>
        </div>
      </div>
    </footer>
  )
}
```

---

### Step 3: Final `App.tsx` Update

Update your App file to include **all 15 sections**.

```tsx
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/layout/Preloader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Sections
import Hero from './sections/Hero'
import Philosophy from './sections/Philosophy'
import Vision from './sections/Vision' // New
import Gallery from './sections/Gallery'
import GraniteStrength from './sections/GraniteStrength'
import ProductsGrid from './sections/ProductsGrid'
import GlobalSourcing from './sections/GlobalSourcing'
import RawMaterial from './sections/RawMaterial'
import Manufacturing from './sections/Manufacturing'
import ArtificialMarble from './sections/ArtificialMarble'
import CustomWorks from './sections/CustomWorks'
import Projects from './sections/Projects' // New
import Clients from './sections/Clients' // New
import Sustainability from './sections/Sustainability' // New

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
            <Vision />
            <Gallery />
            <GraniteStrength />
            <ProductsGrid />
            <ArtificialMarble /> {/* Fixed */}
            <GlobalSourcing />
            <RawMaterial />
            <Manufacturing />
            <CustomWorks />
            <Projects />
            <Clients />
            <Sustainability />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
```