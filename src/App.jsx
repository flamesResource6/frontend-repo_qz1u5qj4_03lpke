import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Solutions from './components/Solutions'
import Work from './components/Work'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Solutions />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div>&copy; {new Date().getFullYear()} Amplified Analytics. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#solutions" className="hover:text-slate-900">Solutions</a>
            <a href="#work" className="hover:text-slate-900">Case Studies</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
