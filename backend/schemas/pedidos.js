// schemas/pedidos.js
// JSON Schemas para POST /pedidos (request + response)

export const pedidoRequestSchema = {
  type: 'object',
  required: ['itens', 'cliente', 'endereco', 'pagamento'],
  properties: {
    itens: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        required: ['id', 'quantity'],
        properties: {
          id: { type: 'string', minLength: 1 },
          quantity: { type: 'integer', minimum: 1 }
        }
      }
    },
    cliente: {
      type: 'object',
      required: ['nome', 'email', 'whatsapp'],
      properties: {
        nome: { type: 'string', minLength: 2 },
        email: { type: 'string', format: 'email' },
        whatsapp: { type: 'string', minLength: 10 }
      }
    },
    endereco: {
      type: 'object',
      required: ['cep', 'rua', 'numero', 'bairro', 'cidade', 'estado'],
      properties: {
        cep: { type: 'string', pattern: '^\\d{8}$' },
        rua: { type: 'string', minLength: 2 },
        numero: { type: 'string', minLength: 1 },
        complemento: { type: 'string' },
        bairro: { type: 'string', minLength: 2 },
        cidade: { type: 'string', minLength: 2 },
        estado: { type: 'string', pattern: '^[A-Z]{2}$' }
      }
    },
    pagamento: {
      type: 'object',
      required: ['metodo'],
      properties: {
        metodo: { type: 'string', enum: ['pix', 'credito'] },
        parcelas: { type: 'integer', minimum: 1, maximum: 12 }
      },
      if: { properties: { metodo: { const: 'credito' } } },
      then: { required: ['parcelas'] }
    }
  }
};

export const pedidoResponseSchema = {
  type: 'object',
  properties: {
    pedidoId: { type: 'string' },
    status: { type: 'string', enum: ['confirmado'] },
    total: { type: 'integer', minimum: 0 },
    itens: {
      type: 'array',
      items: {
        type: 'object',
        required: ['id', 'name', 'quantity', 'precoUnitario', 'totalItem'],
        properties: {
          id: { type: 'string' },
          name: { type: 'string' },
          quantity: { type: 'integer' },
          precoUnitario: { type: 'integer' },
          totalItem: { type: 'integer' }
        }
      }
    },
    parcelamento: {
      type: 'object',
      properties: {
        metodo: { type: 'string', enum: ['pix', 'credito'] },
        parcelas: { type: 'integer' },
        valorParcela: { type: 'integer' },
        totalComJuros: { type: 'integer' }
      }
    }
  },
  required: ['pedidoId', 'status', 'total', 'itens', 'parcelamento']
};