import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import heroVideoWebm from '../../assets/video/hero.webm'
import heroVideoMp4 from '../../assets/video/hero.mp4'
import heroPoster from '../../assets/images/here-poster.webp'

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)

  useGSAP(() => {
    const button = buttonRef.current
    if (!button) return

    const onEnter = () => gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" })
    const onLeave = () => gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" })
    const onDown = () => gsap.to(button, { scale: 0.95, duration: 0.1 })
    const onUp = () => gsap.to(button, { scale: 1.05, duration: 0.1 })

    button.addEventListener('mouseenter', onEnter)
    button.addEventListener('mouseleave', onLeave)
    button.addEventListener('mousedown', onDown)
    button.addEventListener('mouseup', onUp)
    // Handle touch events for mobile "tap"
    button.addEventListener('touchstart', onDown)
    button.addEventListener('touchend', onUp)

    return () => {
      button.removeEventListener('mouseenter', onEnter)
      button.removeEventListener('mouseleave', onLeave)
      button.removeEventListener('mousedown', onDown)
      button.removeEventListener('mouseup', onUp)
      button.removeEventListener('touchstart', onDown)
      button.removeEventListener('touchend', onUp)
    }
  }, { scope: containerRef })

  return (
    <footer id="contact" className="relative bg-black text-white pt-24 pb-8 border-t border-brand-gold/30 overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroPoster}
          className="w-full h-full object-cover opacity-50 md:opacity-40 brightness-110 saturate-120"
        >
          <source src={heroVideoWebm} type="video/webm" />
          <source src={heroVideoMp4} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/12 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.18),transparent_70%)]" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
          <div className="text-right">
            <h2 className="text-6xl md:text-8xl font-serif mb-6 leading-tight">
              لنبنِ شيئاً <br />
              <span className="text-brand-gold">خالداً.</span>
            </h2>
            <p className="text-brand-stone/70 font-sans text-lg md:text-xl max-w-md">
              نحن هنا لتحويل رؤيتك المعمارية إلى واقع ملموس بأجود أنواع الحجر الطبيعي.
            </p>
          </div>
          <a
            ref={buttonRef}
            href="https://wa.me/218917080090"
            className="w-full md:w-auto bg-brand-gold/90 hover:bg-brand-gold text-black px-8 py-5 rounded-xl font-bold text-xl flex items-center justify-center md:justify-start gap-3 shadow-[0_20px_40px_rgba(212,175,55,0.25)] transition-colors"
          >
            <span>↗</span> تواصل معنا عبر واتساب
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 border-t border-white/10 pt-16 mb-16">
          <div className="relative text-right bg-gradient-to-b from-black/30 to-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.05),transparent_60%)]" />
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 ml-auto">
              <span className="text-2xl">📍</span>
            </div>
            <h4 className="text-brand-gold font-bold text-lg mb-4">العنوان</h4>
            <p className="text-brand-stone/80 text-base md:text-lg leading-relaxed font-sans">
              ليبيا، طرابلس <br />
              طريق السكة، بالقرب من رئاسة الوزراء
            </p>
          </div>
          <div className="relative text-right bg-gradient-to-b from-black/30 to-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.05),transparent_60%)]" />
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 ml-auto">
              <span className="text-2xl">📞</span>
            </div>
            <h4 className="text-brand-gold font-bold text-lg mb-4">أرقام التواصل</h4>
            <div className="flex flex-col gap-2 font-sans text-base md:text-lg text-brand-stone/80" dir="ltr">
              <a href="tel:+218917080090" className="hover:text-white text-right transition-colors">+218 91 708 0090</a>
              <a href="tel:+218927080090" className="hover:text-white text-right transition-colors">+218 92 708 0090</a>
            </div>
          </div>
          <div className="relative text-right bg-gradient-to-b from-black/30 to-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 shadow-[0_15px_40px_rgba(0,0,0,0.25)]">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.05),transparent_60%)]" />
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 ml-auto">
              <span className="text-2xl">✉️</span>
            </div>
            <h4 className="text-brand-gold font-bold text-lg mb-4">البريد الإلكتروني</h4>
            <a href="mailto:info@firstgoal.ly" className="text-brand-stone/80 text-base md:text-lg font-sans hover:text-white transition-colors">info@firstgoal.ly</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-brand-stone/40 font-sans">
          <div className="flex gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-brand-gold">Instagram</a>
            <a href="#" className="hover:text-brand-gold">Facebook</a>
            <a href="#" className="hover:text-brand-gold">LinkedIn</a>
          </div>
          <p>© 2025 الهدف الأول للرخام والجرانيت. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )
}
