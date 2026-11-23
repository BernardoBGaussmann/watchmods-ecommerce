import { Link, useNavigate } from 'react-router-dom';
import { formatPrice } from '../data/watches';

/**
 * Cart - Página do carrinho de compras
 * @param {Object} props - Props do componente
 * @param {Array} props.cart - Array de itens no carrinho
 * @param {Function} props.onUpdateQuantity - Função para atualizar quantidade (id, amount)
 * @param {Function} props.onRemoveItem - Função para remover item (id)
 * @returns {JSX.Element} Página do carrinho
 */
function Cart({ cart, onUpdateQuantity, onRemoveItem }) {
  const navigate = useNavigate();

  // Calcula subtotal
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Handler para finalizar pedido - navega para checkout
  const handleCheckout = () => {
    navigate('/checkout');
  };

  // Carrinho vazio
  if (cart.length === 0) {
    return (
      <section className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6 flex items-center justify-center">
        <div className="text-center max-w-md">
          <p className="text-6xl mb-4">🛒</p>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Seu carrinho está vazio
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Adicione relógios incríveis ao seu carrinho para começar.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
          >
            ← Voltar para a vitrine
          </Link>
        </div>
      </section>
    );
  }

  // Carrinho com itens
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb / Voltar */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors mb-8"
        >
          ← Voltar para a vitrine
        </Link>

        {/* Título */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Carrinho de Compras
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Lista de itens - 2/3 da largura */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <article
                key={item.id}
                className="flex gap-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4"
              >
                {/* Imagem pequena */}
                <div className="w-24 h-24 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info do item */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {item.caseSize}
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-white mt-2">
                    {formatPrice(item.price)}
                  </p>

                  {/* Controles de quantidade */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      disabled={item.quantity <= 1}
                      className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                      aria-label={`Diminuir quantidade de ${item.name}`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>

                    <span className="w-12 text-center text-lg font-medium text-gray-900 dark:text-white">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-center"
                      aria-label={`Aumentar quantidade de ${item.name}`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="ml-auto w-10 h-10 rounded-lg border border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center justify-center"
                      aria-label={`Remover ${item.name} do carrinho`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Preço total do item */}
                <div className="flex items-center">
                  <p className="text-xl font-bold text-gray-900 dark:text-white w-32 text-right">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Resumo do pedido - 1/3 da largura */}
          <div className="lg:col-span-1">
            <aside className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Resumo do Pedido
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} itens)</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>

                <div className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>Frete</span>
                  <span className="font-medium text-green-600 dark:text-green-400">Grátis</span>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                className="w-full mt-6 py-4 px-6 text-lg font-semibold rounded-xl bg-purple-600 text-white hover:bg-purple-700 focus:ring-4 focus:ring-purple-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Finalizar Pedido
              </button>

              <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
                Pagamento seguro via Pix ou Cartão de Crédito
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;