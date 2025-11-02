import { Package, TrendingUp, Users, CheckCircle } from 'lucide-react'

const stats = [
  { name: 'Total Sales', value: '$48,920', change: '+12.3%', icon: TrendingUp },
  { name: 'Orders', value: '1,238', change: '+4.1%', icon: Package },
  { name: 'Customers', value: '3,485', change: '+6.8%', icon: Users },
  { name: 'Fulfillment', value: '98.2%', change: '+0.9%', icon: CheckCircle },
]

const products = [
  { id: 'P-1001', name: 'Aero Knit Sneakers', stock: 42, price: 129, status: 'Active' },
  { id: 'P-1002', name: 'Essentials Hoodie', stock: 18, price: 89, status: 'Active' },
  { id: 'P-1003', name: 'Minimalist Backpack', stock: 7, price: 149, status: 'Low' },
]

const orders = [
  { id: 'ORD-8742', customer: 'Jane Cooper', total: 318, status: 'Paid' },
  { id: 'ORD-8743', customer: 'Wade Warren', total: 129, status: 'Paid' },
  { id: 'ORD-8744', customer: 'Guy Hawkins', total: 458, status: 'Processing' },
]

export default function AdminDashboard() {
  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{s.name}</p>
                <p className="text-2xl font-bold text-slate-900 mt-1">{s.value}</p>
              </div>
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 text-white flex items-center justify-center">
                <s.icon className="h-5 w-5" />
              </div>
            </div>
            <p className="text-xs mt-3 text-emerald-600 font-medium">{s.change} this month</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Products</h3>
            <button className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-sm font-medium">Add Product</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-slate-500">
                  <th className="py-2">ID</th>
                  <th className="py-2">Name</th>
                  <th className="py-2">Stock</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {products.map((p) => (
                  <tr key={p.id} className="text-slate-700">
                    <td className="py-2 pr-4 font-mono text-xs">{p.id}</td>
                    <td className="py-2 pr-4">{p.name}</td>
                    <td className="py-2 pr-4">{p.stock}</td>
                    <td className="py-2 pr-4">${p.price}</td>
                    <td className="py-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        p.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Recent Orders</h3>
            <button className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-sm font-medium hover:bg-slate-50">Export</button>
          </div>
          <div className="space-y-3">
            {orders.map((o) => (
              <div key={o.id} className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50">
                <div>
                  <p className="font-medium text-slate-900">{o.id}</p>
                  <p className="text-xs text-slate-500">{o.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-900">${o.total}</p>
                  <span className={`text-xs font-medium ${
                    o.status === 'Paid' ? 'text-emerald-600' : 'text-amber-600'
                  }`}>
                    {o.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
