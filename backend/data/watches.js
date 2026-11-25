// data/watches.js
// Catálogo de relógios - valores em centavos (inteiros)
// stock: quantidade disponível em estoque (inteiro)

export const watches = [
  {
    id: '1',
    name: 'Submariner Black',
    caseSize: '40mm',
    price: 1250000,        // R$ 12.500,00 em centavos
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlN1Ym1hcmluZXI8L3RleHQ+PC9zdmc+',
    stock: 5,
    featured: true,
    movement: 'Automático'
  },
  {
    id: '2',
    name: 'GMT Master II Batman',
    caseSize: '40mm',
    price: 1480000,
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkdNVCBCYXRtYW48L3RleHQ+PC9zdmc+',
    stock: 3,
    featured: true,
    movement: 'Automático'
  },
  {
    id: '3',
    name: 'Daytona White',
    caseSize: '40mm',
    price: 1890000,
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRheXRvbmE8L3RleHQ+PC9zdmc+',
    stock: 2,
    featured: true,
    movement: 'Automático'
  },
  {
    id: '4',
    name: 'Explorer II Polar',
    caseSize: '42mm',
    price: 980000,
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkV4cGxvcmVyPC90ZXh0Pjwvc3ZnPg==',
    stock: 7,
    featured: false,
    movement: 'Automático'
  },
  {
    id: '5',
    name: 'Datejust Jubilee',
    caseSize: '36mm',
    price: 1120000,
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRhdGVqdXN0PC90ZXh0Pjwvc3ZnPg==',
    stock: 4,
    featured: false,
    movement: 'Automático'
  },
  {
    id: '6',
    name: 'Sea-Dweller Deepsea',
    caseSize: '44mm',
    price: 1650000,
    imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlNlYS1Ed2VsbGVyPC90ZXh0Pjwvc3ZnPg==',
    stock: 1,
    featured: false,
    movement: 'Automático'
  }
];

// Tabela fixa de acréscimo total sobre o valor Pix (1x a 12x)
export const INSTALLMENT_RATES = {
  1: 3.16, 2: 4.51, 3: 5.29, 4: 6.07, 5: 6.85, 6: 7.63,
  7: 8.41, 8: 9.20, 9: 9.98, 10: 10.76, 11: 11.54, 12: 12.32
};

/**
 * Calcula opções de parcelamento para um valor base (em centavos)
 * @param {number} pixPrice - Preço à vista em centavos
 * @returns {Array} 12 opções com installments, totalAmount, installmentAmount
 */
export function calculateInstallments(pixPrice) {
  return Object.entries(INSTALLMENT_RATES).map(([installments, rate]) => {
    const totalAmount = Math.round(pixPrice * (1 + rate / 100));
    return {
      installments: Number(installments),
      totalAmount,
      installmentAmount: Math.round(totalAmount / Number(installments))
    };
  });
}