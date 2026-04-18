import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

// Using an image from the work folder as the hero background for realism
import heroBg from '../assets/work/1.png'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-brand-navy overflow-hidden">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/60 to-brand-navy z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center pt-24">
        
        {/* Subtle decorative accent */}
        <motion.div
           initial={{ scale: 0 }}
           animate={{ scale: 1 }}
           transition={{ duration: 1, type: 'spring' }}
           className="w-16 h-1 bg-brand-lightBlue mb-8 rounded-full"
        />

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl"
        >
          نبني القاعدة المتينة <br className="hidden md:block"/> <span className="text-brand-lightBlue">لهذا البلد</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-slate-200 mb-10 max-w-3xl font-light leading-relaxed drop-shadow-md"
        >
          بخبرة طويلة وآليات متطورة، نقدم حلول هندسية متكاملة في قطاع المقاولات والطرق للنهوض بالبنية التحتية والمشروعات الاستراتيجية.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 mt-4"
        >
          <a href="#projects" className="bg-brand-blue hover:bg-brand-lightBlue text-white px-10 py-4 font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,180,216,0.3)] hover:shadow-[0_0_30px_rgba(0,180,216,0.6)] rounded-sm">
            مشاريعنا المنفذة
            <ArrowLeft className="w-5 h-5" />
          </a>
          <a href="#contact" className="bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white px-10 py-4 font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 rounded-sm backdrop-blur-sm">
            تواصل معنا الآن
          </a>
        </motion.div>
      </div>

      {/* Decorative Blueprint/Highway Line at bottom of Hero */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center z-10 opacity-60">
        <div className="animate-bounce">
           <div className="w-[2px] h-12 bg-gradient-to-b from-brand-lightBlue to-transparent mx-auto rounded-full" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#181a1b] to-transparent z-10"></div>
    </section>
  )
}
