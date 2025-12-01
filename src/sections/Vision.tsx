import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import factoryImg from '../assets/images/factory.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Vision() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    tl.from(textRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from(imageRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.5')

  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Image Section */}
          <div ref={imageRef} className="w-full md:w-1/2 relative group">
            <div className="absolute -inset-4 bg-brand-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl border border-white/10">
              <img 
                src={factoryImg} 
                alt="مصنع القاضي للرخام" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>

          {/* Text Section */}
          <div ref={textRef} className="w-full md:w-1/2 text-right">
            <div className="flex items-center gap-4 mb-6 justify-end">
              <div className="h-px w-20 bg-brand-gold"></div>
              <span className="text-brand-gold font-bold tracking-wider uppercase">رؤيتنا</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              نصنع <span className="text-brand-gold">المستقبل</span> <br /> بحجر من <span className="text-transparent bg-clip-text bg-gradient-to-l from-white to-gray-400">التاريخ</span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              في "القاضي للرخام"، رؤيتنا تتجاوز مجرد توريد الأحجار. نحن نسعى لإعادة تعريف مفهوم الفخامة في ليبيا من خلال دمج جمال الطبيعة الخالد مع أحدث تقنيات التصنيع. هدفنا هو أن نكون الشريك الأول لكل من يبحث عن التميز، الجودة، والإتقان الذي لا يضاهى.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="border-r border-white/10 pr-6">
                <h4 className="text-2xl font-bold text-brand-gold mb-2">100%</h4>
                <p className="text-sm text-gray-400">التزام بالجودة والمعايير العالمية</p>
              </div>
              <div className="border-r border-white/10 pr-6">
                <h4 className="text-2xl font-bold text-brand-gold mb-2">+15</h4>
                <p className="text-sm text-gray-400">عاماً من الخبرة والريادة</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
