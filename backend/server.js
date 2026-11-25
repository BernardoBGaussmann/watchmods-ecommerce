// server.js
// Entry point - Fastify app + CORS + rotas

import Fastify from 'fastify';
import { env } from './config/env.js';
import { relogiosRoutes } from './routes/relogios.js';
import { pedidosRoutes } from './routes/pedidos.js';

const fastify = Fastify({ logger: true });

// Registra CORS
await fastify.register(import('@fastify/cors'), {
  origin: env.corsOrigin,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
});

// Registra rotas
await fastify.register(relogiosRoutes);
await fastify.register(pedidosRoutes);

// Health check
fastify.get('/health', async () => ({ status: 'ok', timestamp: new Date().toISOString() }));

// Error handler global
fastify.setErrorHandler((error, request, reply) => {
  fastify.log.error(error);
  if (error.validation) {
    return reply.code(400).send({ errors: error.validation.map(v => v.message) });
  }
  return reply.code(500).send({ error: 'Internal Server Error' });
});

// Inicia servidor
async function start() {
  try {
    await fastify.listen({ port: env.port, host: '0.0.0.0' });
    console.log(`🚀 Backend rodando em http://localhost:${env.port}`);
    console.log(`📋 Catálogo: GET http://localhost:${env.port}/relogios`);
    console.log(`📦 Pedidos:  POST http://localhost:${env.port}/pedidos`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();