import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis({
  lerp: 0.15, // Increased for snappier response (less "floaty")
  wheelMultiplier: 1.2, // Slightly faster scrolling
})

// Synchronize Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update)

// Use GSAP's ticker for the animation loop
gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

// Disable lag smoothing to prevent jumps
gsap.ticker.lagSmoothing(0)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
