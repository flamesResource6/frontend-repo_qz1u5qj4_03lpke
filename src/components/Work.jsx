export default function Work(){
  const items = [
    {
      tag: 'E-commerce',
      title: 'Unified metrics layer across 6 countries',
      desc: 'Rebuilt data models and ELT on Snowflake + dbt, unlocking executive dashboards and weekly growth rituals.',
      stats: ['200+ models','12 sources','NPS +18']
    },
    {
      tag: 'Fintech',
      title: 'Real-time risk analytics platform',
      desc: 'Stream processing and ML scoring delivering sub-second recommendations and 20% loss reduction.',
      stats: ['<200ms latency','99.95% uptime','20% savings']
    },
    {
      tag: 'SaaS',
      title: 'Usage-based pricing insights',
      desc: 'Product analytics and churn signals integrated into GTM, driving 8% ARR lift in two quarters.',
      stats: ['8% ARR','6 mo ROI','360° GTM']
    }
  ]

  return (
    <section id="work" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Selected work</h2>
          <p className="mt-3 text-slate-600">A snapshot of the outcomes we deliver. Specifics available on request.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item)=> (
            <div key={item.title} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl transition-shadow">
              <div className="text-xs font-medium uppercase tracking-wider text-indigo-600">{item.tag}</div>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.stats.map((s)=> (
                  <span key={s} className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
