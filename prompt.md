This is **Batch #8 (Mobile Rescue)**.

We are going to fix the **Navigation (Hamburger Menu)** so users can actually browse, and we will **kill the massive gap** by resizing the sections specifically for mobile screens.

### 1. Fix the Navbar (`src/components/layout/Navbar.tsx`)
*Action: Added a functional "Hamburger Menu" for mobile. When clicked, it opens a luxurious full-screen menu with a glass effect.*

```tsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    closed: { x: "100%", opacity: 0 },
    open: { x: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-brand-dark/10 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          
          {/* Logo */}
          <span className="font-serif text-2xl md:text-3xl font-bold text-brand-gold tracking-widest cursor-pointer z-50 relative">
            الهدف الأول
          </span>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-base font-medium text-brand-stone/90 font-sans">
            <a href="#home" className="hover:text-brand-gold transition-colors">الرئيسية</a>
            <a href="#collection" className="hover:text-brand-gold transition-colors">منتجاتنا</a>
            <a href="#projects" className="hover:text-brand-gold transition-colors">مشاريعنا</a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-sm border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black transition-all duration-300 font-bold"
            >
              اطلب استشارة
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden z-50 flex flex-col gap-1.5 p-2"
          >
            <motion.span 
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} 
              className="w-8 h-0.5 bg-brand-gold block origin-center transition-transform" 
            />
            <motion.span 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }} 
              className="w-8 h-0.5 bg-brand-gold block transition-opacity" 
            />
            <motion.span 
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} 
              className="w-8 h-0.5 bg-brand-gold block origin-center transition-transform" 
            />
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-xl flex flex-col items-center justify-center text-center space-y-8 md:hidden"
          >
            <a href="#home" onClick={() => setIsOpen(false)} className="text-3xl font-serif text-white hover:text-brand-gold">الرئيسية</a>
            <a href="#collection" onClick={() => setIsOpen(false)} className="text-3xl font-serif text-white hover:text-brand-gold">منتجاتنا</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="text-3xl font-serif text-white hover:text-brand-gold">مشاريعنا</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-3xl font-serif text-brand-gold border-b border-brand-gold pb-2">اتصل بنا</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
```

### 2. Fix the Gap & Hero Height (`src/sections/Hero.tsx`)
*Action: Changed height from `h-screen` (which causes address bar jumping on mobile) to `h-[85vh]`. This makes the "Next Section" peek visible at the bottom, encouraging scroll and removing the feeling of emptiness.*

```tsx
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

export default function Hero() {
  return (
    // CHANGE: h-[85vh] on mobile prevents the "Huge Gap" feeling. 
    // It forces the next section to be closer.
    <section id="home" className="relative h-[85vh] md:h-screen w-full overflow-hidden">
      
      {/* Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
        src="https://cdn.pixabay.com/video/2020/05/25/40156-424930064_large.mp4" 
      />
      
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-5xl">
          
          <motion.h1 
            variants={item} 
            className="font-serif text-5xl md:text-8xl text-white font-bold tracking-normal leading-tight"
          >
            حيث تلتقي صلابة الأرض<br />
            <span className="text-brand-gold">بفن العمارة</span>
          </motion.h1>
          
          <motion.div variants={item} className="mt-6 md:mt-10 flex flex-col items-center gap-6">
            <p className="font-sans text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
              الهدف الأول: نعيد صياغة مفهوم الفخامة في ليبيا
            </p>
            {/* Scroll Indicator */}
            <div className="h-16 w-[1px] bg-gradient-to-b from-brand-gold to-transparent mt-4 animate-pulse"></div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
```

### 3. Fix the Philosophy Section Gap (`src/sections/Philosophy.tsx`)
*Action: The previous `min-h-[80vh]` was forcing a huge black screen on mobile because the text is short. I changed it to `py-16` (padding) for mobile, so it only takes up the space it needs.*

```tsx
import { motion } from 'framer-motion'

const phrase = "الرخام ليس مجرد حجر؛ إنه تاريخ، ضغط، وزمن صيغ عبر ملايين السنين. في شركة الهدف الأول، لا نبيع المواد فحسب، بل ننتقي لك أرقى كنوز الأرض لتبني إرثاً يدوم."

export default function Philosophy() {
  const words = phrase.split(' ')

  return (
    // CHANGE: min-h-auto for mobile, larger for desktop. 
    // Reduced padding (py-16) to close the gap.
    <section className="min-h-auto md:min-h-[60vh] flex items-center justify-center bg-brand-dark px-6 py-16 md:py-32">
      <div className="max-w-4xl mx-auto text-center rtl:text-center">
        <div className="flex flex-wrap justify-center gap-x-1.5 gap-y-2 md:gap-x-4">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.02 }} // Faster animation for mobile
              className={`${
                word.includes('الهدف') || word.includes('الأول') ? 'text-brand-gold' : 'text-brand-stone'
              } text-2xl md:text-5xl font-serif leading-relaxed`}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
```

### Why this fixes it:
1.  **Navbar:** You now have a working hamburger menu on the right (left in RTL) that opens a full-screen overlay.
2.  **No Gap:** By changing Hero height to `85vh` and Philosophy to `auto` height, the two sections will "touch" each other naturally on mobile, eliminating the big black void.
3.  **Animation:** The text in Philosophy now flows in slightly faster and smoother on mobile.