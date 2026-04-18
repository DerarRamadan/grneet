import { useEffect, useState } from 'react'
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
    // Shorter preloader since everything is modern and lean
    const t = setTimeout(() => setIsLoading(false), 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="min-h-screen font-sans bg-brand-gray text-brand-navy">
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
        </>
      )}
    </div>
  )
}
