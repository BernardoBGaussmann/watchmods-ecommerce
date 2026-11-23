/**
 * Header Component - WatchModsBR
 * Cabeçalho horizontal: logo à esquerda, navegação e ações à direita
 */

import { useState } from 'react';

/**
 * Header - Cabeçalho fixo horizontal
 * @returns {JSX.Element} Header com logo esquerda e botões direita
 */
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
        {/* Container horizontal: logo esquerda, nav direita */}
        <div className="flex items-center justify-between h-16 w-full">
          
          {/* Logo - Esquerda */}
          <a 
            href="/" 
            className="text-2xl font-bold tracking-wider text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors shrink-0"
            aria-label="WatchModsBR - Página inicial"
          >
            WATCHMODSBR
          </a>

          {/* Navegação + Ações - Direita (Desktop) - horizontal flex */}
          <div className="hidden md:flex md:items-center md:gap-6 flex-1 justify-end">
            <a href="/" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={closeMobileMenu}>Início</a>
            <a href="/relogios" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={closeMobileMenu}>Relógios</a>
            <a href="/destaques" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={closeMobileMenu}>Destaques</a>
            <a href="/login" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">Entrar</a>
            
            {/* Carrinho - SVG com tamanho fixo */}
            <a href="/carrinho" className="relative text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800" aria-label={`Carrinho${cartCount > 0 ? ` (${cartCount})` : ''}`}>
              <svg className="w-6 h-6 shrink-0" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2h2m4 0h10a2 2 0 002-2v-7a2 2 0 00-2-2H9a2 2 0 00-2 2v7a2 2 0 002 2h2m7-7a2 2 0 114 0 2 2 0 01-4 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 shrink-0" onClick={toggleMobileMenu} aria-expanded={isMobileMenuOpen} aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}>
            {isMobileMenuOpen ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
          </button>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className={`md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`} role="navigation">
          <div className="py-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
            <a href="/" className="block px-2 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg" onClick={closeMobileMenu}>Início</a>
            <a href="/relogios" className="block px-2 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg" onClick={closeMobileMenu}>Relógios</a>
            <a href="/destaques" className="block px-2 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg" onClick={closeMobileMenu}>Destaques</a>
            <hr className="my-3 border-gray-200 dark:border-gray-700" />
            <a href="/login" className="block px-2 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg" onClick={closeMobileMenu}>Entrar</a>
            <a href="/carrinho" className="block px-2 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg flex items-center justify-between" onClick={closeMobileMenu}>
              Carrinho {cartCount > 0 && <span className="bg-purple-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">{cartCount > 9 ? '9+' : cartCount}</span>}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;