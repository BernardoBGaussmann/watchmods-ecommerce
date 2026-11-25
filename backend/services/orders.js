// services/orders.js
// Lógica de criação de pedido (validação + cálculo de totais + baixa de estoque)

import { calculateInstallments, calculateTotalWithInstallments, calculateInstallmentAmount } from '../utils/installments.js';
import { validateStock, decrementStock } from './catalog.js';

/**
 * Cria um pedido válido a partir do payload
 * @param {Object} payload - Body validado do POST /pedidos
 * @returns {Object} { success: boolean, errors?: string[], pedido?: Object }
 */
export function createOrder(payload) {
  const { itens, cliente, endereco, pagamento } = payload;

  // 1. Valida estoque
  const { valid, errors, watchesMap } = validateStock(itens);
  if (!valid) return { success: false, errors };

  // 2. Calcula subtotal (soma de price * quantity) em centavos
  let subtotal = 0;
  const itensDetalhados = [];

  for (const [id, { watch, quantity }] of watchesMap) {
    const precoUnitario = watch.price;
    const totalItem = precoUnitario * quantity;
    subtotal += totalItem;
    itensDetalhados.push({
      id: watch.id,
      name: watch.name,
      quantity,
      precoUnitario,
      totalItem
    });
  }

  // 3. Aplica parcelamento no TOTAL do pedido
  const { metodo, parcelas } = pagamento;
  let totalComJuros = subtotal;
  let valorParcela = null;

  if (metodo === 'credito' && parcelas && parcelas > 1) {
    totalComJuros = calculateTotalWithInstallments(subtotal, parcelas);
    valorParcela = calculateInstallmentAmount(totalComJuros, parcelas);
  }

  // 4. Gera ID do pedido (timestamp + random)
  const pedidoId = `PED-${Date.now()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

  // 5. Dá baixa no estoque
  decrementStock(watchesMap);

  return {
    success: true,
    pedido: {
      pedidoId,
      status: 'confirmado',
      total: totalComJuros,
      itens: itensDetalhados,
      parcelamento: {
        metodo,
        parcelas: metodo === 'credito' ? parcelas : 1,
        valorParcela,
        totalComJuros
      },
      cliente,
      endereco,
      criadoEm: new Date().toISOString()
    }
  };
}