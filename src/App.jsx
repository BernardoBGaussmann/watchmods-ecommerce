import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import WatchGrid from './components/WatchGrid';
import WatchDetails from './pages/WatchDetails';

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
 */
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
        {/* Header fixo */}
        <Header />
        
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
            {/* Rota detalhes do relógio */}
            <Route path="/relogio/:id" element={<WatchDetails />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App