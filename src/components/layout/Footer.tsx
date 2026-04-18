export default function Footer() {
  return (
    <footer className="bg-[#050A15] text-brand-gray border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        
        {/* Info & Registration */}
        <div className="relative">
          <div className="absolute top-4 right-0 w-32 h-16 bg-white/60 blur-2xl rounded-full -z-10" />
          <img src="/logo.svg" alt="شركة التطوير المتقن للإنشاءات" className="relative h-16 mb-6 z-10" />
          <p className="text-brand-gray/60 mb-6 max-w-sm leading-relaxed">
            الخيار الأول في ليبيا لبناء وتطوير البنية التحتية المتينة، بأعلى معايير الجودة والالتزام الهندسي.
          </p>
          <div className="bg-brand-white/5 p-4 rounded-xl border border-white/5 max-w-sm">
            <p className="text-brand-lightBlue font-bold text-lg mb-1">البيانات القانونية</p>
            <p className="text-brand-gray/80 text-sm">سجل تجاري رقم: <strong className="text-white">39010</strong></p>
            <p className="text-brand-gray/80 text-sm">ترخيص مزاولة ساري المفعول</p>
          </div>
        </div>

        {/* Map */}
        <div className="h-full min-h-[250px] rounded-2xl overflow-hidden border border-white/10 relative">
          {/* We use an iframe pointing to Zawiya area, or general area since we don't have exact coordinates */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3356.124673623631!2d12.695412724249166!3d32.76800917366752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDQ2JzA0LjgiTiAxMsKwNDEnNTIuOCJF!5e0!3m2!1sar!2sly!4v1713391200000!5m2!1sar!2sly" 
            width="100%" 
            height="100%" 
            style={{ border: 0, minHeight: '250px' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع الشركة"
          ></iframe>
          <div className="absolute top-4 right-4 bg-brand-navy p-2 rounded-lg shadow-lg border border-white/10 text-xs font-bold flex flex-col">
            <span className="text-brand-lightBlue">الزاوية، طريق الساحلي</span>
            <span>منطقة الحيرشة</span>
          </div>
        </div>

      </div>

      <div className="container mx-auto px-4 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-brand-gray/50 text-sm">
          &copy; {new Date().getFullYear()} شركة التطوير المتقن للإنشاءات. جميع الحقوق محفوظة.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-brand-gray/50 hover:text-brand-lightBlue transition-colors text-sm">الشروط والأحكام</a>
          <a href="#" className="text-brand-gray/50 hover:text-brand-lightBlue transition-colors text-sm">سياسة الخصوصية</a>
        </div>
      </div>
    </footer>
  )
}
