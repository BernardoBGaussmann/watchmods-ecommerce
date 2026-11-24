import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { watches, formatPrice, calculateInstallments } from '../data/watches';

/**
 * WatchDetails - Página de detalhes do relógio
 * Lê o ID da URL via useParams e busca o relógio no array watches
 * @param {Object} props - Props do componente
 * @param {Function} props.onAddToCart - Função para adicionar item ao carrinho
 */
function WatchDetails({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const watch = watches.find((w) => w.id === id);

  // Relógio não encontrado - retorna cedo
  if (!watch) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Relógio não encontrado
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            O relógio que você procura não existe ou foi removido.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para a vitrine
          </Link>
        </div>
      </section>
    );
  }

  // Estado local para feedback visual do botão "Adicionar ao Carrinho"
  const [addedFeedback, setAddedFeedback] = useState(false);
  // Estado para mostrar/ocultar opções de parcelamento
  const [showInstallments, setShowInstallments] = useState(false);

  // Calcula opções de parcelamento
  const installmentOptions = calculateInstallments(watch.price);
  const twelveInstallments = installmentOptions[11]; // 12x

  // Handler para "Adicionar ao Carrinho"
  const handleAddToCart = () => {
    if (!watch.inStock) return;
    onAddToCart(watch);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1500);
  };

  // Handler para "Comprar Agora"
  const handleBuyNow = () => {
    if (!watch.inStock) return;
    onAddToCart(watch);
    navigate('/carrinho');
  };

  // Relógio não encontrado
  if (!watch) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-6">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Relógio não encontrado
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            O relógio que você procura não existe ou foi removido.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para a vitrine
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb / Voltar */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar para a vitrine
        </Link>

        {/* Grid principal: imagem à esquerda, info à direita */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Coluna da imagem */}
          <div className="relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
            <img
              src={watch.imageUrl}
              alt={watch.name}
              className="w-full h-full object-cover"
            />
            {/* Badge fora de estoque */}
            {!watch.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="px-4 py-2 bg-red-600 text-white text-lg font-semibold rounded-lg">
                  Fora de estoque
                </span>
              </div>
            )}
            {/* Badge destaque */}
            {watch.featured && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-purple-600 text-white text-sm font-bold rounded-full">
                  Destaque
                </span>
              </div>
            )}
          </div>

          {/* Coluna das informações */}
          <div className="space-y-6">
            {/* Nome */}
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {watch.name}
            </h1>

            {/* Especificações */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-6">
              {/* Tamanho da caixa */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Tamanho da caixa</p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">{watch.caseSize}</p>
                </div>
              </div>

              {/* Movimento */}
              <div className="flex items-center gap-3 border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Movimento</p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">
                    {watch.movement || 'Mecânico Automático'}
                  </p>
                </div>
              </div>

              {/* Preço */}
              <div className="flex items-center gap-3 border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Preço</p>
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {formatPrice(watch.price)} <span className="text-lg font-normal text-gray-600 dark:text-gray-400">à vista no Pix</span>
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    ou {twelveInstallments.installments}x de {formatPrice(twelveInstallments.installmentAmount)} no cartão (Total: {formatPrice(twelveInstallments.totalAmount)})
                  </p>
                  <button
                    type="button"
                    onClick={() => setShowInstallments(!showInstallments)}
                    className="mt-2 text-sm text-purple-600 dark:text-purple-400 hover:underline font-medium"
                  >
                    {showInstallments ? 'Ocultar parcelamento' : 'Ver opções de parcelamento'}
                  </button>
                </div>
              </div>

              {/* Opções de parcelamento */}
              {showInstallments && (
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded text-xs font-medium">Melhor preço</span>
                    <span className="text-gray-600 dark:text-gray-400">À vista no Pix:</span>
                    <span className="font-semibold text-gray-900 dark:text-white ml-auto">{formatPrice(watch.price)}</span>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-2 space-y-1">
                    {installmentOptions.map((opt) => (
                      <div key={opt.installments} className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
                        <span>{opt.installments}x de {formatPrice(opt.installmentAmount)}</span>
                        <span className="font-medium text-gray-900 dark:text-white">Total: {formatPrice(opt.totalAmount)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Status de estoque */}
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Disponibilidade</p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">
                    {watch.inStock ? 'Em estoque' : 'Fora de estoque'}
                  </p>
                </div>
              </div>
            </div>

            {/* Botões de ação + Trust badges */}
            <div className="space-y-4 border-t border-gray-200 dark:border-gray-700 pt-6">
              {/* Botão principal: Comprar Agora */}
              <button
                onClick={handleBuyNow}
                className={`w-full py-4 px-6 text-lg font-semibold rounded-xl transition-all ${
                  watch.inStock
                    ? 'bg-purple-600 text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-500/30'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                }`}
                disabled={!watch.inStock}
                aria-label={watch.inStock ? `Comprar ${watch.name} agora` : `${watch.name} fora de estoque`}
              >
                {watch.inStock ? 'Comprar Agora' : 'Indisponível'}
              </button>

              {/* Botão secundário: Adicionar ao Carrinho */}
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 px-6 text-lg font-semibold rounded-xl transition-all ${
                  watch.inStock
                    ? 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20 focus:ring-4 focus:ring-purple-500/30'
                    : 'border-2 border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                }`}
                disabled={!watch.inStock}
                aria-label={watch.inStock ? `Adicionar ${watch.name} ao carrinho` : `${watch.name} fora de estoque`}
              >
                {addedFeedback ? 'Adicionado!' : watch.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
              </button>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <svg className="w-6 h-6 mx-auto text-gray-600 dark:text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Envio Segurado</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <svg className="w-6 h-6 mx-auto text-gray-600 dark:text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Garantia 1 Ano</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <svg className="w-6 h-6 mx-auto text-gray-600 dark:text-gray-400 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Suporte 9h-18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WatchDetails;