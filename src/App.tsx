import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Preloader from './components/layout/Preloader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import Philosophy from './sections/Philosophy'
import GlobalSourcing from './sections/GlobalSourcing'
import RawMaterial from './sections/RawMaterial'
import Gallery from './sections/Gallery'
import GraniteStrength from './sections/GraniteStrength'
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
    <div className="min-h-screen">
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
            <ProductsGrid />
            <GlobalSourcing />
            <RawMaterial />
            <Manufacturing />
            <ArtificialMarble />
            <CustomWorks />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
