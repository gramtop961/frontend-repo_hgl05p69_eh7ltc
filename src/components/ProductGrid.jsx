import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const initialProducts = [
  {
    id: 1,
    name: 'Aero Knit Sneakers',
    price: 129,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
    badge: 'Bestseller',
  },
  {
    id: 2,
    name: 'Essentials Hoodie',
    price: 89,
    rating: 4.6,
    image:
      'https://images.unsplash.com/photo-1520975922284-85d734d6f472?q=80&w=1600&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 3,
    name: 'Minimalist Backpack',
    price: 149,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1520974735194-6c1bc8f7e3f1?q=80&w=1600&auto=format&fit=crop',
    badge: 'Limited',
  },
  {
    id: 4,
    name: 'Chrono Steel Watch',
    price: 299,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop',
    badge: 'Premium',
  },
]

export default function ProductGrid() {
  const [cart, setCart] = useState([])
  const [products] = useState(initialProducts)

  const addToCart = (product) => {
    setCart((prev) => [...prev, product])
  }

  return (
    <section id="products" className="relative">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Featured Products</h2>
        <p className="text-slate-500 text-sm">Cart: {cart.length} item{cart.length === 1 ? '' : 's'}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/70 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 border border-slate-200 text-slate-700">
                {product.badge}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-slate-900">{product.name}</h3>
                  <div className="flex items-center gap-1 text-amber-500 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? '' : 'text-amber-200'}`} />
                    ))}
                    <span className="ml-2 text-xs text-slate-500">{product.rating.toFixed(1)}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-slate-900">${product.price}</p>
                </div>
              </div>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors"
              >
                Add to cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
