import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    payload.consent = !!payload.consent

    setStatus('sending')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if(!res.ok) throw new Error('Failed to submit')
      setStatus('sent')
      e.currentTarget.reset()
    } catch(err){
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-slate-50/60 to-white">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Let's build your unfair advantage</h2>
          <p className="mt-4 text-slate-600 max-w-md">Tell us about your goals and constraints. We'll propose a pragmatic plan and a path to value within weeks.</p>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
            <div className="text-sm text-slate-700">Typical engagements:</div>
            <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-slate-600">
              {['Data platform audit','Analytics roadmap','Dashboard sprint','AI use-case discovery','Pipeline modernization','ML pilot'].map(i => (
                <li key={i} className="rounded-md bg-slate-50 border border-slate-200 px-3 py-2">{i}</li>
              ))}
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-sm text-slate-700">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-sm text-slate-700">Company</label>
              <input name="company" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
            </div>
            <div>
              <label className="text-sm text-slate-700">Subject</label>
              <input name="subject" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-slate-700">How can we help?</label>
              <textarea name="message" required rows="5" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" />
            </div>
            <label className="sm:col-span-2 inline-flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" name="consent" className="h-4 w-4 rounded border-slate-300" /> I agree to be contacted about my inquiry.
            </label>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center rounded-md bg-indigo-600 text-white font-medium px-5 py-3 hover:bg-indigo-500">Send message</button>
            {status === 'sending' && <span className="text-sm text-slate-600">Sending…</span>}
            {status === 'sent' && <span className="text-sm text-emerald-600">Thanks — we’ll be in touch!</span>}
            {status === 'error' && <span className="text-sm text-red-600">Something went wrong. Try again.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
