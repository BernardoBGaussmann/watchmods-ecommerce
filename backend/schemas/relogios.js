// schemas/relogios.js
// JSON Schema para resposta GET /relogios e GET /relogios/:id

export const relogiosResponseSchema = {
  type: 'object',
  properties: {
    relogios: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'name', 'caseSize', 'price', 'imageUrl', 'stock', 'featured'],
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          caseSize: { type: 'string' },
          price: { type: 'integer', minimum: 0 },
          imageUrl: { type: 'string', format: 'uri' },
          stock: { type: 'integer', minimum: 0 },
          featured: { type: 'boolean' },
          movement: { type: 'string' }
        }
      }
    }
  },
  required: ['relogios']
};

export const relogioResponseSchema = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    caseSize: { type: 'string' },
    price: { type: 'integer', minimum: 0 },
    imageUrl: { type: 'string', format: 'uri' },
    stock: { type: 'integer', minimum: 0 },
    featured: { type: 'boolean' },
    movement: { type: 'string' }
  },
  required: ['id', 'name', 'caseSize', 'price', 'imageUrl', 'stock', 'featured']
};