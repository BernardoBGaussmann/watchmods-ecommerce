// routes/pedidos.js
// Rota POST /pedidos

import { createOrder } from '../services/orders.js';
import { pedidoRequestSchema, pedidoResponseSchema } from '../schemas/pedidos.js';

export async function pedidosRoutes(fastify) {
  fastify.post('/pedidos', {
    schema: {
      body: pedidoRequestSchema,
      response: { 201: pedidoResponseSchema, 400: { type: 'object', properties: { errors: { type: 'array', items: { type: 'string' } } } } }
    }
  }, async (request, reply) => {
    const result = createOrder(request.body);

    if (!result.success) {
      return reply.code(400).send({ errors: result.errors });
    }

    return reply.code(201).send(result.pedido);
  });
}