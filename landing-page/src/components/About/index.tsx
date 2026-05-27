export function About() {
  return (
    <section
      id="about"
      className="w-full py-24 px-6 bg-gray-900"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Sobre
        </h2>
        <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
          <p>
            O <span className="text-violet-400 font-medium">ai-playground</span> é
            um repositório pessoal dedicado à exploração prática de inteligência
            artificial. Cada pasta é um experimento independente, com sua própria
            stack, objetivo e aprendizado.
          </p>
          <p>
            Aqui você encontra protótipos, provas de conceito e ferramentas em
            construção — tudo com o objetivo de entender melhor como IA pode ser
            aplicada de forma criativa e pragmática.
          </p>
        </div>
      </div>
    </section>
  )
}
