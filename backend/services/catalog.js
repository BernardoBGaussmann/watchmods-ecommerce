// services/catalog.js
// Lógica de catálogo (busca, validação de existência)

import { watches } from '../data/watches.js';

/**
 * Retorna todo o catálogo
 * @returns {Array} Lista de relógios
 */
export function getAllWatches() {
  return watches;
}

/**
 * Busca relógio por ID
 * @param {string} id
 * @returns {Object|null} Relógio ou null se não encontrado
 */
export function getWatchById(id) {
  return watches.find(w => w.id === id) || null;
}

/**
 * Valida se todos os itens existem e têm estoque suficiente
 * @param {Array} itens - [{ id, quantity }]
 * @returns {Object} { valid: boolean, errors: string[], watchesMap: Map }
 */
export function validateStock(itens) {
  const errors = [];
  const watchesMap = new Map();

  for (const item of itens) {
    const watch = getWatchById(item.id);
    if (!watch) {
      errors.push(`Relógio "${item.id}" não encontrado no catálogo`);
      continue;
    }
    if (item.quantity > watch.stock) {
      errors.push(`Estoque insuficiente para "${watch.name}" (disponível: ${watch.stock}, solicitado: ${item.quantity})`);
    }
    watchesMap.set(item.id, { watch, quantity: item.quantity });
  }

  return { valid: errors.length === 0, errors, watchesMap };
}