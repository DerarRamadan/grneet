import { useEffect, useState } from 'react'
import Preloader from './components/layout/Preloader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import Philosophy from './sections/Philosophy'
import Vision from './sections/Vision'
import GlobalSourcing from './sections/GlobalSourcing'
import RawMaterial from './sections/RawMaterial'
import Gallery from './sections/Gallery'
import GraniteStrength from './sections/GraniteStrength'
import Manufacturing from './sections/Manufacturing'
import ProductsGrid from './sections/ProductsGrid'
import ArtificialMarble from './sections/ArtificialMarble'
import CustomWorks from './sections/CustomWorks'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Sustainability from './sections/Sustainability'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen">
      {showPreloader && (
        <Preloader 
          loading={isLoading} 
          onComplete={() => setShowPreloader(false)} 
        />
      )}
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
            <ArtificialMarble />
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
