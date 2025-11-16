export default function Logos(){
  const logos = ['Snowflake','Databricks','dbt','Fivetran','Power BI','Looker']
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-wider text-slate-500">Trusted tools & platforms</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center gap-6">
          {logos.map((l)=> (
            <div key={l} className="h-12 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-600 text-sm">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
