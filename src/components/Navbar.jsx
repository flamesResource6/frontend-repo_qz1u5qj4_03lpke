import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const nav = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Case Studies', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
              <Sparkles className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight">Amplified Analytics</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a key={n.name} href={n.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
                {n.name}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 text-white text-sm font-medium px-4 py-2 hover:bg-slate-800 transition-colors">
              Start a project
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200 bg-white text-slate-700">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 py-3">
            <nav className="grid gap-2 py-2">
              {nav.map((n) => (
                <a key={n.name} href={n.href} onClick={() => setOpen(false)} className="px-2 py-2 rounded-md text-slate-700 hover:bg-slate-100">
                  {n.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md bg-slate-900 text-white text-center">
                Start a project
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
