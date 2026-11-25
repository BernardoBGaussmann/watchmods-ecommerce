/**
 * Data Module - WatchModsBR
 * Funções para buscar catálogo do backend
 * O backend é a fonte da verdade para preços, estoque e parcelamento
 */

import { fetchWatches } from '../api.js';

/**
 * Busca catálogo do backend
 * @returns {Promise<Array>} Lista de relógios com price em centavos, stock, etc.
 */
export async function getWatches() {
  return fetchWatches();
}

/**
 * Busca um relógio específico por ID
 * @param {string} id
 * @returns {Promise<Object|null>} Relógio ou null
 */
export async function getWatchById(id) {
  const watches = await getWatches();
  return watches.find(w => w.id === id) || null;
}

/**
 * Formata preço de centavos para string BRL
 * @param {number} price - Preço em centavos
 * @returns {string} Preço formatado (ex: "R$ 12.500,00")
 */
export function formatPrice(price) {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

/**
 * Tabela fixa de taxas de parcelamento (apenas para exibição no frontend)
 * O backend é a fonte da verdade para cálculo real no checkout
 */
export const INSTALLMENT_RATES = {
  1: 3.16,
  2: 4.51,
  3: 5.29,
  4: 6.07,
  5: 6.85,
  6: 7.63,
  7: 8.41,
  8: 9.20,
  9: 9.98,
  10: 10.76,
  11: 11.54,
  12: 12.32,
};

/**
 * Calcula as 12 opções de parcelamento para um preço base (apenas exibição)
 * @param {number} pixPrice - Preço base (Pix) do produto em centavos
 * @returns {Array<{installments: number, totalAmount: number, installmentAmount: number}>}
 *   Array de 1x a 12x com total e valor de cada parcela
 */
export function calculateInstallments(pixPrice) {
  return Object.entries(INSTALLMENT_RATES).map(([installments, rate]) => {
    const totalAmount = Math.round(pixPrice * (1 + rate / 100));
    const count = Number(installments);

    return {
      installments: count,
      totalAmount,
      installmentAmount: Math.round(totalAmount / count),
    };
  });
}
