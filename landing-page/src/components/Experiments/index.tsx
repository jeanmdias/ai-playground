import { experiments } from '../../data/experiments'
import { ExperimentCard } from '../ExperimentCard'

export function Experiments() {
  return (
    <section
      id="experiments"
      className="w-full py-24 px-6 bg-gray-950"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Experimentos
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Projetos em andamento e protótipos do lab.
        </p>
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
        >
          {experiments.map((exp) => (
            <li key={exp.id}>
              <ExperimentCard
                title={exp.title}
                description={exp.description}
                url={exp.url}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
