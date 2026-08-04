import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Services from './components/Services'
import Results from './components/Results'
import Reviews from './components/Reviews'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import WhatsAppWidget from './components/WhatsAppWidget'
import CustomCursor from './components/CustomCursor'
import SiteLoader from './components/SiteLoader'

function App() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between">
      <CustomCursor />
      <SiteLoader />
      
      <div>
        <Navbar />
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Results />
        <Reviews />
        <Process />
        <FAQ />
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="w-full bg-[#0d0617]/90 border-t border-white/5 py-10 px-6 mt-12 text-center relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-left">
            <span className="text-sm font-black tracking-wider text-white">RISING STAR DIGITAL</span>
            <span className="text-[10px] text-brand-light/50 mt-1">© {new Date().getFullYear()} Rising Star Digital. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-brand-light/60 font-semibold">
            <a href="#top" className="hover:text-white transition-colors">Back to Top</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#contact" className="hover:text-white transition-colors">Free Audit</a>
          </div>
        </div>
      </footer>

      <WhatsAppWidget />
    </div>
  )
}

export default App