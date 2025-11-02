import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import AdminDashboard from './components/AdminDashboard'

function App() {
  const [view, setView] = useState('shop') // 'shop' | 'admin'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50 text-slate-900">
      <Navbar currentView={view} onSelectView={setView} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {view === 'shop' ? (
          <>
            <Hero />

            <section id="explore" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="rounded-3xl p-6 border border-slate-200 bg-white shadow-sm">
                <h3 className="font-semibold">Premium Materials</h3>
                <p className="text-sm text-slate-600 mt-2">
                  We source best-in-class fabrics and components designed for longevity, comfort, and style.
                </p>
              </div>
              <div className="rounded-3xl p-6 border border-slate-200 bg-white shadow-sm">
                <h3 className="font-semibold">Seamless Experience</h3>
                <p className="text-sm text-slate-600 mt-2">
                  Fast checkout, hassle-free returns, and support that actually cares.
                </p>
              </div>
              <div className="rounded-3xl p-6 border border-slate-200 bg-white shadow-sm">
                <h3 className="font-semibold">Sustainable First</h3>
                <p className="text-sm text-slate-600 mt-2">
                  Packaging and processes designed to minimize waste and maximize responsibility.
                </p>
              </div>
            </section>

            <ProductGrid />
          </>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight">Admin Dashboard</h1>
                <p className="text-slate-600 mt-1">Manage products, orders, and performance analytics.</p>
              </div>
              <div className="inline-flex gap-2">
                <button
                  onClick={() => setView('shop')}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-medium hover:bg-slate-50"
                >
                  View Storefront
                </button>
                <button className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm font-medium">Create Campaign</button>
              </div>
            </div>
            <AdminDashboard />
          </>
        )}
      </main>

      <footer className="mt-10 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AuraCommerce. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
