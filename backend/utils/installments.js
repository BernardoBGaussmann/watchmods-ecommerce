// utils/installments.js
// Lógica pura de parcelamento (sem dependências externas)

import { INSTALLMENT_RATES, calculateInstallments } from '../data/watches.js';

/**
 * Calcula o total com juros para uma quantidade de parcelas
 * @param {number} pixPrice - Preço base em centavos
 * @param {number} installments - Número de parcelas (1-12)
 * @returns {number} Total com juros em centavos
 */
export function calculateTotalWithInstallments(pixPrice, installments) {
  if (!installments || installments < 1 || installments > 12) return pixPrice;
  const rate = INSTALLMENT_RATES[installments];
  if (!rate) return pixPrice;
  return Math.round(pixPrice * (1 + rate / 100));
}

/**
 * Calcula valor de cada parcela
 * @param {number} totalWithInterest - Total com juros em centavos
 * @param {number} installments - Número de parcelas
 * @returns {number} Valor de cada parcela em centavos
 */
export function calculateInstallmentAmount(totalWithInterest, installments) {
  return Math.round(totalWithInterest / installments);
}

export { INSTALLMENT_RATES, calculateInstallments };