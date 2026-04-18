import { motion } from 'framer-motion'
import { Building2, ShieldCheck, Flag } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-brand-gray relative">
      <div className="container mx-auto px-4 z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-4">من نحن</h2>
          <div className="w-24 h-1 bg-brand-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-lg text-slate-700 leading-relaxed"
          >
            <p>
              تأسست شركة التطوير المتقن للإنشاءات لتكون حجر الزاوية في بناء وتشييد البنية التحتية المتينة في ليبيا. نحن نلتزم بأعلى معايير الجودة والاحترافية لتقديم أعمال المقاولات العامة، ورصف الطرق، والمشروعات المدنية المتكاملة.
            </p>
            <p>
              بفضل فريق المهندسين والخبراء لدينا، نواصل مسيرتنا نحو الريادة محلياً من خلال شراكات استراتيجية مع أكبر الشركات والمؤسسات الحكومية والنفطية.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-brand-lightBlue/10 text-brand-lightBlue rounded-lg">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="font-bold text-brand-navy">معايير جودة عالية</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-brand-lightBlue/10 text-brand-lightBlue rounded-lg">
                  <Flag className="w-6 h-6" />
                </div>
                <span className="font-bold text-brand-navy">مشاريع وطنية واعدة</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* The Glowing Capital Card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-brand-navy to-[#061020] p-10 text-center shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-brand-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="p-4 bg-brand-white/10 rounded-full mb-6">
                  <Building2 className="w-12 h-12 text-brand-lightBlue" />
                </div>
                <h3 className="text-xl text-brand-gray mb-2">رأس مال الشركة المعتمد</h3>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-4xl md:text-6xl font-black text-white tracking-wider glow-text">
                    30,000,000
                  </span>
                  <span className="text-2xl text-brand-lightBlue font-bold">د.ل</span>
                </div>
                <p className="text-brand-gray/60 mt-4 text-sm max-w-xs mx-auto">
                  ضمان قوي لملاءتنا المالية وقدرتنا على تنفيذ أضخم المشاريع الاستراتيجية
                </p>
              </div>

              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lightBlue/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-brand-blue/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  )
}
