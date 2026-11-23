import { watches } from '../data/watches';
import WatchCard from './WatchCard';

/**
 * WatchGrid - Grid de relógios em destaque
 * Renderiza diretamente o array watches (sem useState)
 */
function WatchGrid() {
  return (
    <section id="relogios" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Título da seção */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Relógios em Destaque
        </h2>

        {/* Grid responsivo de relógios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {watches.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WatchGrid;