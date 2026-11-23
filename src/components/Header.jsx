/**
 * Header Component - WatchModsBR
 * Componente de navegação principal do e-commerce de relógios
 * Contém: Logo, links de navegação (Início, Relógios, Destaques), Login e Carrinho
 */

import { useState } from 'react';

/**
 * Header - Componente de cabeçalho fixo no topo da página
 * @returns {JSX.Element} Elemento do header com navegação
 */
function Header() {
  // Estado para controlar menu mobile (hamburger)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Estado para contar itens no carrinho (futuramente virá do context/store)
  const [cartCount, setCartCount] = useState(0);

  /**
   * Alterna a visibilidade do menu mobile
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /**
   * Fecha o menu mobile (útil ao clicar em um link)
   */
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    // Header fixo no topo com sombra sutil e fundo branco/escuro conforme tema
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Nome do site - Lado esquerdo */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="text-2xl font-bold tracking-wider text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
              aria-label="WatchModsBR - Página inicial"
            >
              WATCHMODSBR
            </a>
          </div>

          {/* Navegação principal - Centro/Direita (Desktop) */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <a 
              href="/" 
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Início
            </a>
            <a 
              href="/relogios" 
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Relógios
            </a>
            <a 
              href="/destaques" 
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Destaques
            </a>
          </div>

          {/* Ações do usuário - Login e Carrinho (Desktop) */}
          <div className="hidden md:flex md:items-center md:gap-4">
            {/* Botão Login */}
            <a 
              href="/login" 
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Entrar
            </a>
            
            {/* Botão Carrinho com contador */}
            <a 
              href="/carrinho" 
              className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={`Carrinho de compras${cartCount > 0 ? ` com ${cartCount} itens` : ' vazio'}`}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M16 11V7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2h2m4 0h10a2 2 0 002-2v-7a2 2 0 00-2-2H9a2 2 0 00-2 2v7a2 2 0 002 2h2m7-7a2 2 0 114 0 2 2 0 01-4 0z" 
                />
              </svg>
              
              {/* Badge com quantidade de itens no carrinho */}
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </a>
          </div>

          {/* Botão Menu Mobile (Hamburger) - Visível apenas em mobile */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile - Expansível */}
        <div 
          id="mobile-menu" 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
          role="navigation"
          aria-label="Menu mobile"
        >
          <div className="py-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <a 
              href="/" 
              className="block px-2 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Início
            </a>
            <a 
              href="/relogios" 
              className="block px-2 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Relógios
            </a>
            <a 
              href="/destaques" 
              className="block px-2 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Destaques
            </a>
            <hr className="my-3 border-gray-200 dark:border-gray-700" />
            <a 
              href="/login" 
              className="block px-2 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Entrar
            </a>
            <a 
              href="/carrinho" 
              className="block px-2 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 flex items-center justify-between"
              onClick={closeMobileMenu}
            >
              Carrinho
              {cartCount > 0 && (
                <span className="bg-purple-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;