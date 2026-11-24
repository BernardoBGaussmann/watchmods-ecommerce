# WatchModsBR — E-commerce de Relógios Premium

> Projeto educacional construído passo a passo com React + Vite + Tailwind CSS.

---

## 🚀 Tecnologias

| Camada | Ferramenta |
|--------|------------|
| **Frontend** | React 18, Vite 5 |
| **Estilização** | Tailwind CSS v4 (class-based dark mode) |
| **Roteamento** | React Router DOM v6 |
| **Persistência** | localStorage (carrinho) |
| **API Externa** | ViaCEP (busca de endereço por CEP) |
| **Linguagem** | JavaScript (ESM) — sem TypeScript |

---

## 📦 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.jsx       # Navegação, tema, contador do carrinho
│   ├── Footer.jsx       # Rodapé 3 colunas + barra inferior
│   ├── Hero.jsx         # Seção hero com placeholder CSS
│   ├── WatchCard.jsx    # Card de produto (imagem, nome, preço, badges)
│   └── WatchGrid.jsx    # Grid de 4 relógios em destaque + botão "Ver todos"
├── pages/               # Páginas (rotas)
│   ├── Watches.jsx      # Listagem completa (grid até 5 colunas)
│   ├── WatchDetails.jsx # Detalhes + dropdown de parcelamento
│   ├── Cart.jsx         # Carrinho com qty, parcelamento por item
│   └── Checkout.jsx     # Formulário + ViaCEP + resumo + confirmação
├── data/
│   └── watches.js       # Dados dos relógios + formatPrice + calculateInstallments
├── App.jsx              # Rotas, estado global do carrinho, localStorage
└── index.css            # Tailwind + @custom-variant dark
```

---

## ✅ Etapas Concluídas

| Etapa | Descrição | Arquivos Principais |
|-------|-----------|---------------------|
| **1** | Header responsivo com tema dark/light persistido | `Header.jsx`, `index.css` |
| **2** | Footer 3 colunas + métodos de pagamento | `Footer.jsx` |
| **3** | Hero section com relógio CSS-only | `Hero.jsx` |
| **4** | Camada de dados: `watches[]`, `formatPrice` | `data/watches.js` |
| **5** | WatchCard reutilizável | `WatchCard.jsx` |
| **6** | WatchGrid (4 em destaque + link "Ver todos") | `WatchGrid.jsx` |
| **7** | Página de detalhes dinâmica (`/relogio/:id`) | `WatchDetails.jsx` |
| **8** | Roteamento + estado global do carrinho | `App.jsx` |
| **9** | Página do carrinho (qty, remover, resumo) | `Cart.jsx` |
| **10** | Persistência do carrinho no localStorage | `App.jsx` (useState lazy + useEffect) |
| **11** | Listagem completa `/relogios` (grid 5 colunas) | `Watches.jsx` |
| **12** | Checkout com ViaCEP, validação, confirmação | `Checkout.jsx` |
| **13** | Fluxo carrinho → checkout corrigido | `Cart.jsx`, `App.jsx`, `Checkout.jsx` |
| **14** | Simulação de parcelamento (tabela fixa 1–12x) | `data/watches.js` |
| **15** | Dropdown de parcelamento em Detalhes/Carrinho/Checkout | `WatchDetails.jsx`, `Cart.jsx`, `Checkout.jsx`, `App.jsx` |

---

## 💳 Parcelamento

- Tabela fixa de acréscimo sobre o preço Pix (1x: 3,16% … 12x: 12,32%)
- Função `calculateInstallments(pixPrice)` retorna 12 opções com `totalAmount` e `installmentAmount`
- Seleção feita via `<select>` em **Detalhes**, **Carrinho** e **Checkout**
- Preço original (à vista) sempre visível; parcelamento em fonte menor
- Valor final com juros só aparece no resumo do pedido

---

## 🛠️ Como Rodar

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

> **Nota:** O servidor deve ser iniciado manualmente pelo usuário (`npm run dev`). Não execute comandos de dev server automatizados.

---

## 📝 Convenções

- **Commits atômicos** com *Conventional Commits* (`feat:`, `fix:`, `refactor:`)
- **Comentários em português** explicando funções e lógica
- **Código modular** — um componente por arquivo, responsabilidade única
- **Variáveis/código em inglês**, **textos visíveis em pt-BR**
- **Dark mode via classe** (`.dark` no `<html>`) — não usa `prefers-color-scheme`

---

## 🎯 Próximos Passos (Sugestões)

- [ ] Autenticação de usuário (login/registro)
- [ ] Histórico de pedidos
- [ ] Painel administrativo (CRUD de relógios)
- [ ] Integração real de pagamento (Pix/Cartão)
- [ ] E-mail de confirmação de pedido
- [ ] Testes automatizados (Vitest + React Testing Library)

---

## 📄 Licença

Projeto educacional — uso livre para estudo e portfólio.
