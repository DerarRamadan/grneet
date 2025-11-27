import { motion } from 'framer-motion'

type Project = { id: number; title: string; location: string; img: string }

const projects: Project[] = [
  { id: 1, title: 'فندق ريكسوس', location: 'طرابلس', img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, title: 'فيلا خاصة', location: 'بنغازي', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, title: 'مجمع إداري', location: 'مصراتة', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, title: 'قصر الضيافة', location: 'طرابلس', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop' },
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="sticky top-24 bg-brand-charcoal border border-white/5 rounded-lg overflow-hidden shadow-2xl h-[500px] flex flex-col md:flex-row"
    >
      <div className="w-full md:w-1/2 h-64 md:h-full relative">
        <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
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
    </motion.div>
  )
}
