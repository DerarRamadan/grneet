import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import img1 from '../assets/images/s3-1.webp'
import img2 from '../assets/images/s3-2.webp'
import img3 from '../assets/images/s3-3.webp'
import img4 from '../assets/images/s3-4.webp'
import img5 from '../assets/images/s3-5.webp'
import img6 from '../assets/images/s3-6.webp'
import img7 from '../assets/images/s3-7.webp'
import img8 from '../assets/images/s3-8.webp'

gsap.registerPlugin(ScrollTrigger)

const products = [
  { id: 1, name: 'بيانكو كرارا', category: 'إيطالي', img: img1 },
  { id: 2, name: 'إمبرادور غامق', category: 'إسباني', img: img2 },
  { id: 3, name: 'ترافرتين سلفر', category: 'تركي', img: img3 },
  { id: 4, name: 'بورتورو جولد', category: 'نادر', img: img4 },
  { id: 5, name: 'كلكتا جولد', category: 'إيطالي', img: img5 },
  { id: 6, name: 'جرانيت أسود', category: 'هندي', img: img6 },
  { id: 7, name: 'روزا برتغال', category: 'برتغالي', img: img7 },
  { id: 8, name: 'فيردي غواتيمالا', category: 'أخضر', img: img8 },
]

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(galleryRef.current, {
      x: '-60%',
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
      }
    })
  }, { scope: sectionRef })

  return (
    <section id="gallery" ref={sectionRef} className="relative h-[300vh] bg-brand-charcoal" dir="ltr">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-10 right-10 z-10 text-right" dir="rtl">
          <h3 className="text-4xl md:text-6xl font-serif text-brand-gold">مجموعتنا المختارة</h3>
          <p className="text-brand-stone mt-2 font-sans text-xl">لمسة من الفخامة لكل زاوية</p>
        </div>
        <div ref={galleryRef} className="flex gap-8 pl-10 md:pl-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative h-[50vh] md:h-[60vh] w-[300px] md:w-[400px] flex-shrink-0 overflow-hidden rounded-sm border border-white/10 bg-brand-dark"
            >
              <img
                src={product.img}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 right-0 p-6 w-full text-right" dir="rtl">
                <p className="text-brand-gold text-sm font-sans mb-1">{product.category}</p>
                <h4 className="text-white text-3xl font-serif">{product.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
