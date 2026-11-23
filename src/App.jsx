import Header from './components/Header';

/**
 * App - Componente raiz da aplicação WatchModsBR
 * Inclui o Header e área principal de conteúdo
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header fixo - precisa de padding-top no main para não ficar escondido */}
      <Header />
      
      {/* Área principal de conteúdo - pt-16 compensa o header fixo de 16rem (h-16) */}
      <main className="pt-16 min-h-[calc(100vh-4rem)]">
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
    </div>
  )
}

export default App