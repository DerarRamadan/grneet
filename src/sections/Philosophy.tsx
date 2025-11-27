import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const phrase = "Marble is not just stone. It is history, pressure, and time, forged over millions of years. At First Goal, we don't just supply material; we curate the Earth's finest art for your legacy."

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
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  }

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-brand-dark px-6 py-20">
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <motion.div
          className="flex flex-wrap justify-center gap-x-3 gap-y-2"
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={child}
              className={`${
                word === 'First' || word === 'Goal,' ? 'text-brand-gold' : 'text-brand-stone'
              } text-3xl md:text-5xl lg:text-6xl font-serif leading-tight`}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
