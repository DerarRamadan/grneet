. Update index.html (Enable RTL)
File: index.html
Change the html tag to include dir="rtl" and lang="ar". This automatically flips the layout (Left 
↔
↔
 Right).
code
Html
<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>الهدف الأول للرخام والجرانيت</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
2. Update Fonts & CSS
File: src/index.css
We will replace the English fonts with 'Amiri' (for Headlines/Serif) and 'Tajawal' (for Body/Sans).
code
CSS
@import "tailwindcss";
/* Importing Arabic Fonts: Amiri (Luxury Serif) and Tajawal (Modern Sans) */
@import url("https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Tajawal:wght@300;400;500;700;800&display=swap");

@theme {
  --color-brand-dark: #0a0a0a;
  --color-brand-charcoal: #1a1a1a;
  --color-brand-gold: #D4AF37;
  --color-brand-gold-light: #F4E5B8;
  --color-brand-stone: #E6E6E6;
  
  /* Update Font mappings */
  --font-serif: "Amiri", serif;
  --font-sans: "Tajawal", sans-serif;
}

html,
body,
#root {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: var(--color-brand-dark);
  color: var(--color-brand-stone);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #0a0a0a;
}
::-webkit-scrollbar-thumb {
  background: #333;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #D4AF37;
}
3. Translate Navbar
File: src/components/layout/Navbar.tsx
code
Tsx
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full bg-brand-dark/10 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <span className="font-serif text-3xl font-bold text-brand-gold tracking-widest cursor-pointer">
          الهدف الأول
        </span>
        
        {/* Menu - RTL automatically handles the order */}
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
      </div>
    </header>
  )
}
4. Translate Hero Section
File: src/sections/Hero.tsx
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
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        autoPlay
        loop
        muted
        playsInline
        src="https://cdn.pixabay.com/video/2019/05/21/23793-338276064_large.mp4" 
      />
      
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.h1 
            variants={item} 
            className="font-serif text-5xl md:text-8xl lg:text-9xl text-white font-bold tracking-tight leading-tight"
          >
            حيث تلتقي صلابة الأرض<br />
            <span className="text-brand-gold">بفن العمارة</span>
          </motion.h1>
          <motion.div variants={item} className="mt-8 flex flex-col items-center gap-4">
            <p className="font-sans text-xl md:text-2xl text-gray-200 max-w-3xl">
              الهدف الأول: نعيد صياغة مفهوم الفخامة في ليبيا
            </p>
            <div className="h-16 w-[1px] bg-brand-gold/50 mt-8"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
5. Translate Philosophy
File: src/sections/Philosophy.tsx
code
Tsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const phrase = "الرخام ليس مجرد حجر؛ إنه تاريخ، ضغط، وزمن صيغ عبر ملايين السنين. في شركة الهدف الأول، لا نبيع المواد فحسب، بل ننتقي لك أرقى كنوز الأرض لتبني إرثاً يدوم."

export default function Philosophy() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const words = phrase.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-brand-dark px-6 py-20">
      <div ref={ref} className="max-w-4xl mx-auto text-center rtl:text-center">
        <motion.div
          className="flex flex-wrap justify-center gap-x-2 gap-y-2 md:gap-x-4"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={child}
              className={`${
                word.includes('الهدف') || word.includes('الأول') ? 'text-brand-gold' : 'text-brand-stone'
              } text-3xl md:text-5xl lg:text-6xl font-serif leading-relaxed`}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
6. Translate Global Sourcing
File: src/sections/GlobalSourcing.tsx
Note: Since it's a map, keep ltr for the map container if using absolute positioning based on left/top, OR adjust logic. Usually, keeping the map visual logic as is but changing text is safer.
code
Tsx
import { motion } from 'framer-motion'
import { useState } from 'react'

const locations = [
  { id: 1, country: 'إيطاليا', top: '32%', left: '51%', material: 'كرارا & ستواريو' },
  { id: 2, country: 'إسبانيا', top: '34%', left: '47%', material: 'كريما مارفل' },
  { id: 3, country: 'تركيا', top: '35%', left: '55%', material: 'رخام رمادي' },
  { id: 4, country: 'الهند', top: '42%', left: '68%', material: 'جرانيت أسود' },
  { id: 5, country: 'مصر', top: '40%', left: '54%', material: 'جلالة & صني' },
  { id: 6, country: 'عمان', top: '43%', left: '58%', material: 'بيج عماني' },
]

export default function GlobalSourcing() {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <section className="relative h-screen bg-brand-charcoal overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-10 z-10 text-center">
        <h2 className="text-brand-gold font-serif text-4xl tracking-wide">نستورد من العالم</h2>
        <p className="text-brand-stone/60 font-sans text-lg mt-2">من قلب المحاجر العالمية إلى طرابلس</p>
      </div>

      <div className="relative w-full max-w-6xl aspect-[1.8/1] opacity-80" dir="ltr">
        {/* Background Map */}
        <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-contain bg-center opacity-20 invert grayscale"></div>

        {locations.map((loc) => (
          <div
            key={loc.id}
            className="absolute group cursor-pointer"
            style={{ top: loc.top, left: loc.left }}
            onMouseEnter={() => setActiveId(loc.id)}
            onMouseLeave={() => setActiveId(null)}
          >
            <div className="absolute -inset-2 bg-brand-gold/30 rounded-full animate-ping"></div>
            <div className="relative w-3 h-3 bg-brand-gold rounded-full shadow-[0_0_10px_#D4AF37]"></div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: activeId === loc.id ? 1 : 0, y: activeId === loc.id ? -10 : 10 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 bg-black/90 border border-brand-gold/30 p-3 rounded text-center pointer-events-none z-20"
            >
              <h4 className="text-brand-gold font-serif text-lg">{loc.country}</h4>
              <p className="text-white/70 text-xs font-sans mt-1">{loc.material}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
7. Translate Raw Material
File: src/sections/RawMaterial.tsx
code
Tsx
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function RawMaterial() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center bg-brand-dark">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599815049514-a952d7d8e8a6?q=80&w=2070&auto=format&fit=crop"
          alt="محجر رخام"
          className="w-full h-[120%] object-cover brightness-50"
          loading="lazy"
        />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center p-8 md:p-12 border border-white/10 bg-black/40 backdrop-blur-md max-w-3xl mx-4">
        <h2 className="text-5xl md:text-8xl font-serif text-white font-bold tracking-tighter">
          قوة الخام
        </h2>
        <p className="mt-6 text-brand-stone/90 text-lg md:text-2xl font-sans leading-relaxed">
          مستخرجة من قلب الجبال.. نقية، صلبة، وجاهزة لنصنع منها إرثاً معمارياً.
        </p>
      </motion.div>
    </section>
  )
}
8. Translate Preloader
File: src/components/layout/Preloader.tsx
Update the text "FIRST GOAL" to "الهدف الأول".
code
Tsx
// Inside the component...
<motion.h1 ...>
  الهدف الأول
</motion.h1>
Run the project now. The site will be Right-to-Left, using beautiful Arabic typography (Amiri and Tajawal), with all content localized for the Libyan market.