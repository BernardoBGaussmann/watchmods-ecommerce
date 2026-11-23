import Header from './components/Header';
import Footer from './components/Footer';

/**
 * App - Componente raiz da aplicação WatchModsBR
 * Inclui Header, área principal de conteúdo e Footer
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col">
      {/* Header fixo */}
      <Header />
      
      {/* Área principal de conteúdo - flex-1 empurra footer para baixo */}
      <main className="flex-1 pt-16">
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
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App