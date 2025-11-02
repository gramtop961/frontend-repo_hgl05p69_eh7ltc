import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[520px] rounded-3xl overflow-hidden border border-slate-200/60">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/1Y0s1z5mB1m5Q1b2/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-white/10 pointer-events-none" />
        <div className="relative z-10 h-full flex items-center px-6 sm:px-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-slate-200 text-xs font-medium text-slate-700 mb-4 shadow-sm">
              New Collection
              <span className="inline-block h-2 w-2 rounded-full bg-violet-500" />
              Just dropped
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900">
              Elevate your style with modern essentials
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Discover premium apparel and accessories crafted for comfort, performance, and timeless design.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#products" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold shadow-md hover:shadow-lg transition-all">
                Shop Now
              </a>
              <a href="#explore" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold border border-slate-200 hover:bg-slate-50 transition-colors">
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
