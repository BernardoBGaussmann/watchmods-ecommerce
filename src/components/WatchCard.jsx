/**
 * WatchCard Component - WatchModsBR
 * Card individual de relógio para exibição em grid
 * Recebe prop `watch` com: id, name, caseSize, price, imageUrl, inStock, featured
 */
import { formatPrice } from "../data/watches";
import { Link } from 'react-router-dom';

/**
 * WatchCard - Card de relógio
 * @param {Object} props - Props do componente
 * @param {Object} props.watch - Objeto do relógio
 * @returns {JSX.Element} Card do relógio
 */
function WatchCard({ watch }) {
  return (
    <Link to={`/relogio/${watch.id}`} className="block">
      <article className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Imagem do relógio - aspect-square object-cover */}
      <div className="aspect-square relative bg-gray-100 dark:bg-gray-900 overflow-hidden">
        <img
          src={watch.imageUrl}
          alt={watch.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Badge fora de estoque */}
        {!watch.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-lg">
              Fora de estoque
            </span>
          </div>
        )}
        {/* Badge destaque */}
        {watch.featured && (
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-purple-600 text-white text-xs font-bold rounded-full">
              Destaque
            </span>
          </div>
        )}
      </div>

      {/* Informações do relógio */}
      <div className="p-4 space-y-2">
        {/* Nome */}
        <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-1">
          {watch.name}
        </h3>

        {/* Tamanho da caixa */}
        <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{watch.caseSize}</span>
        </div>

        {/* Preço formatado BRL */}
        <div className="pt-2 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            {formatPrice(watch.price)}
          </span>
          <button
            className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
              watch.inStock
                ? 'bg-purple-600 text-white hover:bg-purple-700'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
            }`}
            disabled={!watch.inStock}
            aria-label={watch.inStock ? `Adicionar ${watch.name} ao carrinho` : `${watch.name} fora de estoque`}
          >
            {watch.inStock ? 'Adicionar' : 'Indisponível'}
          </button>
        </div>
      </div>
    </article>
    </Link>
  );
}

export default WatchCard;