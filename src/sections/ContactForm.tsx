import { motion } from 'framer-motion'
import { Send, MapPin, Mail, Clock } from 'lucide-react'

export default function ContactForm() {
  return (
    <section id="contact-form" className="py-20 bg-brand-white relative">
      <div className="container mx-auto px-4 z-10 max-w-6xl">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-4">المراسلات وطلب العطاءات</h2>
          <div className="w-24 h-1 bg-brand-lightBlue mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            نرحب بكافة الاستفسارات وطلبات التعاون والمشاركة في العطاءات من الجهات العامة والخاصة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-brand-gray p-8 rounded-3xl border border-slate-100 flex flex-col gap-6 h-full shadow-sm">
              
              <div className="flex gap-4">
                <div className="bg-brand-white p-3 rounded-xl h-fit border border-slate-200">
                  <MapPin className="text-brand-blue w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-lg mb-1">المقر الرئيسي</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">الزاوية، شارع عوزة - مصحة جامع الطب، بالقرب من جزيرة المركزية.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-brand-white p-3 rounded-xl h-fit border border-slate-200">
                  <Mail className="text-brand-blue w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-lg mb-1">البريد الإلكتروني</h4>
                  <p className="text-slate-600 font-sans" dir="ltr">21892601@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-brand-white p-3 rounded-xl h-fit border border-slate-200">
                  <Clock className="text-brand-blue w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy text-lg mb-1">ساعات العمل</h4>
                  <p className="text-slate-600 text-sm">الأحد - الخميس (08:00 ص - 04:00 م)</p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-slate-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-brand-navy mb-2">اسم الجهة / الشركة</label>
                  <input type="text" className="w-full bg-brand-gray border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="أدخل اسم الجهة الطالبة" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-navy mb-2">رقم الهاتف</label>
                  <input type="tel" className="w-full bg-brand-gray border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all" placeholder="رقم الهاتف للرد" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-bold text-brand-navy mb-2">نوع المشروع / العطاء</label>
                <select className="w-full bg-brand-gray border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all">
                  <option>مقاولات مدنية</option>
                  <option>رصف وتعبيد طرق</option>
                  <option>أعمال كهروميكانيكية</option>
                  <option>توريد</option>
                  <option>أخرى</option>
                </select>
              </div>
              <div className="mb-8">
                <label className="block text-sm font-bold text-brand-navy mb-2">تفاصيل الطلب</label>
                <textarea rows={4} className="w-full bg-brand-gray border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none" placeholder="اكتب تفاصيل مشروعك هنا..."></textarea>
              </div>
              <button type="button" className="w-full bg-brand-blue hover:bg-brand-navy text-white font-bold text-lg py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                إرسال الطلب
                <Send className="w-5 h-5 rtl:scale-x-[-1]" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
