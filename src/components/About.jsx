export default function About(){
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">A partner, not a vendor</h2>
        <p className="mt-4 text-slate-600">We are a senior, hands-on team that blends strategy and engineering. We meet you where you are, bring crisp communication, and leave your org stronger than we found it.</p>
        <div className="mt-10 grid sm:grid-cols-3 gap-6 text-left">
          {[['Senior-only','Lead-level consultants who ship'],['Transparent','Weekly demos, clear metrics'],['Enablement-first','Documentation and training included']].map(([t, d])=> (
            <div key={t} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-lg font-semibold text-slate-900">{t}</div>
              <p className="mt-2 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
