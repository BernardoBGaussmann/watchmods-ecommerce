import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { formatPrice } from '../data/watches';

/**
 * Checkout - Página de finalização de pedido
 * @param {Object} props - Props do componente
 * @param {Array} props.cart - Array de itens no carrinho
 * @param {Function} props.onClearCart - Função para limpar carrinho após pedido
 * @returns {JSX.Element} Página de checkout
 */
function Checkout({ cart, onClearCart }) {
  const navigate = useNavigate();
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [isLoadingCep, setIsLoadingCep] = useState(false);

  // Estado único do formulário
  const [formData, setFormData] = useState({
    fullName: '', email: '', whatsapp: '',
    cep: '', street: '', number: '', complement: '',
    neighborhood: '', city: '', state: '',
    paymentMethod: 'pix'
  });

  const [errors, setErrors] = useState({});

  // Classes reutilizáveis para inputs
  const inputClass = 'w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors';
  const errorClass = 'border-red-500';
  const normalClass = 'border-gray-300 dark:border-gray-600';

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Busca CEP via ViaCEP
  const fetchCep = async (cepValue) => {
    const cleanCep = cepValue.replace(/\D/g, '');
    if (cleanCep.length !== 8) return;

    setIsLoadingCep(true);
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
      const data = await res.json();
      if (!data.erro) {
        setFormData(prev => ({ ...prev, street: data.logradouro || '', neighborhood: data.bairro || '', city: data.localidade || '', state: data.uf || '' }));
      } else {
        setFormData(prev => ({ ...prev, street: '', neighborhood: '', city: '', state: '' }));
      }
    } catch (e) { console.error('Erro ao buscar CEP:', e); }
    finally { setIsLoadingCep(false); }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleCepChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 8);
    setFormData(prev => ({ ...prev, cep: value }));
  };

  const handleCepBlur = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length === 8) fetchCep(value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Nome completo é obrigatório';
    if (!formData.email.trim()) newErrors.email = 'E-mail é obrigatório';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'E-mail inválido';
    if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp é obrigatório';
    if (!formData.cep.trim()) newErrors.cep = 'CEP é obrigatório';
    else if (formData.cep.replace(/\D/g, '').length !== 8) newErrors.cep = 'CEP deve ter 8 dígitos';
    if (!formData.street.trim()) newErrors.street = 'Rua é obrigatória';
    if (!formData.number.trim()) newErrors.number = 'Número é obrigatório';
    if (!formData.neighborhood.trim()) newErrors.neighborhood = 'Bairro é obrigatório';
    if (!formData.city.trim()) newErrors.city = 'Cidade é obrigatória';
    if (!formData.state.trim()) newErrors.state = 'Estado é obrigatório';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onClearCart();
    setOrderConfirmed(true);
  };

  // Carrinho vazio
  if (cart.length === 0 && !orderConfirmed) {
    return (
      <section className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6 flex items-center justify-center">
        <div className="text-center max-w-md">
          <p className="text-6xl mb-4">🛒</p>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Nenhum item para finalizar</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Adicione relógios ao carrinho antes de prosseguir.</p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700">← Voltar para a vitrine</Link>
        </div>
      </section>
    );
  }

  // Confirmação
  if (orderConfirmed) {
    return (
      <section className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-4xl">✓</div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Pedido Confirmado!</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Obrigado, <strong>{formData.fullName}</strong>! Seu pedido foi realizado.</p>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Confirmação enviada para <strong>{formData.email}</strong>.</p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700">← Voltar para a loja</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/carrinho" className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-purple-600 mb-8">← Voltar ao carrinho</Link>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Finalizar Pedido</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulário */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
            {/* Dados Pessoais */}
            <fieldset className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
              <legend className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Dados Pessoais</legend>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="sm:col-span-2">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome completo <span className="text-red-500">*</span></label>
                  <input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className={`${inputClass} ${errors.fullName ? errorClass : normalClass}`} placeholder="João da Silva" aria-invalid={errors.fullName ? 'true' : 'false'} />
                  {errors.fullName && <p className="mt-1 text-sm text-red-500" role="alert">{errors.fullName}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">E-mail <span className="text-red-500">*</span></label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`${inputClass} ${errors.email ? errorClass : normalClass}`} placeholder="joao@email.com" aria-invalid={errors.email ? 'true' : 'false'} />
                  {errors.email && <p className="mt-1 text-sm text-red-500" role="alert">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">WhatsApp <span className="text-red-500">*</span></label>
                  <input type="tel" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className={`${inputClass} ${errors.whatsapp ? errorClass : normalClass}`} placeholder="(11) 99999-9999" aria-invalid={errors.whatsapp ? 'true' : 'false'} />
                  {errors.whatsapp && <p className="mt-1 text-sm text-red-500" role="alert">{errors.whatsapp}</p>}
                </div>
              </div>
            </fieldset>

            {/* Endereço */}
            <fieldset className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
              <legend className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Endereço de Entrega</legend>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative">
                  <label htmlFor="cep" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">CEP <span className="text-red-500">*</span></label>
                  <input id="cep" name="cep" value={formData.cep} onChange={handleCepChange} onBlur={handleCepBlur} maxLength={9} className={`${inputClass} ${errors.cep ? errorClass : normalClass} pr-12`} placeholder="00000-000" aria-invalid={errors.cep ? 'true' : 'false'} />
                  {isLoadingCep && <span className="absolute right-3 top-1/2 -translate-y-1/2 animate-spin text-purple-600">⟳</span>}
                  {errors.cep && <p className="mt-1 text-sm text-red-500" role="alert">{errors.cep}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="street" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Rua <span className="text-red-500">*</span></label>
                  <input id="street" name="street" value={formData.street} onChange={handleChange} className={`${inputClass} ${errors.street ? errorClass : normalClass}`} placeholder="Rua das Flores" aria-invalid={errors.street ? 'true' : 'false'} />
                  {errors.street && <p className="mt-1 text-sm text-red-500" role="alert">{errors.street}</p>}
                </div>
                <div>
                  <label htmlFor="number" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Número <span className="text-red-500">*</span></label>
                  <input id="number" name="number" value={formData.number} onChange={handleChange} className={`${inputClass} ${errors.number ? errorClass : normalClass}`} placeholder="123" aria-invalid={errors.number ? 'true' : 'false'} />
                  {errors.number && <p className="mt-1 text-sm text-red-500" role="alert">{errors.number}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="complement" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Complemento (opcional)</label>
                  <input id="complement" name="complement" value={formData.complement} onChange={handleChange} className={inputClass} placeholder="Apto 101, Bloco B" />
                </div>
                <div>
                  <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bairro <span className="text-red-500">*</span></label>
                  <input id="neighborhood" name="neighborhood" value={formData.neighborhood} onChange={handleChange} className={`${inputClass} ${errors.neighborhood ? errorClass : normalClass}`} placeholder="Centro" aria-invalid={errors.neighborhood ? 'true' : 'false'} />
                  {errors.neighborhood && <p className="mt-1 text-sm text-red-500" role="alert">{errors.neighborhood}</p>}
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Cidade <span className="text-red-500">*</span></label>
                  <input id="city" name="city" value={formData.city} onChange={handleChange} className={`${inputClass} ${errors.city ? errorClass : normalClass}`} placeholder="São Paulo" aria-invalid={errors.city ? 'true' : 'false'} />
                  {errors.city && <p className="mt-1 text-sm text-red-500" role="alert">{errors.city}</p>}
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Estado <span className="text-red-500">*</span></label>
                  <select id="state" name="state" value={formData.state} onChange={handleChange} className={`${inputClass} ${errors.state ? errorClass : normalClass}`} aria-invalid={errors.state ? 'true' : 'false'}>
                    <option value="">Selecione</option>
                    {['AC','AL','AM','AP','BA','CE','DF','ES','GO','MA','MG','MS','MT','PA','PB','PE','PI','PR','RJ','RN','RO','RR','RS','SC','SE','SP','TO'].map(uf => <option key={uf} value={uf}>{uf}</option>)}
                  </select>
                  {errors.state && <p className="mt-1 text-sm text-red-500" role="alert">{errors.state}</p>}
                </div>
              </div>
            </fieldset>

            {/* Pagamento */}
            <fieldset className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
              <legend className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Forma de Pagamento</legend>
              <div className="grid sm:grid-cols-2 gap-4">
                {['pix', 'credit'].map(method => (
                  <label key={method} className={`relative cursor-pointer p-4 rounded-xl border-2 transition-colors ${formData.paymentMethod === method ? 'border-purple-600 bg-purple-50 dark:bg-purple-900/20' : 'border-gray-200 dark:border-gray-700 hover:border-purple-300'}`}>
                    <input type="radio" name="paymentMethod" value={method} checked={formData.paymentMethod === method} onChange={handleChange} className="sr-only" />
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${method === 'pix' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-blue-100 dark:bg-blue-900/30'}`}>
                        {method === 'pix' ? '💚' : '💳'}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{method === 'pix' ? 'Pix' : 'Cartão de Crédito'}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{method === 'pix' ? 'Pagamento instantâneo via QR Code' : 'Parcelado em até 12x'}</p>
                      </div>
                    </div>
                    {formData.paymentMethod === method && <span className="absolute top-2 right-2 w-5 h-5 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs">✓</span>}
                  </label>
                ))}
              </div>
            </fieldset>

            <button type="submit" className="w-full py-4 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors text-lg">
              Finalizar Pedido
            </button>
          </form>

          {/* Resumo do Pedido */}
          <aside className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Resumo do Pedido</h2>
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 dark:text-white truncate">{item.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Qtd: {item.quantity} × {formatPrice(item.price)}</p>
                      <p className="font-medium text-gray-900 dark:text-white">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Frete</span>
                  <span className="text-green-600">Grátis</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white border-t border-gray-200 dark:border-gray-700 pt-2">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Checkout;