import { CheckCircle2, BarChart3, Workflow, BrainCircuit, Database, ShieldCheck } from 'lucide-react'

const solutions = [
  {
    icon: Database,
    title: 'Modern Data Platforms',
    desc: 'Lakehouse architecture, ELT pipelines, governance and reliability built on Snowflake/Databricks.',
    bullets: ['Data modeling & dbt','Fivetran/airbyte pipelines','Quality & observability']
  },
  {
    icon: BrainCircuit,
    title: 'Applied AI & ML',
    desc: 'From forecasting to NLP to RAG — pragmatic models that deliver value, not just demos.',
    bullets: ['Use-case discovery','High-quality datasets','MLOps & monitoring']
  },
  {
    icon: BarChart3,
    title: 'BI & Decision Intelligence',
    desc: 'Metrics layers and executive dashboards that drive aligned, confident decisions.',
    bullets: ['Metric definitions','Self-serve analytics','Executive scorecards']
  },
  {
    icon: Workflow,
    title: 'Automation & Ops',
    desc: 'Turn manual workflows into resilient, auditable automations integrated across your stack.',
    bullets: ['Workflow design','APIs & integrations','Alerting & runbooks']
  },
  {
    icon: ShieldCheck,
    title: 'Governance & Security',
    desc: 'Data classification, access control, and compliance-by-design with clear ownership.',
    bullets: ['Data contracts','Access policies','PII handling']
  },
]

export default function Solutions(){
  return (
    <section id="solutions" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">What we build</h2>
          <p className="mt-3 text-slate-600">End-to-end execution across strategy, engineering, and enablement. No hand-offs, just outcomes.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s)=> (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b)=> (
                  <li key={b} className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
