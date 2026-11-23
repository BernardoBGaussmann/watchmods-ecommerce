/**
 * Header Component - WatchModsBR
 * Cabeçalho horizontal: logo à esquerda, navegação e ações à direita
 */

import { useState, useEffect } from 'react';

/**
 * Header - Cabeçalho fixo horizontal com toggle de tema
 * @returns {JSX.Element} Header com logo esquerda, nav centro, ações direita
 */
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Inicializa tema do localStorage ou preferência do sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDarkMode(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
  }, []);

  // Alterna tema e salva no localStorage
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
        {/* Container horizontal: logo esquerda, nav centro, ações direita */}
        <div className="flex items-center justify-between h-16 w-full">
          
          {/* Logo - Esquerda */}
          <a 
            href="/" 
            className="text-2xl font-bold tracking-wider text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors shrink-0"
            aria-label="WatchModsBR - Página inicial"
          >
            WATCHMODSBR
          </a>

          {/* Navegação - Centro (Desktop) */}
          <div className="hidden md:flex md:items-center md:gap-6 flex-1 justify-center">
            <a href="/" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={closeMobileMenu}>Início</a>
            <a href="/relogios" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={closeMobileMenu}>Relógios</a>
            <a href="/destaques" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors" onClick={closeMobileMenu}>Destaques</a>
          </div>

          {/* Ações - Direita (Desktop) */}
          <div className="hidden md:flex md:items-center md:gap-4 shrink-0">
            <a href="/login" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">Entrar</a>
            
            {/* Toggle Tema - Sol/Lua */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isDarkMode ? 'Alternar para modo claro' : 'Alternar para modo escuro'}
              title={isDarkMode ? 'Modo claro' : 'Modo escuro'}
            >
              {isDarkMode ? (
                // Ícone Sol (modo claro)
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Ícone Lua (modo escuro)
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
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
            {/* Toggle tema no mobile menu */}
            <hr className="my-3 border-gray-200 dark:border-gray-700" />
            <button
              onClick={toggleTheme}
              className="w-full flex items-center justify-between px-2 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
            >
              <span>{isDarkMode ? '☀️ Modo claro' : '🌙 Modo escuro'}</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;