import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { Users, HardHat, Compass, Pickaxe } from 'lucide-react'

const teamStats = [
  { id: 1, label: 'مهندس مدني', count: 5, icon: HardHat },
  { id: 2, label: 'مساح', count: 4, icon: Compass },
  { id: 3, label: 'مهندس كهربائي', count: 2, icon: Zap },
  { id: 4, label: 'مهندس معماري', count: 2, icon: Building },
  { id: 5, label: 'سائق آليات ثقيلة', count: 20, icon: Truck },
  { id: 6, label: 'عامل وفني', count: 20, icon: Pickaxe },
]

import { Zap, Building, Truck } from 'lucide-react'

export default function Team() {
  return (
    <section id="team" className="py-20 bg-brand-navy relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-lightBlue/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-white mb-4">القوة البشرية والمهندسين</h2>
          <div className="w-24 h-1 bg-brand-lightBlue mx-auto rounded-full mb-6"></div>
          <p className="text-brand-gray/80 max-w-2xl mx-auto">
            أكبر استثماراتنا هي عقول وسواعد أبناء وطننا. نفخر بفريق متكامل من المهندسين والفنيين والعمال الذين يترجمون الخطط إلى واقع.
          </p>
        </div>

        <div className="flex flex-col items-center mb-16">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center p-8 bg-gradient-to-t from-[#061020] to-brand-navy rounded-full w-48 h-48 border-[4px] border-brand-lightBlue/20 shadow-[0_0_50px_rgba(0,180,216,0.15)]"
          >
            <Users className="text-brand-lightBlue w-12 h-12 mb-2" />
            <div className="text-4xl font-black text-white glow-text flex items-center">
              <span>+</span>
              <CountUp end={75} duration={3} enableScrollSpy scrollSpyOnce />
            </div>
            <p className="text-brand-gray/60 text-sm mt-1">موظف وعامل</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {teamStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-white/5 border border-brand-white/10 rounded-2xl p-6 text-center hover:bg-brand-white/10 transition-colors backdrop-blur-sm"
            >
              <stat.icon className="w-8 h-8 text-brand-lightBlue mx-auto mb-4 opacity-80" />
              <div className="text-3xl font-bold text-white mb-1">
                <CountUp end={stat.count} duration={2.5} delay={0.5} enableScrollSpy scrollSpyOnce />
              </div>
              <p className="text-brand-gray/70 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
