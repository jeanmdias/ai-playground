import { About } from './components/About'
import { Experiments } from './components/Experiments'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'

function App() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
        <nav
          className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between"
          aria-label="Navegação principal"
        >
          <span className="text-white font-mono font-semibold text-sm">
            ai-playground
          </span>
          <ul className="flex items-center gap-6" role="list">
            <li>
              <a
                href="#about"
                className="text-gray-400 text-sm hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-400 rounded"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#experiments"
                className="text-gray-400 text-sm hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-400 rounded"
              >
                Experimentos
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Experiments />
      </main>

      <Footer />
    </>
  )
}

export default App
