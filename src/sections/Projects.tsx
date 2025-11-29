import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import p1 from '../assets/images/projects-1.webp'
import p2 from '../assets/images/projects-2.webp'
import p3 from '../assets/images/projects-3.webp'
import p4 from '../assets/images/projects-4.webp'

gsap.registerPlugin(ScrollTrigger)

type Project = { id: number; title: string; location: string; img: string }

const projects: Project[] = [
  { id: 1, title: 'فندق ريكسوس', location: 'طرابلس', img: p1 },
  { id: 2, title: 'فيلا خاصة', location: 'بنغازي', img: p2 },
  { id: 3, title: 'مجمع إداري', location: 'مصراتة', img: p3 },
  { id: 4, title: 'قصر الضيافة', location: 'طرابلس', img: p4 },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-brand-dark px-4 py-24">
      <div className="max-w-5xl mx-auto mb-16 text-center">
        <h2 className="text-5xl font-serif text-white">أحدث المشاريع</h2>
        <p className="text-brand-stone/60 mt-4">بصمتنا في المعالم الليبية</p>
      </div>
      <div className="flex flex-col gap-10 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <Card key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

function Card({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
        once: true
      },
      opacity: 0,
      y: 50,
      duration: 0.6
    })
  }, { scope: cardRef })

  return (
    <div
      ref={cardRef}
      className="sticky top-24 bg-brand-charcoal border border-white/5 rounded-lg overflow-hidden shadow-2xl h-[500px] flex flex-col md:flex-row"
    >
      <div className="w-full md:w-1/2 h-64 md:h-full relative">
        <img src={project.img} alt={`مشروع ${project.title} في ${project.location}`} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center text-right bg-brand-charcoal">
        <span className="text-brand-gold text-sm font-sans mb-2">0{index + 1}</span>
        <h3 className="text-4xl font-serif text-white mb-4">{project.title}</h3>
        <div className="flex items-center gap-2 text-brand-stone/70">
          <span className="text-brand-gold">📍</span>
          {project.location}
        </div>
        <p className="mt-6 text-brand-stone/50 text-sm leading-relaxed">
          تم توريد وتركيب أفخم أنواع الرخام والجرانيت وفق أعلى المواصفات الهندسية.
        </p>
      </div>
    </div>
  )
}
