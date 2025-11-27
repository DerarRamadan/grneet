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
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
        src="https://cdn.pixabay.com/video/2020/05/25/40156-424930064_large.mp4"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-5xl">
          <motion.h1
            variants={item}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-normal leading-tight md:leading-snug"
          >
            حيث تلتقي صلابة الأرض
            <br />
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
