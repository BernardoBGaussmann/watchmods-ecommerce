// src/api.js
// Cliente API para comunicação com o backend

const API_BASE = 'http://localhost:3333';

/**
 * Busca catálogo de relógios do backend
 * @returns {Promise<Array>} Lista de relógios
 */
export async function fetchWatches() {
  const res = await fetch(`${API_BASE}/relogios`);
  if (!res.ok) throw new Error('Falha ao buscar catálogo');
  const data = await res.json();
  return data.relogios;
}

/**
 * Envia pedido para o backend
 * @param {Object} payload - Dados do pedido
 * @returns {Promise<Object>} Pedido confirmado
 */
export async function createOrder(payload) {
  const res = await fetch(`${API_BASE}/pedidos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.errors?.join(', ') || 'Falha ao criar pedido');
  return data;
}