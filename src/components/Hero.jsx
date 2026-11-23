/**
 * Hero Component - WatchModsBR
 * Seção principal (hero) com grid: conteúdo à esquerda, placeholder do relógio à direita
 */

function Hero() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32" aria-labelledby="hero-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid 2 colunas: texto esquerda, relógio direita */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Coluna 1: Conteúdo textual */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 rounded-full mb-4">
              Nova Coleção 2024
            </span>
            <h1 id="hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Relógios Mecânicos<br />
              <span className="text-purple-600 dark:text-purple-400">Customizados Sob Medida</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Cada peça é única. Movimentos suíços, acabamento artesanal e design exclusivo para quem valoriza o tempo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#relogios" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                Ver Coleção
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#sobre" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Saiba Mais
              </a>
            </div>
            
            {/* Indicadores de confiança */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Entrega Segurada</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Garantia 1 Ano</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Devolução Grátis</span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Placeholder do Relógio */}
          <div className="relative">
            {/* Container do relógio - aspecto quadrado */}
            <div className="aspect-square max-w-md mx-auto">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 flex items-center justify-center relative overflow-hidden">
                {/* Padrão sutil de fundo */}
                <div className="absolute inset-0 opacity-10" aria-hidden="true">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)"/>
                  </svg>
                </div>
                
                {/* Silhueta/Placeholder do relógio */}
                <div className="relative z-10 flex flex-col items-center gap-4 text-gray-400 dark:text-gray-500">
                  {/* Caixa do relógio */}
                  <div className="relative">
                    <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 flex items-center justify-center relative">
                      {/* Mostrador */}
                      <div className="w-3/4 h-3/4 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center relative">
                        {/* Ponteiros */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-0.5 h-1/3 bg-gray-600 dark:bg-gray-300 rounded-t-full transform origin-bottom" style={{ transform: 'rotate(30deg)' }} />
                          <div className="w-0.5 h-1/2 bg-gray-600 dark:bg-gray-300 rounded-t-full transform origin-bottom" style={{ transform: 'rotate(150deg)' }} />
                          <div className="w-2 h-2 bg-gray-600 dark:bg-gray-300 rounded-full" />
                        </div>
                        {/* Marcadores das horas */}
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute top-2 w-0.5 h-2 bg-gray-400 dark:bg-gray-500 transform origin-center"
                            style={{ 
                              transform: `rotate(${i * 30}deg) translateY(-50%)`,
                              transformOrigin: 'center bottom'
                            }}
                          />
                        ))}
                      </div>
                      {/* Coroa */}
                      <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full border border-gray-400 dark:border-gray-500" />
                    </div>
                  </div>
                  
                  {/* Pulseira indicativa */}
                  <div className="w-32 h-6 bg-gray-200 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Pulseira</span>
                  </div>
                </div>
                
                {/* Badge "Placeholder" */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 dark:bg-white/50 text-white dark:text-gray-900 text-xs font-medium rounded-full backdrop-blur-sm">
                  Placeholder do Relógio
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos flutuantes */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-600/10 dark:bg-purple-500/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-4 -left-4 w-32 h-32 bg-purple-600/10 dark:bg-purple-500/10 rounded-full blur-3xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;