import { Building } from 'lucide-react'

const clients = [
  "شركة البريقة لتسويق النفط",
  "شركة مصفاة الزاوية",
  "جامعة الزاوية",
  "جهاز تنفيذ مشروعات الإسكان والمرافق",
  "مصلحة الطرق والجسور",
  "صندوق الإنماء الاقتصادي والاجتماعي",
  "وزارة المواصلات"
]

export default function Clients() {
  return (
    <section id="clients" className="py-16 bg-brand-navy overflow-hidden relative border-y border-brand-blue/20">
      
      <div className="container mx-auto px-4 z-10 relative mb-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-brand-white mb-2">شركاء النجاح</h2>
        <p className="text-brand-lightBlue/80">نفخر بثقة كبرى الجهات السيادية وقطاع النفط</p>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center min-w-full">
          {clients.map((client, index) => (
            <span key={index} className="mx-8 text-xl md:text-2xl font-bold text-slate-300/50 hover:text-brand-lightBlue transition-colors flex items-center gap-3">
              <Building className="w-8 h-8 opacity-50" />
              {client}
            </span>
          ))}
          {/* Duplicate for infinite effect */}
          {clients.map((client, index) => (
            <span key={`dup-${index}`} className="mx-8 text-xl md:text-2xl font-bold text-slate-300/50 hover:text-brand-lightBlue transition-colors flex items-center gap-3">
              <Building className="w-8 h-8 opacity-50" />
              {client}
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}
