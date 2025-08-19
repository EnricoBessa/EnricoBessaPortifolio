import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation(); // ✅ correto
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = i18n.language.toUpperCase();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const links = [
    //{ to: '/', label: t('home') },
    { to: '/about', label: t('about') },
    { to: '/projects', label: t('projects') },
    { to: '/contact', label: t('contact') }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1F1F1F] bg-opacity-95 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
        <div className="absolute left-6 top-1/2 -translate-y-1/2 !text-white font-extrabold text-2xl tracking-wide">
          Enrico<span className="text-orange-400">Dev</span>
        </div>

        {/* Menu desktop */}
        <div className="hidden sm:flex gap-x-6">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `!text-white hover:!text-white transition-colors duration-300 font-medium pb-1 ${isActive ? 'border-b-2 border-orange-500' : ''
                }`
              }
              end
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Botões de idioma */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-2">
          <button
            className={`btnlenguage-nav ${currentLang === 'PT' ? 'selected' : ''}`}
            onClick={() => changeLanguage('pt')}
          >
            PT
          </button>
          <button
            className={`btnlenguage-nav ${currentLang === 'EN' ? 'selected' : ''}`}
            onClick={() => changeLanguage('en')}
          >
            EN
          </button>
        </div>


        {/* Botão hamburger mobile */}
        <button
          className="sm:hidden !text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {/* Ícone simples hamburger */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="sm:hidden bg-[#1F1F1F] px-6 pb-4 space-y-4">

          <div className="w-full flex items-center justify-between mb-8">
            {/* Título EnricoDev */}
            <div className="left-4 text-white font-extrabold text-2xl tracking-wide">
              Enrico<span className="text-orange-400">Dev</span>
            </div>

            {/* Botões de idioma */}
            <div className="flex gap-4">
              <button className={`btnlenguage-nav ${currentLang === 'PT' ? 'selected' : ''}`} onClick={() => changeLanguage('pt')}>
                PT
              </button>
              <button className={`btnlenguage-nav ${currentLang === 'EN' ? 'selected' : ''}`} onClick={() => changeLanguage('en')}>
                EN
              </button>
            </div>

            {/* Botão de fechar (X) */}
            <button
              className="text-white border border-white rounded px-2" onClick={() => setIsOpen(false)} aria-label="Fechar menu">✕
            </button>
          </div>

          {/* Links */}
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block !text-white hover:!text-orange-400 font-medium ${isActive ? 'border-l-4 border-orange-500 pl-2' : ''}`
              }
              end
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}

    </nav>
  );
};

export default Navbar;