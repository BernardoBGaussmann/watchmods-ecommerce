// config/env.js
// Configuração de ambiente (porta, CORS origin do frontend)

export const env = {
  port: Number(process.env.PORT) || 3333,
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173', // Vite default
  nodeEnv: process.env.NODE_ENV || 'development'
};