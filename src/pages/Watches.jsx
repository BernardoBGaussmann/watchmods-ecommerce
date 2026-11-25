import { useState, useEffect } from 'react';
import { getWatches } from '../data/watches';
import WatchCard from '../components/WatchCard';

/**
 * Watches - Página de listagem de todos os relógios
 * Busca catálogo do backend e exibe grid responsivo com até 5 colunas
 */
function Watches() {
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

  if (loading) {
    return (
      <section className="py-16 px-6 bg-white dark:bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin text-purple-600 text-4xl">⟳</div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Carregando relógios...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 bg-white dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Título da página */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Todos os Relógios
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore nossa coleção completa de relógios mecânicos customizados sob medida.
          </p>
        </header>

        {/* Grid responsivo - até 5 colunas no xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {watches.map((watch) => (
            <WatchCard key={watch.id} watch={watch} />
          ))}
        </div>

        {/* Mensagem se não houver relógios */}
        {watches.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Nenhum relógio disponível
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Volte em breve para conferir nossa coleção.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Watches;