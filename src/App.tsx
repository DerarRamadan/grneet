import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Preloader from './components/layout/Preloader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Clients from './sections/Clients'
import Projects from './sections/Projects'
import WorkStages from './sections/WorkStages'
import Machinery from './sections/Machinery'
import Team from './sections/Team'
import Contact from './sections/Contact'
import ContactForm from './sections/ContactForm'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showPreloader, setShowPreloader] = useState(true)

  useEffect(() => {
    // Initialize Lenis smooth scroll with better settings for RTL/Mobile
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Shorter preloader since everything is modern and lean
    const t = setTimeout(() => setIsLoading(false), 1500)
    
    return () => {
      clearTimeout(t)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen font-sans bg-brand-gray text-brand-navy selection:bg-brand-blue selection:text-white overflow-x-hidden">
      {showPreloader && (
        <Preloader 
          loading={isLoading} 
          onComplete={() => setShowPreloader(false)} 
        />
      )}
      {!isLoading && (
        <div className="relative overflow-x-hidden">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Clients />
            <Projects />
            <WorkStages />
            <Machinery />
            <Team />
            <Contact />
            <ContactForm />
          </main>
          <Footer />
        </div>
      )}
    </div>
  )
}


