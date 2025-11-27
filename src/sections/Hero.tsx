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
            className="font-serif text-5xl md:text-7xl lg:text-9xl text-white font-bold tracking-tight"
          >
            Nature’s Masterpiece.
            <br />
            <span className="text-brand-gold italic">Refined.</span>
          </motion.h1>
          <motion.div variants={item} className="mt-8 flex flex-col items-center gap-4">
            <p className="font-sans text-lg md:text-xl text-gray-300 max-w-2xl">
              Leading Marble & Granite Industry in Libya.
            </p>
            <div className="h-16 w-[1px] bg-brand-gold/50 mt-8"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
