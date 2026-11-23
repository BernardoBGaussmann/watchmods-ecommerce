import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import WatchGrid from './components/WatchGrid';
import WatchDetails from './pages/WatchDetails';
import Cart from './pages/Cart';

/**
 * ScrollToTop - Componente que rola para o topo a cada mudança de rota
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

/**
 * App - Componente raiz da aplicação WatchModsBR
 * Inclui Header, Hero, área principal de conteúdo e Footer
 * Configura rotas com react-router-dom
 * Gerencia estado do carrinho de compras
 */
function App() {
  // Estado do carrinho: array de itens { ...watch, quantity }
  const [cart, setCart] = useState([]);

  // Adiciona relógio ao carrinho ou incrementa quantidade
  const addToCart = (watch) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === watch.id);
      if (existingIndex >= 0) {
        // Já existe: incrementa quantity
        const updated = [...prevCart];
        updated[existingIndex] = { ...updated[existingIndex], quantity: updated[existingIndex].quantity + 1 };
        return updated;
      }
      // Novo item: adiciona com quantity 1
      return [...prevCart, { ...watch, quantity: 1 }];
    });
  };

  // Atualiza quantidade do item (+1 ou -1), remove se chegar a 0
  const updateQuantity = (id, amount) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((item) => item.id === id);
      if (existingIndex < 0) return prevCart;
      
      const newQuantity = prevCart[existingIndex].quantity + amount;
      if (newQuantity <= 0) {
        // Remove item se quantidade <= 0
        return prevCart.filter((item) => item.id !== id);
      }
      // Atualiza quantidade
      const updated = [...prevCart];
      updated[existingIndex] = { ...updated[existingIndex], quantity: newQuantity };
      return updated;
    });
  };

  // Remove item do carrinho
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Limpa carrinho completamente
  const clearCart = () => {
    setCart([]);
  };

  // Total de itens no carrinho (soma das quantidades)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
        {/* Header fixo - recebe contador do carrinho */}
        <Header cartCount={cartCount} />
        
        {/* Área principal de conteúdo - flex-1 empurra footer para baixo */}
        <main className="flex-1 pt-16">
          <Routes>
            {/* Rota home: Hero + WatchGrid */}
            <Route path="/" element={
              <>
                <Hero />
                <WatchGrid />
                {/* Conteúdo adicional */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                  <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                      WatchModsBR
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                      Seu e-commerce de relógios premium
                    </p>
                  </div>
                </div>
              </>
            } />
            {/* Rota detalhes do relógio - recebe função addToCart */}
            <Route path="/relogio/:id" element={<WatchDetails onAddToCart={addToCart} />} />
            {/* Rota carrinho - recebe cart e funções de gerenciamento */}
            <Route path="/carrinho" element={<Cart cart={cart} onUpdateQuantity={updateQuantity} onRemoveItem={removeFromCart} onClearCart={clearCart} />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App