import { ArrowRight } from 'lucide-react'

export default function Process(){
  const steps = [
    {
      k: '01',
      t: 'Discovery & alignment',
      d: 'We identify the highest leverage opportunities and define success backed by your business goals.'
    },
    {
      k: '02',
      t: 'Architecture & roadmap',
      d: 'Design a pragmatic, modern stack and a clear path to value. No over-engineering.'
    },
    {
      k: '03',
      t: 'Execution & enablement',
      d: 'Ship iteratively with transparency, documentation, and change management baked in.'
    },
    {
      k: '04',
      t: 'Scale & evolve',
      d: 'Operationalize, monitor, and continuously improve your data and AI capabilities.'
    }
  ]

  return (
    <section id="process" className="py-16 md:py-24 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">How we work</h2>
          <p className="mt-3 text-slate-600">Clear, collaborative delivery focused on outcomes.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-4 gap-6">
          {steps.map((s, i)=> (
            <div key={s.k} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-xs font-medium text-slate-500">{s.k}</div>
              <div className="mt-2 text-lg font-semibold text-slate-900">{s.t}</div>
              <p className="mt-2 text-sm text-slate-600">{s.d}</p>
              {i < steps.length - 1 && <ArrowRight className="mt-4 h-4 w-4 text-slate-400" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
