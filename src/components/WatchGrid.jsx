import { useState, useEffect } from 'react';
import { getWatches } from '../data/watches';
import WatchCard from './WatchCard';
import { Link } from 'react-router-dom';

/**
 * WatchGrid - Grid de relógios em destaque (home page)
 * Busca catálogo do backend e mostra 4 relógios fixos + botão para ver todos
 */
function WatchGrid() {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWatches() {
      try {
        const data = await getWatches();
        setWatches(data);
      } catch (err) {
        console.error('Erro ao buscar relógios:', err);
      } finally {
        setLoading(false);
      }
    }
    loadWatches();
  }, []);

  // Limita a 4 relógios para a vitrine da home
  const featuredWatches = watches.slice(0, 4);

  if (loading) {
    return (
      <section id="relogios" className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin text-purple-600 text-4xl">⟳</div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Carregando relógios...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="relogios" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Título da seção */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Relógios em Destaque
        </h2>

        {/* Grid responsivo de relógios - 4 fixos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredWatches.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>

        {/* Botão Ver todos os relógios */}
        <div className="text-center mt-10">
          <Link
            to="/relogios"
            className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
          >
            Ver todos os relógios
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WatchGrid;