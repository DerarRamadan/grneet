import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, MapPin, Maximize2 } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'رصف الطريق الرابط بين طريق 2 وطريق 3',
    location: 'الزاوية المركز',
    length: '2500 متر',
    details: 'أعمال رصف وتمهيد للطريق ضمن خطة تطوير البنية التحتية والمواصلات للعام الحالي بضمان أعلى معايير الجودة المعتمدة من مصلحة الطرق.',
  },
  {
    id: 2,
    title: 'صيانة الطريق الرابط بين تقاطع ضي الهلال والطريق رقم 2',
    location: 'جنوب الزاوية',
    length: '3000 متر',
    details: 'عملية قشط ووضع طبقات إسفلت حديثة وإعادة تأهيل وصيانة الطريق لتسهيل الحركة المرورية لسيارات النقل الثقيل والسيارات الخاصة.',
  },
  {
    id: 3,
    title: 'صيانة وتعبيد طريق المطرد',
    location: 'المطرد',
    length: '2120 متر',
    details: 'مشروع صيانة وتعبيد متكامل شمل البنية التحتية لتصريف المياه وإنشاء الجزيرة الوسطية.',
  }
]

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(1)

  return (
    <section id="projects" className="py-20 bg-brand-white relative">
      <div className="container mx-auto px-4 z-10 max-w-4xl">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-4">أبرز المشاريع المنفذة</h2>
          <div className="w-24 h-1 bg-brand-lightBlue mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isExpanded ? 'border-brand-blue shadow-lg bg-brand-gray' : 'border-slate-200 hover:border-brand-lightBlue bg-white'}`}
              >
                <div 
                  className="p-6 flex items-center justify-between cursor-pointer"
                  onClick={() => setExpandedId(isExpanded ? null : project.id)}
                >
                  <h3 className={`text-xl md:text-2xl font-bold transition-colors ${isExpanded ? 'text-brand-blue' : 'text-brand-navy'}`}>
                    {project.title}
                  </h3>
                  <div className={`p-2 rounded-full transition-colors ${isExpanded ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex flex-col md:flex-row gap-6">
                        
                        <div className="flex-1 text-slate-600 leading-relaxed text-lg">
                          {project.details}
                        </div>
                        
                        <div className="bg-white p-4 justify-center rounded-xl border border-slate-100 flex flex-col gap-4 min-w-[200px]">
                          <div className="flex items-center gap-3">
                            <MapPin className="text-brand-lightBlue w-6 h-6" />
                            <div>
                              <p className="text-xs text-slate-400 font-bold">الموقع</p>
                              <p className="text-brand-navy font-bold">{project.location}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Maximize2 className="text-brand-lightBlue w-6 h-6" />
                            <div>
                              <p className="text-xs text-slate-400 font-bold">الطول/المساحة</p>
                              <p className="text-brand-navy font-bold">{project.length}</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
