import { AnimatePresence, motion } from 'framer-motion'

type PreloaderProps = {
  visible: boolean
}

export default function Preloader({ visible }: PreloaderProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark"
          initial={{ opacity: 1, y: 0 }}
          exit={{ y: -1000 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative flex flex-col items-center justify-center">
            <motion.h1
              className="text-4xl md:text-6xl font-serif font-bold text-brand-gold"
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              FIRST GOAL
            </motion.h1>

            <motion.div
              className="mt-4 h-px w-40 bg-brand-gold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{ transformOrigin: 'left' }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
