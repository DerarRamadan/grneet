import { useState } from 'react'
import customImg from '../assets/images/s7-1.webp'
import type { MouseEvent as ReactMouseEvent } from 'react'

export default function CustomWorks() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: ReactMouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <section onMouseMove={handleMouseMove} className="relative h-screen bg-black flex items-center justify-center overflow-hidden cursor-none">
      <div className="absolute inset-0 opacity-20">
        <img src={customImg} alt="Sculpture" className="w-full h-full object-cover grayscale" />
      </div>
      <div className="relative z-20 text-center pointer-events-none mix-blend-difference text-white">
        <h2 className="text-6xl md:text-9xl font-serif font-bold">خيالك.. ننحته</h2>
        <p className="text-2xl mt-4 font-sans">مغاسل، سلالم، وتحف فنية.</p>
      </div>
      <div
        className="absolute w-[300px] h-[300px] bg-brand-gold/20 rounded-full blur-[100px] pointer-events-none z-10 mix-blend-screen"
        style={{ left: mousePos.x - 150, top: mousePos.y - 150, transition: 'transform 0.1s ease-out' }}
      />
    </section>
  )
}
