// routes/relogios.js
// Rota GET /relogios

import { getAllWatches } from '../services/catalog.js';
import { relogiosResponseSchema } from '../schemas/relogios.js';

export async function relogiosRoutes(fastify) {
  fastify.get('/relogios', {
    schema: {
      response: { 200: relogiosResponseSchema }
    }
  }, async (request, reply) => {
    const relogios = getAllWatches();
    return { relogios };
  });
}