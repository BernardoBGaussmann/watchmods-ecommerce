/**
 * Data Module - WatchModsBR
 * Array de relógios para integração futura com API/backend
 */

// Placeholder SVG limpo (base64) - quadrado cinza neutro
const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2U1ZTRlNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0ic3lzdGVtLXVpIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOWNhM2FmIj5XYXRjaE1vZHNCUjwvdGV4dD48L3N2Zz4=';

export const watches = [
  {
    id: '550e8400-e29b-41d4-a716-446655440001',
    name: 'Submariner Custom',
    caseSize: '42mm',
    price: 12500,
    imageUrl: placeholderImage,
    inStock: true,
    featured: true
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440002',
    name: 'GMT Master II Mod',
    caseSize: '40mm',
    price: 14800,
    imageUrl: placeholderImage,
    inStock: true,
    featured: true
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440003',
    name: 'Daytona Ceramic',
    caseSize: '41mm',
    price: 18900,
    imageUrl: placeholderImage,
    inStock: false,
    featured: true
  },
   {
    id: '550e8400-e29b-41d4-a716-446655440004',
    name: 'Daytona Ceramic',
    caseSize: '41mm',
    price: 18900,
    imageUrl: placeholderImage,
    inStock: false,
    featured: true
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440005',
    name: 'Daytona Ceramic',
    caseSize: '41mm',
    price: 18900,
    imageUrl: placeholderImage,
    inStock: false,
    featured: true
  },
  {
    id: '550e8400-e29b-41d4-a716-446655440006',
    name: 'Daytona Ceramic',
    caseSize: '41mm',
    price: 18900,
    imageUrl: placeholderImage,
    inStock: false,
    featured: true
  }
];

/**
 * Formata preço de centavos para string BRL
 * @param {number} price - Preço em centavos
 * @returns {string} Preço formatado (ex: "R$ 12.500,00")
 */
export function formatPrice(price) {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}