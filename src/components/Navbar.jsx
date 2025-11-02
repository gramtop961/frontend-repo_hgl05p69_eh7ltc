import { ShoppingCart, Search, User, Settings } from 'lucide-react'

export default function Navbar({ currentView, onSelectView }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 shadow-lg shadow-blue-500/30" />
            <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-violet-700 to-blue-700 bg-clip-text text-transparent">
              AuraCommerce
            </span>
          </div>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <button
              onClick={() => onSelectView('shop')}
              className={`transition-colors hover:text-violet-600 ${
                currentView === 'shop' ? 'text-violet-700' : 'text-slate-600'
              }`}
            >
              Shop
            </button>
            <button
              onClick={() => onSelectView('admin')}
              className={`transition-colors hover:text-violet-600 flex items-center gap-2 ${
                currentView === 'admin' ? 'text-violet-700' : 'text-slate-600'
              }`}
            >
              <Settings className="h-4 w-4" /> Admin
            </button>
            <button className="text-slate-600 hover:text-violet-600 transition-colors">About</button>
            <button className="text-slate-600 hover:text-violet-600 transition-colors">Contact</button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 border border-slate-200">
              <Search className="h-4 w-4 text-slate-500" />
              <input
                placeholder="Search products"
                className="bg-transparent outline-none text-sm w-40 placeholder:text-slate-400"
              />
            </div>
            <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <ShoppingCart className="h-5 w-5 text-slate-700" />
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <User className="h-5 w-5 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
