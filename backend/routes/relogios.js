// routes/relogios.js
// Rotas GET /relogios e GET /relogios/:id

import { getAllWatches, getWatchById } from '../services/catalog.js';
import { relogiosResponseSchema, relogioResponseSchema } from '../schemas/relogios.js';

export async function relogiosRoutes(fastify) {
  fastify.get('/relogios', {
    schema: {
      response: { 200: relogiosResponseSchema }
    }
  }, async (request, reply) => {
    const relogios = getAllWatches();
    return { relogios };
  });

  fastify.get('/relogios/:id', {
    schema: {
      response: { 200: relogioResponseSchema, 404: { type: 'object', properties: { error: { type: 'string' } } } }
    }
  }, async (request, reply) => {
    const { id } = request.params;
    const watch = getWatchById(id);
    if (!watch) {
      return reply.code(404).send({ error: 'Relógio não encontrado' });
    }
    return watch;
  });
}