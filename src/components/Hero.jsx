import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute -z-10 inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.12),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
            <Sparkles className="h-4 w-4 text-indigo-600" /> Data engineering, AI, analytics
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.7 }} className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">
            Turn messy data into measurable growth.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="mt-5 text-lg text-slate-600 max-w-xl">
            We design modern data platforms, automate pipelines, and build AI-powered insights that unlock revenue and efficiency across your business.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white font-medium px-5 py-3 shadow hover:bg-indigo-500">
              Start a project <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#work" className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white text-slate-900 font-medium px-5 py-3 hover:bg-slate-50">
              See our work
            </a>
          </motion.div>

          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            {[
              ['50+','data products'],
              ['3x','faster insights'],
              ['$10M+','value unlocked']
            ].map(([k, v]) => (
              <div key={k} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-2xl font-semibold">{k}</div>
                <div className="text-xs text-slate-600">{v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 relative">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
          <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
            <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
              <svg width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-indigo-600">
                <path d="M2 12h20M12 2v20" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {['Data Strategy','Modern Stack','Machine Learning','Dashboards'].map((t) => (
                <div key={t} className="rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700">{t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
