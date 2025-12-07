import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo_01.png';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../hooks/useTranslation';

export const Navbar = () => {
  const location = useLocation();
  const { language, changeLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef(null);

  const languages = [
    { code: 'zhtc', label: '繁體中文' },
    { code: 'en', label: 'English' }
  ];

  // 根據當前語言獲取顯示標籤
  const getCurrentLanguageLabel = () => {
    const current = languages.find(lang => lang.code === language);
    return current ? current.label : '繁體中文';
  };

  const handleLanguageSelect = (selectedLanguage) => {
    // 先關閉選單
    setIsLanguageMenuOpen(false);
    
    // 然後改變語言
    changeLanguage(selectedLanguage.code);
  };

  // 點擊外部關閉選單
  useEffect(() => {
    if (!isLanguageMenuOpen) return;

    const handleClickOutside = (event) => {
      // 檢查點擊是否在選單內部
      if (languageMenuRef.current && languageMenuRef.current.contains(event.target)) {
        return; // 點擊在選單內部，不關閉
      }
      setIsLanguageMenuOpen(false);
    };

    // 使用更長的延遲，確保按鈕事件先處理
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 200);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageMenuOpen]);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/professor', label: t('nav.professor') },
    { path: '/research', label: t('nav.research') },
    { path: '/members', label: t('nav.members') },
    { path: '/equipment', label: t('nav.equipment') },
    { path: '/courses', label: t('nav.courses') },
    { path: '/publications', label: t('nav.publications') },
    { path: '/activities', label: t('nav.activities') },
    { path: '/contact', label: t('nav.contact') }
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-950 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold bg-white bg-clip-text text-transparent flex items-center space-x-2"
              onClick={handleLinkClick}
            >
              <img src={logo} alt="實驗室 Logo" className="h-7" />
              <span className="whitespace-nowrap">{t('labName')}</span>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-2 py-2 rounded-md text-sm transition-colors duration-100 ${
                  location.pathname === item.path
                    ? 'font-bold text-blue-950 bg-white'
                    : 'text-white hover:text-white hover:bg-blue-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* 語言切換器 */}
            <div className="relative ml-2">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center justify-center text-white hover:text-blue-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-950 rounded-md p-2"
                aria-label="切換語言"
              >
                {/* 地球 icon */}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>

              {/* 語言選單 */}
              {isLanguageMenuOpen && (
                <div 
                  className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 border border-gray-200"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                  ref={languageMenuRef}
                >
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleLanguageSelect(lang);
                        }}
                        onMouseDown={(e) => {
                          // 阻止 mousedown 事件冒泡，防止外部點擊檢測觸發
                          e.stopPropagation();
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors duration-150 cursor-pointer ${
                          language === lang.code
                            ? 'bg-blue-100 text-blue-700 font-medium'
                            : 'text-gray-700'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-950 hover:bg-blue-50 focus:outline-none cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">開啟主選單</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[calc(100vh-4rem)] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
        }`} 
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleLinkClick}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? 'text-blue-950 bg-blue-50'
                  : 'text-white hover:text-blue-700 hover:bg-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          {/* 手機版語言切換器 */}
          <div className="px-3 py-2">
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center justify-center text-white hover:text-blue-700 hover:bg-white w-full px-3 py-2 rounded-md text-base font-medium transition-colors"
                aria-label="切換語言"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 002 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>

              {/* 手機版語言選單 */}
              {isLanguageMenuOpen && (
                <div 
                  className="mt-1 bg-white rounded-md shadow-lg border border-gray-200"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                  ref={languageMenuRef}
                >
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleLanguageSelect(lang);
                        }}
                        onMouseDown={(e) => {
                          // 阻止 mousedown 事件冒泡，防止外部點擊檢測觸發
                          e.stopPropagation();
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors duration-150 cursor-pointer ${
                          language === lang.code
                            ? 'bg-blue-100 text-blue-700 font-medium'
                            : 'text-gray-700'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}; 