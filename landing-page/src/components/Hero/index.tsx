export function Hero() {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-950"
    >
      <span className="text-violet-400 text-sm font-mono tracking-widest uppercase mb-4">
        personal lab
      </span>
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none mb-6">
        ai-playground
      </h1>
      <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-2xl leading-relaxed">
        Um laboratório pessoal para explorar e testar soluções com inteligência
        artificial. Sem stack fixa — cada experimento traz sua própria abordagem.
      </p>
      <a
        href="#experiments"
        className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 text-white font-medium text-sm hover:bg-violet-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-400"
      >
        Ver experimentos
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  )
}
