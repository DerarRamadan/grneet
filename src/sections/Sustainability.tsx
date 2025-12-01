import sustainabilityImg from '../assets/images/sustainability-1.webp'

export default function Sustainability() {
  return (
    <section className="relative py-32 flex items-center justify-center bg-brand-dark overflow-hidden">
      <img
        src={sustainabilityImg}
        className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
        alt="مناظر طبيعية تعكس التزام الشركة بالاستدامة"
        loading="lazy"
      />
      <div className="relative z-10 max-w-4xl text-center px-6">
        <h2 className="text-5xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-brand-stone to-brand-stone/20 mb-6">
          مسؤولية مستدامة
        </h2>
        <p className="text-xl font-sans text-brand-stone/80 leading-relaxed">
          نلتزم في "القاضي للرخام" بمعايير الاستدامة البيئية في عمليات الاستخراج والتصنيع، لنضمن أن جمال الطبيعة الذي نأخذه اليوم، يظل ملهماً للأجيال القادمة.
        </p>
      </div>
    </section>
  )
}
